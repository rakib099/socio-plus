import React, { useState } from 'react';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/user-32.png';
import msToDate from '../../../utils/msToDate';

const Post = () => {
    const [liked, setLiked] = useState(false);
    const date = msToDate(1676609263733);

    const handleLike = () => {
        setLiked(!liked);
    }

    return (
        <div className="post border border-accent px-4 py-3 rounded-lg lg:w-1/2 mx-auto my-3">
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">{date}</div>
                </div>
            </div>
            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita placeat sunt, consequuntur autem quisquam ipsam dolorem, recusandae eos quaerat tempora atque delectus quis aliquam officiis facilis eius corrupti consectetur, error dicta odio necessitatibus a quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure, tempora laborum nam delectus ullam nisi excepturi mollitia tempore libero, minus officiis fugit, similique numquam aspernatur a harum inventore accusantium!</p>
            <figure className='w-96 mx-auto'>
                <img src="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png" alt="" className='rounded-lg w-full' />
            </figure>
            <div className="action flex justify-between items-center">
                {
                    liked ?
                    <FcLike onClick={handleLike} title='Unlike it!' className='text-3xl cursor-pointer'/>
                    :
                    <FcLikePlaceholder onClick={handleLike} title='Like it!' className='text-3xl cursor-pointer'/>
                }
                
                <Link to='/post-details/01'><button className="btn btn-accent text-white mt-2">Details</button></Link>
            </div>
        </div>
    );
};

export default Post;