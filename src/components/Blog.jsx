import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Comment from './comment';

const Blog = () => {

    const myBlog = useLoaderData();
    const [showAll, setShowAll] = useState(false);

    console.log(myBlog);
    
    // useEffect(() => {
        
    //     const fetchData = async() => {
    //         const res = await fetch('../single.json');
    //         const data = await res.json();
    //         setMyBlog(data);
    //     }

    //     fetchData()

    // }, [])

    return (
        <section>
            <div className='md:flex gap-10 items-start my-10 p-3 md:p-0'>
                <div className='md:w-1/3 flex flex-col justify-center'>
                    <img className='w-full object-center' src={myBlog.imageUrl} alt="" />
                    <div>
                        <h1>Author : {myBlog.author}</h1>
                    </div>
                </div>
                <div className='md:w-2/3'>
                    <div>
                        <p className='text-sm'>{myBlog.description}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 p-2 md:p-0'>
                <h1 className='font-semibold'>Comments <span className='font-normal'>{myBlog.comments?.length}</span></h1>
                <div className='flex items-start'>
                    <textarea placeholder="Comment" className="textarea textarea-bordered textarea-md sm:w-full max-w-xs" ></textarea>
                    <button className='border px-6 py-1 text-white rounded-md bg-cyan-900 border-2 hover:bg-green-600 ml-1'>Post</button>
                </div>
                <div>
                    {
                        myBlog.comments?.map(comment => <Comment comment={comment}/>)
                    }
                </div>
                
            </div>
        </section>
    );
};

export default Blog;