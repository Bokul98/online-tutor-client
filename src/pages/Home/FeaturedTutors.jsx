import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/assets/Lotties/Featured/featured.json';
import { useTheme } from '@/context/ThemeContext/ThemeContext';

const FeaturedTutors = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`pt-24 pb-16 min-h-[60vh] flex items-center justify-center transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900'
          : 'bg-gradient-to-br from-indigo-100 via-white to-slate-50'
      }`}
    >
      <div
        className={`flex flex-col lg:flex-row items-center justify-between gap-8 w-[100%] max-w-6xl mx-auto rounded-3xl p-6 sm:p-8 md:p-12 transition-all duration-300 ${
          isDark
            ? 'bg-slate-800/80 border border-slate-700 shadow-2xl shadow-slate-900/50'
            : 'bg-white/85 shadow-2xl shadow-indigo-200/20'
        }`}
      >
        <div className="w-full lg:w-1/2">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-blue-400' : 'text-indigo-600'
            }`}
          >
            Featured Tutors
          </h2>
          <p
            className={`text-base sm:text-lg mb-8 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Meet our top-rated tutors who are making a difference every day. Book a session with them and boost your learning journey!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDark
                  ? 'bg-slate-700 border border-slate-600 hover:shadow-slate-900/50'
                  : 'bg-slate-50 hover:bg-indigo-50 hover:shadow-indigo-200/30'
              }`}
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Tutor"
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-indigo-200"
                loading="lazy"
              />
              <h3
                className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                Mr. Rahim
              </h3>
              <p
                className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-indigo-600'
                }`}
              >
                Mathematics Expert
              </p>
            </div>
            <div
              className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDark
                  ? 'bg-slate-700 border border-slate-600 hover:shadow-slate-900/50'
                  : 'bg-slate-50 hover:bg-indigo-50 hover:shadow-indigo-200/30'
              }`}
            >
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Tutor"
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-indigo-200"
                loading="lazy"
              />
              <h3
                className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                Ms. Ayesha
              </h3>
              <p
                className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-indigo-600'
                }`}
              >
                English Specialist
              </p>
            </div>
            <div
              className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDark
                  ? 'bg-slate-700 border border-slate-600 hover:shadow-slate-900/50'
                  : 'bg-slate-50 hover:bg-indigo-50 hover:shadow-indigo-200/30'
              }`}
            >
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="Tutor"
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-indigo-200"
                loading="lazy"
              />
              <h3
                className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}
              >
                Mr. Karim
              </h3>
              <p
                className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-indigo-600'
                }`}
              >
                Physics Mentor
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-[440px] min-w-[160px] h-[300px] sm:h-[340px] md:h-[380px]">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutors;