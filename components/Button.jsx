"use client";
import React from 'react';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick,
  icon
}) {
  const baseClass = `btn btn-${variant} ${className}`;
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={baseClass}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClass}>
      {content}
    </button>
  );
}
