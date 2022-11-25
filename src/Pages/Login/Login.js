import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn }= useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = data => {
    setLoginError('');
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      navigate(from, {replace: true});
    })
    .catch(e => {
      console.log(e.message)
      setLoginError(e.message);
    });
  }

  return (
    <div className='lg:h-[600px] mx-auto my-10 lg:my-44 md:w-1/4 p-10 md:p-0'>
      <h1 className='text-3xl text-primary font-serif text-center'>Please Log In!</h1>

      <form onSubmit={handleSubmit(handleLogin)}>

        <div className="form-control w-full max-w-xs">
          <label className="label"><span className="label-text">Email</span></label>
          <input type="text" {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />

          {errors.email?.type === 'required' && <p className='text-red-600'>{errors.email?.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">

          <label htmlFor="password">Password</label>
          <input className="input input-bordered w-full max-w-xs mb-4"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Minimum password length is 5"
              }
            })}
            type="password"
          />
          {errors.password && <span role="alert" className='text-red-600'>{errors.password.message}</span>}
        </div>
        <input className='btn btn-primary w-full' value="Login" type="submit" />
        <div>
          {
            loginError && <p className='text-red-600'>{loginError}</p>
          }
        </div>
      </form>
      <p className='text-center'>New to Buy & Sale? <Link className='text-secondary text-lg font-bold font-sans' to='/signup'>Create new account</Link></p>
      <div className="divider">OR</div>
      <button className='btn btn-outline w-full'>Google</button>
    </div>

  );
};
export default Login;