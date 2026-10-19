'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Instagram,
  ArrowUpRight,
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/corporate';

export default function GalaxyContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return Linkedin;
      case 'Twitter':
        return Twitter;
      case 'Github':
        return Github;
      case 'Youtube':
        return Youtube;
      case 'Instagram':
        return Instagram;
      default:
        return Mail;
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail size={13} />
            Direct Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-white">
            Start a conversation.
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-light">
            Whether inquiring about enterprise rollouts, payment integrations, or hardware setups, our Kigali team responds promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl glass-panel border border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Headquarters</div>
                  <div className="text-xs text-zinc-400 font-light">KN 3 Rd, Downtown Kigali, Rwanda</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">General Inquiries</div>
                  <a href="mailto:contact@bman.rw" className="text-xs text-emerald-400 hover:underline font-mono">
                    contact@bman.rw
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Direct Line</div>
                  <a href="tel:+250788000000" className="text-xs text-zinc-400 font-mono">
                    +250 788 000 000
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Social Media Channels */}
            <div className="p-6 rounded-3xl glass-panel border border-white/5">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Verified Social Channels
              </div>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = getSocialIcon(social.icon);
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/60 border border-white/5 hover:border-emerald-500/40 text-xs text-zinc-300 hover:text-white transition-all group"
                    >
                      <Icon size={13} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                      <span>{social.name}</span>
                      <ArrowUpRight size={11} className="text-zinc-500 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-lg font-medium text-white">Message Dispatched</h3>
                  <p className="mt-2 text-xs text-zinc-400 max-w-sm font-light">
                    Thank you. A BMan team member will review your inquiry and follow up promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jean Damascene"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Email or Phone
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="e.g. jean@company.rw"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business or project..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/40"
                  >
                    <span>Send Message</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
