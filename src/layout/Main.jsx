import React from 'react';
import WeatherDashboard from '../components/WeatherDashboard/WeatherDashboard';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[80%] mx-auto'>
                <WeatherDashboard></WeatherDashboard>
            </div>
        </div>
    );
};

export default Main;