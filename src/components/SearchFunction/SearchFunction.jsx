import React from 'react';
import { useForm } from "react-hook-form"

const SearchFunction = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='my-5'>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-[1px] border-black p-1 w-[50%]' placeholder='Search your city' {...register("search")} />
                <input className='border-[1px] border-black p-1' type="submit" />
            </form>
        </div>
    );
};

export default SearchFunction;