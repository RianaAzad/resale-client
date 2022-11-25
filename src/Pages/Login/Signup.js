import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignup = data => {
        console.log(data)
    }
    return (
        <div className='lg:h-[600px] mx-auto my-10 lg:my-44 md:w-1/4 p-10 md:p-0'>
            <h1 className='text-3xl text-primary font-serif text-center'>Sign Up for free!</h1>
            <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...
                            register("name", {required: "Please provide your name"})
                        } className="input input-bordered w-full" />
                         {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...
                        register("email", {required: "Email is required"})
                        } className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full">

                        <label className="label" htmlFor="password">Password</label>
                        <input type="password" className="input input-bordered w-full"
                        {...register("password", {required: "Password is required",
                        minLength: {value: 6, message: "Password must be 6 characters long"},
                        pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, 
                        message: "Password must have 1 Upper case, 1 special character and 1 number"}
                        })} />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        {
                            !errors.password && <p className='text-green-600 font-bold'>Wow, Strong password!</p>
                        }
                    </div>
                    <input className='btn btn-accent w-full mt-5' value="Sign Up" type="submit" />
                    
                </form>
            <p className='text-center'>Already have an account? <Link className='text-secondary text-lg font-bold font-sans' to='/login'>Log In</Link></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>Google</button>
        </div>

    );
};

export default Signup;