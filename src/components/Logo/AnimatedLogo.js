import React, { useState, useEffect } from 'react';
import './AnimatedLogo.css';

const AnimatedLogo = ({ size = 'default', color = 'black' }) => {
  const [eyeBlink, setEyeBlink] = useState(false);

  // Eye blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    small: 'w-6 h-6',
    default: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  const innerSizeClasses = {
    small: 'w-3 h-3',
    default: 'w-6 h-6',
    large: 'w-10 h-10'
  };

  const pupilSizeClasses = {
    small: 'w-2 h-2',
    default: 'w-3 h-3',
    large: 'w-5 h-5'
  };

  const borderColor = color === 'white' ? 'border-white' : 'border-black';
  const bgColor = color === 'white' ? 'bg-white' : 'bg-black';

  return (
    <div className="relative">
      <div className={`${sizeClasses[size]} rounded-full border-2 ${borderColor} flex items-center justify-center`}>
        <div className={`${innerSizeClasses[size]} rounded-full border ${borderColor} flex items-center justify-center transition-all duration-150 ${eyeBlink ? 'h-1' : innerSizeClasses[size]}`}>
          {!eyeBlink && <div className={`${pupilSizeClasses[size]} ${bgColor} rounded-full`}></div>}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;