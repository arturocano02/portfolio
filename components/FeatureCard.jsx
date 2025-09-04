"use client";
import React from 'react';
import Badge from './Badge';
import Button from './Button';

export default function FeatureCard({ 
  eyebrow, 
  title, 
  description, 
  badges = [], 
  ctaText, 
  ctaLink 
}) {
  return (
    <article className="glass-card p-5 md:p-6 lg:p-8 m-2 md:m-3">
      {eyebrow && (
        <div className="text-sm uppercase tracking-wide text-gray-400 mb-3">
          {eyebrow}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="mb-5">{description}</p>
      
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-5">
          {badges.map((badge, i) => (
            <Badge key={i} text={badge} />
          ))}
        </div>
      )}
      
      {ctaText && ctaLink && (
        <div className="mt-auto pt-4">
          <Button href={ctaLink} variant="outline" className="text-accent hover:text-white">
            {ctaText} →
          </Button>
        </div>
      )}
    </article>
  );
}
