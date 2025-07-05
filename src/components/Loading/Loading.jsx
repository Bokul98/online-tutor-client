import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-transparent">
      {/* Main Loading Container */}
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-pulse"></div>
        
        {/* Spinning Ring */}
        <div className="absolute w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full animate-spin"></div>
        
        {/* Inner Pulsing Dot */}
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        
        {/* Orbiting Dots */}
        <div className="absolute w-20 h-20 animate-spin" style={{ animationDuration: '3s' }}>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute left-0 top-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute right-0 top-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
      
      {/* Loading Text with Typing Effect */}
      <div className="mt-8 flex items-center space-x-1">
        <span className="text-gray-700 text-lg font-semibold">Loading</span>
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
