import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {FcGoogle} from 'react-icons/fc';

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [firebaseError, setFirebaseError] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);

    const handleLogin = (data, e) => {

    }

    const handleGoogleLogin = () => {

    }

    return (
        <div className="">
            <div className='flex justify-center items-center'>
                <div className='shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] w-4/5 lg:w-1/4 p-6 rounded-lg bg-slate-100 mt-5 mb-12'>
                    <h3 className='text-xl text-center font-semibold'>Login</h3>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register('email', { required: 'Email is required' })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                            })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}
                        </div>
                        <p className="text-error mb-2">{firebaseError}</p>
                        {
                            !!loginLoading ?
                                <button className='btn loading border-none w-full bg-accent hover:bg-teal-600 mb-2'>Loading</button>
                                :
                                <input className='btn border-none w-full bg-accent hover:bg-teal-600 mb-2' type="submit" value="Login" />
                        }

                    </form>
                    <p className='text-sm'>New to this website? <Link to='/signup' className='text-accent'>Create an account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline  hover:bg-teal-500 w-full"><FcGoogle /> <span className='ml-3'>Continue With Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;