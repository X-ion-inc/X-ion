'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles, Check, MessageSquare, ThumbsUp, Send, TrendingUp, BarChart3, Plus } from 'lucide-react';
import { CORE_FEATURES } from '@/lib/bufferData';
import { getChannelIcon } from './icons/ChannelLogos';

export function CoreFeaturesSection() {
  const [activeIdeaTab, setActiveIdeaTab] = useState('All');

  return (
    <section className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* 1. PUBLISH (Fuscia theme) */}
          <div className="bg-[#fdf2f8] rounded-3xl p-8 sm:p-10 border border-pink-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-pink-700 font-mono">
                Publish
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight leading-snug">
                <Link href="/features/publish" className="hover:underline">
                  The most complete set of publishing integrations, ever
                </Link>
              </h3>

              {/* Interactive preview illustration of X-ion Publish */}
              <div className="mt-8 rounded-2xl bg-white border border-pink-100 shadow-sm p-4 sm:p-5 space-y-3.5 select-none">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Calendar className="w-4 h-4 text-pink-600" />
                    <span>Queue &amp; Schedule Calendar</span>
                  </div>
                  <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full">
                    3 scheduled today
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#E1306C]">{getChannelIcon('instagram', 'w-4 h-4', 18)}</span>
                      <span className="font-medium text-gray-900 truncate max-w-[200px]">Behind the scenes reel: product drop</span>
                    </div>
                    <span className="text-gray-500 font-mono text-[11px]">Today 14:00</span>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#0A66C2]">{getChannelIcon('linkedin', 'w-4 h-4', 18)}</span>
                      <span className="font-medium text-gray-900 truncate max-w-[200px]">5 lessons from bootstrapping our SaaS to $26M ARR</span>
                    </div>
                    <span className="text-gray-500 font-mono text-[11px]">Today 16:30</span>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50/80 border border-gray-100 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="text-black">{getChannelIcon('threads', 'w-4 h-4', 18)}</span>
                      <span className="font-medium text-gray-900 truncate max-w-[200px]">What is your favorite creator tool in 2026?</span>
                    </div>
                    <span className="text-gray-500 font-mono text-[11px]">Today 19:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-pink-200/60">
              <p className="text-sm text-gray-700 leading-relaxed">
                Schedule your content to the most popular platforms including Facebook, Instagram, TikTok, LinkedIn, Threads, Bluesky, YouTube Shorts, Pinterest, Google Business, Mastodon and X.
              </p>
              <Link 
                href="/features/publish"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-pink-700 hover:text-pink-900 group"
              >
                <span>Learn more about Publish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 2. CREATE (Green theme) */}
          <div className="bg-[#f0fdf4] rounded-3xl p-8 sm:p-10 border border-emerald-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                Create
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight leading-snug">
                <Link href="/features/create" className="hover:underline">
                  Turn any idea into the perfect post
                </Link>
              </h3>

              {/* Interactive preview illustration of X-ion Create Ideas */}
              <div className="mt-8 rounded-2xl bg-white border border-emerald-100 shadow-sm p-4 sm:p-5 space-y-3.5 select-none">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
                  <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-lg">
                    {['All', 'Drafts', 'Repurposed'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setActiveIdeaTab(t)}
                        className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                          activeIdeaTab === t ? 'bg-white text-emerald-800 shadow-sm font-semibold' : 'text-gray-600'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
                    <Plus className="w-3.5 h-3.5" />
                    New Idea
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Idea: Repurpose blog post into carousel</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono px-2 py-0.5 rounded">Ready</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[11px]">
                    &ldquo;Take our top 3 takeaways on organic audience building and format as a 5-slide visual infographic for LinkedIn &amp; Instagram.&rdquo;
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-700 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Assistant prompt generated 3 hook variants</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-200/60">
              <p className="text-sm text-gray-700 leading-relaxed">
                Whether you’re flying solo or working with a team, X-ion has all the features to help you create, organize, and repurpose your content for any channel. There’s also an AI Assistant if you need it.
              </p>
              <Link 
                href="/features/create"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-900 group"
              >
                <span>Learn more about Create</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 3. COMMUNITY (Yellow theme) */}
          <div className="bg-[#fefce8] rounded-3xl p-8 sm:p-10 border border-amber-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                Community
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight leading-snug">
                <Link href="/features/community" className="hover:underline">
                  Reply to comments in a flash
                </Link>
              </h3>

              {/* Interactive preview illustration of Community comments inbox */}
              <div className="mt-8 rounded-2xl bg-white border border-amber-100 shadow-sm p-4 sm:p-5 space-y-3.5 select-none">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <MessageSquare className="w-4 h-4 text-amber-600" />
                    <span>Unified Social Inbox</span>
                  </div>
                  <span className="text-xs font-medium text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
                    Zero unread
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-gray-50/90 border border-gray-100 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-medium text-gray-900">
                        <span className="text-[#E1306C]">{getChannelIcon('instagram', 'w-3.5 h-3.5', 14)}</span>
                        <span>@sarah_design</span>
                      </div>
                      <span className="text-[11px] text-gray-400">2m ago</span>
                    </div>
                    <p className="text-gray-600 text-[11px]">
                      &ldquo;Which camera setup did you use for the lighting in this video? Looks incredible!&rdquo;
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-amber-800 font-semibold">
                      <span className="px-2 py-0.5 bg-amber-50 rounded border border-amber-200">Replied with Quick Macro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-200/60">
              <p className="text-sm text-gray-700 leading-relaxed">
                Engage with your audience across all your channels at 10x speed. X-ion will help you triage and respond to comments from one simple dashboard.
              </p>
              <Link 
                href="/features/community"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-800 hover:text-amber-950 group"
              >
                <span>Learn more about Community</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 4. INSIGHTS (Blue theme) */}
          <div className="bg-[#eff6ff] rounded-3xl p-8 sm:p-10 border border-blue-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                  Insights
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-500 text-white rounded-full">
                  New
                </span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight leading-snug">
                <Link href="/features/insights" className="hover:underline">
                  Answers, not just analytics
                </Link>
              </h3>

              {/* Interactive preview illustration of Insights analytics chart */}
              <div className="mt-8 rounded-2xl bg-white border border-blue-100 shadow-sm p-4 sm:p-5 space-y-3.5 select-none">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span>Cross-Platform Engagement Rate</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +24.6%
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Impressions</div>
                    <div className="text-sm font-bold text-gray-900 mt-0.5">148.2k</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Engagements</div>
                    <div className="text-sm font-bold text-gray-900 mt-0.5">12,410</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100">
                    <div className="text-[10px] text-gray-500 uppercase font-mono">Best Time</div>
                    <div className="text-sm font-bold text-blue-600 mt-0.5">11:00 AM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200/60">
              <p className="text-sm text-gray-700 leading-relaxed">
                Whether it’s basic analytics or in-depth reporting, X-ion will help you learn what works and how to improve.
              </p>
              <Link 
                href="/features/insights"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 group"
              >
                <span>Learn more about Insights</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
