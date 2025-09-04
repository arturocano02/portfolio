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
    <article className="glass-card">
      {eyebrow && (
        <div className="text-sm uppercase tracking-wide text-gray-400 mb-2">
          {eyebrow}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="mb-4">{description}</p>
      
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, i) => (
            <Badge key={i} text={badge} />
          ))}
        </div>
      )}
      
      {ctaText && ctaLink && (
        <div className="mt-auto pt-2">
          <Button href={ctaLink} variant="outline" className="text-accent hover:text-white">
            {ctaText} →
          </Button>
        </div>
      )}
    </article>
  );
}
