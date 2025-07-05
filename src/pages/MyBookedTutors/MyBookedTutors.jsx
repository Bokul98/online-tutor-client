import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaLanguage, FaEnvelope, FaStar } from 'react-icons/fa';
import Loading from '../../components/Loading/Loading';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const MyBookedTutors = () => {
    const { user } = useContext(AuthContext);
    const { isDark } = useTheme();
    const [bookedTutors, setBookedTutors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showFullDesc, setShowFullDesc] = useState({});

    useEffect(() => {
        fetch('https://online-tutor-booking-platform.vercel.app/api/booked')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch booked tutors');
                return res.json();
            })
            .then(data => {
                if (user && user.uid) {
                    setBookedTutors(data.filter(item => item.userName === user.uid));
                } else {
                    setBookedTutors([]);
                }
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [user]);

    // Add review handler
    const handleReviewNow = async (tutorId, idx) => {
        try {
            const res = await fetch(`https://online-tutor-booking-platform.vercel.app/api/tutorials/review/${tutorId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!res.ok) throw new Error('Failed to submit review');
            const data = await res.json();
            // Update review count in UI instantly
            setBookedTutors(prev => prev.map((item, i) =>
                i === idx && item.tutorDetails ? {
                    ...item,
                    tutorDetails: {
                        ...item.tutorDetails,
                        review: data.review
                    }
                } : item
            ));
            toast.success('Review submitted and count updated!');
        } catch {
            toast.error('Review failed!');
        }
    };

    if (loading) return <Loading />;
    if (error) return <div className={`text-center my-8 text-red-500 transition-colors duration-300`}>{error}</div>;

    return (
        <div className={`min-h-screen flex flex-col justify-start py-10 px-2 sm:px-0 transition-all duration-300 ${
            isDark 
                ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900' 
                : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}>
            <ToastContainer position="top-right" autoClose={2000} />
            <h2 className="text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">My Booked Tutors</h2>
            {bookedTutors.length === 0 ? (
                <div className={`text-center py-20 transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>No bookings found.</div>
            ) : (
                <ul className="flex flex-col gap-10 w-full max-w-5xl mx-auto">
                    {bookedTutors.map((item, idx) => (
                        <li key={item._id || idx} className={`rounded-2xl shadow-xl border flex flex-col md:flex-row items-stretch p-0 md:p-0 overflow-hidden transition-all duration-300 ${
                            isDark 
                                ? 'theme-card-bg theme-border hover:shadow-2xl hover:shadow-slate-900/50' 
                                : 'bg-white/95 border-blue-100'
                        }`}>
                            {item.tutorDetails && (
                                <>
                                    {/* Left: Image */}
                                    <div className="flex-shrink-0 w-full md:w-64 h-56 md:h-auto flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                                        <img src={item.tutorDetails.image} alt={item.tutorDetails.language} className="object-cover w-44 h-44 rounded-2xl shadow-lg border-4 border-white" />
                                    </div>
                                    {/* Middle: Details */}
                                    <div className="flex-1 w-full flex flex-col justify-center p-6 gap-4">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <FaLanguage className="text-blue-600 text-xl" />
                                                <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                                                    isDark ? 'text-blue-400' : 'text-blue-900'
                                                }`}>{item.tutorDetails.language}</h3>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaStar className="text-yellow-400 text-lg" />
                                                <span className="text-yellow-600 font-semibold text-base">{item.tutorDetails.review}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaUser className="text-blue-400 text-lg" />
                                                <span className={`font-semibold text-base transition-colors duration-300 ${
                                                    isDark ? 'theme-text-primary' : 'text-gray-700'
                                                }`}>{item.tutorDetails.userName}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaEnvelope className="text-purple-400 text-lg" />
                                                <span className={`text-sm transition-colors duration-300 ${
                                                    isDark ? 'theme-text-secondary' : 'text-gray-500'
                                                }`}>{item.tutorDetails.email}</span>
                                            </div>
                                            <div className="mt-2">
                                                <p className={`text-sm md:text-base leading-relaxed rounded-xl p-3 border shadow-sm transition-all duration-300 ${
                                                    isDark 
                                                        ? 'theme-text-secondary theme-bg-tertiary theme-border' 
                                                        : 'text-gray-700 bg-blue-50 border-blue-100'
                                                }`}>
                                                    {showFullDesc[idx] || item.tutorDetails.description.split(' ').length <= 8
                                                        ? item.tutorDetails.description
                                                        : `${item.tutorDetails.description.split(' ').slice(0, 8).join(' ')}...`}
                                                    {item.tutorDetails.description.split(' ').length > 8 && (
                                                        <button
                                                            className="ml-2 text-blue-600 font-semibold hover:underline focus:outline-none"
                                                            onClick={() => setShowFullDesc(prev => ({ ...prev, [idx]: !prev[idx] }))
                                                            }
                                                        >
                                                            {showFullDesc[idx] ? 'Show less' : 'Show more'}
                                                        </button>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Right: Price and Review Now */}
                                    <div className={`flex flex-col justify-start items-end min-w-[150px] p-6 gap-4 transition-all duration-300 ${
                                        isDark 
                                            ? 'bg-gradient-to-b from-slate-700 to-slate-600' 
                                            : 'bg-gradient-to-b from-blue-50 to-purple-50'
                                    }`}>
                                        <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-semibold px-5 py-1 rounded-full shadow mb-2">${item.tutorDetails.price}</span>
                                        <div className="flex-1 flex flex-col justify-end w-full">
                                            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold shadow-lg hover:scale-105 hover:bg-gradient-to-l transition-transform duration-200 text-base disabled:opacity-60 w-full md:w-auto mt-auto" onClick={() => handleReviewNow(item.tutorId, idx)}>
                                                Review Now
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyBookedTutors;