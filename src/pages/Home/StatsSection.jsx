import React, { useEffect, useState } from "react";
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const StatsSection = () => {
  const { isDark } = useTheme();
  const [tutorCount, setTutorCount] = useState(null);
  const [uniqueLanguages, setUniqueLanguages] = useState(null);
  const [totalReviews, setTotalReviews] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  // Fetch total users count
  useEffect(() => {
    fetch ('https://online-tutor-booking-platform.vercel.app/api/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTotalUsers(data.length);
      })
      .catch(() => {
        // setTutorCount(0);
      });
  }, []);


  useEffect(() => {
    fetch('https://online-tutor-booking-platform.vercel.app/api/tutorials')
      .then(res => res.json())
      .then(data => {
        setTutorCount(Array.isArray(data) ? data.length : 0);
        if (Array.isArray(data)) {
          const langSet = new Set(data.map(item => item.language && item.language.trim()).filter(Boolean));
          setUniqueLanguages(langSet.size);
          // Calculate total reviews
          const reviews = data.reduce((sum, item) => sum + (typeof item.review === 'number' ? item.review : 0), 0);
          setTotalReviews(reviews);
        } else {
          setUniqueLanguages(0);
          setTotalReviews(0);
        }
      })
      .catch(() => {
        setTutorCount(0);
        setUniqueLanguages(0);
        setTotalReviews(0);
      });
  }, []);

  const stats = [
    {
      label: "Expert Tutors",
      value: tutorCount === null ? '...' : tutorCount,
      icon: (
        // Modern single-person icon
        <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4v-1z" /></svg>
      ),
    },
    {
      label: "Total Reviews",
      value: totalReviews === null ? '...' : totalReviews,
      icon: (
        <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M12 15.4l-3.76 2.27.99-4.28L5.5 10.5l4.38-.38L12 6.1l2.12 4.02 4.38.38-3.23 2.89.99 4.28z" fill="#facc15"/></svg>
      ),
    },
    {
      label: "Languages Supported",
      value: uniqueLanguages === null ? '...' : uniqueLanguages,
      icon: (
        <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7 0-1.64.56-3.15 1.5-4.35l9.85 9.85A6.96 6.96 0 0112 19zm5.5-2.65L7.65 6.5A6.96 6.96 0 0112 5c3.87 0 7 3.13 7 7 0 1.64-.56 3.15-1.5 4.35z"/></svg>
      ),
    },
    {
      label: "Total Users",
      value: totalUsers === null ? '...' : totalUsers,
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C16.64 13.81 19 15.13 19 16.5V19h5v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
      ),
    },
  ];

  return (
    <section className={`py-12 transition-all duration-300 ${isDark ? 'theme-bg-secondary' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className={`rounded-lg p-6 flex flex-col items-center transition-all duration-300 ${
              isDark 
                ? 'theme-card-bg theme-shadow hover:shadow-2xl hover:shadow-slate-900/50 border theme-border' 
                : 'bg-white shadow hover:shadow-lg'
            }`}>
              <div className="mb-3">{stat.icon}</div>
              <div className={`text-3xl font-bold transition-colors duration-300 ${isDark ? 'theme-text-primary' : 'text-gray-800'}`}>{stat.value}</div>
              <div className={`text-lg mt-1 transition-colors duration-300 ${isDark ? 'theme-text-secondary' : 'text-gray-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
