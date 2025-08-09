import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Lottie from 'lottie-react';
import faqLottie from '../../assets/Lotties/Faq/faq.json';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const faqs = [
  {
    question: 'How do I book a tutor on LangLink?',
    answer: 'Simply browse our list of tutors, view their profiles, and click the “Book Now” button to schedule a session at your convenience.'
  },
  {
    question: 'Can I review my tutor after a session?',
    answer: 'Yes! After your session, you can leave a review and rating for your tutor to help others make informed decisions.'
  },
  {
    question: 'Is payment secure on this platform?',
    answer: 'Absolutely. We use industry-standard encryption and secure payment gateways to ensure your transactions are safe.'
  },
  {
    question: 'What subjects and languages are available?',
    answer: 'We offer a wide range of subjects and languages, from academic tutoring to language learning with native speakers.'
  }
];

const FAQSection = () => {
  const { isDark } = useTheme();
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      className={`py-16 transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900'
          : 'bg-gradient-to-b from-indigo-50 via-white to-slate-50'
      }`}
    >
      {/* Body-width container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        {/* Lottie + FAQ list */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Lottie Left */}
          <div className="w-full md:w-1/2 flex justify-center items-center md:justify-start">
            <Lottie animationData={faqLottie} loop={true} className="max-h-80 w-full md:max-w-xs" />
          </div>

          {/* FAQ Right */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-center">
            <div className="space-y-4 w-full max-w-xl">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border shadow-md transition-all hover:shadow-xl flex flex-col ${
                      isDark
                        ? 'theme-card-bg theme-border hover:shadow-2xl hover:shadow-slate-900/50'
                        : 'bg-white/80 border-blue-100'
                    }`}
                  >
                    <button
                      className="flex items-center justify-between w-full text-left p-5 focus:outline-none gap-3"
                      onClick={() => handleToggle(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span
                        className={`text-lg md:text-xl font-bold flex items-center gap-2 transition-colors duration-300 ${
                          isDark ? 'text-blue-400' : 'text-blue-700'
                        }`}
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF]"></span>
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] ml-4">
                        {isOpen ? (
                          <FiMinus className="text-white text-2xl" />
                        ) : (
                          <FiPlus className="text-white text-2xl" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-answer-${idx}`}
                        className={`px-5 pb-5 text-base md:text-lg leading-relaxed animate-fadeIn transition-colors duration-300 ${
                          isDark ? 'theme-text-secondary' : 'text-gray-700'
                        }`}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;