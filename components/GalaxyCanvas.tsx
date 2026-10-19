'use client';

import React, { useEffect, useRef } from 'react';

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

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse / Cursor interaction
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetTiltX = (mouseX / width - 0.5) * 0.45;
      targetTiltY = (mouseY / height - 0.5) * 0.45;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Predominantly white and cool silver stars with rare micro rainbow stars
    const starColors = [
      '#ffffff', // Stellar white
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#f4f4f5',
      '#e4e4e7',
      '#e0e7ff', // Ice blue
      '#dbeafe',
      '#34d399', // Subtle emerald
      '#38bdf8', // Subtle cyan
      '#f472b6', // Subtle rose
    ];

    // Build Galaxy Stars (Spiral Arms + Core Cluster)
    const STAR_COUNT = 900;
    const ARMS = 4;
    const stars: Star[] = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const armIndex = i % ARMS;
      // Distance from center with cubic curve favoring inner galaxy
      const r = Math.pow(Math.random(), 2.2) * Math.min(width, height) * 0.85 + 20;
      // Logarithmic spiral angle + random dispersion
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
      });
    }

    // Background Twinkling Stardust (Independent of rotation)
    const BG_STAR_COUNT = 180;
    const bgStars: { x: number; y: number; size: number; alpha: number; delta: number }[] = [];
    for (let i = 0; i < BG_STAR_COUNT; i++) {
      bgStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.3,
        alpha: Math.random(),
        delta: (Math.random() - 0.5) * 0.015,
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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth tilt interpolation
      currentTiltX += (targetTiltX - currentTiltX) * 0.05;
      currentTiltY += (targetTiltY - currentTiltY) * 0.05;

      const centerX = width / 2 + currentTiltX * 80;
      const centerY = height / 2 + currentTiltY * 60;

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

      // 2. Draw Twinkling Background Stardust
      for (let i = 0; i < bgStars.length; i++) {
        const s = bgStars[i];
        s.alpha += s.delta;
        if (s.alpha > 0.95 || s.alpha < 0.15) s.delta = -s.delta;
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Draw Spiral Galaxy Stars with 3D Tilt Projection
      globalRotation += 0.0009;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.angle += s.speed;

        // Apply rotation + current tilt angle
        const cosAngle = Math.cos(s.angle + globalRotation);
        const sinAngle = Math.sin(s.angle + globalRotation);

        // 3D projected coordinates with tilt
        const rawX = cosAngle * s.radius;
        const rawY = sinAngle * s.radius;

        // Tilt deformation
        const projX = centerX + rawX;
        const projY = centerY + rawY * (0.62 + currentTiltY * 0.2) + s.z;

        // Subtle twinkling
        const twinkle = Math.sin(s.angle * 4 + i) * 0.25 + 0.75;
        const finalAlpha = s.alpha * twinkle;

        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, finalAlpha));
        ctx.beginPath();
        ctx.arc(projX, projY, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra halo for large prominent stars
        if (s.size > 1.8) {
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

        // Meteor Head Glow
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

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
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-90 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
