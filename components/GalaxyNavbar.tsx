'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function GalaxyNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Inventions', href: '/inventions' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-4 inset-x-0 mx-auto max-w-4xl z-50 px-4">
      <nav className="flex items-center justify-between h-12 px-3 sm:px-4 rounded-full bg-black/85 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.8)] backdrop-blur-xl">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 pl-1 group">
          <div className="relative w-6 h-6 rounded-full overflow-hidden bg-black flex items-center justify-center border border-white/20">
            <Image
              src="/logo.png"
              alt="BMan"
              width={20}
              height={20}
              className="w-4 h-4 object-contain"
              priority
            />
          </div>
          <span className="text-xs font-semibold tracking-tight text-white flex items-center gap-1.5">
            BMan
            <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />
          </span>
        </Link>

        {/* Desktop Page Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1 text-xs transition-all duration-150 rounded-full flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-black font-medium shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 font-normal'
                }`}
              >
                <span>{link.label}</span>
                {isActive && link.href === '/' && (
                  <span className="w-1 h-1 rounded-full rainbow-dot" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button: Launch Stock */}
        <div className="hidden md:flex items-center">
          <a
            href="https://stock.bman.rw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-black bg-white hover:bg-zinc-200 rounded-full transition-colors"
          >
            <span>Launch Stock</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile Page Navigation Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-3 rounded-2xl bg-black/95 border border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3.5 py-2 text-xs rounded-xl flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-white text-black font-medium'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full rainbow-dot" />}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-white/10 mt-1">
            <a
              href="https://stock.bman.rw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-medium text-black bg-white rounded-xl hover:bg-zinc-200 transition-colors"
            >
              <span>Launch BMan Stock</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
