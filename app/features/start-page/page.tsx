'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Smartphone, Globe, BarChart2, ArrowRight, Check, Palette, Sparkles, ExternalLink } from 'lucide-react';

export default function StartPageFeaturePage() {
  const [handle, setHandle] = useState('elenagrowth');
  const [bioText, setBioText] = useState('Product marketer & content strategist. Helping indie builders reach $100k MRR.');
  const [theme, setTheme] = useState<'clean' | 'dark' | 'neon' | 'editorial'>('clean');

  const themeStyles = {
    clean: {
      bg: 'bg-white',
      text: 'text-gray-950',
      subtext: 'text-gray-500',
      btn: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200',
      accent: '#2c4bff'
    },
    dark: {
      bg: 'bg-gray-950',
      text: 'text-white',
      subtext: 'text-gray-400',
      btn: 'bg-gray-900 hover:bg-gray-800 text-white border border-gray-800',
      accent: '#86efac'
    },
    neon: {
      bg: 'bg-[#0f172a]',
      text: 'text-[#f8fafc]',
      subtext: 'text-cyan-300',
      btn: 'bg-cyan-950/80 hover:bg-cyan-900 text-cyan-200 border border-cyan-500/40',
      accent: '#38bdf8'
    },
    editorial: {
      bg: 'bg-[#faf6f0]',
      text: 'text-[#292524]',
      subtext: 'text-[#78716c]',
      btn: 'bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 shadow-2xs',
      accent: '#d97706'
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-700 bg-orange-50 px-3 py-1 rounded-full mb-4">
          <Layout className="w-3.5 h-3.5" />
          <span>Start Page · Link in Bio Builder</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Turn your bio into a high-converting hub
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Create a beautiful, personalized mobile landing page for your Instagram, TikTok, and X bios in minutes. Completely free forever.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.scrutium.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Claim your free Start Page URL
          </a>
          <Link
            href="/pricing"
            className="px-6 py-3.5 rounded-full border border-gray-300 hover:border-gray-900 text-gray-800 font-semibold text-sm transition-all"
          >
            Compare features
          </Link>
        </div>
      </div>

      {/* Interactive Mobile Simulator Studio */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Controls & Customization */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Live Customizer</div>
            <h3 className="text-xl font-bold text-gray-950 mt-1">Design Your Page</h3>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1.5">Your Handle URL</label>
            <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#2c4bff]">
              <span className="bg-gray-100 px-3 py-2.5 text-xs text-gray-500 font-mono flex items-center">start.page/</span>
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                className="flex-1 px-3 py-2 text-xs font-semibold text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-1.5">Bio Headline</label>
            <textarea
              rows={2}
              value={bioText}
              onChange={(e) => setBioText(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-200 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2c4bff]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-700 block mb-2">Color Palette Theme</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'clean', label: 'Clean Light', bg: '#ffffff', border: '#e2e8f0' },
                { id: 'dark', label: 'Midnight', bg: '#09090b', border: '#27272a' },
                { id: 'neon', label: 'Cyber Tech', bg: '#0f172a', border: '#0284c7' },
                { id: 'editorial', label: 'Editorial Paper', bg: '#faf6f0', border: '#d6d3d1' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id as any)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between h-18 transition-all cursor-pointer ${
                    theme === t.id ? 'ring-2 ring-[#2c4bff] border-transparent shadow-xs' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ backgroundColor: t.bg }}
                >
                  <span className={`text-[11px] font-bold ${t.id === 'dark' || t.id === 'neon' ? 'text-white' : 'text-gray-900'}`}>
                    {t.label}
                  </span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.border }} />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">Free SSL certificate included</span>
            <a
              href="https://app.scrutium.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#2c4bff] hover:underline flex items-center gap-1"
            >
              <span>Publish this page now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Phone Frame Preview */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-[310px] sm:w-[340px] rounded-[44px] bg-gray-900 p-3 shadow-2xl border-4 border-gray-800">
            {/* Phone Screen */}
            <div className={`w-full min-h-[560px] rounded-[34px] ${currentTheme.bg} ${currentTheme.text} p-6 flex flex-col items-center justify-between transition-colors duration-300 relative overflow-hidden`}>
              
              {/* Dynamic Island Speaker Notch */}
              <div className="w-24 h-4 bg-black/40 rounded-full mb-6 mx-auto" />

              <div className="w-full flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 p-0.5 shadow-md mb-3">
                  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-800">
                    {handle[0]?.toUpperCase() || 'E'}
                  </div>
                </div>

                <div className="font-extrabold text-base tracking-tight">@{handle || 'username'}</div>
                <p className={`text-xs ${currentTheme.subtext} mt-1.5 leading-relaxed max-w-[240px]`}>
                  {bioText}
                </p>

                {/* Sample Buttons */}
                <div className="w-full mt-6 space-y-2.5 text-xs font-semibold">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={`w-full py-3 px-4 rounded-xl ${currentTheme.btn} flex items-center justify-between transition-all`}
                  >
                    <span>Read My Free 2026 Playbook</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={`w-full py-3 px-4 rounded-xl ${currentTheme.btn} flex items-center justify-between transition-all`}
                  >
                    <span>Listen to the Weekly Podcast</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className={`w-full py-3 px-4 rounded-xl ${currentTheme.btn} flex items-center justify-between transition-all`}
                  >
                    <span>Book a 1:1 Strategy Consultation</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Footer inside phone */}
              <div className="mt-8 text-[10px] text-gray-400 font-mono tracking-wider">
                Powered by X-ion Start Page
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Connect Custom Domains</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Attach your own custom domain (e.g. `links.yourbrand.com`) with automatic SSL certification and instant edge CDN routing.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2c4bff] flex items-center justify-center mb-6">
            <BarChart2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Click &amp; Conversion Analytics</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Track total clicks, geographic location of visitors, click-through rates (CTR), and top performing links without intrusive cookies.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Mobile-First Fast Loading</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Sub-100ms load times worldwide ensuring zero drop-off when followers click your link from Instagram or TikTok.
          </p>
        </div>
      </div>
    </div>
  );
}
