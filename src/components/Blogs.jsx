import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
    
    const catagories = useLoaderData();

    return (
        <section className='border'>
            <div className='w-1/5 my-5'>
                <h1 className='p-2'>Catagories : {catagories.length}</h1>
                <div className='flex md:flex-col gap-3'>
                    {
                        catagories.map(cata => <button className='border px-5 py-1'>{cata.name}</button>)
                    }
                </div>
            </div>
            <div className='4/5'>

            </div>
        </section>
    );
};

export default Blogs;