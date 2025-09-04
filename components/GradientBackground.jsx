"use client";
import React, { useEffect, useRef } from 'react';

export default function GradientBackground({
  // Default colors inspired by the reference image - subtle complementary colors
  primaryColor = '#ff3b3b',
  colors = ['#ff3b3b', '#4158D0', '#0093E9', '#38ef7d', '#FBAB7E'],
  mouseInfluence = 0.8,
  transitionSpeed = 0.05,
  noiseIntensity = 0.2
}) {
  const canvasRef = useRef(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  const isMouseInside = useRef(false);
  const gradientCenters = useRef([]);
  const time = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas exists
    
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize by disabling alpha
    if (!ctx) return; // Ensure context exists
    
    let width, height;
    let lastMouseMoveTime = 0;
    const mouseMoveThreshold = 16; // Throttle to ~60fps
    
    // Initialize gradient centers in a more coordinated pattern
    const initGradientCenters = () => {
      if (!width || !height) return; // Ensure dimensions are available
      
      // Create a more harmonious arrangement
      const centerX = width / 2;
      const centerY = height / 2;
      const maxDist = Math.min(width, height) * 0.4;
      
      gradientCenters.current = colors.map((_, i) => {
        // Arrange centers in a circular pattern with some randomness
        const angle = (i / colors.length) * Math.PI * 2 + (Math.random() * 0.3);
        const distance = maxDist * (0.3 + Math.random() * 0.7);
        
        return {
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          vx: Math.cos(angle) * 0.15,
          vy: Math.sin(angle) * 0.15,
          radius: Math.max(width, height) * (0.35 + Math.random() * 0.15),
          // Add phase offset for smoother animation
          phase: i * (Math.PI / colors.length)
        };
      });
    };
    
    // Resize handler to keep canvas full screen and high resolution
    const handleResize = () => {
      if (!canvas || !ctx) return; // Safety check
      
      // Use full device pixel ratio for higher resolution
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Set canvas dimensions
      try {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        ctx.scale(dpr, dpr);
      } catch (err) {
        console.error('Error setting canvas dimensions:', err);
      }
      
      // Initialize mouse position to center on resize
      if (!isMouseInside.current) {
        mouseTarget.current = { x: width / 2, y: height / 2 };
        mouseCurrent.current = { x: width / 2, y: height / 2 };
      }
      
      initGradientCenters();
    };
    
    // Mouse event handlers with throttling
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMouseMoveTime < mouseMoveThreshold) return;
      
      lastMouseMoveTime = now;
      mouseTarget.current = { x: e.clientX, y: e.clientY };
      isMouseInside.current = true;
    };
    
    // Handle scroll events to ensure gradient responds during scrolling
    const handleScroll = () => {
      // Keep mouse position relative to viewport during scroll
      if (isMouseInside.current && mouseTarget.current) {
        // No need to update coordinates as clientX/Y are viewport-relative
        // Just mark that we're still inside the window
        isMouseInside.current = true;
      }
    };
    
    const handleMouseLeave = () => {
      isMouseInside.current = false;
    };
    
    // Perlin-like noise function (simplified for animation)
    const noise = (x, y, t) => {
      const s = Math.sin(x * 0.1 + t * 0.1) * Math.sin(y * 0.1 + t * 0.2);
      const c = Math.cos(x * 0.11 + t * 0.12) * Math.cos(y * 0.11 + t * 0.13);
      return (s + c) * 0.5;
    };
    
    // Helper function to blend colors for smoother transitions
    const blendColors = (color1, color2, ratio) => {
      // Convert hex to RGB
      const parseColor = (hexColor) => {
        if (hexColor.startsWith('#')) {
          const r = parseInt(hexColor.slice(1, 3), 16);
          const g = parseInt(hexColor.slice(3, 5), 16);
          const b = parseInt(hexColor.slice(5, 7), 16);
          return [r, g, b];
        }
        return [0, 0, 0]; // Fallback
      };
      
      const [r1, g1, b1] = parseColor(color1);
      const [r2, g2, b2] = parseColor(color2);
      
      // Blend the colors
      const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
      const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
      const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
      
      // Convert back to hex
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };
    
    // Create gradient animation with performance optimizations
    let lastRenderTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;
    
    const render = (timestamp = 0) => {
      if (!canvas || !ctx) return; // Safety check
      
      // Throttle rendering to target FPS
      const elapsed = timestamp - lastRenderTime;
      if (elapsed < frameInterval) {
        animationFrameId.current = requestAnimationFrame(render);
        return;
      }
      
      lastRenderTime = timestamp - (elapsed % frameInterval);
      time.current += 0.005;
      
      // Smooth mouse movement
      if (isMouseInside.current) {
        mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * transitionSpeed;
        mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * transitionSpeed;
      } else {
        // Slowly move mouse position to center when mouse leaves window
        mouseCurrent.current.x += (width / 2 - mouseCurrent.current.x) * (transitionSpeed * 0.5);
        mouseCurrent.current.y += (height / 2 - mouseCurrent.current.y) * (transitionSpeed * 0.5);
      }
      
      // Clear canvas with a solid color for better performance
      ctx.fillStyle = colors[0]; // Use first color as base
      ctx.fillRect(0, 0, width, height);
      
      // Draw base gradient with smoother transitions
      // Use a radial gradient for base to create a more organic feel
      const baseGradient = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 0,
        width * 0.5, height * 0.5, Math.max(width, height) * 0.9
      );
      
      // Add more color stops for smoother transitions
      // Create a much finer gradient with more interpolated colors
      const extendedColorStops = 24; // Higher number for smoother transitions
      
      for (let i = 0; i < extendedColorStops; i++) {
        const pos = i / (extendedColorStops - 1);
        
        // Find the two colors to blend between
        const colorIndex = pos * (colors.length - 1);
        const color1Index = Math.floor(colorIndex);
        const color2Index = Math.min(colors.length - 1, color1Index + 1);
        
        const color1 = colors[color1Index];
        const color2 = colors[color2Index];
        
        // Calculate blend ratio between the two colors
        const blendRatio = colorIndex - color1Index;
        
        // Create a smooth blend
        const blendedColor = blendColors(color1, color2, blendRatio);
        baseGradient.addColorStop(pos, blendedColor);
      }
      
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);
      
      // Draw mouse-following radial gradient on top
      const mouseX = mouseCurrent.current.x;
      const mouseY = mouseCurrent.current.y;
      
      // Update gradient centers with coordinated movement
      const centerX = width / 2;
      const centerY = height / 2;
      
      gradientCenters.current.forEach((center, i) => {
        // Main gradient always follows mouse
        if (i === 0) {
          center.x = mouseX;
          center.y = mouseY;
          return;
        }
        
        // For secondary gradients, create a flowing, coordinated movement
        // Use both mouse position and time-based animation for natural flow
        const timeOffset = time.current + center.phase;
        const orbitRadius = Math.min(width, height) * 0.2;
        
        // Calculate base position (circular orbit around center)
        const orbitX = centerX + Math.cos(timeOffset * 0.2) * orbitRadius;
        const orbitY = centerY + Math.sin(timeOffset * 0.2) * orbitRadius;
        
        // Add mouse influence (gradients are subtly attracted to mouse)
        const mouseInfluenceFactor = 0.15;
        const targetX = orbitX + (mouseX - orbitX) * mouseInfluenceFactor;
        const targetY = orbitY + (mouseY - orbitY) * mouseInfluenceFactor;
        
        // Add noise for organic movement
        const nx = noise(center.x, center.y, timeOffset) * noiseIntensity;
        const ny = noise(center.y, center.x, timeOffset + 100) * noiseIntensity;
        
        // Smooth movement toward target position
        center.x += (targetX - center.x) * 0.03 + nx;
        center.y += (targetY - center.y) * 0.03 + ny;
        
        // Keep within bounds with soft edge behavior
        const padding = 50;
        if (center.x < padding) center.x += (padding - center.x) * 0.1;
        if (center.x > width - padding) center.x -= (center.x - (width - padding)) * 0.1;
        if (center.y < padding) center.y += (padding - center.y) * 0.1;
        if (center.y > height - padding) center.y -= (center.y - (height - padding)) * 0.1;
      });
      
      // Draw each color as a radial gradient with global composite operation
      // Always draw the primary (mouse-following) gradient
      const primaryCenter = gradientCenters.current[0];
      
      // Draw all gradients with improved blending
      const allCenters = [...gradientCenters.current];
      
      // Sort centers by distance from mouse for better layering
      // This ensures that gradients closer to mouse are drawn on top
      allCenters.sort((a, b) => {
        if (a === gradientCenters.current[0]) return 1; // Primary (mouse) gradient always on top
        if (b === gradientCenters.current[0]) return -1;
        
        const distA = Math.hypot(a.x - mouseX, a.y - mouseY);
        const distB = Math.hypot(b.x - mouseX, b.y - mouseY);
        return distA - distB;
      });
      
      // Draw each gradient with appropriate blend mode
      allCenters.forEach((center, idx) => {
        const isPrimary = center === gradientCenters.current[0];
        
        // Use different blend modes for different layers
        if (isPrimary) {
          // Use 'screen' for the orange "torch" effect that follows the mouse
          ctx.globalCompositeOperation = 'screen';
        } else {
          // Alternate between blend modes for richer color mixing
          // These blend modes work well for blue-to-orange gradients
          const blendModes = ['soft-light', 'overlay', 'color-dodge', 'lighten'];
          ctx.globalCompositeOperation = blendModes[idx % blendModes.length];
        }
        
        // Create gradient with torch-like effect for primary (orange) color
        const radius = isPrimary ? 
          // Larger radius for the orange "torch" effect
          center.radius * mouseInfluence * 1.2 : 
          // Slightly pulsating radius for secondary colors
          center.radius * (0.8 + Math.sin(time.current + center.phase) * 0.2);
          
        const gradient = ctx.createRadialGradient(
          center.x, center.y, 0,
          center.x, center.y, radius
        );
        
        // Get color with proper opacity transitions
        const color = isPrimary ? primaryColor : colors[idx % colors.length];
        
        // Create smoother gradient with multiple stops
        if (isPrimary) {
          // Orange "torch" effect with intense center and soft edges
          gradient.addColorStop(0, color);
          gradient.addColorStop(0.2, color);
          gradient.addColorStop(0.5, color + 'CC'); // Slightly transparent
          gradient.addColorStop(0.7, color + '80'); // Semi-transparent
          gradient.addColorStop(0.85, color + '40'); // More transparent
          gradient.addColorStop(1, color + '00'); // Fully transparent
        } else {
          // Blue tones with softer gradients
          gradient.addColorStop(0, color);
          gradient.addColorStop(0.4, color);
          gradient.addColorStop(0.7, color + '80'); // Semi-transparent
          gradient.addColorStop(0.9, color + '40'); // More transparent
          gradient.addColorStop(1, color + '00'); // Fully transparent
        }
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });
      
      animationFrameId.current = requestAnimationFrame(render);
    };
    
    // Set up event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true }); // Add scroll listener with passive flag for performance
    
    // Initialize with a slight delay to ensure DOM is ready
    setTimeout(() => {
      handleResize();
      requestAnimationFrame(render);
    }, 100);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [colors, primaryColor, mouseInfluence, transitionSpeed, noiseIntensity]);
  
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
        willChange: 'transform', // Optimization for fixed position during scroll
      }}
    />
  );
}
