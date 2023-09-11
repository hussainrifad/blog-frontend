import React from 'react';
import { BsDot } from 'react-icons/bs';

const Comment = ({comment}) => {
    return (
        <section className='border p-3'>
            <div className='flex gap-2'>
                <img src="" alt="" />
                <h1></h1>
            </div>
            <div>
                <p className='font-semibold flex items-center mb-2'>{comment.user} <span className='text-2xl'><BsDot /></span> <span>{comment.date}</span></p>
                <p>{comment.comment}</p>
            </div>
        </section>
    );
};

export default Comment;