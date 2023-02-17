import React from 'react';
import proPic2 from '../../assets/images/user-24.png';

const Comment = ({cmt}) => {
    const {comment, userName} = cmt;

    return (
        <div className="flex items-center space-x-3 mt-3">
            <div className="avatar">
                <div className="mask mask-squircle w-10 h-10">
                    <img src={proPic2} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            <div className='bg-teal-50 rounded-xl px-4 py-2'>
                <div className="font-bold text-sm">{userName}</div>
                <div className="text-sm opacity-75">{comment}</div>
            </div>
        </div>
    );
};

export default Comment;