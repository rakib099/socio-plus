import React from 'react';
import {useQuery} from '@tanstack/react-query';
import Post from '../../Shared/Post/Post';
import Spinner from '../../../components/Spinner/Spinner';

const TopPosts = () => {
    const {data: posts, isLoading, refetch} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/posts?page=home');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className=''>
            <h2 className="text-2xl font-semibold lg:w-1/2 mx-auto">Top Posts</h2>
            {
                posts.map(post => <Post 
                    key={post._id} 
                    post={post}
                    />)
            }
        </div>
    );
};

export default TopPosts;