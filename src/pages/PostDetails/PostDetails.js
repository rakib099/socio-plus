import React, { useState } from 'react';
import proPic2 from '../../assets/images/user-24.png';
import './PostDetails.css';
import msToDate from '../../utils/msToDate';
import proPic from '../../assets/images/user-32.png';
import { useLoaderData } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

const PostDetails = () => {
    const { user, text, img, likes } = useLoaderData();
    const [liked, setLiked] = useState(false);
    const [counter, setCounter] = useState(likes);
    const date = msToDate(1676609263733);
    console.log(date);

    const handleLike = () => {
        setLiked(!liked);
        liked ?
            setCounter(likes)
            : setCounter(likes + 1);
    }

    const handleComment = () => {

    }

    return (
        <div className='mx-5'>
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
                </div>
                <form onSubmit={handleComment}>
                    <div className="comment mt-3">
                        <textarea className="textarea textarea-accent textarea-md" placeholder="Comment here"></textarea>
                        <button type='submit' className="btn btn-accent text-white">Button</button>
                    </div>
                </form>
            </div>
            <div className="comments lg:w-1/2 mx-auto">
                <h3 className='text-2xl font-semibold'>Comments</h3>
                <div className="flex items-center space-x-3 mt-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10">
                            <img src={proPic2} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='bg-teal-50 rounded-xl px-4 py-2'>
                        <div className="font-bold text-sm">Hart Hagerty</div>
                        <div className="text-sm opacity-75">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus repellat unde et totam natus, autem accusamus temporibus recusandae debitis quia deserunt vitae velit, repellendus porro.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;