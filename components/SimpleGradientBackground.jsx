"use client";
import React, { useEffect, useRef } from 'react';

export default function SimpleGradientBackground() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Colors that match the image reference - teal to orange to pink gradient
    const primaryColor = '#FF9D45'; // Orange for mouse follow
    const topColor = '#4ECDC4'; // Teal for top
    const middleColor = '#FF9D45'; // Orange for middle
    const bottomColor = '#FF6B81'; // Pink for bottom
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Set display size (css pixels)
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // Set actual size in memory (scaled to account for extra pixel density)
      const scale = window.devicePixelRatio || 1;
      canvas.width = width * scale;
      canvas.height = height * scale;
      
      // Normalize coordinate system to use css pixels
      ctx.scale(scale, scale);
    };
    
    const handleMouseMove = (e) => {
      mousePos.current = { 
        x: e.clientX,
        y: e.clientY
      };
    };
    
    // Handle scroll events to ensure gradient persists during scrolling
    const handleScroll = () => {
      // Keep the gradient effect active during scrolling
    };
    
    // Initial mouse position in center
    mousePos.current = {
      x: width / 2,
      y: height / 2
    };
    
    const animate = (time) => {
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = time;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw base gradient (teal to orange to pink - like the reference image)
      const baseGradient = ctx.createLinearGradient(0, 0, width, height * 1.5);
      baseGradient.addColorStop(0, topColor); // Teal at top
      baseGradient.addColorStop(0.4, middleColor); // Orange in middle
      baseGradient.addColorStop(0.8, bottomColor); // Pink at bottom
      
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);
      
      // Draw orange "torch" following mouse - more pronounced effect
      const torchRadius = Math.max(width, height) * 0.6;
      const torchGradient = ctx.createRadialGradient(
        mousePos.current.x, mousePos.current.y, 0,
        mousePos.current.x, mousePos.current.y, torchRadius
      );
      
      // More vibrant orange with better opacity transitions
      torchGradient.addColorStop(0, 'rgba(255, 157, 69, 0.9)');
      torchGradient.addColorStop(0.2, 'rgba(255, 157, 69, 0.7)');
      torchGradient.addColorStop(0.5, 'rgba(255, 157, 69, 0.4)');
      torchGradient.addColorStop(0.8, 'rgba(255, 157, 69, 0.1)');
      torchGradient.addColorStop(1, 'rgba(255, 157, 69, 0)');
      
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = torchGradient;
      ctx.fillRect(0, 0, width, height);
      
      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';
      
      // Continue animation
      requestRef.current = requestAnimationFrame(animate);
      previousTimeRef.current = time;
    };
    
    // Set up
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Start animation
    requestRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
