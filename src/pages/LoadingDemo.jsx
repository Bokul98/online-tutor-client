import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner, { LoadingOverlay, LoadingCard } from '../components/LoadingSpinner';

const LoadingDemo = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const spinnerTypes = ['dots', 'pulse', 'bounce', 'wave'];
  const spinnerSizes = ['small', 'medium', 'large', 'xlarge'];
  const spinnerColors = ['primary', 'secondary', 'success', 'warning', 'error'];

  const handleShowOverlay = () => {
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Loading Spinner Demo
          </h1>
          <p className="text-xl text-gray-600">
            Showcase of various loading spinner animations and styles
          </p>
        </motion.div>

        {/* Spinner Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Spinner Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spinnerTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-lg font-medium text-gray-700 mb-4 text-center capitalize">
                  {type} Spinner
                </h3>
                <LoadingSpinner 
                  type={type} 
                  size="medium" 
                  color="primary" 
                  showText={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Spinner Sizes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Spinner Sizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spinnerSizes.map((size, index) => (
              <motion.div
                key={size}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-lg font-medium text-gray-700 mb-4 text-center capitalize">
                  {size}
                </h3>
                <LoadingSpinner 
                  type="pulse" 
                  size={size} 
                  color="primary" 
                  showText={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Spinner Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Spinner Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {spinnerColors.map((color, index) => (
              <motion.div
                key={color}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-lg font-medium text-gray-700 mb-4 text-center capitalize">
                  {color}
                </h3>
                <LoadingSpinner 
                  type="dots" 
                  size="medium" 
                  color={color} 
                  showText={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Loading Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Loading Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LoadingCard 
              size="large"
              color="primary"
              text="Loading user data..."
              type="wave"
            />
            <LoadingCard 
              size="medium"
              color="success"
              text="Processing request..."
              type="bounce"
            />
          </div>
        </motion.section>

        {/* Interactive Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Interactive Demo
          </h2>
          <motion.button
            onClick={handleShowOverlay}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show Loading Overlay
          </motion.button>
        </motion.section>

        {/* Loading Overlay */}
        <LoadingOverlay 
          isVisible={showOverlay}
          size="xlarge"
          color="primary"
          text="Loading amazing content..."
          type="pulse"
        />
      </div>
    </div>
  );
};

export default LoadingDemo;