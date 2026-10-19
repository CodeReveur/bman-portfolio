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
  const [tilt, setTilt] = useState({ pitch: 0, roll: 0, yaw: 0 });
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  const targetPosRef = useRef({ x: -100, y: -100 });
  const currentPosRef = useRef({ x: -100, y: -100 });
  const tiltRef = useRef({ pitch: 0, roll: 0, yaw: 0 });
  const spinRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable custom 3D cursor on non-touch pointer devices
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
      targetPosRef.current = { x: targetX, y: targetY };
      if (opacity === 0) setOpacity(1);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, select, [role="button"]')) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setOpacity(0);

    const updateLoop = () => {
      // Sub-pixel smooth lerp for fluid tracking
      const vx = targetX - currentX;
      const vy = targetY - currentY;
      const speed = Math.hypot(vx, vy);

      currentX += vx * 0.45;
      currentY += vy * 0.45;

      // Dynamic 3D tilt response to velocity vector
      const targetPitch = Math.max(-28, Math.min(28, -vy * 1.2));
      const targetRoll = Math.max(-28, Math.min(28, vx * 1.2));
      const targetYaw = speed > 1.2 ? Math.atan2(vy, vx) * (180 / Math.PI) * 0.15 : 0;

      tiltRef.current.pitch += (targetPitch - tiltRef.current.pitch) * 0.22;
      tiltRef.current.roll += (targetRoll - tiltRef.current.roll) * 0.22;
      tiltRef.current.yaw += (targetYaw - tiltRef.current.yaw) * 0.18;

      // Gyroscopic continuous ambient 3D orbit
      spinRef.current += isHoveringLink ? 3.5 : 1.2;

      // Black Hole Interaction (Top-Left of the sky)
      const bh = getBlackHolePosition(window.innerWidth, window.innerHeight);
      const distToHole = Math.hypot(currentX - bh.x, currentY - bh.y);

      let finalScale = 1;
      let finalOpacity = 1;

      // Disappear when pulled into the black hole event horizon
      if (distToHole < 70) {
        const pullFactor = Math.pow(1 - distToHole / 70, 1.8);
        currentX += (bh.x - currentX) * pullFactor * 0.35;
        currentY += (bh.y - currentY) * pullFactor * 0.35;

        // Relativistic spin vortex into the singularity
        tiltRef.current.yaw += pullFactor * 25;

        const factor = Math.max(0, (distToHole - bh.eventHorizonRadius) / (70 - bh.eventHorizonRadius));
        finalScale = factor;
        finalOpacity = factor;
      }

      currentPosRef.current = { x: currentX, y: currentY };
      setPos({ x: currentX, y: currentY });
      setTilt({ ...tiltRef.current });
      setScale(finalScale);
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
  }, [isHoveringLink, opacity]);

  return (
    <div
      className="pointer-events-none fixed z-[99999] top-0 left-0 transition-opacity duration-150 select-none"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity,
        perspective: '700px',
      }}
      aria-hidden="true"
    >
      {/* 3D Floating Gyroscopic Rig */}
      <div
        className="relative -top-3 -left-3 w-8 h-8 flex items-center justify-center transition-transform duration-75"
        style={{
          transformStyle: 'preserve-3d',
          transform: `
            rotateX(${tilt.pitch}deg)
            rotateY(${tilt.roll}deg)
            rotateZ(${tilt.yaw}deg)
            scale(${scale * (isClicking ? 0.82 : isHoveringLink ? 1.25 : 1)})
          `,
          transformOrigin: 'center center',
        }}
      >
        {/* 1. 3D Cast Shadow on page surface below */}
        <div
          className="absolute rounded-full bg-black/45 blur-[4px] pointer-events-none transition-all duration-150"
          style={{
            width: isHoveringLink ? '22px' : '16px',
            height: isHoveringLink ? '11px' : '8px',
            transform: `translate3d(${tilt.roll * 0.25}px, ${14 + tilt.pitch * 0.2}px, -20px) scale(${isClicking ? 0.7 : 1})`,
            opacity: 0.65,
          }}
        />

        {/* 2. 3D Outer Gyroscopic Ring */}
        <div
          className="absolute rounded-full border border-cyan-400/80 dark:border-cyan-300/90 shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all duration-200"
          style={{
            width: isHoveringLink ? '28px' : '22px',
            height: isHoveringLink ? '28px' : '22px',
            transform: `rotateX(68deg) rotateY(${spinRef.current * 1.2}deg)`,
            transformStyle: 'preserve-3d',
          }}
        />

        {/* 3. 3D Inner Orbital Ring (Counter-rotating on orthogonal axis) */}
        <div
          className="absolute rounded-full border border-purple-400/70 dark:border-purple-300/80 shadow-[0_0_6px_rgba(168,85,247,0.4)] transition-all duration-200"
          style={{
            width: isHoveringLink ? '21px' : '16px',
            height: isHoveringLink ? '21px' : '16px',
            transform: `rotateX(-45deg) rotateY(${-spinRef.current * 1.5}deg)`,
            transformStyle: 'preserve-3d',
          }}
        />

        {/* 4. 3D Volumetric Obsidian / Chrome Core Sphere with Specular Light */}
        <div
          className="relative rounded-full flex items-center justify-center transition-all duration-100"
          style={{
            width: isHoveringLink ? '13px' : '9.5px',
            height: isHoveringLink ? '13px' : '9.5px',
            transform: `translateZ(${isHoveringLink ? '14px' : '8px'})`,
            background: 'radial-gradient(circle at 30% 28%, #ffffff 0%, #cbd5e1 18%, #1e293b 45%, #020617 80%, #000000 100%)',
            boxShadow: `
              0 2px 8px rgba(0, 0, 0, 0.9),
              inset -1px -1px 3px rgba(0, 0, 0, 0.8),
              inset 1px 1px 2px rgba(255, 255, 255, 0.95),
              0 0 10px rgba(56, 189, 248, ${isHoveringLink ? '0.7' : '0.35'})
            `,
          }}
        >
          {/* Micro High-Energy Core Point */}
          <span
            className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff] transition-all duration-100"
            style={{
              transform: `translate3d(${-tilt.roll * 0.08}px, ${-tilt.pitch * 0.08}px, 2px)`,
            }}
          />
        </div>

        {/* 5. 3D Precision Reticle Tip */}
        <div
          className="absolute -top-1 -left-1 w-2 h-2 pointer-events-none"
          style={{
            transform: 'translateZ(10px)',
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_4px_#38bdf8]" />
        </div>
      </div>
    </div>
  );
}
