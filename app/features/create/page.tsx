'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PenTool, Sparkles, Image as ImageIcon, CheckCircle, ArrowRight, Lightbulb, RefreshCw, Copy, Check } from 'lucide-react';

export default function CreateFeaturePage() {
  const [promptTone, setPromptTone] = useState<'insightful' | 'casual' | 'story'>('insightful');
  const [copied, setCopied] = useState(false);

  const sampleGenerations = {
    insightful: "The best marketing teams don't create more content—they repurpose high-signal ideas.\n\nHere are 3 ways we turn one long-form customer interview into 12 distinct multi-channel assets without losing quality:\n\n1. Extract 2 contrarian pull-quotes for LinkedIn carousels\n2. Clip a 30s takeaway for TikTok & Reels\n3. Synthesize the core lesson into a 5-tweet thread",
    casual: "Hot take: You don't need a 40-slide marketing plan to grow your audience in 2026. 🚀\n\nJust show up 3x a week, answer your customers' real DM questions in public, and stay consistent for 90 days. Who else is keeping it simple this quarter?",
    story: "Four years ago, we nearly shut down our company.\n\nWe were building features nobody wanted and shouting into an empty social void.\n\nEverything turned around the day we started sharing our actual mistakes, our raw revenue numbers, and the lessons learned along the way."
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleGenerations[promptTone]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-4">
          <PenTool className="w-3.5 h-3.5" />
          <span>Create &amp; Ideate</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Never stare at a blank screen again
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Capture fresh ideas on the go, collaborate with your team on drafts, and refine your copy with built-in AI assistance.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.scrutium.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Start creating for free
          </a>
          <Link
            href="/features/publish"
            className="px-6 py-3.5 rounded-full border border-gray-300 hover:border-gray-900 text-gray-800 font-semibold text-sm transition-all"
          >
            Explore publishing tools
          </Link>
        </div>
      </div>

      {/* Interactive AI Content Studio Simulator */}
      <div id="ai" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#2c4bff]">
                <Sparkles className="w-4 h-4" />
                <span>Interactive AI Assistant Studio</span>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mt-1">Select your desired tone:</h3>
            </div>

            <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-xl">
              <button
                onClick={() => setPromptTone('insightful')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  promptTone === 'insightful' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Insightful &amp; Actionable
              </button>
              <button
                onClick={() => setPromptTone('casual')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  promptTone === 'casual' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Casual &amp; Conversational
              </button>
              <button
                onClick={() => setPromptTone('story')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  promptTone === 'story' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Storytelling
              </button>
            </div>
          </div>

          <div className="mt-6 bg-[#fcfcfc] rounded-2xl border border-gray-200 p-6 relative">
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-2xs transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
              <span>{copied ? 'Copied!' : 'Copy draft'}</span>
            </button>

            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Generated Post Preview</div>
            <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed font-normal">
              {sampleGenerations[promptTone]}
            </p>

            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>Reading time: <strong>45 sec</strong></span>
                <span>Optimized for: <strong>LinkedIn &amp; X</strong></span>
              </div>
              <a
                href="https://app.scrutium.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#2c4bff] hover:underline flex items-center gap-1"
              >
                <span>Add directly to your publishing queue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Content Idea Board</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Organize raw concepts, customer quotes, and viral inspirations with tags and columns before writing full post drafts.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2c4bff] flex items-center justify-center mb-6">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Canva &amp; Media Sync</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Create graphics directly inside Canva, pull stock imagery from Unsplash, or sync corporate assets from Google Drive and Dropbox.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Collaborative Review Flow</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Assign drafts to copywriters or clients for review. One-click approvals prevent accidental posts from going live early.
          </p>
        </div>
      </div>
    </div>
  );
}
