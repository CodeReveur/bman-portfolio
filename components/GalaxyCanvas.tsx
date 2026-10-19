'use client';

import React, { useEffect, useRef } from 'react';
import { getBlackHolePosition } from './SpaceshipCursor';

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

interface PlasmaFilament {
  radius: number;
  angle: number;
  speed: number;
  arcLength: number;
  width: number;
  color: string;
  alpha: number;
  plane: 'equatorial' | 'lensed_upper' | 'lensed_lower';
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
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetTiltX = (mouseX / width - 0.5) * 0.45;
      targetTiltY = (mouseY / height - 0.5) * 0.45;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Stellar color palette
    const starColors = [
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#f4f4f5',
      '#e4e4e7',
      '#e0e7ff', // Ice blue
      '#dbeafe',
      '#fef08a', // Amber starlight
      '#34d399', // Emerald
      '#38bdf8', // Cyan
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

    // Relativistic Swirling Plasma Filaments for Gargantua Black Hole
    const FILAMENT_COUNT = 90;
    const plasmaFilaments: PlasmaFilament[] = [];
    const filamentPalette = [
      '#ffffff',
      '#fffbeb',
      '#fef08a',
      '#fbbf24',
      '#f59e0b',
      '#d97706',
      '#ea580c',
    ];

    for (let i = 0; i < FILAMENT_COUNT; i++) {
      const planeType: 'equatorial' | 'lensed_upper' | 'lensed_lower' =
        i < 50 ? 'equatorial' : i < 72 ? 'lensed_upper' : 'lensed_lower';
      const radius = 48 * (1.1 + Math.random() * 2.1);
      // Keplerian velocity: v ~ 1/sqrt(r)
      const speed = (0.018 + Math.random() * 0.014) * Math.sqrt(48 / radius);
      plasmaFilaments.push({
        radius,
        angle: Math.random() * Math.PI * 2,
        speed,
        arcLength: 0.15 + Math.random() * 0.5,
        width: 0.8 + Math.random() * 1.4,
        color: filamentPalette[Math.floor(Math.random() * filamentPalette.length)],
        alpha: 0.35 + Math.random() * 0.5,
        plane: planeType,
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

      currentTiltX += (targetTiltX - currentTiltX) * 0.05;
      currentTiltY += (targetTiltY - currentTiltY) * 0.05;

      const centerX = width / 2 + currentTiltX * 80;
      const centerY = height / 2 + currentTiltY * 60;
      const bh = getBlackHolePosition(width, height);

      // 1. Nebular Galaxy Core Glow
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.min(width, height) * 0.55
      );
      coreGradient.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
      coreGradient.addColorStop(0.25, 'rgba(6, 182, 212, 0.07)');
      coreGradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.04)');
      coreGradient.addColorStop(0.85, 'rgba(236, 72, 153, 0.02)');
      coreGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Twinkling Stardust with Spaceship Cursor Magnetic Repulsion
      const magneticRadius = 140;
      for (let i = 0; i < bgStars.length; i++) {
        const s = bgStars[i];
        s.alpha += s.delta;
        if (s.alpha > 0.95 || s.alpha < 0.15) s.delta = -s.delta;

        const dx = s.x + s.offsetX - mouseX;
        const dy = s.y + s.offsetY - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < magneticRadius && dist > 0) {
          const force = Math.pow(1 - dist / magneticRadius, 2) * 26;
          s.offsetX += (dx / dist) * force * 0.22;
          s.offsetY += (dy / dist) * force * 0.22;
        }
        s.offsetX *= 0.92;
        s.offsetY *= 0.92;

        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(s.x + s.offsetX, s.y + s.offsetY, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Spiral Galaxy Stars with 3D Tilt + Magnetic Repulsion + Black Hole Suction
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

        // A) Magnetic Field Repulsion from Spaceship Cursor
        const mdx = projX - mouseX;
        const mdy = projY - mouseY;
        const mdist = Math.hypot(mdx, mdy);

        if (mdist < magneticRadius && mdist > 0) {
          const repulseForce = Math.pow(1 - mdist / magneticRadius, 1.8) * 42;
          s.offsetX += (mdx / mdist) * repulseForce * 0.25;
          s.offsetY += (mdy / mdist) * repulseForce * 0.25;
        }

        // B) Black Hole Singularity Gravitational Pull
        const bhdx = bh.x - projX;
        const bhdy = bh.y - projY;
        const bhdist = Math.hypot(bhdx, bhdy);

        if (bhdist < bh.gravityRadius && bhdist > 0) {
          const pullForce = Math.pow(1 - bhdist / bh.gravityRadius, 1.6) * 5.5;
          s.offsetX += (bhdx / bhdist) * pullForce;
          s.offsetY += (bhdy / bhdist) * pullForce;

          // If swallowed past event horizon, respawn at far rim
          if (bhdist < bh.eventHorizonRadius) {
            s.offsetX = 0;
            s.offsetY = 0;
            s.radius = Math.min(width, height) * 0.85 + Math.random() * 120;
          }
        }

        s.offsetX *= 0.94;
        s.offsetY *= 0.94;

        const twinkle = Math.sin(s.angle * 4 + i) * 0.25 + 0.75;
        const finalAlpha = s.alpha * twinkle;

        const starFill = isDark ? s.color : '#0f172a';
        ctx.fillStyle = starFill;
        ctx.globalAlpha = isDark ? Math.max(0.1, Math.min(1, finalAlpha)) : Math.max(0.04, Math.min(0.2, finalAlpha * 0.25));
        ctx.beginPath();
        ctx.arc(projX, projY, s.size, 0, Math.PI * 2);
        ctx.fill();

        if (s.size > 1.8 && isDark) {
          ctx.fillStyle = s.color;
          ctx.globalAlpha = finalAlpha * 0.3;
          ctx.beginPath();
          ctx.arc(projX, projY, s.size * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // 4. Shooting Meteors
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

      // =========================================================================
      // 5. DRAW THE AUTHENTIC INTERSTELLAR GARGANTUA BLACK HOLE (TOP-LEFT)
      // Relativistic General Relativity Simulation:
      // - Volumetric Gravitational Lensing Halo (Upper & Lower Warped Arcs)
      // - Front Equatorial Accretion Disk crossing cleanly in front of shadow
      // - Relativistic Doppler Beaming (approaching left side is blazing white-hot)
      // - Razor-thin high-energy Photon Sphere
      // - Pitch-black event horizon singularity shadow
      // - Dynamic Keplerian swirling plasma filaments & cinematic anamorphic streak
      // =========================================================================
      const r = bh.eventHorizonRadius; // ~46px
      const tilt = -0.12; // Natural orbital tilt angle (~ -7 degrees)

      ctx.save();
      ctx.translate(bh.x, bh.y);
      ctx.rotate(tilt);

      // --- LAYER 1: Deep Volumetric Cosmic Aura & Doppler Glow ---
      const outerGlow = ctx.createRadialGradient(-r * 0.4, 0, r * 0.4, 0, 0, r * 4.2);
      outerGlow.addColorStop(0, 'rgba(254, 240, 138, 0.32)'); // Golden-white core aura
      outerGlow.addColorStop(0.22, 'rgba(245, 158, 11, 0.24)'); // Radiant amber
      outerGlow.addColorStop(0.48, 'rgba(234, 88, 12, 0.12)'); // Fiery orange
      outerGlow.addColorStop(0.78, 'rgba(124, 45, 18, 0.04)'); // Deep cosmic red
      outerGlow.addColorStop(1, 'transparent');

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(0, 0, r * 4.2, 0, Math.PI * 2);
      ctx.fill();

      // Atmospheric soft diffusion
      const ambientHaze = ctx.createRadialGradient(0, 0, r * 1.5, 0, 0, r * 5.6);
      ambientHaze.addColorStop(0, 'rgba(245, 158, 11, 0.09)');
      ambientHaze.addColorStop(0.5, 'rgba(180, 83, 9, 0.03)');
      ambientHaze.addColorStop(1, 'transparent');
      ctx.fillStyle = ambientHaze;
      ctx.beginPath();
      ctx.arc(0, 0, r * 5.6, 0, Math.PI * 2);
      ctx.fill();

      // --- LAYER 2: Back Gravitational Lensing Arcs (Upper & Lower Halos) ---
      // A) Upper Gravitational Lensing Arch (Light from rear disk warped OVER the singularity)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-r * 2.9, 0);
      ctx.bezierCurveTo(-r * 2.4, -r * 1.95, -r * 0.9, -r * 2.1, 0, -r * 2.1);
      ctx.bezierCurveTo(r * 0.9, -r * 2.1, r * 2.0, -r * 1.8, r * 2.5, 0);
      // Inner edge conforms to the top half of the photon sphere
      ctx.bezierCurveTo(r * 1.6, -r * 0.45, r * 1.15, -r * 0.9, r * 1.05 * Math.cos(0.08), -r * 1.05 * Math.sin(0.08));
      for (let a = 0.08; a <= Math.PI - 0.08; a += 0.1) {
        ctx.lineTo(r * 1.05 * Math.cos(a), -r * 1.05 * Math.sin(a));
      }
      ctx.bezierCurveTo(-r * 1.25, -r * 0.85, -r * 1.9, -r * 0.4, -r * 2.9, 0);
      ctx.closePath();

      const upperGrad = ctx.createLinearGradient(-r * 2.7, -r * 1.6, r * 2.4, 0);
      upperGrad.addColorStop(0, 'rgba(255, 255, 255, 0.92)');   // Doppler boosted white-hot left
      upperGrad.addColorStop(0.18, 'rgba(254, 240, 138, 0.88)'); // Radiant yellow
      upperGrad.addColorStop(0.45, 'rgba(245, 158, 11, 0.78)'); // Rich amber
      upperGrad.addColorStop(0.75, 'rgba(234, 88, 12, 0.52)'); // Fiery orange
      upperGrad.addColorStop(1, 'rgba(180, 83, 9, 0.2)');      // Fading redshifted right
      ctx.fillStyle = upperGrad;
      ctx.fill();

      // Concentric plasma ribbons inside upper arch
      const upperRibbons = [
        { apex: -r * 1.38, width: 2.2, alpha: 0.85, col: '#fffbeb' },
        { apex: -r * 1.58, width: 3.2, alpha: 0.7, col: '#fef08a' },
        { apex: -r * 1.82, width: 2.6, alpha: 0.55, col: '#f59e0b' },
        { apex: -r * 2.0, width: 1.4, alpha: 0.38, col: '#ea580c' },
      ];
      upperRibbons.forEach((rib) => {
        ctx.beginPath();
        ctx.moveTo(-r * 2.7, 0);
        ctx.bezierCurveTo(-r * 2.1, rib.apex, -r * 0.8, rib.apex - 4, 0, rib.apex - 4);
        ctx.bezierCurveTo(r * 0.8, rib.apex - 4, r * 1.8, rib.apex, r * 2.4, 0);
        ctx.strokeStyle = rib.col;
        ctx.lineWidth = rib.width;
        ctx.globalAlpha = rib.alpha;
        ctx.stroke();
      });
      ctx.restore();

      // B) Lower Gravitational Lensing Arch (Light warped UNDER the singularity)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-r * 2.7, 0);
      ctx.bezierCurveTo(-r * 2.2, r * 1.55, -r * 0.8, r * 1.72, 0, r * 1.72);
      ctx.bezierCurveTo(r * 0.8, r * 1.72, r * 1.8, r * 1.45, r * 2.3, 0);
      // Inner edge conforms to the bottom half of the photon sphere
      ctx.bezierCurveTo(r * 1.5, r * 0.4, r * 1.15, r * 0.85, r * 1.05 * Math.cos(0.08), r * 1.05 * Math.sin(0.08));
      for (let a = 0.08; a <= Math.PI - 0.08; a += 0.1) {
        ctx.lineTo(r * 1.05 * Math.cos(a), r * 1.05 * Math.sin(a));
      }
      ctx.bezierCurveTo(-r * 1.25, r * 0.8, -r * 1.8, r * 0.35, -r * 2.7, 0);
      ctx.closePath();

      const lowerGrad = ctx.createLinearGradient(-r * 2.5, r * 1.2, r * 2.2, 0);
      lowerGrad.addColorStop(0, 'rgba(254, 240, 138, 0.85)');
      lowerGrad.addColorStop(0.3, 'rgba(245, 158, 11, 0.7)');
      lowerGrad.addColorStop(0.7, 'rgba(234, 88, 12, 0.45)');
      lowerGrad.addColorStop(1, 'rgba(180, 83, 9, 0.18)');
      ctx.fillStyle = lowerGrad;
      ctx.fill();

      // Concentric striations in lower arch
      const lowerRibbons = [
        { apex: r * 1.25, width: 2.0, alpha: 0.7, col: '#fef08a' },
        { apex: r * 1.45, width: 2.8, alpha: 0.5, col: '#f59e0b' },
        { apex: r * 1.62, width: 1.5, alpha: 0.35, col: '#ea580c' },
      ];
      lowerRibbons.forEach((rib) => {
        ctx.beginPath();
        ctx.moveTo(-r * 2.5, 0);
        ctx.bezierCurveTo(-r * 1.9, rib.apex, -r * 0.8, rib.apex + 3, 0, rib.apex + 3);
        ctx.bezierCurveTo(r * 0.8, rib.apex + 3, r * 1.6, rib.apex, r * 2.2, 0);
        ctx.strokeStyle = rib.col;
        ctx.lineWidth = rib.width;
        ctx.globalAlpha = rib.alpha;
        ctx.stroke();
      });
      ctx.restore();

      // --- LAYER 3: Back-Half of Equatorial Disk (Behind the singularity) ---
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 3.3, r * 0.55, 0, Math.PI, 0, false);
      ctx.clip(); // Only render rear half (y < 0)

      const backDiskGrad = ctx.createLinearGradient(-r * 3.3, 0, r * 3.0, 0);
      backDiskGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
      backDiskGrad.addColorStop(0.2, 'rgba(254, 240, 138, 0.8)');
      backDiskGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.65)');
      backDiskGrad.addColorStop(0.85, 'rgba(234, 88, 12, 0.4)');
      backDiskGrad.addColorStop(1, 'rgba(180, 83, 9, 0.15)');

      ctx.fillStyle = backDiskGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 3.3, r * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // --- LAYER 4: The Pitch-Black Event Horizon Singularity Shadow ---
      // A pure inky black circular void
      ctx.save();
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // --- LAYER 5: Razor-Sharp Relativistic Photon Ring ---
      // Trapped photons orbiting the edge of the event horizon
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, r + 0.9, 0, Math.PI * 2);
      ctx.lineWidth = 1.8;
      const photonGrad = ctx.createLinearGradient(-r, 0, r, 0);
      photonGrad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');   // Blinding white on approaching side
      photonGrad.addColorStop(0.3, 'rgba(254, 240, 138, 0.95)');
      photonGrad.addColorStop(0.65, 'rgba(245, 158, 11, 0.8)');
      photonGrad.addColorStop(1, 'rgba(217, 119, 6, 0.45)');
      ctx.strokeStyle = photonGrad;
      ctx.shadowColor = '#fef08a';
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();

      // --- LAYER 6: The FRONT Half of the Equatorial Accretion Disk ---
      // Passes directly IN FRONT of the black hole shadow!
      ctx.save();
      // Clip to front plane (y >= -r * 0.08)
      ctx.beginPath();
      ctx.rect(-r * 4.0, -r * 0.08, r * 8.0, r * 3.0);
      ctx.clip();

      // 1. Broad atmospheric glow of the front disk
      const frontAtmosphere = ctx.createLinearGradient(-r * 3.4, 0, r * 3.0, 0);
      frontAtmosphere.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
      frontAtmosphere.addColorStop(0.2, 'rgba(254, 240, 138, 0.3)');
      frontAtmosphere.addColorStop(0.5, 'rgba(245, 158, 11, 0.22)');
      frontAtmosphere.addColorStop(0.85, 'rgba(234, 88, 12, 0.12)');
      frontAtmosphere.addColorStop(1, 'transparent');
      ctx.fillStyle = frontAtmosphere;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 3.5, r * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Dense superheated gas body of front disk
      const frontDiskBody = ctx.createLinearGradient(-r * 3.3, 0, r * 2.9, 0);
      frontDiskBody.addColorStop(0, 'rgba(255, 255, 255, 0.98)');   // White-hot approaching rim
      frontDiskBody.addColorStop(0.18, 'rgba(254, 240, 138, 0.92)'); // Lemon yellow
      frontDiskBody.addColorStop(0.48, 'rgba(245, 158, 11, 0.85)');  // Golden amber
      frontDiskBody.addColorStop(0.8, 'rgba(234, 88, 12, 0.6)');    // Fiery orange
      frontDiskBody.addColorStop(1, 'rgba(180, 83, 9, 0.2)');        // Fading red on receding side
      ctx.fillStyle = frontDiskBody;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 3.2, r * 0.42, 0, 0, Math.PI * 2);
      ctx.fill();

      // 3. Blinding White-Hot Mid-Plane Core Beam
      // Extremely thin, intense line cutting horizontally across the singularity
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 3.25, r * 0.12, 0, 0, Math.PI * 2);
      const coreBeamGrad = ctx.createLinearGradient(-r * 3.2, 0, r * 2.8, 0);
      coreBeamGrad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      coreBeamGrad.addColorStop(0.25, 'rgba(255, 255, 255, 0.95)');
      coreBeamGrad.addColorStop(0.55, 'rgba(254, 240, 138, 0.85)');
      coreBeamGrad.addColorStop(0.85, 'rgba(245, 158, 11, 0.65)');
      coreBeamGrad.addColorStop(1, 'rgba(234, 88, 12, 0.2)');
      ctx.fillStyle = coreBeamGrad;
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 12;
      ctx.fill();

      // Concentric plasma ribbons in the front disk
      const frontRibbons = [
        { yOffset: -r * 0.12, rx: r * 3.1, ry: r * 0.25, width: 2.0, col: '#fef08a', alpha: 0.8 },
        { yOffset: r * 0.14, rx: r * 2.9, ry: r * 0.26, width: 2.4, col: '#f59e0b', alpha: 0.75 },
        { yOffset: r * 0.28, rx: r * 2.6, ry: r * 0.32, width: 1.6, col: '#ea580c', alpha: 0.5 },
      ];
      frontRibbons.forEach((rib) => {
        ctx.beginPath();
        ctx.ellipse(0, rib.yOffset, rib.rx, rib.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = rib.col;
        ctx.lineWidth = rib.width;
        ctx.globalAlpha = rib.alpha;
        ctx.stroke();
      });
      ctx.restore();

      // --- LAYER 7: Dynamic Swirling Relativistic Keplerian Filaments ---
      ctx.save();
      for (let i = 0; i < plasmaFilaments.length; i++) {
        const f = plasmaFilaments[i];
        f.angle += f.speed;

        const cosA = Math.cos(f.angle);
        // Doppler factor: left side (x < 0) approaching observer
        const dopplerBoost = cosA < 0 ? 1.4 : 0.65;
        const currentAlpha = Math.min(1, f.alpha * dopplerBoost);

        ctx.strokeStyle = f.color;
        ctx.lineWidth = f.width;
        ctx.globalAlpha = currentAlpha;

        if (f.plane === 'equatorial') {
          const startA = f.angle;
          const endA = f.angle + f.arcLength;
          ctx.beginPath();
          ctx.ellipse(0, 0, f.radius, f.radius * 0.34, 0, startA, endA);
          ctx.stroke();
        } else if (f.plane === 'lensed_upper') {
          const archRadius = f.radius;
          const px1 = Math.cos(f.angle) * archRadius * 0.95;
          const py1 = -r * 1.05 - (archRadius - r) * 0.55 * Math.abs(Math.sin(f.angle));
          const px2 = Math.cos(f.angle + f.arcLength) * archRadius * 0.95;
          const py2 = -r * 1.05 - (archRadius - r) * 0.55 * Math.abs(Math.sin(f.angle + f.arcLength));

          ctx.beginPath();
          ctx.moveTo(px1, py1);
          ctx.lineTo(px2, py2);
          ctx.stroke();
        } else if (f.plane === 'lensed_lower') {
          const archRadius = f.radius;
          const px1 = Math.cos(f.angle) * archRadius * 0.9;
          const py1 = r * 1.05 + (archRadius - r) * 0.42 * Math.abs(Math.sin(f.angle));
          const px2 = Math.cos(f.angle + f.arcLength) * archRadius * 0.9;
          const py2 = r * 1.05 + (archRadius - r) * 0.42 * Math.abs(Math.sin(f.angle));

          ctx.beginPath();
          ctx.moveTo(px1, py1);
          ctx.lineTo(px2, py2);
          ctx.stroke();
        }
      }
      ctx.restore();

      // --- LAYER 8: Cinematic Anamorphic Golden Lens Flare ---
      // Signature 35mm anamorphic streak through Gargantua's disk
      ctx.save();
      const flareWidth = r * 8.5;
      const flareHeight = 2.4;
      const flareGrad = ctx.createLinearGradient(-flareWidth * 0.55, 0, flareWidth * 0.45, 0);
      flareGrad.addColorStop(0, 'transparent');
      flareGrad.addColorStop(0.25, 'rgba(245, 158, 11, 0.25)');
      flareGrad.addColorStop(0.42, 'rgba(254, 240, 138, 0.7)');
      flareGrad.addColorStop(0.48, 'rgba(255, 255, 255, 0.95)');
      flareGrad.addColorStop(0.54, 'rgba(254, 240, 138, 0.7)');
      flareGrad.addColorStop(0.75, 'rgba(234, 88, 12, 0.25)');
      flareGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = flareGrad;
      ctx.beginPath();
      ctx.ellipse(-r * 0.2, 0, flareWidth * 0.5, flareHeight, 0, 0, Math.PI * 2);
      ctx.fill();

      // Subtle vertical diffraction glimmer
      const vertFlareGrad = ctx.createLinearGradient(0, -r * 1.8, 0, r * 1.8);
      vertFlareGrad.addColorStop(0, 'transparent');
      vertFlareGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
      vertFlareGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = vertFlareGrad;
      ctx.beginPath();
      ctx.ellipse(-r * 0.35, 0, 1.2, r * 1.8, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      ctx.restore(); // Restore tilt & translation

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
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-95 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
