import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const defaultLogo = "https://cdn-icons-png.flaticon.com/512/3135/3135768.png";

const CARDS_PER_ROW = 3;
const INITIAL_ROWS = 3; // 3 rows x 3 = 9 cards

const LanguageCategorySection = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch('https://online-tutor-booking-platform.vercel.app/api/tutorials')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const langSet = new Set(data.map(item => item.language && item.language.trim()).filter(Boolean));
          setLanguages(Array.from(langSet));
        } else {
          setLanguages([]);
        }
      })
      .catch(() => setLanguages([]));
  }, []);

  const handleLanguageClick = (lang) => {
    navigate(`/find-tutors?language=${encodeURIComponent(lang)}`);
  };

  const visibleLanguages = showAll ? languages : languages.slice(0, CARDS_PER_ROW * INITIAL_ROWS);

  return (
    <section className={`py-16 transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-blue-50 via-white to-purple-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-3xl font-extrabold mb-10 text-center tracking-tight transition-colors duration-300 ${
          isDark ? 'theme-text-primary' : 'text-gray-800'
        }`}>
          Discover the Perfect Tutor for Your Learning Journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleLanguages.map((lang, idx) => (
            <div
              key={idx}
              className={`relative cursor-pointer rounded-xl transition-all duration-300 flex items-center px-6 py-4 border group ${
                isDark 
                  ? 'theme-card-bg theme-shadow hover:shadow-2xl hover:shadow-slate-900/50 theme-border hover:border-blue-400' 
                  : 'bg-white shadow hover:shadow-md border-gray-200 hover:border-blue-400'
              }`}
              onClick={() => handleLanguageClick(lang)}
            >
              <div className={`p-3 rounded-full shadow-md mr-6 flex-shrink-0 transition-colors duration-300 ${
                isDark ? 'bg-blue-900/50' : 'bg-blue-100'
              }`}>
                <img
                  src={defaultLogo}
                  alt="Category Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex-1">
                <div className={`text-lg font-semibold group-hover:text-blue-600 transition-colors duration-200 ${
                  isDark ? 'theme-text-primary' : 'text-gray-800'
                }`}>
                  {lang}
                </div>
              </div>
              <span className={`inline-block rounded-full p-2 transition-colors duration-200 ml-4 ${
                isDark 
                  ? 'bg-blue-900/30 group-hover:bg-blue-800/50' 
                  : 'bg-blue-50 group-hover:bg-blue-100'
              }`}>
                <svg className="w-6 h-6 text-blue-500 group-hover:text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          ))}
        </div>
        {languages.length > CARDS_PER_ROW * INITIAL_ROWS && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors duration-200"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LanguageCategorySection;
