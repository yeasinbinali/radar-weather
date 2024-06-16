import React, { useEffect, useState } from 'react';
import { FiCloudRain } from 'react-icons/fi';
import { TiWeatherCloudy, TiWeatherNight, TiWeatherSnow } from 'react-icons/ti';

const DisplayWeather = ({ currentWeather, handleList }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isChecked, setIsChecked] = useState(true);
    const [weatherFahrenheit, setWeatherFahrenheit] = useState('');
    const [feelsLikeFahrenheit, setFeelsLikeFahrenheit] = useState('');

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000)
        return () => clearInterval(timerId);
    }, [])

    const handleToggle = () => {
        setIsChecked(!isChecked)
        if (isChecked) {
            const celcius = currentWeather.main.temp.toString().slice(0, 2);
            const fahrenheit = (celcius * 9 / 5) + 32;
            setWeatherFahrenheit(fahrenheit);

            const feelsLikeCelcius = currentWeather.main.feels_like;
            const feelsLikeFahrenheit = (feelsLikeCelcius * 9 / 5) + 32;
            setFeelsLikeFahrenheit(feelsLikeFahrenheit);
        }
    }

    return (
        <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl text-center mb-10'>Search city: <span className='font-bold'>"{currentWeather.name}"</span></h1>
            <div className='bg-main'>
                <div className='flex justify-between items-center border-b-[1px] border-second p-5'>
                    <p className='uppercase'>Current Weather</p>
                    <p><b>{currentTime.toLocaleTimeString()}</b></p>
                </div>
                {/* current weather details */}
                <div className='md:flex justify-between items-center p-5'>
                    <div className='flex items-center gap-1 md:w-[50%]'>
                        <div className='flex flex-col items-center'>
                            {currentWeather.weather[0].main === 'Clouds' && <TiWeatherCloudy className='text-4xl md:text-5xl lg:text-7xl' />}
                            {currentWeather.weather[0].main === 'Rain' && <FiCloudRain className='text-4xl md:text-5xl lg:text-7xl' />}
                            {currentWeather.weather[0].main === 'Clear' && <TiWeatherNight className='text-4xl md:text-5xl lg:text-7xl' />}
                            {currentWeather.weather[0].main === 'Haze' && <TiWeatherSnow className='text-4xl md:text-5xl lg:text-7xl' />}
                            {currentWeather.weather[0].main === 'Mist' && <TiWeatherSnow className='text-4xl md:text-5xl lg:text-7xl' />}
                            <input onChange={handleToggle} checked={isChecked} type="checkbox" className="toggle mt-1" />
                        </div>
                        <div className='flex flex-col'>
                            {!isChecked ? <h1 className='text-4xl md:text-5xl lg:text-7xl'>{weatherFahrenheit.toString().slice(0, 4)}°<span className='text-3xl md:text-4xl lg:text-5xl'>F</span></h1> : <h1 className='text-4xl md:text-5xl lg:text-7xl'>{currentWeather.main.temp.toString().slice(0, 4)}°<span className='text-3xl md:text-4xl lg:text-5xl'>C</span></h1>}

                            {/* <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold flex'>{currentWeather.main.temp.toString().slice(0, 2)}<small className='flex flex-col justify-start'>&deg;</small><small className='text-2xl flex justify-end flex-col text-[gray]'>C</small></h1> */}
                            {!isChecked ? <p className='text-xl'>RealFeel {feelsLikeFahrenheit.toString().slice(0, 4)}</p> : <p className='text-xl'>RealFeel {currentWeather.main.feels_like}</p>}
                        </div>
                    </div>
                    <div className='md:w-[50%] mt-5 md:mt-0'>
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
                <div className='flex justify-end'>
                    <button onClick={() => handleList(currentWeather.name)} className='bg-second px-3 py-1 font-bold'>Add to List +</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayWeather;