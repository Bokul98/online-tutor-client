import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const FindTutors = () => {
    const { isDark } = useTheme();
    const [tutorials, setTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const languageFilter = searchParams.get('language');

    useEffect(() => {
        setLoading(true);
        fetch('https://online-tutor-booking-platform.vercel.app/api/tutorials')
            .then(res => res.json())
            .then(data => {
                setTutorials(data);
                if (languageFilter) {
                    setSearch(languageFilter);
                } else {
                    setSearch('');
                }
            })
            .catch((error) => {
                console.error('Error fetching tutorials:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [languageFilter]);

    const filteredTutorials = tutorials.filter(t => t.language.toLowerCase().includes(search.toLowerCase()));

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={`min-h-screen flex flex-col justify-start py-10 px-2 sm:px-0 transition-all duration-300 ${
            isDark 
                ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900' 
                : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-xl tracking-tight">Find Your Perfect Language Tutor</h1>
            <div className="flex justify-center mb-10 px-4">
                <div className="relative w-full max-w-lg">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search by language..."
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-lg ${
                            isDark 
                                ? 'theme-card-bg theme-border theme-text-primary placeholder-gray-400' 
                                : 'border-blue-200 bg-white'
                        }`}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto">
                {filteredTutorials.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <img src="https://lottie.host/6e7e7e7e7e7e7e7e7e7e7e7e7e7e7e/empty.json" alt="No results" className="w-40 h-40 mb-4 opacity-70" />
                        <p className={`text-center text-lg transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>No tutorials found.</p>
                    </div>
                ) : (
                    filteredTutorials.map(tutorial => (
                        <div key={tutorial._id} className={`rounded-3xl shadow-2xl border flex flex-col md:flex-row items-center md:items-stretch p-0 md:p-0 hover:-translate-y-1 transition-all duration-300 w-full overflow-hidden ${
                            isDark 
                                ? 'theme-card-bg theme-border hover:shadow-2xl hover:shadow-slate-900/50' 
                                : 'bg-white/95 border-blue-100 hover:shadow-blue-200 hover:shadow-2xl'
                        }`}>
                            <div className="flex-shrink-0 w-full md:w-64 h-56 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
                                <img src={tutorial.image} alt={tutorial.language} className="object-cover w-full h-full rounded-none md:rounded-l-3xl md:rounded-r-none shadow-none" />
                            </div>
                            <div className="flex-1 w-full flex flex-col justify-between p-8">
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                        <h2 className={`text-2xl font-bold mb-2 md:mb-0 transition-colors duration-300 ${
                                            isDark ? 'text-blue-400' : 'text-blue-900'
                                        }`}>{tutorial.language}</h2>
                                        <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-semibold px-4 py-1 rounded-full shadow">${tutorial.price}</span>
                                    </div>
                                    <p className={`mb-2 line-clamp-2 transition-colors duration-300 ${
                                        isDark ? 'theme-text-secondary' : 'text-gray-700'
                                    }`}>{tutorial.description}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                                        <span className="text-yellow-600 font-semibold text-base">{tutorial.review}</span>
                                    </div>
                                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow hover:scale-105 hover:bg-gradient-to-l transition-transform duration-200" onClick={() => navigate(`/tutor-details/${tutorial._id}`)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FindTutors;