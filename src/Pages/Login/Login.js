import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleLogin = data => {
    console.log(data)
  }

  return (
    <div className='lg:h-[600px] mx-auto my-10 lg:my-44 md:w-1/4 p-10 md:p-0'>
      <h1 className='text-3xl text-primary font-serif text-center'>Please Log In!</h1>

      <form onSubmit={handleSubmit(handleLogin)} className='grid gap-1 grid-cols-1 mx-auto my-5'>

        <label className='label'><span className='label-text'>Email</span></label>
        <input type="text" placeholder="Your Email here" className="input input-bordered input-primary w-full"
          {...register("email", { required: "Email is required" })} />
        {errors.email?.type === 'required' && <p className='text-red-600'>{errors.email?.message}</p>}

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" className="input input-bordered input-primary w-full" id="password"
          {...register("password", {
            required: "Password is required", minLength: {
              value: 6,
              message: "Minimum password length is 6"
            }
          })} />
        {errors.password && <span role="alert" className='text-red-600'>{errors.password.message}</span>}

        <input className='btn btn-primary mt-4' type="submit" value="Log In" />
      </form>
      <p className='text-center'>New to Buy & Sale? <Link className='text-secondary text-lg font-bold font-sans' to='/signup'>Create new account</Link></p>
      <div className="divider">OR</div>
      <button className='btn btn-outline w-full'>Google</button>
    </div>

  );
};
export default Login;