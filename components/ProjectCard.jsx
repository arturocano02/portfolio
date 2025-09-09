"use client";

import React, { useState } from 'react';

export default function ProjectCard({ 
  title, 
  summary, 
  story, 
  whatIDid, 
  skills, 
  icon, 
  isComingSoon = false 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Card */}
      <div 
        className="project-card glass-card cursor-pointer group"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        <div className="flex items-start mb-4">
          <div className="p-3 bg-white bg-opacity-10 rounded-xl mr-4 flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">
              {isComingSoon && <span className="text-sm text-orange-400 mr-2">Coming soon —</span>}
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
        
        <div className="flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-[99999] flex items-start justify-center pt-24 pb-4 px-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-2xl max-h-[calc(100vh-8rem)] overflow-y-auto glass-card animate-modal-in">
            {/* Close Button - Sticky at top right */}
            <button
              onClick={handleClose}
              className="sticky top-6 right-6 z-10 p-3 rounded-full bg-black bg-opacity-70 hover:bg-opacity-90 border border-white border-opacity-30 transition-all duration-200 backdrop-blur-sm shadow-lg ml-auto"
              aria-label="Close modal"
              style={{ float: 'right', marginTop: '1.5rem', marginRight: '1.5rem' }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {/* Header */}
              <div className="flex items-start mb-6">
                <div className="p-3 bg-white bg-opacity-10 rounded-xl mr-4 flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h2 id="modal-title" className="text-2xl font-bold text-white mb-2">
                    {isComingSoon && <span className="text-sm text-orange-400 mr-2">Coming soon —</span>}
                    {title}
                  </h2>
                  <p className="text-gray-300 text-lg">
                    {summary}
                  </p>
                </div>
              </div>

              {/* The Story */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-3">The Story</h3>
                <p className="text-gray-300 leading-relaxed">
                  {story}
                </p>
              </div>

              {/* What I did */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-3">What I did</h3>
                <ul className="space-y-2">
                  {whatIDid.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-orange-400 mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills & Tools */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white bg-opacity-10 text-gray-300 text-sm rounded-full border border-white border-opacity-20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
