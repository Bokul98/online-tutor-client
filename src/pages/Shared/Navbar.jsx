
import React, { useContext } from 'react';
import avaterImg from '../../assets/avater.jpg';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { toggleTheme, isDark } = useTheme();
    const getNavLinkStyle = (isActive) => `px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive
            ? "bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white shadow-md"
            : `theme-hover-bg ${isDark ? 'hover:text-blue-300' : 'hover:text-primary'}`
    }`;

    // Public routes that are always visible
    const publicNavLinks = (
        <>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/" className={({ isActive }) => getNavLinkStyle(isActive)}>
                    Home
                </NavLink>
            </li>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/find-tutors" className={({ isActive }) => getNavLinkStyle(isActive)}>
                    Find Tutors
                </NavLink>
            </li>
        </>
    );

    // Private routes that are only visible after login
    const privateNavLinks = (
        <>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/add-tutorials" className={({ isActive }) => getNavLinkStyle(isActive)}>
                    Add Tutorials
                </NavLink>
            </li>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/my-tutorials" className={({ isActive }) => getNavLinkStyle(isActive)}>
                    My Tutorials
                </NavLink>
            </li>
            <li className="mx-2 sm:mx-3">
                <NavLink to="/my-booked-tutors" className={({ isActive }) => getNavLinkStyle(isActive)}>
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
        <header className={`sticky top-0 z-50 w-full backdrop-blur shadow-md theme-navbar-bg theme-shadow`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 w-full">
                    {/* Logo and Brand (image removed as per request) */}
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2 group">
                            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent group-hover:from-[#0072FF] group-hover:to-[#00C6FF] transition-all duration-300">LangLink</span>
                        </Link>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-4 lg:gap-6">
                        <ul className="flex gap-2 items-center text-sm sm:text-base font-medium">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Right Side: Theme, User, Login */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`btn btn-circle btn-ghost theme-hover-bg transition-colors duration-200 min-w-0 p-1 sm:p-2`}
                            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {isDark ? (
                                // Sun icon for light mode
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                // Moon icon for dark mode
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                </svg>
                            )}
                        </button>
                        {!user ? (
                            <>
                                <Link to="/login" className="btn btn-primary px-4 sm:px-5 py-2 rounded-full shadow-md font-semibold text-white bg-gradient-to-r from-[#00C6FF] to-[#0072FF] hover:from-[#0072FF] hover:to-[#00C6FF] transition-all duration-300 mr-2 text-xs sm:text-base">Login</Link>
                                <Link to="/register" className="btn btn-outline btn-primary px-4 sm:px-5 py-2 rounded-full shadow-md font-semibold transition-all duration-300 text-xs sm:text-base">Sign Up</Link>
                            </>
                        ) : (
                            <div className="flex items-center gap-2">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar p-0 overflow-hidden min-w-0 cursor-pointer">
                                        {user.photoURL && user.photoURL.trim() !== "" ? (
                                            <img
                                                src={user.photoURL}
                                                alt="User Avatar"
                                                className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-blue-400"
                                                style={{ display: 'block' }}
                                                onError={e => { e.target.onerror = null; e.target.src = avaterImg; }}
                                            />
                                        ) : (
                                            <img
                                                src={avaterImg}
                                                alt="User Avatar"
                                                className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full border-2 border-blue-400"
                                                style={{ display: 'block' }}
                                            />
                                        )}
                                    </label>
                                    <ul tabIndex={0} className={`mt-3 z-[1] p-2 sm:p-3 shadow-lg menu menu-sm dropdown-content theme-card-bg rounded-xl w-36 sm:w-44 border theme-border`}>
                                        <li className="flex flex-col items-center py-1">
                                            <span className="font-extrabold text-sm sm:text-base text-gradient bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
                                                {user.displayName}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <button onClick={logout} className="btn btn-error rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200 text-xs sm:text-base px-3 py-1 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                                    </svg>
                                    <span className="inline sm:inline">Logout</span>
                                </button>
                            </div>
                        )}
                        {/* Mobile Hamburger */}
                        <div className="lg:hidden">
                            <input id="navbar-drawer" type="checkbox" className="drawer-toggle hidden" />
                            <label htmlFor="navbar-drawer" className="btn btn-circle btn-ghost min-w-0 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <div className="drawer-side z-50">
                                <label htmlFor="navbar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className={`menu p-3 w-56 min-h-full theme-bg-secondary theme-text-primary flex flex-col gap-3 text-sm`}>
                                    {navLinks}
                                    <li>
                                        <button onClick={toggleTheme}
                                            className="btn btn-ghost theme-hover-bg flex items-center gap-2"
                                        >
                                            {isDark ? (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                    Light Mode
                                                </>
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                                    </svg>
                                                    Dark Mode
                                                </>
                                            )}
                                        </button>
                                    </li>
                                    {!user ? (
                                        <>
                                            <Link to="/login" className="btn btn-primary mt-2 mr-1 text-xs">Login</Link>
                                            <Link to="/register" className="btn btn-outline btn-primary mt-2 text-xs">Sign Up</Link>
                                        </>
                                    ) : (
                                        <div className="flex items-center gap-2 mt-4">
                                            <div className="w-8 h-8 rounded-full border-2 border-blue-400 overflow-hidden">
                                                <img src={user.photoURL && user.photoURL.trim() !== "" ? user.photoURL : avaterImg} alt="User Avatar" />
                                            </div>
                                            <span className="font-bold text-xs">{user.displayName}</span>
                                            <button onClick={logout} className="btn btn-ghost text-xs flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                                                </svg>
                                                <span className="inline">Logout</span>
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