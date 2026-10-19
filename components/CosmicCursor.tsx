'use client';

import React, { useEffect, useState, useRef } from 'react';

export function getBlackHolePosition(width: number, height: number) {
  return {
    x: Math.max(80, Math.min(200, width * 0.12)),
    y: Math.max(90, Math.min(160, height * 0.14)),
    eventHorizonRadius: 24,
    gravityRadius: 160,
  };
}

export default function CosmicCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch pointer devices
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (opacity === 0) setOpacity(1);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, select, [role="button"]')) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    const updateLoop = () => {
      // Smooth lerp for ultra-fluid cursor movement
      currentX += (targetX - currentX) * 0.55;
      currentY += (targetY - currentY) * 0.55;

      const bh = getBlackHolePosition(window.innerWidth, window.innerHeight);
      const distToHole = Math.hypot(currentX - bh.x, currentY - bh.y);

      // Disappear when pulled into the black hole
      if (distToHole < 55) {
        const factor = Math.max(0, (distToHole - bh.eventHorizonRadius) / (55 - bh.eventHorizonRadius));
        setScale(factor);
        setOpacity(factor);
      } else {
        setScale(1);
      }

      setPos({ x: currentX, y: currentY });
      rafRef.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] top-0 left-0 transition-opacity duration-150"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: opacity,
      }}
      aria-hidden="true"
    >
      {/* Black small cursor point */}
      <div
        className="relative -top-1 -left-1 rounded-full bg-black ring-1 ring-white/70 dark:ring-white/90 shadow-[0_0_8px_rgba(0,0,0,0.9)] transition-all duration-100 ease-out flex items-center justify-center"
        style={{
          width: isHoveringLink ? '10px' : '7px',
          height: isHoveringLink ? '10px' : '7px',
          transform: `scale(${scale})`,
        }}
      >
        {/* Micro white core for crisp contrast against any background */}
        <span className="w-1 h-1 rounded-full bg-white opacity-85" />
      </div>
    </div>
  );
}
