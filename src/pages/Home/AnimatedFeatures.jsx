import React, { useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const AnimatedFeatures = () => {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, y: -10, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const features = [
    { id: 1, title: 'Interactive Learning', description: 'Engage with tutors through interactive whiteboards, screen sharing, and real-time collaboration tools.', icon: '🎯', color: 'from-blue-500 to-purple-600', delay: 0.1 },
    { id: 2, title: 'Progress Tracking', description: 'Monitor your learning journey with detailed analytics, progress reports, and achievement badges.', icon: '📊', color: 'from-green-500 to-teal-600', delay: 0.2 },
    { id: 3, title: 'Flexible Scheduling', description: 'Book sessions that fit your schedule with our smart calendar integration and reminder system.', icon: '⏰', color: 'from-orange-500 to-red-600', delay: 0.3 },
    { id: 4, title: 'Expert Tutors', description: 'Learn from certified professionals with years of experience in their respective fields.', icon: '👨‍🏫', color: 'from-purple-500 to-pink-600', delay: 0.4 }
  ];

  const handleLoadDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  };

  return (
    <section
      className={`relative py-20 overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900'
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
      }`}
    >
      {/* Body-width container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8" ref={ref}>
        
        {/* Animated Header */}
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-16">
          <motion.div variants={itemVariants} className="inline-block">
            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
              animate={floatingAnimation}
            >
              Advanced Learning Features
            </motion.h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Experience the future of online education with our cutting-edge features designed to enhance your learning journey
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedCard(feature.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className={`relative rounded-2xl p-6 shadow-lg border h-full transition-all duration-300 ${
                isDark ? 'theme-card-bg theme-border' : 'bg-white border-gray-100'
              }`}>
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: selectedCard === feature.id ? 360 : 0, scale: selectedCard === feature.id ? 1.2 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDark ? 'theme-text-primary' : 'text-gray-800'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  isDark ? 'theme-text-secondary' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: feature.delay }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={itemVariants}
          className={`rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-300 ${
            isDark ? 'theme-card-bg' : 'bg-white'
          }`}
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <div className="relative z-10">
            <div className="text-center mb-8">
              <motion.h3
                className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'theme-text-primary' : 'text-gray-800'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Experience Our Platform
              </motion.h3>
              <motion.p
                className={`text-lg transition-colors duration-300 ${
                  isDark ? 'theme-text-secondary' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Try our interactive demo to see how our platform works
              </motion.p>
            </div>
            {isLoading ? (
              <div className="py-12">
                <LoadingSpinner size="large" color="primary" text="Loading Interactive Demo..." type="pulse" />
                <motion.div
                  className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`h-20 rounded-lg skeleton ${isDark ? 'bg-slate-700' : 'bg-gray-200'}`} />
                  ))}
                </motion.div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="space-y-4">
                    {/* Bullet points */}
                    {[
                      { color: 'bg-green-500', text: 'Real-time video sessions' },
                      { color: 'bg-blue-500', text: 'Interactive whiteboard' },
                      { color: 'bg-purple-500', text: 'Progress tracking' }
                    ].map((item, idx) => (
                      <div key={item.text} className="flex items-center space-x-3">
                        <motion.div
                          className={`w-3 h-3 rounded-full ${item.color}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                        />
                        <span className={`${isDark ? 'theme-text-primary' : 'text-gray-700'}`}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-center"
                >
                  <motion.button
                    onClick={handleLoadDemo}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Interactive Demo
                  </motion.button>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20"
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default AnimatedFeatures;