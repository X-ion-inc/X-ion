'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getChannelIcon } from './icons/ChannelLogos';
import { getToolIcon } from './icons/IntegrationLogos';

export function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = email 
      ? `https://app.scrutium.com/signup?email=${encodeURIComponent(email)}`
      : 'https://app.scrutium.com/signup';
    window.location.href = url;
  };

  return (
    <section className="relative overflow-hidden bg-gray-950 pt-16 pb-28 md:pt-24 md:pb-40 text-white">
      {/* Background Image: Local asset in public/images/hero-bg.jpg */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="3D Social Media Icons Background"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover object-center opacity-40 scale-105 transform animate-pulse duration-10000"
        />
        {/* Gradient overlays for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-gray-950/30 to-gray-950/90" />
      </div>

      {/* Floating Integration & Channel Tiles */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10" aria-hidden="true">
        {/* Top-Left: Google Drive */}
        <div className="absolute left-6 sm:left-16 md:left-24 top-8 sm:top-14 animate-float-slow">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex items-center justify-center p-2.5 transform -rotate-3">
            {getToolIcon('google-drive', 'w-8 h-8', 32)}
          </div>
        </div>

        {/* Top-Center: X (Twitter) */}
        <div className="absolute left-1/2 -translate-x-32 sm:-translate-x-40 top-4 sm:top-8 animate-float-delayed">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex items-center justify-center p-3 text-black transform rotate-2">
            {getChannelIcon('x', 'w-7 h-7', 28)}
          </div>
        </div>

        {/* Top-Right: Bluesky */}
        <div className="absolute right-6 sm:right-16 md:right-24 top-8 sm:top-14 animate-float-slow">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex items-center justify-center p-3 text-[#0285FF] transform rotate-6">
            {getChannelIcon('bluesky', 'w-7 h-7', 28)}
          </div>
        </div>

        {/* Lower-Left: Instagram */}
        <div className="absolute left-6 sm:left-20 md:left-36 top-60 sm:top-72 animate-float-delayed">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex items-center justify-center p-3 text-[#E1306C] transform -rotate-6">
            {getChannelIcon('instagram', 'w-7 h-7', 28)}
          </div>
        </div>

        {/* Lower-Center: TikTok */}
        <div className="absolute left-1/2 -translate-x-24 sm:-translate-x-28 top-80 sm:top-96 animate-float-slow">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex items-center justify-center p-3 text-black transform rotate-3">
            {getChannelIcon('tiktok', 'w-7 h-7', 28)}
          </div>
        </div>

        {/* Lower-Right: Facebook */}
        <div className="absolute right-6 sm:right-20 md:right-36 top-64 sm:top-80 animate-float-delayed">
          <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex items-center justify-center p-3 text-[#1877F2] transform rotate-3">
            {getChannelIcon('facebook', 'w-7 h-7', 28)}
          </div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md">
          Your social media workspace
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-gray-200 max-w-xl mx-auto leading-relaxed font-normal drop-shadow">
          Works with every platform you post to, and plugs into your favorite tools
        </p>

        {/* Email Signup Form opening app.scrutium.com/signup */}
        <div className="mt-8 sm:mt-10 max-w-md mx-auto space-y-3.5">
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="email-input" className="sr-only">Enter your email</label>
            <input
              id="email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full h-14 px-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/30 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c4bff] focus:border-transparent text-base shadow-lg transition-all"
            />
            <button
              type="submit"
              className="w-full h-14 px-7 rounded-full bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get started for free</span>
              <ArrowRight className="w-5 h-5 text-gray-950" />
            </button>
          </form>

          <p className="text-xs text-gray-300">
            By entering your email, you agree to receive emails from X-ion.
          </p>
        </div>
      </div>
    </section>
  );
}
