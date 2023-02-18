import React, { useContext, useState } from 'react';
import './PostDetails.css';
import msToDate from '../../utils/msToDate';
import proPic from '../../assets/images/user-32.png';
import { useLoaderData } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider';
import Comment from './Comment';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/Spinner/Spinner';

const PostDetails = () => {
    const {user: usr} = useContext(AuthContext);
    const { _id, user, text, img, time, likes } = useLoaderData();
    const [liked, setLiked] = useState(false);
    const [counter, setCounter] = useState(likes);
    const date = msToDate(time);
    const {data: comments, isLoading, refetch} = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comments?id=${_id}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Spinner />
    }

    const handleLike = () => {
        setLiked(!liked);
        liked ?
            setCounter(likes)
            : setCounter(likes + 1);
    }

    const handleComment = (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;

        const commentInfo = {
            postId: _id,
            comment,
            userName: usr?.displayName,
            userEmail: usr?.email,
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                form.reset();   // clears the form
                toast.success("Comment added!");
                refetch();
            }
        })
        .catch(err => console.error(err));
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
                        <textarea className="textarea textarea-accent textarea-md" name='comment' placeholder="Comment here"></textarea>
                        <button type='submit' className="btn btn-accent text-white">Comment</button>
                    </div>
                </form>
            </div>
            <div className="comments mt-5 lg:w-1/2 mx-auto">
                <h3 className='text-2xl font-semibold'>Comments</h3>
                {
                    comments.map(comment => <Comment 
                        key={comment._id} 
                        cmt={comment}
                        />)
                }
            </div>
        </div>
    );
};

export default PostDetails;