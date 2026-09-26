'use client';

import React from 'react';
import { CampaignData } from '@/types/xion';
import { X, TrendingUp, Target, DollarSign, Flame, Sparkles, CheckCircle2 } from 'lucide-react';

interface CampaignDetailModalProps {
  campaign: CampaignData | null;
  onClose: () => void;
  onScale: (id: string) => void;
  onThrottle: (id: string) => void;
}

export function CampaignDetailModal({
  campaign,
  onClose,
  onScale,
  onThrottle,
}: CampaignDetailModalProps) {
  if (!campaign) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                {campaign.channelLabel}
              </span>
              <span className="text-xs font-mono text-slate-500">{campaign.id}</span>
            </div>
            <h3 className="text-base font-bold text-white mt-1">{campaign.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Micro-metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-500 block text-[10px]">TODAY SPEND</span>
            <span className="text-white font-bold text-sm mt-0.5 block">
              ${campaign.spendToday.toLocaleString()}
            </span>
            <span className="text-[10px] text-slate-500">Cap: ${campaign.budgetDaily.toLocaleString()}</span>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-500 block text-[10px]">CURRENT ROAS</span>
            <span className={`text-sm font-bold mt-0.5 block ${campaign.roas >= campaign.targetRoas ? 'text-emerald-400' : 'text-amber-400'}`}>
              {campaign.roas.toFixed(2)}x
            </span>
            <span className="text-[10px] text-slate-500">Target: {campaign.targetRoas.toFixed(2)}x</span>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-500 block text-[10px]">ACQUISITION CPA</span>
            <span className="text-white font-bold text-sm mt-0.5 block">
              ${campaign.cpa.toFixed(2)}
            </span>
            <span className="text-[10px] text-emerald-400">Target: ${campaign.targetCpa.toFixed(2)}</span>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
            <span className="text-slate-500 block text-[10px]">ATTR. SHARE</span>
            <span className="text-cyan-400 font-bold text-sm mt-0.5 block">
              {campaign.attributionShare}%
            </span>
            <span className="text-[10px] text-slate-500">Game-theory lift</span>
          </div>
        </div>

        {/* Creative Health & Recommendations */}
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">CREATIVE DECAY &amp; FATIGUE STATUS</span>
              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                campaign.creativeFatigue === 'high' ? 'bg-rose-950 text-rose-300 border border-rose-800' :
                campaign.creativeFatigue === 'moderate' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                'bg-emerald-950 text-emerald-300 border border-emerald-800'
              }`}>
                {campaign.creativeFatigue} Fatigue
              </span>
            </div>
            <div className="text-slate-300 text-xs">
              Impressions: <strong>{campaign.impressions.toLocaleString()}</strong> | Clicks: <strong>{campaign.clicks.toLocaleString()}</strong> | CTR: <strong>{campaign.ctr}%</strong>
            </div>
          </div>

          <div className="p-3.5 bg-indigo-950/40 rounded-lg border border-indigo-800/60 space-y-2">
            <div className="text-indigo-300 font-bold flex items-center gap-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Algorithmic Intelligence Recommendations:</span>
            </div>
            <ul className="space-y-1.5 text-slate-300 text-xs pl-2">
              {campaign.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action buttons */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onThrottle(campaign.id);
                onClose();
              }}
              className="px-3 py-2 bg-amber-950 hover:bg-amber-900 text-amber-300 border border-amber-800 rounded font-mono text-xs transition-colors"
            >
              Throttle Daily Spend (-20%)
            </button>
            <button
              onClick={() => {
                onScale(campaign.id);
                onClose();
              }}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs rounded transition-colors shadow-lg shadow-cyan-500/20"
            >
              Auto-Scale Budget (+15%)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
