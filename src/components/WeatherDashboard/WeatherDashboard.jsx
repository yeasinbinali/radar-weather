import React, { useState, useEffect } from 'react';
import SearchFunction from '../SearchFunction/SearchFunction';
import axios from 'axios';
import Swal from 'sweetalert2';
import DisplayWeather from '../DisplayWeather/DisplayWeather';
import ForecastWeather from '../ForecastWeather/ForecastWeather';
import FavouriteCity from '../FavouriteCity/FavouriteCity';
import useFavourite from '../hooks/useFavourite';

const WeatherDashboard = () => {
    const [, refetch] = useFavourite();
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

    const handleList = async (name) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}&units=metric`
        const currentWeatherList = await axios.get(url);
        const currentWeatherListData = currentWeatherList.data;

        axios.post('http://localhost:5000/favouriteList', currentWeatherListData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully added",
                        text: `${currentWeatherListData.name} has added to the favourite list`
                    });
                    refetch();
                }
            })
    }

    const handleListDelete = (_id) => {
        console.log('clicked', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/favouriteList/${_id}`
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        axios.delete(`http://localhost:5000/favouriteList/${data._id}`, data)
                            .then(res => {
                                if (res.data.deletedCount > 0) {
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your favourite country has been deleted.",
                                        icon: "success"
                                    });
                                    refetch();
                                }
                            })
                    })

            }
        });
    }

    return (
        <div>
            <SearchFunction onSearch={handleSearch} />
            {currentWeather && (
                <DisplayWeather
                    handleList={handleList}
                    currentWeather={currentWeather}
                />
            )}
            {currentWeather && (
                <ForecastWeather
                    forecastWeather={forecastWeather}
                />
            )}
            <FavouriteCity
                handleListDelete={handleListDelete}
            ></FavouriteCity>
        </div>
    );
};

export default WeatherDashboard;
