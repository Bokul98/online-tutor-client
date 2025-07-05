import React from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();
    
    return (
        <div>
            <footer className={`footer p-10 ${isDark 
                ? 'bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-gray-100 border-t border-slate-700' 
                : 'bg-gradient-to-r from-[#1e293b] to-[#334155] text-gray-100 border-t border-blue-900'
            } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-t-3xl shadow-2xl transition-all duration-300`}>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Language Tutoring</a>
                    <a className="link link-hover">Subject Coaching</a>
                    <a className="link link-hover">Online Sessions</a>
                    <a className="link link-hover">Exam Prep</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press Kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
                <div className="flex flex-col items-start gap-2 w-full">
                    <h6 className="footer-title mb-1 text-gray-100">Connect</h6>
                    <div className="flex gap-3 mt-2 flex-wrap">
                        {/* Facebook */}
                        <a href="https://www.facebook.com/bokuldeveloper70/" target="_blank" rel="noopener noreferrer" className="group bg-white shadow-md rounded-full p-2 hover:bg-blue-100 transition-all border border-blue-100 flex items-center justify-center">
                            {/* Facebook Circle F Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="transition-colors">
                                <circle cx="12" cy="12" r="12" fill="#1877F2"/>
                                <path d="M15.5 8.5h-2V7.5c0-.414.336-.75.75-.75h1.25V5h-2.25A2.25 2.25 0 0 0 11 7.25v1.25H9.5V11H11v6h2.5v-6h1.5l.5-2.5h-2z" fill="#fff"/>
                            </svg>
                        </a>
                        {/* Twitter/X */}
                        <a href="https://x.com/Bokuldeveloper" target="_blank" rel="noopener noreferrer" className="group bg-white shadow-md rounded-full p-2 hover:bg-sky-100 transition-all border border-sky-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-sky-500 group-hover:text-sky-700 transition-colors">
                                <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 0 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z"/>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/bokul_developer/" target="_blank" rel="noopener noreferrer" className="group bg-white shadow-md rounded-full p-2 hover:bg-pink-100 transition-all border border-pink-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-pink-500 group-hover:text-pink-700 transition-colors">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 1.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 7.75zm5.25.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/bokul-kumar-badyakar-677369191/" target="_blank" rel="noopener noreferrer" className="group bg-white shadow-md rounded-full p-2 hover:bg-blue-200 transition-all border border-blue-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-blue-700 group-hover:text-blue-900 transition-colors">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                            </svg>
                        </a>
                        {/* Github */}
                        <a href="https://github.com/Bokul98" target="_blank" rel="noopener noreferrer" className="group bg-white shadow-md rounded-full p-2 hover:bg-gray-200 transition-all border border-gray-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-gray-800 group-hover:text-black transition-colors">
                                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                            </svg>
                        </a>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">Stay connected with us on social media</span>
                </div>
            </footer>
            <footer className={`footer footer-center p-4 ${isDark 
                ? 'bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-gray-200 border-t border-slate-700' 
                : 'bg-gradient-to-r from-[#334155] to-[#1e293b] text-gray-200 border-t border-blue-900'
            } transition-all duration-300`}>
                <aside>
                    <p>Copyright © 2025 - All rights reserved by LangLink Ltd.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;