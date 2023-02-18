import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import TopPosts from '../TopPosts/TopPosts';

const Home = () => {
    return (
        <div className='mx-5'>
            <CreatePost />
            <TopPosts />
        </div>
    );
};

export default Home;