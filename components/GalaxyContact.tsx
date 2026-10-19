'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Loader2,
} from 'lucide-react';

export default function GalaxyContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Enterprise ERP & POS');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate sending message to BMan HQ
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              <MessageSquare size={13} />
              Command Terminal
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Initiate Contact with{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-300 bg-clip-text text-transparent">
                BMan Systems.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you are an enterprise seeking resilient offline counter infrastructure, an institution requiring sovereign cloud architectures, or a strategic partner — our core team responds within one business day.
            </p>

            {/* Contact Details List */}
            <div className="mt-10 space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href="mailto:contact@bman.rw"
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    contact@bman.rw
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Operations: support@bman.rw
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Headquarters
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Kigali, Rwanda
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Nyarugenge Financial District &amp; Tech Corridor
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-violet-500/10 border border-violet-500/25 text-violet-400 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Direct Hotline
                  </span>
                  <span className="text-sm font-semibold text-white">
                    +250 788 000 000
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Monday to Saturday · 08:00 – 18:00 CAT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Terminal */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-[#0a0f1d]/90 border border-white/15 shadow-2xl backdrop-blur-2xl">
              {sent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Transmission Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {name}. Your inquiry has been routed directly to the BMan executive engineering desk. We will reach back to {email} promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Jean Damascene"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.rw"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Scope / Engagement Topic
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e1629] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Enterprise ERP & POS">Enterprise ERP &amp; Retail POS</option>
                      <option value="Sovereign Cloud & Infrastructure">Sovereign Cloud &amp; Hardened Deployments</option>
                      <option value="Fintech & Payment Rails">Fintech &amp; Multi-Rail Payments</option>
                      <option value="Hardware Telemetry">Hardware Telemetry &amp; Fleet Logistics</option>
                      <option value="Strategic Partnership">Strategic Partnership / Investment</option>
                      <option value="Careers & Press">Careers &amp; Institutional Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Mission Brief / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your requirements, counter volume, or technical questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="relative w-full inline-flex items-center justify-center p-[1px] rounded-xl overflow-hidden font-medium text-sm group cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 animate-gradient-x" />
                    <span className="relative w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-[11px] bg-[#070b14] text-white hover:bg-transparent transition-colors duration-300 font-semibold tracking-wide">
                      {sending ? (
                        <>
                          <Loader2 size={16} className="animate-spin text-emerald-400" />
                          <span>Routing Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Inquiry</span>
                          <Send size={15} />
                        </>
                      )}
                    </span>
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
