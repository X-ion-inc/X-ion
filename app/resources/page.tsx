'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Wrench, Copy, Check, Sparkles, BookOpen, FileText, ArrowRight, HelpCircle } from 'lucide-react';

export default function ResourcesPage() {
  // Character counter state
  const [inputText, setInputText] = useState('Excited to announce our new product update! 🚀 Over 273k creators use X-ion to schedule, analyze, and build meaningful relationships across social media. #marketing #saas #socialmedia');

  // Bio generator state
  const [bioIndustry, setBioIndustry] = useState<'saas' | 'creator' | 'ecommerce' | 'agency'>('saas');
  const [bioTone, setBioTone] = useState<'punchy' | 'professional' | 'fun'>('punchy');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Platform limits
  const limits = {
    x: 280,
    threads: 500,
    instagram: 2200,
    tiktok: 2200,
    linkedin: 3000,
  };

  const charCount = inputText.length;
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
  const hashtagCount = (inputText.match(/#\w+/g) || []).length;

  const bioTemplates = {
    saas: {
      punchy: [
        'Building software that cuts your busywork in half. ⚡️ Trusted by 10k+ teams.',
        'The social workspace for modern marketers. Zero fluff, 100% impact. 🚀',
        'Turn your audience into recurring revenue. Free trial in bio ⬇️'
      ],
      professional: [
        'Enterprise social media management built for scale, compliance, and velocity.',
        'Helping high-growth brands streamline multi-channel publishing and analytics.',
        'Award-winning marketing automation platform. Learn more at our website.'
      ],
      fun: [
        'Making social media marketing suck 90% less. Powered by coffee & clean code ☕️',
        'We do the boring scheduling stuff so you can do the fun viral stuff 🎈',
        'Your marketing team’s new favorite secret weapon (shhh don’t tell the boss).'
      ]
    },
    creator: {
      punchy: [
        'Content creator & visual storyteller. Teaching you how to build in public 🎥',
        'Weekly tips on creator business growth. Read my free newsletter below ⬇️',
        'Documenting the messy journey from $0 to $1M. Join 50k subscribers.'
      ],
      professional: [
        'Keynote speaker, author, and digital media consultant. Inquiries: contact in bio.',
        'Strategic content advisor to Fortune 500 executives and top creators.',
        'Exploring the intersection of AI, creativity, and modern media economics.'
      ],
      fun: [
        'Professional over-thinker sharing hot takes and bad sketches daily ✨',
        'Probably editing a video right now. Click the link before I post another one 👀',
        'Living proof that you can turn weird internet ideas into a real career.'
      ]
    },
    ecommerce: {
      punchy: [
        'Ethically sourced goods crafted to last a lifetime. Free US shipping $50+ 📦',
        'Upgrade your everyday carry. Shop the new Spring Collection today 🌿',
        'Designed in California. Made with recycled materials. Shop now ⬇️'
      ],
      professional: [
        'Pioneering sustainable lifestyle essentials since 2018. Certified B Corp.',
        'Premium quality essentials designed for minimalist living. Worldwide delivery.',
        'Official account. Tag #MyStyle to be featured on our feed.'
      ],
      fun: [
        'Things you probably need, and definitely want. Treat yourself today 🛍️',
        'Warning: Our products may cause spontaneous compliments from strangers 😉',
        'Your daily dose of aesthetic dopamine. Tap to shop the look.'
      ]
    },
    agency: {
      punchy: [
        'We scale D2C brands past $10M with performance creative & organic social 📈',
        'Award-winning creative studio. We make ads people actually want to watch.',
        'Full-funnel growth agency. Let’s talk about your next breakout quarter.'
      ],
      professional: [
        'Integrated digital communications & social strategy for leading global enterprises.',
        'Data-driven media agency delivering verified ROI for Fortune 1000 brands.',
        'Specializing in brand identity, influencer relations, and paid performance media.'
      ],
      fun: [
        'We turn scrolling thumbs into paying customers (without annoying anyone) 🎯',
        'Your CMO’s therapist and your growth hacker’s secret cheat code.',
        'Making brand content that doesn’t look like traditional corporate cringe.'
      ]
    }
  };

  const currentBios = bioTemplates[bioIndustry][bioTone];

  const handleCopyBio = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2c4bff] bg-blue-50 px-3 py-1 rounded-full mb-4">
          <Wrench className="w-3.5 h-3.5" />
          <span>Free Tools &amp; Knowledge Hub</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Free tools to level up your social game
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          No signup or credit card required. Use these real-time tools to write better copy, test character limits, and optimize your bios.
        </p>
      </div>

      {/* Tool 1: Live Character & Hashtag Counter */}
      <div id="counter" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-gray-100">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tool #1</div>
              <h2 className="text-2xl font-bold text-gray-950 mt-0.5">Live Social Media Character Counter</h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-600">
              <span>{charCount} Characters</span>
              <span>·</span>
              <span>{wordCount} Words</span>
              <span>·</span>
              <span>{hashtagCount} Hashtags</span>
            </div>
          </div>

          <div className="mt-6">
            <textarea
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type or paste your post copy here to verify platform limits in real time..."
              className="w-full p-4 rounded-2xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2c4bff] leading-relaxed"
            />
          </div>

          {/* Platform Limits Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { name: 'X (Twitter)', limit: limits.x },
              { name: 'Threads', limit: limits.threads },
              { name: 'Instagram', limit: limits.instagram },
              { name: 'TikTok', limit: limits.tiktok },
              { name: 'LinkedIn', limit: limits.linkedin },
            ].map((p) => {
              const remaining = p.limit - charCount;
              const isOver = remaining < 0;
              const percent = Math.min(100, Math.round((charCount / p.limit) * 100));

              return (
                <div key={p.name} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-gray-700">
                    <span>{p.name}</span>
                    <span className={isOver ? 'text-rose-600 font-bold' : 'text-gray-400'}>
                      {remaining >= 0 ? `${remaining} left` : `${Math.abs(remaining)} over`}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div
                      style={{ width: `${percent}%` }}
                      className={`h-full transition-all ${isOver ? 'bg-rose-500' : percent > 85 ? 'bg-amber-400' : 'bg-[#2c4bff]'}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tool 2: Social Media Bio Generator */}
      <div id="bio-generator" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm">
          <div className="pb-6 border-b border-gray-100">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tool #2</div>
            <h2 className="text-2xl font-bold text-gray-950 mt-0.5">High-Converting Bio Generator</h2>
            <p className="text-xs text-gray-500 mt-1">Pick your industry and preferred style to generate tailored bios ready to copy.</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl text-xs">
              {[
                { id: 'saas', label: 'Tech & SaaS' },
                { id: 'creator', label: 'Creator' },
                { id: 'ecommerce', label: 'E-commerce' },
                { id: 'agency', label: 'Agency' },
              ].map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setBioIndustry(ind.id as any)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    bioIndustry === ind.id ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl text-xs">
              {[
                { id: 'punchy', label: 'Punchy & Short' },
                { id: 'professional', label: 'Professional' },
                { id: 'fun', label: 'Humorous & Casual' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setBioTone(t.id as any)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                    bioTone === t.id ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Bio Cards */}
          <div className="mt-6 space-y-3">
            {currentBios.map((bio, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between gap-4 hover:border-gray-200 transition-colors"
              >
                <span className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                  {bio}
                </span>
                <button
                  onClick={() => handleCopyBio(bio, index)}
                  className="px-3.5 py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-100 text-xs font-semibold text-gray-700 flex items-center gap-1.5 shrink-0 shadow-2xs transition-colors cursor-pointer"
                >
                  {copiedIndex === index ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
                  <span>{copiedIndex === index ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guides & Resources Library */}
      <div id="glossary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-950 text-center tracking-tight">
          Free Guides &amp; Strategy Playbooks
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2c4bff] flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950">Social Media Marketing 101</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                The comprehensive beginner guide covering audience research, channel selection, content pillars, and consistency tactics.
              </p>
            </div>
            <Link href="/blog" className="mt-6 text-xs font-bold text-[#2c4bff] hover:underline flex items-center gap-1">
              <span>Read guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950">Social Media Terms Glossary</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                From CTR and ROAS to UGC, Fediverse, and Algorithmic Decay. A dictionary of 150+ modern social marketing acronyms and terms.
              </p>
            </div>
            <Link href="/blog" className="mt-6 text-xs font-bold text-[#2c4bff] hover:underline flex items-center gap-1">
              <span>Explore glossary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div id="templates" className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950">Content Calendar Template</h3>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Plug-and-play spreadsheet and Notion template to plan 90 days of content without losing your sanity.
              </p>
            </div>
            <a
              href="https://app.scrutium.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-xs font-bold text-[#2c4bff] hover:underline flex items-center gap-1"
            >
              <span>Download free template</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
