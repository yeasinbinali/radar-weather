import React from 'react';

const DisplayWeather = ({ currentWeather }) => {
    console.log(currentWeather);
    return (
        <div className='w-[70%] mx-auto bg-[#fcebeb]'>
            <div className='flex justify-between items-center border-b-[1px] p-2'>
                <p>Current Weather</p>
                <p>{currentWeather.name}</p>
            </div>
            {/* current weather details */}
            <div>
                <div>
                    <h1 className='text-7xl font-bold flex'>{currentWeather.main.temp.toString().slice(0, 2)}<span className='flex flex-col'><p>&deg;</p><sup className='text-2xl'>C</sup></span></h1>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default DisplayWeather;