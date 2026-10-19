'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Layers,
  Shield,
  Send,
  Truck,
  ArrowRight,
  Sun,
  Moon,
} from 'lucide-react';

export default function GalaxyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  const navLinks = [
    { label: 'Inventions', href: '#inventions' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  const portals = [
    {
      name: 'BMan Stock',
      desc: 'Point of sale & inventory retail engine',
      url: 'https://stock.bman.rw',
      icon: Layers,
      badge: 'Flagship',
    },
    {
      name: 'Agent Portal',
      desc: 'Workforce logistics & commission rails',
      url: 'https://agent.bman.rw',
      icon: Shield,
      badge: 'Field Ops',
    },
    {
      name: 'BMan Mail',
      desc: 'Sovereign encrypted enterprise email',
      url: 'https://mail.bman.rw',
      icon: Send,
      badge: 'Enterprise',
    },
    {
      name: 'E-Indege Logistics',
      desc: 'Autonomous fleet telemetry & dispatch',
      url: 'https://eindege.rw',
      icon: Truck,
      badge: 'Mobility',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#070b14]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-emerald-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Cosmic Badge */}
          <Link href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Rainbow aura halo */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 via-violet-500 to-amber-400 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-[#0a0f1d] border border-white/20 p-1 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="BMan Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
                  BMAN
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Sovereign Core
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block leading-tight font-mono">
                bman.rw · Kigali
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Terminal: Portals & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Portal Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPortalDropdownOpen(!portalDropdownOpen)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer backdrop-blur-md"
              >
                <Sparkles size={13} className="text-emerald-400" />
                <span>Platforms</span>
                <ChevronDown size={13} className={`text-slate-400 transition-transform ${portalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {portalDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-72 rounded-2xl p-2 bg-[#0a0f1d]/95 border border-white/15 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in zoom-in-95 duration-200"
                  onMouseLeave={() => setPortalDropdownOpen(false)}
                >
                  <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 border-b border-white/10 mb-1">
                    BMan Sovereign Platforms
                  </div>
                  {portals.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 text-slate-200 transition-colors group"
                      >
                        <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white group-hover:text-emerald-300">
                              {item.name}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Rainbow Spectrum Action Button */}
            <a
              href="#products"
              className="relative inline-flex items-center justify-center p-[1px] rounded-xl overflow-hidden font-medium text-xs group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 via-violet-500 to-rose-400 animate-gradient-x" />
              <span className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-[11px] bg-[#070b14] text-white hover:bg-transparent transition-colors duration-300 font-semibold tracking-wide">
                <span>Explore Ecosystem</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="h-9 w-9 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#090e1c]/95 border border-white/15 shadow-2xl backdrop-blur-2xl space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
              Launch Portals
            </div>
            {portals.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-white/5 text-xs text-slate-200"
              >
                <span className="font-semibold">{item.name}</span>
                <ExternalLink size={12} className="text-emerald-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
