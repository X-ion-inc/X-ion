'use client';

import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Layers, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  ArrowUpRight, 
  ArrowDownRight, 
  Play, 
  Pause, 
  Maximize2,
  SlidersHorizontal,
  Flame,
  ShieldCheck
} from 'lucide-react';
import { CampaignData, IntelligenceAlert, PipelineConnector } from '@/types/xion';

interface OverviewTabProps {
  campaigns: CampaignData[];
  alerts: IntelligenceAlert[];
  pipelines: PipelineConnector[];
  onScaleCampaign: (id: string) => void;
  onThrottleCampaign: (id: string) => void;
  onToggleCampaign: (id: string) => void;
  onSelectCampaign: (campaign: CampaignData) => void;
}

export function OverviewTab({
  campaigns,
  alerts,
  pipelines,
  onScaleCampaign,
  onThrottleCampaign,
  onToggleCampaign,
  onSelectCampaign,
}: OverviewTabProps) {
  // Aggregate stats
  const totalDailySpend = campaigns.reduce((acc, c) => acc + c.spendToday, 0);
  const totalConversions = campaigns.reduce((acc, c) => acc + c.conversions, 0);
  const totalDailyBudget = campaigns.reduce((acc, c) => acc + c.budgetDaily, 0);
  const blendedRoas = (
    campaigns.reduce((acc, c) => acc + c.roas * c.spendToday, 0) / (totalDailySpend || 1)
  ).toFixed(2);
  const blendedCpa = (totalDailySpend / (totalConversions || 1)).toFixed(2);
  const totalEventsIngested = pipelines.reduce((acc, p) => acc + p.totalEvents24h, 0);

  return (
    <div className="space-y-6">
      {/* KPI Cards Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Attributed Revenue */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>TODAY'S ATTRIBUTED SPEND</span>
            <DollarSign className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white">
              ${totalDailySpend.toLocaleString()}
            </span>
            <span className="text-xs font-mono text-slate-400">
              / ${totalDailyBudget.toLocaleString()} cap
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
            <ArrowUpRight className="h-3.5 w-3.5" />
            <span>Pacing at 88.4% optimal</span>
          </div>
        </div>

        {/* Blended ROAS */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>BLENDED SHAPLEY ROAS</span>
            <TrendingUp className="h-4 w-4 text-indigo-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white">
              {blendedRoas}x
            </span>
            <span className="text-xs font-mono text-slate-400">
              target: 4.10x
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
            <ArrowUpRight className="h-3.5 w-3.5" />
            <span>+18.7% above baseline target</span>
          </div>
        </div>

        {/* Blended CPA */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>BLENDED CPA &amp; ORDERS</span>
            <Target className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white">
              ${blendedCpa}
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
              {totalConversions.toLocaleString()} conversions
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
            <ArrowDownRight className="h-3.5 w-3.5" />
            <span>-12.4% cost per acquisition</span>
          </div>
        </div>

        {/* Real-time Ingestion Stream */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>24H PIPELINE INGESTION</span>
            <Layers className="h-4 w-4 text-purple-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono text-white">
              {(totalEventsIngested / 1_000_000).toFixed(1)}M
            </span>
            <span className="text-xs font-mono text-slate-400">
              events synced
            </span>
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>6/6 Data Pipelines Healthy (0.001% err)</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Live Campaigns Table & Live Alerts Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left 2 Cols: Active Campaign Intelligence Table */}
        <div className="xl:col-span-2 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <span>Active Campaign Intelligence Matrix</span>
                <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800/60">
                  {campaigns.length} Active Nodes
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-time algorithmic monitoring, pacing, and execution controls.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Sorted by Attribution Share</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3 font-semibold">CAMPAIGN &amp; CHANNEL</th>
                  <th className="pb-3 font-semibold">STATUS</th>
                  <th className="pb-3 font-semibold text-right">DAILY SPEND</th>
                  <th className="pb-3 font-semibold text-right">ROAS</th>
                  <th className="pb-3 font-semibold text-right">CPA</th>
                  <th className="pb-3 font-semibold text-right">ATTR. SHARE</th>
                  <th className="pb-3 font-semibold text-center">HEALTH</th>
                  <th className="pb-3 font-semibold text-right">EXECUTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {campaigns.map((camp) => (
                  <tr key={camp.id} className="hover:bg-slate-800/30 transition-colors group">
                    {/* Name & Channel */}
                    <td className="py-3 pr-2">
                      <button
                        onClick={() => onSelectCampaign(camp)}
                        className="text-left font-medium text-slate-200 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                      >
                        <span className="truncate max-w-[200px] sm:max-w-[260px]">{camp.name}</span>
                        <Maximize2 className="h-3 w-3 opacity-0 group-hover:opacity-100 text-cyan-400" />
                      </button>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                          camp.channel === 'meta' ? 'bg-blue-950 text-blue-300 border border-blue-800/40' :
                          camp.channel === 'google' ? 'bg-amber-950 text-amber-300 border border-amber-800/40' :
                          camp.channel === 'tiktok' ? 'bg-pink-950 text-pink-300 border border-pink-800/40' :
                          'bg-purple-950 text-purple-300 border border-purple-800/40'
                        }`}>
                          {camp.channelLabel}
                        </span>
                        {camp.creativeFatigue === 'high' && (
                          <span className="text-[10px] text-rose-400 flex items-center gap-0.5">
                            <Flame className="h-3 w-3" /> Fatigue Alert
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-2">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                        camp.status === 'scaled' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40' :
                        camp.status === 'active' ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-500/40' :
                        camp.status === 'throttled' ? 'bg-amber-950/80 text-amber-400 border border-amber-500/40' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        {camp.status}
                      </span>
                    </td>

                    {/* Spend */}
                    <td className="py-3 px-2 text-right">
                      <div className="text-slate-100 font-semibold">${camp.spendToday.toLocaleString()}</div>
                      <div className="text-[11px] text-slate-500">${camp.budgetDaily.toLocaleString()} cap</div>
                    </td>

                    {/* ROAS */}
                    <td className="py-3 px-2 text-right">
                      <div className={`font-semibold ${camp.roas >= camp.targetRoas ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {camp.roas.toFixed(2)}x
                      </div>
                      <div className="text-[11px] text-slate-500">tgt: {camp.targetRoas.toFixed(2)}x</div>
                    </td>

                    {/* CPA */}
                    <td className="py-3 px-2 text-right">
                      <div className={`font-semibold ${camp.cpa <= camp.targetCpa ? 'text-emerald-400' : 'text-rose-400'}`}>
                        ${camp.cpa.toFixed(2)}
                      </div>
                      <div className="text-[11px] text-slate-500">tgt: ${camp.targetCpa.toFixed(2)}</div>
                    </td>

                    {/* Attr Share */}
                    <td className="py-3 px-2 text-right">
                      <div className="text-cyan-400 font-semibold">{camp.attributionShare}%</div>
                      <div className="w-16 h-1.5 bg-slate-800 rounded-full ml-auto mt-1 overflow-hidden">
                        <div 
                          className="h-full bg-cyan-400 rounded-full" 
                          style={{ width: `${Math.min(100, camp.attributionShare * 2.5)}%` }} 
                        />
                      </div>
                    </td>

                    {/* Health score */}
                    <td className="py-3 px-2 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                        camp.healthScore >= 90 ? 'bg-emerald-950 text-emerald-400' :
                        camp.healthScore >= 75 ? 'bg-cyan-950 text-cyan-400' :
                        'bg-amber-950 text-amber-400'
                      }`}>
                        {camp.healthScore}/100
                      </span>
                    </td>

                    {/* Execution Actions */}
                    <td className="py-3 pl-2 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => onScaleCampaign(camp.id)}
                          className="px-2 py-1 bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800/60 rounded text-[11px] transition-colors"
                          title="Auto-scale budget +15%"
                        >
                          +15%
                        </button>
                        <button
                          onClick={() => onThrottleCampaign(camp.id)}
                          className="px-2 py-1 bg-amber-950 hover:bg-amber-900 text-amber-400 border border-amber-800/60 rounded text-[11px] transition-colors"
                          title="Throttle budget -20%"
                        >
                          -20%
                        </button>
                        <button
                          onClick={() => onToggleCampaign(camp.id)}
                          className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors"
                          title={camp.status === 'paused' ? 'Resume Campaign' : 'Pause Campaign'}
                        >
                          {camp.status === 'paused' ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Col: Live Intelligence Alerts Stream */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-white flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-cyan-400" />
              <span>Real-Time Strategy Alerts</span>
            </h2>
            <span className="text-[11px] font-mono text-slate-400">
              Live Stream
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Algorithmic anomaly detections and automated guardrail executions.
          </p>

          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-3.5 rounded-lg border text-xs transition-all ${
                  alert.severity === 'critical' ? 'bg-rose-950/30 border-rose-800/50' :
                  alert.severity === 'warning' ? 'bg-amber-950/30 border-amber-800/50' :
                  alert.severity === 'success' ? 'bg-emerald-950/30 border-emerald-800/50' :
                  'bg-cyan-950/30 border-cyan-800/50'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {alert.severity === 'critical' && <AlertTriangle className="h-3.5 w-3.5 text-rose-400 shrink-0" />}
                    {alert.severity === 'warning' && <AlertTriangle className="h-3.5 w-3.5 text-amber-400 shrink-0" />}
                    {alert.severity === 'success' && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />}
                    {alert.severity === 'info' && <Info className="h-3.5 w-3.5 text-cyan-400 shrink-0" />}
                    <span className="font-semibold text-slate-200">{alert.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 shrink-0">{alert.timestamp}</span>
                </div>

                <p className="mt-1.5 text-slate-400 leading-relaxed">
                  {alert.message}
                </p>

                <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-cyan-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    {alert.metric}
                  </span>
                  {alert.automatedAction && (
                    <span className="font-mono text-[10px] text-slate-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Auto: {alert.automatedAction}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
