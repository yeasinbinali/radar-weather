import React from 'react';
import { useForm } from "react-hook-form"

const SearchFunction = ({ onSearch }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const city = data.search;
        if (city) {
            onSearch(city);
        }
        reset();
    }

    return (
        <div className='my-10'>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-[1px] border-black p-1 md:w-[50%]' placeholder='Search your city' {...register("search")} />
                <input className='border-[1px] border-black p-1 cursor-pointer' type="submit" />
            </form>
        </div>
    );
};

export default SearchFunction;