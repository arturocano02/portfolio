"use client";
import React from 'react';

export default function CaseStudyCard({ title, subtitle, problem, insight, solution }) {
  return (
    <article className="glass-card h-full flex flex-col">
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <div className="text-sm text-gray-400 mb-4">{subtitle}</div>
      
      <div className="space-y-3 flex-grow">
        <p className="text-sm">
          <span className="block text-gray-400 mb-1">Problem:</span>
          {problem}
        </p>
        
        <p className="text-sm">
          <span className="block text-gray-400 mb-1">Insight:</span>
          {insight}
        </p>
        
        <p className="text-sm">
          <span className="block text-gray-400 mb-1">Solution:</span>
          {solution}
        </p>
      </div>
    </article>
  );
}
