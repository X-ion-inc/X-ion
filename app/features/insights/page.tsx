'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BarChart2, TrendingUp, Clock, FileText, ArrowRight, CheckCircle2, Award, Zap } from 'lucide-react';

export default function InsightsFeaturePage() {
  const [activeMetric, setActiveMetric] = useState<'engagement' | 'reach' | 'timing'>('engagement');

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-4">
          <BarChart2 className="w-3.5 h-3.5" />
          <span>Analytics &amp; Insights</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Clear answers, not just vanity metrics
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Understand which content drives true engagement, discover your exact peak posting times, and generate export-ready reports.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.scrutium.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Track your performance free
          </a>
          <Link
            href="/pricing"
            className="px-6 py-3.5 rounded-full border border-gray-300 hover:border-gray-900 text-gray-800 font-semibold text-sm transition-all"
          >
            See pricing tiers
          </Link>
        </div>
      </div>

      {/* Interactive Analytics Simulator */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Live Analytics Simulator</div>
              <h3 className="text-xl font-bold text-gray-950 mt-1">Multi-Channel Performance Overview</h3>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl">
              <button
                onClick={() => setActiveMetric('engagement')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeMetric === 'engagement' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Engagement Rate
              </button>
              <button
                onClick={() => setActiveMetric('reach')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeMetric === 'reach' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Impressions &amp; Reach
              </button>
              <button
                onClick={() => setActiveMetric('timing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeMetric === 'timing' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Best Time Heatmap
              </button>
            </div>
          </div>

          {activeMetric === 'engagement' && (
            <div className="mt-8 space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <div className="text-xs text-blue-900 font-semibold">Average Engagement</div>
                  <div className="text-2xl font-extrabold text-[#2c4bff] mt-1">5.82%</div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">↑ +2.4% vs industry avg</div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div className="text-xs text-emerald-900 font-semibold">Top Performing Format</div>
                  <div className="text-2xl font-extrabold text-emerald-700 mt-1">Carousels</div>
                  <div className="text-[11px] text-emerald-800 font-semibold mt-1">3.4x more saves &amp; shares</div>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
                  <div className="text-xs text-purple-900 font-semibold">Net Follower Growth</div>
                  <div className="text-2xl font-extrabold text-purple-700 mt-1">+1,842</div>
                  <div className="text-[11px] text-purple-800 font-semibold mt-1">Past 30 days across accounts</div>
                </div>
              </div>

              {/* Bar Chart Simulation */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-xs font-bold text-gray-700 mb-4">Weekly Engagement By Day</div>
                <div className="flex items-end justify-between h-40 gap-2 sm:gap-4 pt-6">
                  {[
                    { day: 'Mon', h: '45%', val: '4.2%' },
                    { day: 'Tue', h: '75%', val: '6.8%' },
                    { day: 'Wed', h: '90%', val: '7.4%' },
                    { day: 'Thu', h: '85%', val: '7.1%' },
                    { day: 'Fri', h: '60%', val: '5.2%' },
                    { day: 'Sat', h: '35%', val: '3.1%' },
                    { day: 'Sun', h: '50%', val: '4.5%' },
                  ].map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <span className="text-[10px] text-gray-500 font-bold">{item.val}</span>
                      <div
                        style={{ height: item.h }}
                        className={`w-full rounded-t-lg transition-all ${
                          i === 2 ? 'bg-[#2c4bff]' : 'bg-blue-300 hover:bg-blue-400'
                        }`}
                      />
                      <span className="text-xs font-medium text-gray-600">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeMetric === 'reach' && (
            <div className="mt-8 space-y-4 animate-in fade-in duration-200">
              <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Total 30-Day Impressions</div>
                  <div className="text-3xl font-extrabold text-gray-950 mt-1">428,910</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Organic Reach Ratio</div>
                  <div className="text-xl font-bold text-emerald-600 mt-1">94.2% organic</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Your LinkedIn document carousels and Instagram Reels drove 68% of total impressions this month. Repurposing these assets on TikTok yielded an additional 42k views with zero added production cost.
              </p>
            </div>
          )}

          {activeMetric === 'timing' && (
            <div className="mt-8 animate-in fade-in duration-200">
              <div className="text-xs font-bold text-gray-700 mb-2">Algorithm Recommended Times for Your Audience:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="font-bold text-emerald-950">LinkedIn Peak</div>
                  <div className="text-emerald-700 font-semibold mt-1">Tuesday &amp; Thursday at 8:45 AM</div>
                </div>
                <div className="p-4 bg-pink-50 rounded-xl border border-pink-200">
                  <div className="font-bold text-pink-950">Instagram Peak</div>
                  <div className="text-pink-700 font-semibold mt-1">Wednesday at 12:15 PM &amp; 7:30 PM</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="font-bold text-blue-950">TikTok Peak</div>
                  <div className="text-blue-700 font-semibold mt-1">Friday at 5:00 PM - 8:00 PM</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2c4bff] flex items-center justify-center mb-6">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Smart Schedule Slots</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Our machine learning model analyzes your followers&apos; exact active hours to recommend custom posting times that maximize early retention.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Content Decay Curves</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            See how long each post maintains momentum and automatically flag evergreen posts that are ready to be recycled and reshared.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">1-Click PDF Reports</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Generate polished, branded reports for leadership, clients, or investors in seconds. Export directly to PDF or share via live web link.
          </p>
        </div>
      </div>
    </div>
  );
}
