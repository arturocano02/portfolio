"use client";
import React, { useEffect, useRef } from 'react';

export default function MagneticGridBackground({
  spacing = 48,
  dotRadius = 1.6,
  lineMax = 22,
  influence = 200, // Reduced influence radius for more concentrated effect
  color = '#ff3b3b',
  bg = '#07080a'
}){
  const canvasRef = useRef(null);
  const gridRef = useRef([]); // array of { x, y }
  const mouseTarget = useRef({ x: 0, y: 0, inside: false });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const dims = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });

    const rebuildGrid = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dims.current = { width: w, height: h, dpr };
      // Build grid (two interleaved lattices for higher density)
      const cols = Math.floor(w / spacing) + 1;
      const rows = Math.floor(h / spacing) + 1;
      const xOffset = (w - (cols - 1) * spacing) / 2;
      const yOffset = (h - (rows - 1) * spacing) / 2;
      const baseGrid = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          baseGrid.push({ x: c * spacing + xOffset, y: r * spacing + yOffset });
        }
      }
      const extraX = xOffset + spacing / 2;
      const extraY = yOffset + spacing / 2;
      const extraGrid = [];
      // Include only if within bounds
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x2 = c * spacing + extraX;
          const y2 = r * spacing + extraY;
          if (x2 <= w && y2 <= h) extraGrid.push({ x: x2, y: y2 });
        }
      }
      gridRef.current = baseGrid.concat(extraGrid);
      // center mouse at first render
      mouseCurrent.current.x = w / 2;
      mouseCurrent.current.y = h / 2;
      // clear background
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
      // set initial mouse target to center for instant centering
      mouseTarget.current.x = w / 2;
      mouseTarget.current.y = h / 2;
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseTarget.current.x = e.clientX - rect.left;
      mouseTarget.current.y = e.clientY - rect.top;
      mouseTarget.current.inside = true;
    };
    const onLeave = () => { mouseTarget.current.inside = false; };

    window.addEventListener('resize', rebuildGrid);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    rebuildGrid();

    let rafId = null;
    const loop = () => {
      const w = dims.current.width;
      const h = dims.current.height;

      // clear and fill background
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // interpolate mouse toward target with a faster bias for responsiveness
      if (mouseTarget.current.inside) {
        // faster response when the mouse is moving
        const dx = mouseTarget.current.x - mouseCurrent.current.x;
        const dy = mouseTarget.current.y - mouseCurrent.current.y;
        mouseCurrent.current.x += dx * 0.35; // Increased from 0.22 for more responsiveness
        mouseCurrent.current.y += dy * 0.35; // Increased from 0.22 for more responsiveness
      } else {
        mouseCurrent.current.x += (w / 2 - mouseCurrent.current.x) * 0.15;
        mouseCurrent.current.y += (h / 2 - mouseCurrent.current.y) * 0.15;
      }

      const mx = mouseCurrent.current.x;
      const my = mouseCurrent.current.y;

      const grid = gridRef.current;
      for (let i = 0; i < grid.length; i++) {
        const d = grid[i];
        const dx = mx - d.x;
        const dy = my - d.y;
        const dist = Math.hypot(dx, dy);
        let L = 0;
        if (dist > 0) {
          // Use a stronger falloff to make closer dots move more dramatically
          const t = Math.max(0, 1 - dist / influence);
          // Use a higher power (2.5 instead of 1.5) for sharper falloff
          L = lineMax * Math.pow(t, 2.5);
        }
        const ux = dist > 0 ? dx / dist : 0;
        const uy = dist > 0 ? dy / dist : 0;
        const ex = d.x + ux * L;
        const ey = d.y + uy * L;
        // gradient fade from dot toward end
        ctx.lineWidth = 1;
        const grad = ctx.createLinearGradient(d.x, d.y, ex, ey);
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'rgba(255,59,59,0)');
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        // draw dot on top
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', rebuildGrid);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [spacing, dotRadius, lineMax, influence, color, bg]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />;
}
