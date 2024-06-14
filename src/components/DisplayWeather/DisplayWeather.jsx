import React, { useEffect, useState } from 'react';
import { FiCloudRain } from 'react-icons/fi';
import { TiWeatherCloudy, TiWeatherNight, TiWeatherSnow } from 'react-icons/ti';

const DisplayWeather = ({ currentWeather }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000)
        return () => clearInterval(timerId);
    }, [])

    return (
        <div>
            <h1 className='text-3xl text-center mb-5'>Search city: <span className='font-bold'>"{currentWeather.name}"</span></h1>
            <div className='bg-main'>
                <div className='flex justify-between items-center border-b-[1px] border-second p-5'>
                    <p className='uppercase'>Current Weather</p>
                    <p><b>{currentTime.toLocaleTimeString()}</b></p>
                </div>
                {/* current weather details */}
                <div className='flex justify-between items-center p-5'>
                    <div className='flex items-center gap-1 w-[50%]'>
                        <div>
                            {currentWeather.weather[0].main === 'Clouds' && <TiWeatherCloudy className='text-7xl' />}
                            {currentWeather.weather[0].main === 'Rain' && <FiCloudRain   className='text-7xl' />}
                            {currentWeather.weather[0].main === 'Clear' && <TiWeatherNight className='text-7xl' />}
                            {currentWeather.weather[0].main === 'Haze' && <TiWeatherSnow className='text-7xl' />}
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-7xl'>{currentWeather.main.temp.toString().slice(0, 2)}°<span className='text-5xl'>C</span></h1>
                            {/* <h1 className='text-7xl font-bold flex'>{currentWeather.main.temp.toString().slice(0, 2)}<small className='flex flex-col justify-start'>&deg;</small><small className='text-2xl flex justify-end flex-col text-[gray]'>C</small></h1> */}
                            <p className='text-xl'>RealFeel {currentWeather.main.feels_like}</p>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <p className='flex justify-between text-xl py-1 border-b-[1px] border-second'>Weather Latitude: <b>{currentWeather.coord.lat}</b></p>
                        {/* <hr /> */}
                        <p className='flex justify-between text-xl py-1 border-b-[1px] border-second'>Wind: <b>E {currentWeather.wind.speed} km/h</b></p>
                        {/* <hr /> */}
                        <p className='flex justify-between text-xl py-1 border-b-[1px] border-second'>Wind Gust: <b>{currentWeather.wind.gust} km/h</b></p>
                        {/* <hr /> */}
                        <p className='flex justify-between text-xl py-1 border-b-[1px] border-second'>Humidity: <b>{currentWeather.main.humidity}%</b></p>
                        {/* <hr /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayWeather;