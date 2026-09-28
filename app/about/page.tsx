'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Users, Heart, Award, ArrowRight, DollarSign, Globe, Sparkles } from 'lucide-react';
import { OPEN_METRICS } from '@/lib/bufferData';

export default function AboutPage() {
  const [role, setRole] = useState<'engineer' | 'designer' | 'marketer' | 'advocate'>('engineer');
  const [experience, setExperience] = useState<'senior' | 'lead' | 'principal'>('senior');

  const roleBaseSalaries = {
    engineer: 142000,
    designer: 128000,
    marketer: 118000,
    advocate: 92000
  };

  const experienceMultipliers = {
    senior: 1.0,
    lead: 1.25,
    principal: 1.5
  };

  const calculatedSalary = Math.round(roleBaseSalaries[role] * experienceMultipliers[experience]);

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Our Story &amp; Philosophy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          A radically transparent tech company
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We believe building a sustainable, profitable business doesn&apos;t require sacrificing human values. Since day one, we publish our revenues, salaries, and diversity metrics openly.
        </p>
      </div>

      {/* Live Public Metrics Dashboard */}
      <div id="metrics" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gray-100">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Open Startup Dashboard</div>
              <h3 className="text-2xl font-extrabold text-gray-950 mt-1">Live Company Metrics</h3>
            </div>
            <div className="text-xs text-gray-500 font-medium">
              Updated live from Stripe &amp; HR systems
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-gray-950">{OPEN_METRICS.mau}</div>
              <div className="text-xs font-bold text-gray-900 mt-1">{OPEN_METRICS.mauSubtitle}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">Creators &amp; teams worldwide</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#2c4bff]">{OPEN_METRICS.arr}</div>
              <div className="text-xs font-bold text-gray-900 mt-1">{OPEN_METRICS.arrSubtitle}</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Profitable &amp; self-sustained</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-gray-950">{OPEN_METRICS.customers}</div>
              <div className="text-xs font-bold text-gray-900 mt-1">{OPEN_METRICS.customersSubtitle}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">Active subscriptions</div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-black text-gray-950">{OPEN_METRICS.teammates}</div>
              <div className="text-xs font-bold text-gray-900 mt-1">{OPEN_METRICS.teammatesSubtitle}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">100% remote workspace</div>
            </div>
          </div>
        </div>
      </div>

      {/* Transparent Salary Formula Interactive Tool */}
      <div id="salaries" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Open Salaries Calculator</span>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-950 mt-1">
            How we calculate team compensation
          </h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-2xl">
            We don&apos;t negotiate salaries behind closed doors. Everyone at X-ion is paid based on a transparent, standardized formula based on role and impact.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-2">Select Discipline:</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'engineer', label: 'Software Engineer' },
                  { id: 'designer', label: 'Product Designer' },
                  { id: 'marketer', label: 'Product Marketer' },
                  { id: 'advocate', label: 'Customer Advocate' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRole(item.id as any)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-colors cursor-pointer ${
                      role === item.id ? 'bg-[#2c4bff] text-white shadow-xs' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-2">Experience Tier:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'senior', label: 'Senior' },
                  { id: 'lead', label: 'Staff / Lead' },
                  { id: 'principal', label: 'Principal' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setExperience(item.id as any)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-colors cursor-pointer ${
                      experience === item.id ? 'bg-[#2c4bff] text-white shadow-xs' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/80">
                <div className="text-[11px] font-bold text-gray-400 uppercase">Standardized Annual Salary</div>
                <div className="text-3xl font-extrabold text-gray-950 mt-1">
                  ${calculatedSalary.toLocaleString()} USD
                </div>
                <div className="text-xs text-emerald-700 font-semibold mt-1">
                  + Comprehensive health, 4-day work weeks &amp; profit sharing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-950 text-center tracking-tight">
          Values that guide every decision we make
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-950">Default to Transparency</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              We take pride in sharing what most companies keep private: code, pricing decisions, revenues, diversity numbers, and salary calculations.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-950">Cultivate Positivity</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              We strive to be a positive force on the internet. We design tools that prioritize human connection, genuine storytelling, and mental wellbeing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2c4bff] flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-950">Remote &amp; Balanced</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              We have operated 100% remotely for over a decade. We pioneer a 4-day work week with no reduction in pay to support sustainable careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
