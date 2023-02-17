import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Shared/Post/Post';

const Media = () => {
    const posts = useLoaderData();
    console.log(posts);

    return (
        <div className='mx-5'>
            <h2 className="text-2xl text-center font-semibold">Posts</h2>
            {
                posts.map(post => <Post 
                    key={post._id} 
                    post={post}
                    />)
            }
        </div>
    );
};

export default Media;