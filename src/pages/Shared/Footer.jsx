import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    const { isDark } = useTheme();

    // Navigation columns according to your routes
    const navLinks = [
        {
            title: "Pages",
            links: [
                { name: "Home", path: "/" },
                { name: "Find Tutors", path: "/find-tutors" },
                { name: "Resources", path: "/resources" }
            ],
        },
        {
            title: "Private",
            links: [
                { name: "Add Tutorials", path: "/add-tutorials" },
                { name: "My Tutorials", path: "/my-tutorials" },
                { name: "My Booked Tutors", path: "/my-booked-tutors" },
            ],
        },
    ];

    const socials = [
        { href: "https://www.facebook.com/bokuldeveloper70/", label: "Facebook", icon: <FaFacebookF /> },
        { href: "https://x.com/Bokuldeveloper", label: "Twitter", icon: <FaTwitter /> },
        { href: "https://www.instagram.com/bokul_developer/", label: "Instagram", icon: <FaInstagram /> },
        { href: "https://www.linkedin.com/in/bokul-kumar-badyakar-677369191/", label: "LinkedIn", icon: <FaLinkedinIn /> },
        { href: "https://github.com/Bokul98", label: "GitHub", icon: <FaGithub /> },
    ];

    return (
        <footer
            className={`transition-all duration-300 ${isDark
                    ? "bg-gradient-to-br from-slate-900 to-slate-800 text-gray-300"
                    : "bg-gradient-to-br from-slate-100 to-white text-gray-700"
                } border-t ${isDark ? "border-slate-700" : "border-gray-200"}`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand column */}
                <div className="lg:col-span-1">
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
                    <p className={`mt-3 max-w-sm text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        LangLink connects students to expert tutors across subjects and languages – empowering your learning journey, anytime, anywhere.
                    </p>
                </div>

                {/* Navigation columns */}
                {navLinks.map((col) => (
                    <div key={col.title}>
                        <h3 className={`mb-4 font-semibold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                            {col.title}
                        </h3>
                        <ul className="space-y-2">
                            {col.links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-blue-500 transition-colors duration-200 block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Social column */}
                <div>
                    <h3 className={`mb-4 font-semibold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                        Connect
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                title={s.label}
                                className={`w-10 h-10 flex items-center justify-center rounded-full shadow hover:scale-110 transition-transform duration-200 ${isDark ? "bg-slate-700 text-gray-100 hover:bg-slate-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    }`}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom strip */}
            <div
                className={`py-4 border-t text-center text-sm ${isDark
                        ? "border-slate-700 text-gray-400"
                        : "border-gray-200 text-gray-500"
                    }`}
            >
                © 2025 LangLink Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;