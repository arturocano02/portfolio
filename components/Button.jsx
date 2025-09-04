"use client";
import React from 'react';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick
}) {
  const baseClass = `btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
