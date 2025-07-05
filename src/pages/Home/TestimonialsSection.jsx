import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingCard } from '../../components/LoadingSpinner';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const TestimonialsSection = () => {
  const { isDark } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Computer Science Student",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      text: "The tutoring platform has completely transformed my learning experience. The interactive sessions and personalized approach helped me improve my programming skills significantly.",
      subject: "Programming",
      improvement: "85% grade improvement"
    },
    {
      id: 2,
      name: "Mohammad Rahman",
      role: "High School Student",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "Amazing platform! My math tutor was incredibly patient and helped me understand complex concepts easily. The scheduling flexibility is perfect for my busy schedule.",
      subject: "Mathematics",
      improvement: "From C to A+ grade"
    },
    {
      id: 3,
      name: "Fatima Khan",
      role: "University Student",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "I love how the platform tracks my progress and provides detailed feedback. The quality of tutors is exceptional, and the learning materials are top-notch.",
      subject: "Physics",
      improvement: "90% concept clarity"
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      role: "Working Professional",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      text: "As a working professional, I needed flexible learning options. This platform provided exactly that with evening sessions and weekend availability.",
      subject: "Business English",
      improvement: "Professional fluency achieved"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const testimonialVariants = {
    enter: {
      x: 300,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: -300,
      opacity: 0
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ⭐
          </motion.span>
        ))}
      </div>
    );
  };

  if (isLoading) {
    return (
      <section className={`py-20 transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900' 
          : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className={`h-12 rounded-lg w-64 mx-auto mb-4 skeleton ${
              isDark ? 'bg-slate-700' : 'bg-gray-200'
            }`}></div>
            <div className={`h-6 rounded-lg w-96 mx-auto skeleton ${
              isDark ? 'bg-slate-700' : 'bg-gray-200'
            }`}></div>
          </div>
          <LoadingCard 
            className="max-w-4xl mx-auto"
            size="large"
            color="primary"
            text="Loading testimonials..."
            type="wave"
          />
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 relative overflow-hidden transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900' 
        : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
    }`}>
      {/* Background Decorations */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            What Our Students Say
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Discover how our platform has transformed the learning journey of thousands of students
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative min-h-[28rem] sm:min-h-[24rem] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className={`rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden transition-all duration-300 ${
                  isDark ? 'theme-card-bg' : 'bg-white'
                }`}>
                  {/* Quote Background */}
                  <motion.div
                    className={`absolute top-4 left-4 text-6xl font-serif transition-colors duration-300 ${
                      isDark ? 'text-indigo-800/30' : 'text-indigo-100'
                    }`}
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    "
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-indigo-200 shadow-lg"
                        />
                      </motion.div>

                      <div className="flex-1 text-center md:text-left">
                        <motion.p
                          className={`text-base sm:text-lg md:text-xl leading-relaxed mb-6 italic transition-colors duration-300 ${
                            isDark ? 'theme-text-secondary' : 'text-gray-700'
                          }`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {testimonials[currentTestimonial].text}
                        </motion.p>

                        <motion.div
                          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div>
                            <h4 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                              isDark ? 'theme-text-primary' : 'text-gray-800'
                            }`}>
                              {testimonials[currentTestimonial].name}
                            </h4>
                            <p className={`transition-colors duration-300 ${
                              isDark ? 'theme-text-secondary' : 'text-gray-600'
                            }`}>
                              {testimonials[currentTestimonial].role}
                            </p>
                            <StarRating rating={testimonials[currentTestimonial].rating} />
                          </div>

                          <div className="text-center md:text-right">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-2">
                              {testimonials[currentTestimonial].subject}
                            </div>
                            <div className="text-green-600 font-semibold">
                              {testimonials[currentTestimonial].improvement}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-indigo-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;