'use client';

import React, { useEffect, useRef } from 'react';
import { getBlackHolePosition } from './SpaceshipCursor';

/**
 * GravitationalWarp:
 * Exerts relativistic gravitational distortion onto DOM sections and divs.
 * When elements approach or touch the gravitational field of the top-left
 * black hole, they dynamically warp, bend, and shrink directly toward the singularity.
 */
export default function GravitationalWarp() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let targets: HTMLElement[] = [];
    let frameCount = 0;

    const queryTargets = () => {
      targets = Array.from(
        document.querySelectorAll<HTMLElement>(
          'main section, header, .mono-card, .kpi-grid, footer, [data-warp]'
        )
      );
    };

    queryTargets();

    const updateWarp = () => {
      frameCount++;
      // Re-query targets every ~60 frames to handle dynamic page changes
      if (frameCount % 60 === 0) {
        queryTargets();
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      const bh = getBlackHolePosition(width, height);
      const fieldRadius = bh.gravityRadius;

      for (let i = 0; i < targets.length; i++) {
        const el = targets[i];
        if (!el || !el.isConnected) continue;

        const rect = el.getBoundingClientRect();
        // Closest point on the element bounding box to the black hole singularity
        const closestX = Math.max(rect.left, Math.min(bh.x, rect.right));
        const closestY = Math.max(rect.top, Math.min(bh.y, rect.bottom));
        const dist = Math.hypot(closestX - bh.x, closestY - bh.y);

        if (dist < fieldRadius) {
          const intensity = Math.pow(1 - dist / fieldRadius, 1.8);
          const pullX = (bh.x - closestX) * intensity * 0.18;
          const pullY = (bh.y - closestY) * intensity * 0.18;
          const shrink = Math.max(0.65, 1 - intensity * 0.35); // Shrink up to 35% into the singularity

          el.style.transformOrigin = `${bh.x - rect.left}px ${bh.y - rect.top}px`;
          el.style.transform = `translate3d(${pullX}px, ${pullY}px, 0) scale(${shrink})`;
          el.style.willChange = 'transform';
          el.style.transition = 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)';
        } else if (el.style.transform) {
          el.style.transform = '';
          el.style.transformOrigin = '';
          el.style.willChange = '';
        }
      }

      rafRef.current = requestAnimationFrame(updateWarp);
    };

    rafRef.current = requestAnimationFrame(updateWarp);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      targets.forEach((el) => {
        if (el && el.isConnected) {
          el.style.transform = '';
          el.style.transformOrigin = '';
          el.style.willChange = '';
        }
      });
    };
  }, []);

  return null;
}
