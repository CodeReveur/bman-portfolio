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

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  alpha: number;
  speed: number;
  angle: number;
  radius: number;
  armIndex: number;
  offsetX: number;
  offsetY: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  color: string;
}

interface AccretionParticle {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  color: string;
  alpha: number;
}

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [bhPos, setBhPos] = useState({ x: 120, y: 120, r: 24 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse / Cursor interaction for magnetic field
    let mouseX = -1000;
    let mouseY = -1000;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const currentBh = getBlackHolePosition(width, height);
      setBhPos({ x: currentBh.x, y: currentBh.y, r: currentBh.eventHorizonRadius });
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetTiltX = (mouseX / width - 0.5) * 0.45;
      targetTiltY = (mouseY / height - 0.5) * 0.45;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Predominantly white and cool silver stars with subtle jewel accents
    const starColors = [
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#f4f4f5',
      '#e4e4e7',
      '#e0e7ff', // Ice blue
      '#dbeafe',
      '#34d399', // Emerald
      '#38bdf8', // Cyan
      '#f472b6', // Rose
    ];

    // Build Galaxy Stars (Spiral Arms + Core Cluster)
    const STAR_COUNT = 900;
    const ARMS = 4;
    const stars: Star[] = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const armIndex = i % ARMS;
      const r = Math.pow(Math.random(), 2.2) * Math.min(width, height) * 0.85 + 20;
      const armOffset = (armIndex * (2 * Math.PI)) / ARMS;
      const spiralAngle = r * 0.0035 + armOffset;
      const dispersion = (Math.random() - 0.5) * 0.4 * (r / 200 + 0.5);
      const angle = spiralAngle + dispersion;

      const color = starColors[Math.floor(Math.random() * starColors.length)];
      const size = Math.random() < 0.08 ? Math.random() * 2.2 + 1.2 : Math.random() * 1.5 + 0.4;
      const speed = 0.0008 + (1 / (r + 50)) * 0.4;

      stars.push({
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
        z: (Math.random() - 0.5) * 80,
        size,
        color,
        alpha: Math.random() * 0.7 + 0.3,
        speed,
        angle,
        radius: r,
        armIndex,
        offsetX: 0,
        offsetY: 0,
      });
    }

    // Background Twinkling Stardust
    const BG_STAR_COUNT = 180;
    const bgStars: { x: number; y: number; size: number; alpha: number; delta: number; offsetX: number; offsetY: number }[] = [];
    for (let i = 0; i < BG_STAR_COUNT; i++) {
      bgStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.3,
        alpha: Math.random(),
        delta: (Math.random() - 0.5) * 0.015,
        offsetX: 0,
        offsetY: 0,
      });
    }

    // Accretion Disk Particles for the Top-Left Black Hole
    const ACCRETION_COUNT = 70;
    const accretionParticles: AccretionParticle[] = [];
    for (let i = 0; i < ACCRETION_COUNT; i++) {
      const radius = Math.random() * 32 + 25; // Orbits between 25px and 57px
      accretionParticles.push({
        angle: Math.random() * Math.PI * 2,
        radius,
        speed: (Math.random() * 0.02 + 0.03) * (50 / radius),
        size: Math.random() * 1.6 + 0.8,
        color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#e0e7ff' : '#a855f7',
        alpha: Math.random() * 0.8 + 0.2,
      });
    }

    // Shooting Meteors
    const meteors: Meteor[] = [];
    const maybeSpawnMeteor = () => {
      if (meteors.length < 2 && Math.random() < 0.012) {
        meteors.push({
          x: Math.random() * width * 1.2 - width * 0.1,
          y: Math.random() * height * 0.4,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 10 + 12,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          alpha: 1,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    let globalRotation = 0;
    let blackHoleTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth tilt interpolation
      currentTiltX += (targetTiltX - currentTiltX) * 0.05;
      currentTiltY += (targetTiltY - currentTiltY) * 0.05;

      const centerX = width / 2 + currentTiltX * 80;
      const centerY = height / 2 + currentTiltY * 60;
      const bh = getBlackHolePosition(width, height);

      blackHoleTime += 0.02;

      // 1. Draw Nebular Galaxy Core Glow
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.min(width, height) * 0.55
      );
      coreGradient.addColorStop(0, 'rgba(16, 185, 129, 0.14)'); // Emerald Core
      coreGradient.addColorStop(0.25, 'rgba(6, 182, 212, 0.08)'); // Cyan Aurora
      coreGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)'); // Violet Nebula
      coreGradient.addColorStop(0.85, 'rgba(236, 72, 153, 0.02)'); // Rose Edge
      coreGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Twinkling Background Stardust with Cursor Magnetic Repulsion
      const magneticRadius = 135;
      for (let i = 0; i < bgStars.length; i++) {
        const s = bgStars[i];
        s.alpha += s.delta;
        if (s.alpha > 0.95 || s.alpha < 0.15) s.delta = -s.delta;

        // Magnetic repulsion from cursor
        const dx = (s.x + s.offsetX) - mouseX;
        const dy = (s.y + s.offsetY) - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < magneticRadius && dist > 0) {
          const force = Math.pow(1 - dist / magneticRadius, 2) * 22;
          s.offsetX += (dx / dist) * force * 0.2;
          s.offsetY += (dy / dist) * force * 0.2;
        }
        // Smooth return to resting state
        s.offsetX *= 0.92;
        s.offsetY *= 0.92;

        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(s.x + s.offsetX, s.y + s.offsetY, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw Spiral Galaxy Stars with 3D Tilt Projection + Magnetic Repulsion + Black Hole Suction
      globalRotation += 0.0009;
      const isDark = document.documentElement.classList.contains('dark');

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.angle += s.speed;

        const cosAngle = Math.cos(s.angle + globalRotation);
        const sinAngle = Math.sin(s.angle + globalRotation);

        const rawX = cosAngle * s.radius;
        const rawY = sinAngle * s.radius;

        let projX = centerX + rawX + s.offsetX;
        let projY = centerY + rawY * (0.62 + currentTiltY * 0.2) + s.z + s.offsetY;

        // A) Magnetic Field Repulsion from Cursor:
        // When cursor gets close, objects are repelled away along the magnetic vector
        const mdx = projX - mouseX;
        const mdy = projY - mouseY;
        const mdist = Math.hypot(mdx, mdy);

        if (mdist < magneticRadius && mdist > 0) {
          const repulseForce = Math.pow(1 - mdist / magneticRadius, 1.8) * 38;
          s.offsetX += (mdx / mdist) * repulseForce * 0.25;
          s.offsetY += (mdy / mdist) * repulseForce * 0.25;
        }

        // B) Black Hole Gravitational Pull (Top-Left of the sky)
        const bhdx = bh.x - projX;
        const bhdy = bh.y - projY;
        const bhdist = Math.hypot(bhdx, bhdy);

        if (bhdist < bh.gravityRadius && bhdist > 0) {
          const pullForce = Math.pow(1 - bhdist / bh.gravityRadius, 1.6) * 4.5;
          s.offsetX += (bhdx / bhdist) * pullForce;
          s.offsetY += (bhdy / bhdist) * pullForce;

          // If swallowed by event horizon, respawn at outer rim
          if (bhdist < bh.eventHorizonRadius) {
            s.offsetX = 0;
            s.offsetY = 0;
            s.radius = Math.min(width, height) * 0.8 + Math.random() * 100;
          }
        }

        // Smooth relaxation of displacement
        s.offsetX *= 0.94;
        s.offsetY *= 0.94;

        // Subtle twinkling
        const twinkle = Math.sin(s.angle * 4 + i) * 0.25 + 0.75;
        const finalAlpha = s.alpha * twinkle;

        const starFill = isDark ? s.color : '#0f172a';
        ctx.fillStyle = starFill;
        ctx.globalAlpha = isDark ? Math.max(0.1, Math.min(1, finalAlpha)) : Math.max(0.04, Math.min(0.2, finalAlpha * 0.25));
        ctx.beginPath();
        ctx.arc(projX, projY, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra halo for large prominent stars
        if (s.size > 1.8 && isDark) {
          ctx.fillStyle = s.color;
          ctx.globalAlpha = finalAlpha * 0.3;
          ctx.beginPath();
          ctx.arc(projX, projY, s.size * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // 4. Draw Shooting Meteors
      maybeSpawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.015;

        if (m.alpha <= 0 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const meteorGrad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        meteorGrad.addColorStop(0, m.color);
        meteorGrad.addColorStop(1, 'transparent');

        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.8;
        ctx.globalAlpha = m.alpha;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // 5. DRAW THE CELESTIAL BLACK HOLE IN THE SKY (TOP-LEFT)
      // A) Gravitational Lensing Outer Halo
      const lensGrad = ctx.createRadialGradient(
        bh.x,
        bh.y,
        bh.eventHorizonRadius * 0.8,
        bh.x,
        bh.y,
        bh.eventHorizonRadius * 3.4
      );
      lensGrad.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      lensGrad.addColorStop(0.35, 'rgba(56, 189, 248, 0.25)'); // Cyan relativistic photon ring
      lensGrad.addColorStop(0.65, 'rgba(168, 85, 247, 0.15)'); // Violet warping
      lensGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = lensGrad;
      ctx.beginPath();
      ctx.arc(bh.x, bh.y, bh.eventHorizonRadius * 3.4, 0, Math.PI * 2);
      ctx.fill();

      // B) Swirling Accretion Disk Matter
      for (let i = 0; i < accretionParticles.length; i++) {
        const ap = accretionParticles[i];
        ap.angle += ap.speed;

        // Flatten disk in perspective
        const px = bh.x + Math.cos(ap.angle) * ap.radius;
        const py = bh.y + Math.sin(ap.angle) * (ap.radius * 0.45);

        ctx.fillStyle = ap.color;
        ctx.globalAlpha = ap.alpha * (0.6 + Math.sin(ap.angle + blackHoleTime) * 0.4);
        ctx.beginPath();
        ctx.arc(px, py, ap.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // C) Relativistic Photon Sphere Ring
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 1.4;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(bh.x, bh.y, bh.eventHorizonRadius + 1.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // D) Deep Pitch Black Event Horizon Singularity Core
      ctx.save();
      ctx.fillStyle = '#000000';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(bh.x, bh.y, bh.eventHorizonRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-90 transition-opacity duration-1000"
        aria-hidden="true"
      />
      {/* Celestial Black Hole Singularity Event Horizon - Absorbs Cursor On Hover */}
      <div
        className="fixed z-20 pointer-events-none md:pointer-events-auto rounded-full hidden md:block"
        style={{
          left: bhPos.x - bhPos.r,
          top: bhPos.y - bhPos.r,
          width: bhPos.r * 2,
          height: bhPos.r * 2,
          cursor: 'none',
        }}
        aria-hidden="true"
      />
    </>
  );
}
