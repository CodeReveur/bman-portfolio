'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Partner } from '@/lib/corporate';

interface PartnerSlideshowProps {
  partners: Partner[];
}

export default function PartnerSlideshow({ partners }: PartnerSlideshowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Duplicate list to achieve continuous seamless loop
  const displayPartners = [...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-10 select-none group">
      {/* Edge Gradient Masks for Smooth Gliding In and Out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-20 lg:w-32 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-20 lg:w-32 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

      {/* Manual Navigation Controls (Fade in on hover) */}
      <button
        onClick={() => scroll('left')}
        aria-label="Previous partner"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 shadow-lg items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:scale-110 opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-md"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={() => scroll('right')}
        aria-label="Next partner"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 shadow-lg items-center justify-center text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white hover:scale-110 opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-md"
      >
        <ChevronRight size={18} />
      </button>

      {/* Sliding Track with Wave Motion */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="animate-slide-marquee flex items-center gap-5 sm:gap-10 lg:gap-12 py-3 px-2">
          {displayPartners.map((partner, idx) => {
            // Stagger wave delay across partners so the whole row ripples like a fluid wave
            const waveDelay = `${(idx % partners.length) * 0.55}s`;

            return (
              <div
                key={`${partner.name}-${idx}`}
                className="animate-wave-motion flex-shrink-0 flex flex-col items-center justify-center text-center cursor-default transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: waveDelay }}
              >
                {/* Pure Photo Logo (NO card, NO background, larger prominent sizing) */}
                <div className="relative h-12 sm:h-18 lg:h-20 w-32 sm:w-44 lg:w-52 flex items-center justify-center">
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={200}
                    height={70}
                    unoptimized
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
                  />
                </div>

                {/* Partner Name Directly Underneath (NO card box/bg) */}
                <span className="mt-2.5 text-xs sm:text-sm font-medium tracking-tight text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
