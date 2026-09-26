'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  Share2, 
  HelpCircle, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  ArrowUpRight,
  Info,
  Compass
} from 'lucide-react';
import { AttributionModelType, AttributionChannelMetric } from '@/types/xion';
import { getAttributionMetricsByModel } from '@/lib/data';

export function AnalyticsTab() {
  const [selectedModel, setSelectedModel] = useState<AttributionModelType>('shapley');

  const metrics: AttributionChannelMetric[] = getAttributionMetricsByModel(selectedModel);
  const totalAttributedRevenue = metrics.reduce((acc, m) => acc + m.attributedRevenue, 0);
  const totalAttributedConversions = metrics.reduce((acc, m) => acc + m.attributedConversions, 0);

  const modelDescriptions: Record<AttributionModelType, { title: string; badge: string; desc: string; strategyImpact: string }> = {
    shapley: {
      title: 'Data-Driven Shapley Value (Game Theory)',
      badge: 'RECOMMENDED FOR OMNICHANNEL',
      desc: 'Applies cooperative game theory to measure each channel’s unique marginal contribution across 2^N touchpoint coalition combinations.',
      strategyImpact: 'Credits upper-funnel programmatic CTV and TikTok for assisting bottom-funnel Google search purchases, preventing premature ad group pauses.',
    },
    markov: {
      title: 'Algorithmic Markov Chain Attribution',
      badge: 'STOCHASTIC TRANSITION GRAPH',
      desc: 'Simulates customer journey graphs and computes removal effect scores: if a channel is removed from the network, how much does conversion probability drop?',
      strategyImpact: 'Highlight bottleneck channels in the consideration phase and high-loss transition states.',
    },
    data_driven: {
      title: 'Custom Deep Learning Data-Driven Attribution',
      badge: 'NEURAL ATTRIBUTION MATRIX',
      desc: 'Trained on historical customer journeys, time-lags, device switches, and frequency capping using Snowflake unified identity resolution.',
      strategyImpact: 'Best for large datasets with complex 14-30 day lag cycles and multiple retargeting exposures.',
    },
    time_decay: {
      title: '7-Day Half-Life Exponential Time Decay',
      badge: 'RECENCY-WEIGHTED',
      desc: 'Touchpoints closer in time to the conversion event receive significantly more weight following an exponential decay half-life curve.',
      strategyImpact: 'Favors bottom-of-funnel retargeting and intent capture; biases heavily toward search and cart abandonment ads.',
    },
    first_touch: {
      title: 'First-Touch Discovery Attribution',
      badge: 'TOP-OF-FUNNEL PROSPECTING',
      desc: 'Allocates 100% of conversion credit to the very first recorded customer touchpoint that initiated the user acquisition journey.',
      strategyImpact: 'Maximizes credit for broad prospecting on TikTok and Programmatic video; underweights search and remarketing.',
    },
  };

  return (
    <div className="space-y-6">
      {/* Top Selector Banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-cyan-400" />
              <h2 className="text-base font-semibold text-white">
                Multi-Touch Attribution &amp; Incrementality Engine
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Select an attribution model to evaluate how marketing budget generates incremental enterprise revenue.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 font-mono text-xs">
            {(
              [
                { id: 'shapley', label: 'Shapley (Game Theory)' },
                { id: 'markov', label: 'Markov Chain' },
                { id: 'data_driven', label: 'Neural Data-Driven' },
                { id: 'time_decay', label: 'Time Decay' },
                { id: 'first_touch', label: 'First Touch' },
              ] as const
            ).map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModel(m.id)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedModel === m.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected model details card */}
        <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-200 font-mono">
                {modelDescriptions[selectedModel].title}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                {modelDescriptions[selectedModel].badge}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-2xl">
              {modelDescriptions[selectedModel].desc}
            </p>
          </div>

          <div className="text-xs text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-900/60 p-2.5 rounded-lg max-w-md">
            <div className="font-semibold flex items-center gap-1 text-[11px] text-emerald-300">
              <Sparkles className="h-3 w-3" /> STRATEGIC IMPACT:
            </div>
            <div className="text-[11px] mt-0.5 text-slate-300">
              {modelDescriptions[selectedModel].strategyImpact}
            </div>
          </div>
        </div>
      </div>

      {/* Main Attribution Distribution Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Channel Attributed Shares & Metrics */}
        <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Share2 className="h-4 w-4 text-cyan-400" />
              <span>Attributed Revenue &amp; Weight Distribution</span>
            </h3>
            <div className="text-xs font-mono text-slate-400">
              Total Model Value: <strong className="text-white">${totalAttributedRevenue.toLocaleString()}</strong> ({totalAttributedConversions.toLocaleString()} orders)
            </div>
          </div>

          {/* Channel Bars */}
          <div className="space-y-4">
            {metrics.map((item) => {
              const colorClasses = 
                item.channel === 'google' ? 'bg-amber-400 text-amber-400' :
                item.channel === 'meta' ? 'bg-blue-400 text-blue-400' :
                item.channel === 'programmatic' ? 'bg-purple-400 text-purple-400' :
                'bg-pink-400 text-pink-400';

              return (
                <div key={item.channel} className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${colorClasses.split(' ')[0]}`} />
                      <span className="font-bold text-slate-200">{item.channelLabel}</span>
                      <span className="text-slate-500">[{item.channel.toUpperCase()}]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400">
                        {item.attributedConversions} conv.
                      </span>
                      <span className="text-slate-200 font-bold">
                        ${item.attributedRevenue.toLocaleString()}
                      </span>
                      <span className="text-cyan-400 font-semibold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                        {item.sharePct}% share
                      </span>
                    </div>
                  </div>

                  {/* Bar */}
                  <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden flex">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${colorClasses.split(' ')[0]}`}
                      style={{ width: `${item.sharePct}%` }}
                    />
                  </div>

                  {/* Sub metrics: ROAS & Confidence interval */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                    <span>
                      Model Blended ROAS: <strong className="text-emerald-400">{item.blendedRoas}x</strong>
                    </span>
                    <span>
                      95% Confidence Interval: [{item.confidenceInterval[0]}% — {item.confidenceInterval[1]}%]
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Col: Journey Touchpoint Path Length Breakdown */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-4 backdrop-blur-sm">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <Layers className="h-4 w-4 text-cyan-400" />
            <span>Omnichannel Path Length Analysis</span>
          </h3>
          <p className="text-xs text-slate-400">
            Multi-touch customer journey distribution across unified identity graph sessions.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-slate-300">
                <span>1 Touchpoint (Direct / Monolithic)</span>
                <span className="text-cyan-400 font-bold">28.4%</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full rounded-full" style={{ width: '28.4%' }} />
              </div>
              <div className="text-[10px] text-slate-500">Average time to convert: 1.2 hours</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-slate-300">
                <span>2 - 3 Touchpoints (Cross-Channel)</span>
                <span className="text-cyan-400 font-bold">52.1%</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full rounded-full" style={{ width: '52.1%' }} />
              </div>
              <div className="text-[10px] text-slate-500">Typical sequence: Programmatic CTV → TikTok → Search</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-slate-300">
                <span>4+ Touchpoints (Extended Research)</span>
                <span className="text-cyan-400 font-bold">19.5%</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full rounded-full" style={{ width: '19.5%' }} />
              </div>
              <div className="text-[10px] text-slate-500">Highest AOV basket sizes (+$142 vs 1-touch)</div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-cyan-950/40 rounded-lg border border-cyan-800/60 text-xs font-mono text-cyan-300 flex items-start gap-2">
            <Compass className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
            <div>
              <strong>Executive Recommendation:</strong> 71.6% of converted journeys involve 2+ channels. Shifting spend based on Shapley values generates an estimated +14.2% lift over single-channel last-click models.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
