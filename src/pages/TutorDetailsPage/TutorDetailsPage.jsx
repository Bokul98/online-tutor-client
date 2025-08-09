import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { FaUser, FaLanguage, FaEnvelope, FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../components/Loading/Loading';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const TutorDetailsPage = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { isDark } = useTheme();
    const [tutor, setTutor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [booking, setBooking] = useState({ loading: false, success: false, error: null });
    const [showFullDesc, setShowFullDesc] = useState(false);

    useEffect(() => {
        fetch(`https://online-tutor-booking-platform.vercel.app/api/tutorials/tutor-details/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch details');
                return res.json();
            })
            .then(data => {
                setTutor(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleBookNow = async () => {
        if (!user) {
            setBooking({ loading: false, success: false, error: 'You must be logged in to book.' });
            toast.error('Please log in to book a tutor.');
            return;
        }
        setBooking({ loading: true, success: false, error: null });
        try {
            const res = await fetch('https://online-tutor-booking-platform.vercel.app/api/booked', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName: user.uid, tutorId: id })
            });
            if (!res.ok) throw new Error('Booking failed');
            setBooking({ loading: false, success: true, error: null });
            toast.success('Booking successful!');
        } catch (err) {
            setBooking({ loading: false, success: false, error: err.message });
            toast.error('Booking failed!');
        }
    };

    if (loading) return <Loading />;
    if (error) return <div className="text-center my-8 text-red-500 text-lg font-semibold">{error}</div>;
    if (!tutor) return <div className={`text-center my-8 text-lg font-semibold transition-colors duration-300 ${
        isDark ? 'text-gray-200' : 'text-gray-800'
    }`}>No tutor details found.</div>;

    return (
        <div className={`min-h-screen flex flex-col justify-start py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            isDark 
                ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950' 
                : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}>
            <ToastContainer position="top-right" autoClose={2000} theme={isDark ? 'dark' : 'light'} />
            <div className={`w-full max-w-6xl mx-auto rounded-3xl shadow-2xl border flex flex-col lg:flex-row items-stretch overflow-hidden transition-all duration-500 transform hover:shadow-3xl ${
                isDark 
                    ? 'bg-slate-800/90 border-slate-700 hover:shadow-slate-900/50' 
                    : 'bg-white/95 border-blue-100 hover:shadow-blue-200/50'
            }`}>
                {/* Left: Image */}
                <div className="flex-shrink-0 w-full lg:w-96 h-64 lg:h-auto bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 relative overflow-hidden">
                    <img 
                        src={tutor.image} 
                        alt={tutor.language} 
                        className="object-cover w-full h-full lg:rounded-l-3xl transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Middle: Details */}
                <div className="flex-1 w-full flex flex-col p-8 lg:p-10 gap-6">
                    <div className="space-y-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <FaLanguage className="text-blue-600 text-2xl" />
                                <h2 className={`text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                                    isDark ? 'text-blue-400' : 'text-blue-900'
                                }`}>{tutor.language}</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaStar className="text-yellow-400 text-xl" />
                                <span className="text-yellow-600 font-semibold text-lg">{tutor.review}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaUser className="text-blue-400 text-lg" />
                            <span className={`font-semibold text-lg transition-colors duration-300 ${
                                isDark ? 'text-gray-200' : 'text-gray-800'
                            }`}>{tutor.userName}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-purple-400 text-lg" />
                            <span className={`text-base transition-colors duration-300 ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>{tutor.email}</span>
                        </div>
                        <div className="mt-4">
                            <p className={`text-base leading-relaxed rounded-xl p-4 border shadow-sm transition-all duration-300 ${
                                isDark 
                                    ? 'text-gray-300 bg-slate-700/50 border-slate-600' 
                                    : 'text-gray-700 bg-blue-50/50 border-blue-100'
                            }`}>
                                {showFullDesc || tutor.description.split(' ').length <= 20
                                    ? tutor.description
                                    : `${tutor.description.split(' ').slice(0, 20).join(' ')}...`}
                                {tutor.description.split(' ').length > 20 && (
                                    <button
                                        className="ml-2 text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-200 focus:outline-none"
                                        onClick={() => setShowFullDesc(!showFullDesc)}
                                    >
                                        {showFullDesc ? 'Show Less' : 'Show More'}
                                    </button>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right: Price and Book Now */}
                <div className={`flex flex-col justify-between items-center lg:items-end w-full lg:w-64 p-8 gap-6 transition-all duration-300 ${
                    isDark 
                        ? 'bg-gradient-to-b from-slate-700/80 to-slate-600/80' 
                        : 'bg-gradient-to-b from-blue-50/80 to-purple-50/80'
                }`}>
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold px-6 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                        ${tutor.price}
                    </span>
                    <div className="w-full flex flex-col items-center lg:items-end gap-3">
                        <button 
                            className={`w-full px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:bg-gradient-to-l transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`} 
                            onClick={handleBookNow} 
                            disabled={booking.loading}
                        >
                            {booking.loading ? 'Booking...' : 'Book Now'}
                        </button>
                        {booking.error && (
                            <div className="text-center lg:text-right text-red-500 text-sm font-medium">
                                {booking.error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetailsPage;