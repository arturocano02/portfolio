"use client";
import React from 'react';

export default function ScrollIndicator({ targetId }) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-indicator" onClick={handleClick}>
      <span className="mb-2 text-sm">Scroll</span>
      <div className="scroll-indicator-line"></div>
    </div>
  );
}