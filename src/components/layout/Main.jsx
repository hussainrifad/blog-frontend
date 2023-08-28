import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div data-theme="light">
            <Header />
            <div className='container mx-auto'><Outlet /></div>
            <Footer />
        </div>
    );
};

export default Main;