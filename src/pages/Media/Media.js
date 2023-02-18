import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import Post from '../Shared/Post/Post';

const Media = () => {
    const posts = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <Spinner />
    }

    return (
        <div className='mx-5'>
            <h2 className="text-2xl text-center font-semibold">Posts ({posts.length})</h2>
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