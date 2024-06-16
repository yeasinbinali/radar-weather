import React from 'react';
import useFavourite from '../hooks/useFavourite';
import { TiWeatherCloudy, TiWeatherNight, TiWeatherSnow } from 'react-icons/ti';
import { FiCloudRain } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

const FavouriteCity = ({ handleListDelete }) => {
    const [favouriteList] = useFavourite();

    return (
        <div className='mb-10'>
            <h1 className='text-3xl font-bold text-center mb-10'>Favourite city</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    favouriteList?.map((list, index) => <div className='bg-main' key={index}>
                        <div>
                            <div className='p-3 border-b-[1px] border-second flex justify-between items-center'>
                                <p className='font-bold'>{list.name}</p>
                                <button onClick={() => handleListDelete(list._id)}><MdDelete className='text-2xl' /></button>
                            </div>
                            <div className='flex items-center gap-1 border-b-[1px] border-second p-3'>
                                <div>
                                    {list.weather[0].main === 'Clouds' && <TiWeatherCloudy className='text-5xl' />}
                                    {list.weather[0].main === 'Rain' && <FiCloudRain className='text-5xl' />}
                                    {list.weather[0].main === 'Clear' && <TiWeatherNight className='text-5xl' />}
                                    {list.weather[0].main === 'Haze' && <TiWeatherSnow className='text-5xl' />}
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='text-5xl'>{list.main.temp.toString().slice(0, 2)}°<span className='text-2xl'>C</span></h1>
                                    {/* <h1 className='text-5xl font-bold flex'>{list.main.temp.toString().slice(0, 2)}<small className='flex flex-col justify-start'>&deg;</small><small className='text-2xl flex justify-end flex-col text-[gray]'>C</small></h1> */}
                                    <p className='text-xl'>RealFeel {list.main.feels_like}</p>
                                </div>
                            </div>
                            <div className='p-3'>
                                <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Min temp: <b>{list.main.temp_min}°<span>C</span></b></p>
                                <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Max temp: <b>{list.main.temp_max}°<span>C</span></b></p>
                                <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Forecast: <b>{list.weather[0].description}</b></p>
                                <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Humidity: <b>{list.main.humidity}%</b></p>
                                <p className='flex items-center justify-between border-b-[1px] border-second py-2'>Wind: <b>E {list.wind.speed}km/h</b></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FavouriteCity;