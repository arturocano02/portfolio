"use client";
import React, { useState, useEffect } from 'react';

export default function TypewriterEffect({ 
  text, 
  speed = 100, 
  delay = 1000,
  onComplete = () => {},
  className = ""
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < displayText.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
      <span className="animate-pulse">|</span>
    </span>
  );
}
