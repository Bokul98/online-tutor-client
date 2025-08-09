import React, { useContext } from 'react';
import avaterImg from '../../assets/avater.jpg';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { toggleTheme, isDark } = useTheme();

    const getNavLinkStyle = ({ isActive }) => `
        px-4 py-2 rounded-lg transition-all duration-300 font-medium relative
        ${isActive
            ? `lg:after:content-[''] lg:after:absolute lg:after:bottom-0 lg:after:left-1/2 lg:after:-translate-x-1/2
               lg:after:w-1/2 lg:after:h-0.5 ${isDark ? 'lg:after:bg-blue-300' : 'lg:after:bg-blue-600'}`
            : `theme-text-secondary`}
        ${isActive && !isDark ? 'text-blue-600' : ''}
        ${isActive && isDark ? 'text-blue-300 bg-blue-900/20' : ''}
    `;

    // Public routes
    const publicNavLinks = (
        <>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/" className={getNavLinkStyle}>
                    Home
                </NavLink>
            </li>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/find-tutors" className={getNavLinkStyle}>
                    Find Tutors
                </NavLink>
            </li>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/resources" className={getNavLinkStyle}>
                    Resources
                </NavLink>
            </li>
        </>
    );

    // Private routes
    const privateNavLinks = (
        <>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/add-tutorials" className={getNavLinkStyle}>
                    Add Tutorials
                </NavLink>
            </li>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/my-tutorials" className={getNavLinkStyle}>
                    My Tutorials
                </NavLink>
            </li>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/my-booked-tutors" className={getNavLinkStyle}>
                    My Booked Tutors
                </NavLink>
            </li>
        </>
    );

    const navLinks = (
        <>
            {publicNavLinks}
            {user && privateNavLinks}
        </>
    );

    return (
        <header
            className={`sticky top-0 z-50 w-full backdrop-blur-lg shadow-sm transition-all duration-300 ${isDark
                ? "bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 border-b border-slate-700"
                : "bg-gradient-to-r from-indigo-50 via-white to-slate-50"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 w-full">
                    {/* Logo and Brand */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2 group">
                            <span
                                className={`text-xl sm:text-2xl font-bold group-hover:scale-105 transition-transform duration-300 
    ${isDark
                                        ? "text-white"
                                        : "bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent"
                                    }`}
                            >
                                LangLink
                            </span>
                        </Link>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-6">
                        <ul className="flex gap-1 items-center text-sm font-medium">
                            {navLinks}
                        </ul>
                    </div>
                    {/* Right Side: Theme, User, Login */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full theme-hover-bg hover:scale-110 transition-all duration-300
                                ${isDark ? 'hover:bg-blue-900/30' : 'hover:bg-blue-100'}`}
                            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {isDark ? (
                                <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                </svg>
                            )}
                        </button>
                        {!user ? (
                            <>
                                <Link to="/login"
                                    className="px-4 py-2 rounded-full font-semibold text-sm text-white
                                        bg-gradient-to-r from-[#00C6FF] to-[#0072FF]
                                        hover:from-[#0072FF] hover:to-[#00C6FF]
                                        hover:scale-105 transition-all duration-300 shadow-md">
                                    Login
                                </Link>
                                <Link to="/register"
                                    className="px-4 py-2 rounded-full font-semibold text-sm border
                                        ${isDark ? 'border-blue-300 text-blue-300 hover:bg-blue-300/10' : 'border-blue-600 text-blue-600 hover:bg-blue-600/10'}
                                        hover:scale-105 transition-all duration-300">
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar p-0 overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={user.photoURL && user.photoURL.trim() !== "" ? user.photoURL : avaterImg}
                                            alt="User Avatar"
                                            className="w-9 h-9 object-cover rounded-full border-2
                                                ${isDark ? 'border-blue-300' : 'border-blue-600'}"
                                            onError={(e) => { e.target.src = avaterImg; }}
                                        />
                                    </label>
                                    <ul tabIndex={0} className={`mt-3 z-[1] p-3 shadow-lg menu menu-sm dropdown-content
                                        theme-card-bg rounded-xl w-44 border ${isDark ? 'border-blue-900' : 'border-blue-200'}`}>
                                        <li className="flex flex-col items-center py-2">
                                            <span className="font-bold text-sm bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
                                                {user.displayName}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <button onClick={logout}
                                    className="px-3 py-2 rounded-full font-semibold text-sm
                                        bg-red-500 text-white hover:bg-red-600 hover:scale-105
                                        transition-all duration-300 flex items-center gap-1 shadow-md">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                                    </svg>
                                    Logout
                                </button>
                            </div>
                        )}
                        {/* Mobile Hamburger */}
                        <div className="lg:hidden">
                            <input id="navbar-drawer" type="checkbox" className="drawer-toggle hidden" />
                            <label htmlFor="navbar-drawer" className="btn btn-circle btn-ghost p-2 hover:scale-110 transition-transform duration-300">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <div className="drawer-side z-50">
                                <label htmlFor="navbar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className={`menu p-4 w-64 min-h-full theme-bg-secondary
                                    ${isDark ? 'text-blue-200' : 'text-blue-800'} flex flex-col gap-4 text-sm`}>
                                    {navLinks}
                                    <li>
                                        <button onClick={toggleTheme}
                                            className="btn btn-ghost flex items-center gap-2 hover:bg-opacity-10
                                                ${isDark ? 'hover:bg-blue-300' : 'hover:bg-blue-600'}">
                                            {isDark ? (
                                                <>
                                                    <svg className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                    Light Mode
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                                    </svg>
                                                    Dark Mode
                                                </>
                                            )}
                                        </button>
                                    </li>
                                    {!user ? (
                                        <>
                                            <Link to="/login"
                                                className="btn btn-primary text-sm rounded-full shadow-md">
                                                Login
                                            </Link>
                                            <Link to="/register"
                                                className="btn btn-outline btn-primary text-sm rounded-full">
                                                Sign Up
                                            </Link>
                                        </>
                                    ) : (
                                        <div className="flex items-center gap-3 mt-4">
                                            <img
                                                src={user.photoURL && user.photoURL.trim() !== "" ? user.photoURL : avaterImg}
                                                alt="User Avatar"
                                                className="w-8 h-8 rounded-full border-2
                                                    ${isDark ? 'border-blue-300' : 'border-blue-600'}"
                                            />
                                            <span className="font-bold text-sm">{user.displayName}</span>
                                            <button onClick={logout}
                                                className="btn btn-ghost text-sm flex items-center gap-1">
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                                                </svg>
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;