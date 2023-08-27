import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex text-lg font-semibold justify-center min-h-screen items-center'>
            <div>
                <div>
                    <h1 className='text-6xl mb-7 font-semibold'>Opps!</h1>
                </div>
                <div>
                    <h1 className='mb-3 text-gray-500'>Page not found</h1>
                </div>
                <div>
                    <h1 className='text-blue-900'>Back to <Link className='hover:text-green-900'>home</Link> page</h1>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;