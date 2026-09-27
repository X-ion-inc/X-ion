'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getChannelIcon } from './icons/ChannelLogos';
import { getToolIcon } from './icons/IntegrationLogos';

interface HeroSectionProps {
  onStartWithEmail: (email: string) => void;
}

export function HeroSection({ onStartWithEmail }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onStartWithEmail(email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background Floating Integration & Channel Tiles on Left & Right */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Left Side Tiles */}
        <div className="hidden lg:block absolute left-4 xl:left-12 top-10 space-y-6">
          <div className="flex items-center gap-4 animate-float-slow">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2.5 transform -rotate-3 hover:rotate-0 transition-transform">
              {getToolIcon('canva', 'w-8 h-8', 32)}
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2 transform rotate-6">
              {getChannelIcon('x', 'w-6 h-6 text-black', 24)}
            </div>
          </div>

          <div className="flex items-center gap-5 ml-6 animate-float-delayed">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2.5 transform rotate-3">
              {getToolIcon('claude', 'w-8 h-8', 32)}
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2 text-[#0A66C2]">
              {getChannelIcon('linkedin', 'w-6 h-6', 24)}
            </div>
          </div>

          <div className="flex items-center gap-4 ml-2 animate-float-slow">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2 text-[#E1306C] transform -rotate-6">
              {getChannelIcon('instagram', 'w-6 h-6', 24)}
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2.5 transform rotate-2">
              {getToolIcon('onedrive', 'w-8 h-8', 32)}
            </div>
          </div>

          <div className="flex items-center gap-4 ml-10">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2.5">
              {getToolIcon('google-drive', 'w-8 h-8', 32)}
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2 text-black">
              {getChannelIcon('tiktok', 'w-6 h-6', 24)}
            </div>
          </div>
        </div>

        {/* Right Side Tiles */}
        <div className="hidden lg:block absolute right-4 xl:right-12 top-10 space-y-6">
          <div className="flex items-center gap-4 animate-float-delayed justify-end">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2 text-[#0285FF] transform rotate-3">
              {getChannelIcon('bluesky', 'w-6 h-6', 24)}
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2.5 transform -rotate-3">
              {getToolIcon('dropbox', 'w-8 h-8', 32)}
            </div>
          </div>

          <div className="flex items-center gap-5 mr-6 justify-end animate-float-slow">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2 text-[#BD081C] transform -rotate-6">
              {getChannelIcon('pinterest', 'w-6 h-6', 24)}
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2.5 transform rotate-6">
              {getToolIcon('cursor', 'w-8 h-8', 32)}
            </div>
          </div>

          <div className="flex items-center gap-4 mr-2 justify-end animate-float-delayed">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2.5">
              {getToolIcon('chatgpt', 'w-8 h-8', 32)}
            </div>
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2 text-black transform rotate-3">
              {getChannelIcon('threads', 'w-6 h-6', 24)}
            </div>
          </div>

          <div className="flex items-center gap-4 mr-10 justify-end">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2 text-[#1877F2]">
              {getChannelIcon('facebook', 'w-6 h-6', 24)}
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-2.5 transform -rotate-2">
              {getToolIcon('zapier', 'w-8 h-8', 32)}
            </div>
          </div>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-gray-950 leading-[1.12]">
          Your social media workspace
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Works with every platform you post to, and plugs into your favorite tools
        </p>

        {/* Email Signup Form */}
        <div className="mt-8 sm:mt-10 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
            <label htmlFor="email-input" className="sr-only">Enter your email</label>
            <input
              id="email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full sm:flex-1 h-14 px-5 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c4bff] focus:border-transparent text-base shadow-sm transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto h-14 px-7 rounded-2xl bg-[#2c4bff] hover:bg-[#1b3aff] text-white font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow shrink-0"
            >
              <span>Get started for free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {submitted ? (
            <p className="mt-3 text-xs text-emerald-600 font-medium flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Welcome to Buffer! Redirecting to setup...</span>
            </p>
          ) : (
            <p className="mt-3 text-xs text-gray-500">
              By entering your email, you agree to receive emails from Buffer.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
