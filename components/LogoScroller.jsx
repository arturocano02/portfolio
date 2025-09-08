"use client";
import React from 'react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function LogoScroller({ logos = [], speed = 0.7 }) {
  const scrollerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current || !innerRef.current) return;
    
    // Clone the logos to create a seamless loop
    const cloneContent = () => {
      const content = innerRef.current;
      const clone = content.cloneNode(true);
      scrollerRef.current.appendChild(clone);
    };
    
    cloneContent();
    
    let animationId;
    let scrollPosition = 0;
    
    // Animate the scroll
    const scroll = () => {
      if (!scrollerRef.current) return;
      
      scrollPosition += speed;
      
      // Reset position when first set of logos is scrolled out of view
      if (scrollPosition >= innerRef.current.offsetWidth) {
        scrollPosition = 0;
      }
      
      scrollerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    
    scroll();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed]);

  return (
    <div className="logo-scroller-container overflow-hidden w-full py-8">
      <div 
        ref={scrollerRef}
        className="logo-scroller flex whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        <div ref={innerRef} className="logo-inner flex items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="logo-item flex-shrink-0 mx-20 flex items-center justify-center"
            >
              {logo.image ? (
                <div className="relative h-28 w-auto flex items-center">
                  <Image 
                    src={logo.image} 
                    alt={logo.name} 
                    width={logo.width || 200}
                    height={logo.height || 100}
                    className="object-contain"
                    style={{ maxHeight: '100px' }}
                  />
                </div>
              ) : (
                <div className="partner-logo glass flex items-center justify-center h-24 px-10">
                  {logo.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
