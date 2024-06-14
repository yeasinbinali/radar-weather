import React, { useState, useEffect } from 'react';
import SearchFunction from '../SearchFunction/SearchFunction';
import axios from 'axios';
import Swal from 'sweetalert2';
import DisplayWeather from '../DisplayWeather/DisplayWeather';

const WeatherDashboard = () => {
    const [currentCity, setCurrentCity] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState([]);
    const api_key = `9d4f183c0f4904ffa238af96cafbb11d`;

    const weatherData = async (city) => {
        try {
            const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
            const forecastWeatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`;

            const currentWeatherResponse = await axios.get(currentWeatherURL);
            setCurrentWeather(currentWeatherResponse.data);

            const forecastWeatherResponse = await axios.get(forecastWeatherURL);

            // Correctly filter the forecast data to get daily entries
            const dailyForecast = forecastWeatherResponse.data.list.filter((entry, index) => index % 8 === 0);
            setForecastWeather(dailyForecast);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: `${error.message}`
            });
        }
    };

    useEffect(() => {
        if (currentCity) {
            weatherData(currentCity);
        }
    }, [currentCity]);

    const handleSearch = (city) => {
        setCurrentCity(city);
    };

    return (
        <div>
            <SearchFunction onSearch={handleSearch} />
            {currentWeather && (
                <DisplayWeather
                    currentWeather={currentWeather}
                    forecastWeather={forecastWeather}
                />
            )}
        </div>
    );
};

export default WeatherDashboard;
