"use client";
import React from 'react';

export default function CaseStudyCard({ title, subtitle, problem, insight, solution }) {
  return (
    <article className="glass-card h-full flex flex-col p-5 md:p-6 m-2 md:m-3">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <div className="text-sm text-gray-400 mb-5">{subtitle}</div>
      
      <div className="space-y-4 flex-grow">
        <p className="text-sm">
          <span className="block text-gray-400 mb-2 font-medium">Problem:</span>
          {problem}
        </p>
        
        <p className="text-sm">
          <span className="block text-gray-400 mb-2 font-medium">Insight:</span>
          {insight}
        </p>
        
        <p className="text-sm">
          <span className="block text-gray-400 mb-2 font-medium">Solution:</span>
          {solution}
        </p>
      </div>
    </article>
  );
}
