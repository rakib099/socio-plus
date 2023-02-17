import React from 'react';
import msToDate from '../../utils/msToDate';

const PostDetails = () => {
    const date = msToDate(1676609263733);
    console.log(date);

    return (
        <div className='mx-5'>
            <h2 className='text-2xl'>Details</h2>
        </div>
    );
};

export default PostDetails;