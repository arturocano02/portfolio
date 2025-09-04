import React, { useEffect, useRef } from 'react';

export default function MagneticGridBackground({ dotSize = 2, color = '#ff3b3b', density = 40 }) {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouse = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0, down: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Initialize dots
    const cols = Math.floor(width / density);
    const rows = Math.floor(height / density);
    const dots = [];
    for (let i = 0; i < cols * rows; i++) {
      const x = (i % cols) * density + Math.random() * density * 0.8;
      const y = Math.floor(i / cols) * density + Math.random() * density * 0.8;
      dots.push({ x, y, vx: 0, vy: 0 });
    }
    dotsRef.current = dots;

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMove);

    let rafId = null;
    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      // Update and draw dots
      const currentDots = dotsRef.current;
      for (let idx = 0; idx < currentDots.length; idx++) {
        const d = currentDots[idx];
        // simple attraction to mouse
        const dx = mouse.current.x - d.x;
        const dy = mouse.current.y - d.y;
        d.vx += dx * 0.0008;
        d.vy += dy * 0.0008;
        d.vx *= 0.98;
        d.vy *= 0.98;
        d.x += d.vx;
        d.y += d.vy;
        // wrap around
        if (d.x < 0) d.x = width; if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height; if (d.y > height) d.y = 0;
        ctx.fillRect(d.x, d.y, dotSize, dotSize);
      }
      // Draw connecting lines between nearby dots (limited to first 600 dots for performance)
      const maxDotsForConnections = Math.min(currentDots.length, 600);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = color;
      for (let i = 0; i < maxDotsForConnections; i++) {
        const a = currentDots[i];
        for (let j = i + 1; j < maxDotsForConnections; j++) {
          const b = currentDots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < 3600) { // ~60px
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    loop();
    const onResize = () => {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [density, color, dotSize]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, display: 'block' }} />;
}
