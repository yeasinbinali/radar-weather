import React from 'react';
import { FiCloudRain } from 'react-icons/fi';
import { TiWeatherCloudy, TiWeatherNight, TiWeatherSnow } from 'react-icons/ti';

const ForecastWeather = ({ forecastWeather }) => {
    return (
        <div className='mb-10'>
            <h1 className='text-3xl font-bold text-center my-10'>5-day forecast</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {forecastWeather.map((forecast, index) => <div className='bg-main' key={index}>
                    <p className='border-b-[1px] border-second p-3'>{forecast.dt_txt.slice(0, 10)}</p>
                    <div>
                        <div className='flex items-center gap-1 border-b-[1px] border-second p-3'>
                            <div>
                                {forecast.weather[0].main === 'Clouds' && <TiWeatherCloudy className='text-5xl' />}
                                {forecast.weather[0].main === 'Rain' && <FiCloudRain   className='text-5xl' />}
                                {forecast.weather[0].main === 'Clear' && <TiWeatherNight className='text-5xl' />}
                                {forecast.weather[0].main === 'Haze' && <TiWeatherSnow className='text-5xl' />}
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl'>{forecast.main.temp.toString().slice(0, 2)}°<span className='text-2xl'>C</span></h1>
                                {/* <h1 className='text-5xl font-bold flex'>{forecast.main.temp.toString().slice(0, 2)}<small className='flex flex-col justify-start'>&deg;</small><small className='text-2xl flex justify-end flex-col text-[gray]'>C</small></h1> */}
                                <p className='text-xl'>RealFeel {forecast.main.feels_like}</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Min temp: <b>{forecast.main.temp_min}°<span>C</span></b></p>
                            <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Max temp: <b>{forecast.main.temp_max}°<span>C</span></b></p>
                            <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Forecast: <b>{forecast.weather[0].description}</b></p>
                            <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Humidity: <b>{forecast.main.humidity}%</b></p>
                            <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Wind: <b>E {forecast.wind.speed}km/h</b></p>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ForecastWeather;