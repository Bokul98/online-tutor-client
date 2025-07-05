import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/Lotties/Featured/featured.json';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const FeaturedTutors = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-16 min-h-[60vh] flex items-center justify-center transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900' 
        : 'bg-gradient-to-br from-indigo-100 via-white to-slate-50'
    }`}>
      <div className={`flex flex-col lg:flex-row items-center justify-center gap-10 w-[90%] max-w-6xl mx-auto rounded-3xl p-8 md:p-12 transition-all duration-300 ${
        isDark 
          ? 'theme-card-bg theme-shadow border theme-border' 
          : 'bg-white/85 shadow-2xl shadow-indigo-200/20'
      }`}>
        <div className="w-full lg:w-1/2">
          <h2 className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? 'text-blue-400' : 'text-indigo-600'
          }`}>
            Featured Tutors
          </h2>
          <p className={`text-lg mb-8 leading-relaxed transition-colors duration-300 ${
            isDark ? 'theme-text-secondary' : 'text-gray-600'
          }`}>
            Meet our top-rated tutors who are making a difference every day. Book a session with them and boost your learning journey!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example tutor cards, replace with dynamic data as needed */}
            <div className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'theme-bg-tertiary theme-border border hover:shadow-lg hover:shadow-slate-900/50' 
                : 'bg-slate-50 hover:bg-indigo-50 hover:shadow-lg'
            }`}>
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Tutor" 
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-indigo-200"
              />
              <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                isDark ? 'theme-text-primary' : 'text-gray-800'
              }`}>Mr. Rahim</h3>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'theme-text-secondary' : 'text-gray-600'
              }`}>Mathematics Expert</p>
            </div>
            <div className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'theme-bg-tertiary theme-border border hover:shadow-lg hover:shadow-slate-900/50' 
                : 'bg-slate-50 hover:bg-indigo-50 hover:shadow-lg'
            }`}>
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Tutor" 
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-indigo-200"
              />
              <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                isDark ? 'theme-text-primary' : 'text-gray-800'
              }`}>Ms. Ayesha</h3>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'theme-text-secondary' : 'text-gray-600'
              }`}>English Specialist</p>
            </div>
            <div className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'theme-bg-tertiary theme-border border hover:shadow-lg hover:shadow-slate-900/50' 
                : 'bg-slate-50 hover:bg-indigo-50 hover:shadow-lg'
            }`}>
              <img 
                src="https://randomuser.me/api/portraits/men/65.jpg" 
                alt="Tutor" 
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-indigo-200"
              />
              <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                isDark ? 'theme-text-primary' : 'text-gray-800'
              }`}>Mr. Karim</h3>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'theme-text-secondary' : 'text-gray-600'
              }`}>Physics Mentor</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 max-w-[520px] flex items-center justify-center">
          <div className="w-full max-w-[480px] min-w-[260px] h-[340px] md:h-[380px]">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutors;
