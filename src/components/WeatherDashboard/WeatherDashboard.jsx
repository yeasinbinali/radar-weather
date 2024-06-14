import React, { useState } from 'react';
import SearchFunction from '../SearchFunction/SearchFunction';
import axios from 'axios';
import Swal from 'sweetalert2';

const WeatherDashboard = () => {
    const [currentCity, setCurrentCity] = useState('');
    const api_key = `9d4f183c0f4904ffa238af96cafbb11d`;

    const weatherData = async (city) => {
        try {
            const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
            const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`

            const currentWeatherResponse = await axios.get(currentWeatherURL);
            console.log(currentWeatherResponse);
        }
        catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: `${error.message}`
            });
        }
    }

    const handleSearch = (city) => {
        setCurrentCity(city);
        weatherData(city);
    }

    return (
        <div>
            <SearchFunction
                onSearch={handleSearch}
            ></SearchFunction>
        </div>
    );
};

export default WeatherDashboard;