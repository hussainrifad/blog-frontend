import React, { useState } from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    
    const state = localStorage.getItem('darkModeState');
    const [darkMode, setDarkMode] = useState(state);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <Header setDarkMode={setDarkMode}></Header>
            <div className='container mx-auto'><Outlet /></div>
            <Footer />
        </div>
    );
};

export default Main;