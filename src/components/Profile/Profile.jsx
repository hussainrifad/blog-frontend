import React, { useEffect, useState } from 'react';
import profilePic from '../../assets/istockphoto-1309328823-170667a.jpg';
import '../../css/profile.css';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
    
    return (
        <section>
            <div>
                <div className='md:flex items-center'>
                    <div className='md:w-1/3'>
                        <img className='rounded-xl' src={profilePic} alt="" />
                    </div>
                    <div className='md:ml-10 md:w-2/3'>
                        <h1 className='text-4xl font-semibold mb-3'>Jason</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos culpa optio vero nobis ea. Consequuntur iusto nisi fugiat unde mollitia quo maxime tempora aliquid, sapiente impedit sed nostrum commodi voluptatibus.</p>
                    </div>
                </div>
                <div className='md:flex mt-3 gap-5'>
                    <div className='border p-5 bg-green-100'>
                        <h1>30 Votes recieved</h1>
                    </div>
                    <div className='border p-5 bg-green-100'>
                        <h1>20 Blogs posted</h1>
                    </div>
                    <div className='border p-5 bg-green-100'>
                        <h1>Online 3 days ago</h1>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <div className='flex gap-10 border-b-2 my-5 p-3'>  
                    <Link to='/profile/recent_post' className='customButton'>Recent Posts</Link>
                    <Link to='/profile/recent_comment' className='customButton'>Recent comments</Link>
                    <Link to='/profile/edit_profile' className='customButton'>Edit Profile</Link>
                </div>
                <div className='min-h-[200px] border'>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Profile;