import React from 'react';
import Carousel from './banners/Carousel';
import Introduction from './banners/Introduction';

const Home = () => {
    return (
        <>
            <div className='my-5'>
                <Carousel/>
            </div>
            <div className='my-5'>
                <Introduction/>
            </div>
        </>
    );
};

export default Home;