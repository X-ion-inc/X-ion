'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Calendar, Clock, CheckCircle2, ArrowRight, Layers, Smartphone, Sparkles, Filter } from 'lucide-react';
import { getChannelIcon } from '@/components/icons/ChannelLogos';

export default function PublishFeaturePage() {
  const [activeTab, setActiveTab] = useState<'queue' | 'calendar'>('queue');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');

  const samplePosts = [
    {
      id: 1,
      channel: 'instagram',
      time: 'Today, 2:30 PM',
      text: 'Behind the scenes at our spring shoot! How do you curate your workspace? 🌿✨',
      media: 'Photo (Carousel)',
      status: 'Ready to post'
    },
    {
      id: 2,
      channel: 'linkedin',
      time: 'Tomorrow, 9:00 AM',
      text: '3 leadership lessons we learned bootstrapping from $0 to $26M ARR without venture capital.',
      media: 'Document (PDF Slide deck)',
      status: 'Approved by Editor'
    },
    {
      id: 3,
      channel: 'tiktok',
      time: 'Tomorrow, 6:15 PM',
      text: 'POV: Your team ships 5 new features before lunch ⚡️ #techtok #productivity',
      media: 'Short Video (0:24)',
      status: 'Scheduled'
    },
    {
      id: 4,
      channel: 'x',
      time: 'Friday, 11:00 AM',
      text: '1/7 We analyzed 100,000 viral posts to determine the single biggest factor in high retention...',
      media: 'Thread (7 tweets)',
      status: 'Scheduled'
    }
  ];

  const filteredPosts = samplePosts.filter(p => selectedChannel === 'all' || p.channel === selectedChannel);

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2c4bff] bg-blue-50 px-3 py-1 rounded-full mb-4">
          <Send className="w-3.5 h-3.5" />
          <span>Publish &amp; Schedule</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Plan, schedule, and publish without the chaos
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Distribute customized content to Instagram, TikTok, LinkedIn, X, Facebook, and YouTube Shorts from one unified calendar.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.scrutium.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Start publishing for free
          </a>
          <Link
            href="/pricing"
            className="px-6 py-3.5 rounded-full border border-gray-300 hover:border-gray-900 text-gray-800 font-semibold text-sm transition-all"
          >
            Compare plans &amp; pricing
          </Link>
        </div>
      </div>

      {/* Interactive Publishing Workspace Simulator */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Header controls bar */}
          <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4 bg-gray-50/50">
            <div className="flex items-center gap-2 p-1 bg-gray-200/60 rounded-xl">
              <button
                onClick={() => setActiveTab('queue')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'queue' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Publishing Queue</span>
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'calendar' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Calendar Grid</span>
              </button>
            </div>

            {/* Filter by platform */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-gray-500 font-medium">Channel:</span>
              <select
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-2.5 py-1 text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2c4bff]"
              >
                <option value="all">All Channels (4 scheduled)</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
                <option value="tiktok">TikTok</option>
                <option value="x">X (Twitter)</option>
              </select>
            </div>
          </div>

          {/* Queue Tab Content */}
          {activeTab === 'queue' ? (
            <div className="p-6 space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 rounded-2xl border border-gray-100 bg-[#fdfdfd] hover:border-gray-200 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      {getChannelIcon(post.channel, 'w-5 h-5', 20)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-950 uppercase">{post.channel}</span>
                        <span className="text-[11px] text-gray-400">·</span>
                        <span className="text-xs text-gray-500 font-medium">{post.time}</span>
                      </div>
                      <p className="text-sm text-gray-800 mt-1 line-clamp-2 max-w-xl font-normal">
                        {post.text}
                      </p>
                      <div className="text-[11px] text-gray-400 mt-1">
                        Attachment: <span className="font-semibold text-gray-600">{post.media}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                      {post.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Calendar Tab Mockup */
            <div className="p-6">
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-gray-400 pb-3 border-b border-gray-100">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
              <div className="grid grid-cols-7 gap-2 pt-3 min-h-[220px]">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-2 min-h-[100px] border border-gray-100 flex flex-col justify-between">
                    <div className="text-right text-[11px] font-semibold text-gray-400">{20 + i}</div>
                    {i === 1 && (
                      <div className="bg-pink-100 text-pink-800 text-[10px] font-bold p-1 rounded-md">
                        2:30 PM IG
                      </div>
                    )}
                    {i === 2 && (
                      <div className="bg-blue-100 text-blue-800 text-[10px] font-bold p-1 rounded-md">
                        9:00 AM LI
                      </div>
                    )}
                    {i === 4 && (
                      <div className="bg-emerald-100 text-emerald-800 text-[10px] font-bold p-1 rounded-md">
                        11:00 AM X
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-950 text-center tracking-tight">
          Everything built for publishing excellence
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2c4bff] flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-950">Automated Queue Slots</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Define your ideal posting schedule once (e.g. daily at 9am, 1pm, and 6pm). Whenever you add a post, it automatically fills the next open slot.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-950">Platform-Tailored Posts</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Write your core post once, then tailor captions, hashtag placements, and media aspect ratios for each platform before publishing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-950">First-Comment Automation</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Keep your Instagram and LinkedIn captions clean. Automatically push hashtags, links, and disclaimers into the first comment upon publishing.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="bg-white rounded-3xl border border-gray-200 p-10 sm:p-14 shadow-sm">
          <h2 className="text-3xl font-extrabold text-gray-950">
            Start saving 10+ hours every single week
          </h2>
          <p className="mt-3 text-gray-600 text-sm max-w-xl mx-auto">
            Schedule your first post in under 2 minutes. Free forever plan available.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://app.scrutium.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#2c4bff] hover:bg-[#1b3aff] text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Get started for free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
