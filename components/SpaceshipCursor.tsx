'use client';

import React, { useEffect, useState, useRef } from 'react';

export function getBlackHolePosition(width: number, height: number) {
  // Top-left quadrant in the sky
  const x = Math.max(120, Math.min(240, width * 0.14));
  const y = Math.max(120, Math.min(200, height * 0.16));
  return {
    x,
    y,
    eventHorizonRadius: 46, // Shadow radius
    accretionRadius: 130,   // Glowing accretion ring
    gravityRadius: 380,     // Gravitational distortion field
  };
}

export default function SpaceshipCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const [thrusterFlare, setThrusterFlare] = useState(1);
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const targetPosRef = useRef({ x: -200, y: -200 });
  const currentPosRef = useRef({ x: -200, y: -200 });
  const currentAngleRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let lastX = -200;
    let lastY = -200;
    let spinAngle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      if (opacity === 0) setOpacity(1);

      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, select, textarea, [role="button"]')) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setOpacity(0);

    const updateLoop = () => {
      const targetX = targetPosRef.current.x;
      const targetY = targetPosRef.current.y;

      let curX = currentPosRef.current.x;
      let curY = currentPosRef.current.y;

      // Sub-pixel smooth lerp
      const vx = targetX - curX;
      const vy = targetY - curY;
      const speed = Math.hypot(vx, vy);

      curX += vx * 0.45;
      curY += vy * 0.45;

      // Thruster flame length increases with speed
      setThrusterFlare(Math.min(2.4, 0.9 + speed * 0.06));

      // Calculate facing direction based on movement vector
      if (speed > 1.2) {
        const targetAngle = Math.atan2(vy, vx) * (180 / Math.PI) + 90;
        let diff = (targetAngle - currentAngleRef.current) % 360;
        if (diff < -180) diff += 360;
        if (diff > 180) diff -= 360;
        currentAngleRef.current += diff * 0.35;
      }

      // Black Hole Interaction (Top-Left of the sky)
      const bh = getBlackHolePosition(window.innerWidth, window.innerHeight);
      const distToHole = Math.hypot(curX - bh.x, curY - bh.y);

      let finalScale = 1;
      let finalOpacity = 1;
      let angleOffset = 0;

      if (distToHole < bh.gravityRadius) {
        // Gravitational suction pulls spaceship toward the singularity center
        const pullFactor = Math.pow(1 - distToHole / bh.gravityRadius, 1.8);
        curX += (bh.x - curX) * pullFactor * 0.35;
        curY += (bh.y - curY) * pullFactor * 0.35;

        // Violent spin in the relativistic accretion vortex
        spinAngle += pullFactor * 32;
        angleOffset = spinAngle;

        // Shrink exponentially into the event horizon
        if (distToHole < bh.accretionRadius) {
          const shrinkFactor = Math.max(0, (distToHole - bh.eventHorizonRadius) / (bh.accretionRadius - bh.eventHorizonRadius));
          finalScale = shrinkFactor;
          finalOpacity = shrinkFactor;
        }

        // Swallowed completely inside the event horizon
        if (distToHole <= bh.eventHorizonRadius) {
          finalScale = 0;
          finalOpacity = 0;
        }
      } else {
        spinAngle = 0;
      }

      currentPosRef.current = { x: curX, y: curY };
      setPos({ x: curX, y: curY });
      setRotation(currentAngleRef.current + angleOffset);
      setScale(finalScale * (isClicking ? 0.88 : isHoveringClickable ? 1.15 : 1));
      setOpacity(finalOpacity);

      rafRef.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isClicking, isHoveringClickable, opacity]);

  return (
    <div
      className="pointer-events-none fixed z-[99999] top-0 left-0 transition-opacity duration-150 select-none"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity,
      }}
      aria-hidden="true"
    >
      <div
        className="relative -top-4 -left-4 w-8 h-8 flex items-center justify-center transition-transform duration-75"
        style={{
          transform: `rotate(${rotation}deg) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {/* Animated Dual Plasma Thruster Flames */}
        <div
          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 pointer-events-none"
          style={{ transform: `scaleY(${thrusterFlare})` }}
        >
          {/* Left Thruster Flame */}
          <div className="w-1 h-3 rounded-full bg-gradient-to-t from-cyan-400 via-sky-300 to-white shadow-[0_0_8px_#38bdf8] animate-pulse" />
          {/* Right Thruster Flame */}
          <div className="w-1 h-3 rounded-full bg-gradient-to-t from-cyan-400 via-sky-300 to-white shadow-[0_0_8px_#38bdf8] animate-pulse" />
        </div>

        {/* High-Precision Sci-Fi Spaceship Vessel SVG */}
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] filter"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stealth Wings / Armor Plating */}
          <path
            d="M16 2L10 18L4 25L9 26L13 22L16 25L19 22L23 26L28 25L22 18L16 2Z"
            fill="#09090b"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />

          {/* Secondary Aerodynamic Hull Panels */}
          <path
            d="M16 5L12 17L14 23L16 24L18 23L20 17L16 5Z"
            fill="#18181b"
            stroke="#a1a1aa"
            strokeWidth="0.5"
          />

          {/* Glowing Relativistic Cyan Cockpit Glass */}
          <polygon
            points="16,8 14.5,14 16,16 17.5,14"
            fill="#38bdf8"
            className="filter drop-shadow-[0_0_4px_#38bdf8]"
          />

          {/* Wingtip Navigation Lights */}
          <circle cx="4.5" cy="24.5" r="0.8" fill="#38bdf8" />
          <circle cx="27.5" cy="24.5" r="0.8" fill="#38bdf8" />

          {/* Central Reactor Power Line */}
          <line x1="16" y1="16" x2="16" y2="23" stroke="#e0e7ff" strokeWidth="0.75" />
        </svg>
      </div>
    </div>
  );
}
