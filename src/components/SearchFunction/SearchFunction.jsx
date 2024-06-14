import React, { useState } from 'react';
import { useForm } from "react-hook-form"

const SearchFunction = ({ onSearch }) => {
    const { register, handleSubmit } = useForm();
    // const [city, setCity] = useState('');

    const onSubmit = (data) => {
        const city = data.search;
        console.log(city)
        if (city) {
            onSearch(city);
        }
    }

    return (
        <div className='my-5'>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-[1px] border-black p-1 w-[50%]' placeholder='Search your city' {...register("search")} />
                <input className='border-[1px] border-black p-1 cursor-pointer' type="submit" />
            </form>
        </div>
    );
};

export default SearchFunction;