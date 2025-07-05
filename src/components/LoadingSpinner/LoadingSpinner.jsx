import React from 'react';
import { motion } from 'framer-motion';
import './LoadingSpinner.css';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary', 
  text = 'Loading...', 
  showText = true,
  type = 'dots' 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-24 h-24'
  };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-purple-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600'
  };

  // Dots Spinner
  const DotsSpinner = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 bg-current rounded-full ${colorClasses[color]}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  );

  // Pulse Spinner
  const PulseSpinner = () => (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full border-4 border-current border-opacity-20 border-t-current`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );

  // Bounce Spinner
  const BounceSpinner = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className={`w-2 h-8 bg-current ${colorClasses[color]} rounded-full`}
          animate={{
            scaleY: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.1
          }}
        />
      ))}
    </div>
  );

  // Wave Spinner
  const WaveSpinner = () => (
    <div className="flex items-end space-x-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={`w-1 bg-current ${colorClasses[color]} rounded-full`}
          animate={{
            height: ["10px", "30px", "10px"]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1
          }}
        />
      ))}
    </div>
  );

  const renderSpinner = () => {
    switch (type) {
      case 'dots':
        return <DotsSpinner />;
      case 'pulse':
        return <PulseSpinner />;
      case 'bounce':
        return <BounceSpinner />;
      case 'wave':
        return <WaveSpinner />;
      default:
        return <DotsSpinner />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {renderSpinner()}
      </motion.div>
      
      {showText && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`text-sm font-medium ${colorClasses[color]} animate-pulse`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Full Screen Loading Overlay
export const LoadingOverlay = ({ isVisible, ...props }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <LoadingSpinner {...props} />
    </motion.div>
  );
};

// Loading Card Component
export const LoadingCard = ({ className = "", ...props }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
    <LoadingSpinner {...props} />
  </div>
);

export default LoadingSpinner;