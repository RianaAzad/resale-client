import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import buyer from '../../assets/buyer.png';
import seller from '../../assets/seller.png';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';



const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    const handleSignup = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Successfully Created');
                
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.role
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                     })
                    .catch(e => console.error(e))
            })
            .catch(e => {
                setSignUpError(e.message)
            })
    }

    // Save user in database
    const saveUser = (name, email, role) => {
        const user = {name, email, role};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email);
        })
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            navigate(from, {replace: true});
            console.log(user);
        })
        .catch(e => console.error(e))
    }
    return (
        <div className='mx-auto my-10 lg:mb-44 md:w-1/4 p-10 md:p-0'>
            <h1 className='text-3xl text-primary font-serif text-center pb-2'>Sign Up for free!</h1>

            <div className='flex justify-between m-5' >
                <div className='border border-blue-900 text-center rounded-lg'>
                    <img className='w-32 p-1' src={buyer} alt="" />
                    <p className='font-bold text-lg text-primary'>Buyer</p>
                </div>
                <div className='border border-blue-900 text-center rounded-lg'>
                    <img className='w-32 p-1' src={seller} alt="" />
                    <p className='font-bold text-lg text-primary'>Seller</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(handleSignup)}>
                {/* select buyer or seller */}
                <label className="label"><span className="label-text">Are you a Buyer or Seller?</span></label>
                <select className="select select-primary w-full max-w-xs"
                    {...register("role", { required: "Please provide" })}>
                    <option>Buyer</option>
                    <option>Seller</option>
                </select>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text" {...
                        register("name", { required: "Please provide your name" })
                    } className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" {...
                        register("email", { required: "Email is required" })
                    } className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full">

                    <label className="label" htmlFor="password">Password</label>
                    <input type="password" className="input input-bordered w-full"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                message: "Password must have 1 Upper case, 1 special character and 1 number"
                            }
                        })} />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                </div>
                <input className='btn btn-primary w-full mt-5' value="Sign Up" type="submit" />
                {
                    signUpError && <p className='text-red-600'>{signUpError}</p>
                }
            </form>
            <p className='text-center'>Already have an account? <Link className='text-secondary text-lg font-bold font-sans' to='/login'>Log In</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Google</button>
        </div>

    );
};

export default Signup;