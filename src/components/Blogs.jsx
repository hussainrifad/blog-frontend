import React, { useContext, useEffect, useState } from 'react';
import { ImSpinner6 } from 'react-icons/im';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const catagories = useLoaderData();
    const [sortCatagory, setSortCatagory] = useState("");



    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(`https://dailyblogs-backend-server.onrender.com/blogs?catagory=${sortCatagory}`, {

            });
            const data = await res.json();
            setBlogs(data);
            setDataLoading(false)
        }
        fetchData();

    }, [sortCatagory])

    console.log(catagories);
    console.log(blogs);

    return (
        <section className='my-5'>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 my-10'>
                {
                    catagories.map(catagory => <button key={catagory._id} onClick={() => setSortCatagory(catagory.catagory_id)} className='px-5 py-1 bg-green-300 hover:bg-green-500 hover:text-white'>{catagory.name}</button>)
                }
            </div>
            {
                dataLoading ? <div className='min-h-screen min-w-screen flex justify-center items-center'>
                    <span className='text-4xl animate-spin'><ImSpinner6 /></span>
                </div> :
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                        {
                            blogs.map(blog =>
                                <div key={blog._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-green-100">
                                    <a href="#">
                                        <img className="rounded-t-lg h-48 w-full object-center" src={blog.imageUrl} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <div className='flex items-center justify-between mb-3'>
                                            <div><h5 className="text-xl font-bold tracking-tight text-gray-900">{blog.title}</h5></div>
                                            <div className='flex items-center gap-1 text-sm font-semibold'>{blog.vote}<span className='text-sm font-semibold text-gray-600'>votes</span></div>
                                        </div>
                                        <div>
                                            <p className="mb-3 text-sm text-gray-00">{blog?.description?.split(" ").slice(0, 50).join(" ")}...<Link className='hover:link hover:text-blue-900 ml-2 font-semibold' to={`/blog/${blog._id}`}> Read more </Link></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
            }
        </section>
    );
};

export default Blogs;