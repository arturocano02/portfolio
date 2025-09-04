"use client";
import React, { useEffect, useRef } from 'react';

export default function MagneticGridBackground({
  spacing = 48,
  dotRadius = 1.6,
  lineMax = 22,
  influence = 260,
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
      // create grid centered with given spacing
      const cols = Math.floor(w / spacing) + 1;
      const rows = Math.floor(h / spacing) + 1;
      const grid = [];
      const xOffset = (w - (cols - 1) * spacing) / 2;
      const yOffset = (h - (rows - 1) * spacing) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          grid.push({ x: c * spacing + xOffset, y: r * spacing + yOffset });
        }
      }
      gridRef.current = grid;
      // center mouse target
      mouseCurrent.current.x = w / 2;
      mouseCurrent.current.y = h / 2;
      // clear background
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);
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

      // interpolate mouse toward target
      if (mouseTarget.current.inside) {
        mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.15;
        mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.15;
      } else {
        mouseCurrent.current.x += (w / 2 - mouseCurrent.current.x) * 0.15;
        mouseCurrent.current.y += (h / 2 - mouseCurrent.current.y) * 0.15;
      }

      const mx = mouseCurrent.current.x;
      const my = mouseCurrent.current.y;

      const grid = gridRef.current;
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      for (let i = 0; i < grid.length; i++) {
        const d = grid[i];
        const dx = mx - d.x;
        const dy = my - d.y;
        const dist = Math.hypot(dx, dy);
        let L = 0;
        if (dist > 0) {
          const t = Math.max(0, 1 - dist / influence);
          L = lineMax * Math.pow(t, 1.5);
        }
        const ux = dist > 0 ? dx / dist : 0;
        const uy = dist > 0 ? dy / dist : 0;
        const ex = d.x + ux * L;
        const ey = d.y + uy * L;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        // dot on top
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
