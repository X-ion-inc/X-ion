'use client';

import React, { useState } from 'react';
import { ArrowRight, BarChart2, DollarSign, Users, Globe, Eye, X } from 'lucide-react';
import { OPEN_METRICS } from '@/lib/bufferData';

export function OpenCompanySection() {
  const [showTransparencyModal, setShowTransparencyModal] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top copy and CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2c4bff] font-mono">
              About us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              We are an open company
            </h2>
            <p className="text-base text-gray-600 max-w-2xl leading-relaxed font-normal">
              Since 2013, we’ve shared Buffer’s finances, team salaries, and other key metrics openly. Our commitment to transparency is rooted in our belief that it fosters trust, keeps us accountable, and helps drive positive change within our industry.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={() => setShowTransparencyModal(true)}
              className="px-6 py-3 rounded-2xl bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-sm font-bold shadow-xs hover:shadow transition-all inline-flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-[#2c4bff]" />
              <span>Open dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* MAU */}
          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-mono font-bold uppercase">MAU</span>
              <Users className="w-4 h-4 text-[#2c4bff]" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              {OPEN_METRICS.mau}
            </div>
            <div className="text-xs text-gray-500 font-medium">
              {OPEN_METRICS.mauSubtitle}
            </div>
          </div>

          {/* Total Customers */}
          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-mono font-bold uppercase">CUSTOMERS</span>
              <BarChart2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              {OPEN_METRICS.customers}
            </div>
            <div className="text-xs text-gray-500 font-medium">
              {OPEN_METRICS.customersSubtitle}
            </div>
          </div>

          {/* Teammates */}
          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-mono font-bold uppercase">TEAMMATES</span>
              <Globe className="w-4 h-4 text-orange-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              {OPEN_METRICS.teammates}
            </div>
            <div className="text-xs text-gray-500 font-medium">
              {OPEN_METRICS.teammatesSubtitle}
            </div>
          </div>

          {/* ARR */}
          <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-mono font-bold uppercase">ARR</span>
              <DollarSign className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              {OPEN_METRICS.arr}
            </div>
            <div className="text-xs text-gray-500 font-medium">
              {OPEN_METRICS.arrSubtitle}
            </div>
          </div>
        </div>

      </div>

      {/* Transparency Data Modal */}
      {showTransparencyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-blue-50 text-[#2c4bff] flex items-center justify-center">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-950">Buffer Open Dashboard Metrics</h3>
                  <p className="text-xs text-gray-500">Live audited revenue and growth figures</p>
                </div>
              </div>
              <button
                onClick={() => setShowTransparencyModal(false)}
                className="p-1 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-gray-400 block text-[10px] uppercase font-mono">CURRENT MRR</span>
                <span className="text-xl font-bold text-gray-900 mt-1 block">$2,225,069</span>
                <span className="text-emerald-600 text-[11px]">+1.48% vs previous month</span>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-gray-400 block text-[10px] uppercase font-mono">AVG REVENUE PER USER (ARPA)</span>
                <span className="text-xl font-bold text-gray-900 mt-1 block">$27.21 / mo</span>
                <span className="text-gray-500 text-[11px]">81,756 paying accounts</span>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-gray-400 block text-[10px] uppercase font-mono">NET MRR CHURN</span>
                <span className="text-xl font-bold text-emerald-600 mt-1 block">3.52%</span>
                <span className="text-gray-500 text-[11px]">-12.2% reduction in churn</span>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-gray-400 block text-[10px] uppercase font-mono">LIFETIME VALUE (LTV)</span>
                <span className="text-xl font-bold text-gray-900 mt-1 block">$408.55</span>
                <span className="text-gray-500 text-[11px]">Across all subscription tiers</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 leading-relaxed">
              <strong>Transparent Salaries &amp; Pricing:</strong> Buffer publishes formula-based formulas for all team salaries, equity calculations, and infrastructure costs at <span className="font-mono text-[#2c4bff]">buffer.com/open</span>.
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowTransparencyModal(false)}
                className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-xs font-semibold"
              >
                Close Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
