import React, { useState, useContext } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import {toast} from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import proPic from '../../../assets/images/user-32.png';
import { AuthContext } from '../../../contexts/AuthProvider';
import msToDate from '../../../utils/msToDate';

const Post = ({post}) => {
    const {user: usr} = useContext(AuthContext);
    const {_id, user, text, img, time, likes} = post;
    const [liked, setLiked] = useState(false);
    const [counter, setCounter] = useState(likes);
    const navigate = useNavigate();
    const date = msToDate(time);

    const handleLike = () => {
        setLiked(!liked);
        liked ?
        setCounter(likes)
        : setCounter(likes + 1);
    }

    const handleDetailsBtn = () => {
        if (!usr?.uid) {
            return toast.error('Please login to see the details!');
        }
        navigate(`/posts/${_id}`);
    }

    return (
        <div className="post border border-accent px-4 py-3 rounded-lg lg:w-1/2 mx-auto my-3">
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={proPic} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{user}</div>
                    <div className="text-sm opacity-50">{date}</div>
                </div>
            </div>
            <p className='mb-2'>{text}</p>
            <figure className='lg:w-96 mx-auto'>
                <img src={img} alt="" className='rounded-lg w-full' />
            </figure>
            <div className="action flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {
                        liked ?
                            <FcLike onClick={handleLike} title='Unlike it!' className='text-xl cursor-pointer' />
                            :
                            <FcLikePlaceholder onClick={handleLike} title='Like it!' className='text-xl cursor-pointer' />
                    }
                    <span className='text-xl text-gray-500'>{counter}</span>
                </div>

                <button onClick={handleDetailsBtn} className="btn btn-accent btn-sm text-white mt-2">Details</button>
            </div>
        </div>
    );
};

export default Post;