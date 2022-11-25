import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import login from '../../assets/Login.png'


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      
        <div className='lg:h-[600px] mx-auto my-10 lg:my-44 md:w-1/4 p-10 md:p-0'>
        <h1 className='text-3xl text-primary font-serif text-center'>Please Log In!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='grid gap-3 grid-cols-1 mx-auto my-5'>
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" 
        {...register("name")} />
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" 
         {...register("email", { required: true })} />
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" 
         {...register("password", { required: true })} />
        
        <input className='btn btn-primary' type="submit" />
      </form>
      </div>
      
    );
};
export default Login;