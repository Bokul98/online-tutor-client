import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import { useTheme } from '../context/ThemeContext/ThemeContext';

const RootLayouts = () => {
    const { isDark } = useTheme();
    
    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'theme-bg-primary' : 'theme-bg-primary'}`}>
            <Navbar></Navbar>
            <main className="theme-text-primary">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;