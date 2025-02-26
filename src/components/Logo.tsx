import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Logo() {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-black tracking-[0.2em] font-['Montserrat']">
        <span className="text-gray-900 dark:text-white">S</span>
        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">&</span>
        <span className="text-gray-900 dark:text-white">N</span>
      </div>
      <div className="text-xs tracking-[0.3em] text-gray-900 dark:text-white mt-1 font-semibold">
        AUTOMATION
      </div>
    </div>
  );
}

export default Logo;