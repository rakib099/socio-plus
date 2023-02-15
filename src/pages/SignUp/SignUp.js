import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {FcGoogle} from 'react-icons/fc';

const SignUp = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [firebaseError, setFirebaseError] = useState('');
    const [signUpLoading, setSignUpLoading] = useState(false);

    const handleSignUp = (data, e) => {

    }

    const handleGoogleLogin = () => {

    }

    return (
        <div className="">
            <div className='flex justify-center items-center'>
                <div className='shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] lg:w-1/4 p-6 rounded-lg bg-slate-100 mt-5 mb-12'>
                    <h3 className='text-xl text-center font-semibold'>Sign Up</h3>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register('name', { required: 'Name is required' })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-error' role="alert">{errors.name?.message}</p>}
                        </div>
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
                                minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must contain at least 1 uppercase, 1 special character and 1 number' }
                            })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}
                        </div>
                        <p className="text-error mb-2">{firebaseError}</p>
                        {
                            !!signUpLoading ?
                                <button className='btn loading border-none w-full bg-[#1257be] hover:bg-blue-700 mb-2'>Loading</button>
                                :
                                <input className='btn border-none w-full bg-accent hover:bg-teal-600 mb-2' type="submit" value="Sign Up" />
                        }

                    </form>
                    <p className='text-sm'>Already have an account? <Link to='/login' className='text-[#1257be]'>Login here.</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline  hover:bg-teal-500 w-full"><FcGoogle /> <span className='ml-3'>Continue With Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;