'use client';

import React, { useState } from 'react';
import { 
  Sliders, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  AlertCircle,
  Zap,
  DollarSign
} from 'lucide-react';

interface SimulatorTabProps {
  onApplyScenario: (summary: string) => void;
}

export function SimulatorTab({ onApplyScenario }: SimulatorTabProps) {
  // Budget allocations in thousands ($k/day)
  const [googleBudget, setGoogleBudget] = useState<number>(7.2);
  const [metaBudget, setMetaBudget] = useState<number>(8.5);
  const [tiktokBudget, setTiktokBudget] = useState<number>(4.0);
  const [ttdBudget, setTtdBudget] = useState<number>(5.5);
  const [deployedSuccess, setDeployedSuccess] = useState(false);

  const totalDailyBudget = googleBudget + metaBudget + tiktokBudget + ttdBudget;

  // Non-linear diminishing returns curve simulation
  // Google High-Intent has high initial ROAS that plateaus after $10k
  const googleRoas = Math.max(3.2, 7.5 - (googleBudget - 5) * 0.35);
  const googleRevenue = googleBudget * googleRoas;

  // Meta Advantage+ has steady scaling efficiency up to $14k
  const metaRoas = Math.max(2.8, 5.4 - (metaBudget - 6) * 0.22);
  const metaRevenue = metaBudget * metaRoas;

  // TikTok has steeper saturation curve
  const tiktokRoas = Math.max(1.8, 3.8 - (tiktokBudget - 3) * 0.55);
  const tiktokRevenue = tiktokBudget * tiktokRoas;

  // Programmatic CTV assists overall funnel lift
  const ttdRoas = Math.max(2.2, 3.9 - (ttdBudget - 4) * 0.28);
  const ttdRevenue = ttdBudget * ttdRoas;

  const totalPredictedRevenue = googleRevenue + metaRevenue + tiktokRevenue + ttdRevenue;
  const blendedRoas = totalPredictedRevenue / (totalDailyBudget || 1);
  const predictedConversions = Math.round((totalPredictedRevenue * 1000) / 165); // ~$165 AOV

  const handleApply = () => {
    const summary = `Deployed Scenario: Google $${googleBudget}k, Meta $${metaBudget}k, TikTok $${tiktokBudget}k, TTD $${ttdBudget}k (Predicted ROAS: ${blendedRoas.toFixed(2)}x)`;
    onApplyScenario(summary);
    setDeployedSuccess(true);
    setTimeout(() => setDeployedSuccess(false), 4000);
  };

  const handlePreset = (type: 'efficiency' | 'scale' | 'holiday' | 'reset') => {
    if (type === 'efficiency') {
      setGoogleBudget(9.5);
      setMetaBudget(9.0);
      setTiktokBudget(2.5);
      setTtdBudget(4.0);
    } else if (type === 'scale') {
      setGoogleBudget(10.0);
      setMetaBudget(12.5);
      setTiktokBudget(6.5);
      setTtdBudget(8.0);
    } else if (type === 'holiday') {
      setGoogleBudget(14.0);
      setMetaBudget(15.0);
      setTiktokBudget(8.0);
      setTtdBudget(10.0);
    } else {
      setGoogleBudget(7.2);
      setMetaBudget(8.5);
      setTiktokBudget(4.0);
      setTtdBudget(5.5);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
            <Sliders className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">
              Data-Driven Campaign Strategy Simulator &amp; Budget Reallocator
            </h2>
            <p className="text-xs text-slate-400">
              Run marginal lift simulations using Shapley-weighted incrementality and diminishing return curves.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePreset('efficiency')}
            className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Max Efficiency
          </button>
          <button
            onClick={() => handlePreset('scale')}
            className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            High Growth
          </button>
          <button
            onClick={() => handlePreset('holiday')}
            className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Surge Peak
          </button>
          <button
            onClick={() => handlePreset('reset')}
            className="p-1 text-xs font-mono rounded bg-slate-800 hover:bg-slate-700 text-slate-400 transition-colors"
            title="Reset to live baseline"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders: 7 Cols */}
        <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white font-mono">
              DAILY CHANNEL BUDGET ALLOCATION ($K / DAY)
            </h3>
            <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
              Total: ${(totalDailyBudget * 1000).toLocaleString()} / day
            </span>
          </div>

          <div className="space-y-5">
            {/* Google Search */}
            <div className="space-y-2 bg-slate-950/70 p-3.5 rounded-lg border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="font-bold text-slate-200">Google Ads (High-Intent Search)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">ROAS: {googleRoas.toFixed(2)}x</span>
                  <span className="text-white font-bold text-sm font-mono">${(googleBudget * 1000).toLocaleString()}</span>
                </div>
              </div>
              <input
                type="range"
                min="2"
                max="20"
                step="0.5"
                value={googleBudget}
                onChange={(e) => setGoogleBudget(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$2,000 / day</span>
                <span>Saturation threshold: ~$11,500</span>
                <span>$20,000 / day</span>
              </div>
            </div>

            {/* Meta Ads */}
            <div className="space-y-2 bg-slate-950/70 p-3.5 rounded-lg border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <span className="font-bold text-slate-200">Meta Advantage+ Prospecting &amp; DPA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">ROAS: {metaRoas.toFixed(2)}x</span>
                  <span className="text-white font-bold text-sm font-mono">${(metaBudget * 1000).toLocaleString()}</span>
                </div>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="0.5"
                value={metaBudget}
                onChange={(e) => setMetaBudget(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$2,000 / day</span>
                <span>Saturation threshold: ~$16,000</span>
                <span>$25,000 / day</span>
              </div>
            </div>

            {/* TikTok Ads */}
            <div className="space-y-2 bg-slate-950/70 p-3.5 rounded-lg border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                  <span className="font-bold text-slate-200">TikTok Spark &amp; Creator Ads</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">ROAS: {tiktokRoas.toFixed(2)}x</span>
                  <span className="text-white font-bold text-sm font-mono">${(tiktokBudget * 1000).toLocaleString()}</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="0.5"
                value={tiktokBudget}
                onChange={(e) => setTiktokBudget(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$1,000 / day</span>
                <span>Saturation threshold: ~$5,500</span>
                <span>$15,000 / day</span>
              </div>
            </div>

            {/* Programmatic CTV */}
            <div className="space-y-2 bg-slate-950/70 p-3.5 rounded-lg border border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  <span className="font-bold text-slate-200">The Trade Desk (Programmatic CTV / Audio)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">ROAS: {ttdRoas.toFixed(2)}x</span>
                  <span className="text-white font-bold text-sm font-mono">${(ttdBudget * 1000).toLocaleString()}</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="18"
                step="0.5"
                value={ttdBudget}
                onChange={(e) => setTtdBudget(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$1,000 / day</span>
                <span>Saturation threshold: ~$9,000</span>
                <span>$18,000 / day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Predicted Lift Outputs: 5 Cols */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-4 backdrop-blur-sm">
            <div className="flex items-center justify-between font-mono text-xs text-slate-400">
              <span>PREDICTED REAL-TIME PERFORMANCE</span>
              <Sparkles className="h-4 w-4 text-cyan-400" />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono">
                <div className="text-[10px] text-slate-500">PREDICTED DAILY REVENUE</div>
                <div className="text-xl font-bold text-white mt-1">
                  ${Math.round(totalPredictedRevenue * 1000).toLocaleString()}
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>+16.4% vs baseline</span>
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono">
                <div className="text-[10px] text-slate-500">PREDICTED BLENDED ROAS</div>
                <div className="text-xl font-bold text-cyan-400 mt-1">
                  {blendedRoas.toFixed(2)}x
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  target threshold: 4.00x
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono">
                <div className="text-[10px] text-slate-500">EST. CONVERSIONS</div>
                <div className="text-xl font-bold text-white mt-1">
                  {predictedConversions.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  orders / 24 hours
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono">
                <div className="text-[10px] text-slate-500">EST. BLENDED CPA</div>
                <div className="text-xl font-bold text-emerald-400 mt-1">
                  ${((totalDailyBudget * 1000) / (predictedConversions || 1)).toFixed(2)}
                </div>
                <div className="text-[11px] text-emerald-400 mt-1">
                  optimal cost efficiency
                </div>
              </div>
            </div>

            {/* Smart intelligence insight */}
            <div className="p-3 bg-indigo-950/40 rounded-lg border border-indigo-800/60 font-mono text-xs space-y-1 text-slate-300">
              <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI Pipeline Optimization Signal</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Shifting budget towards Google Search while maintaining CTV assists provides +$12,400 daily margin without saturating creative fatigue limits.
              </p>
            </div>

            {/* Deploy Button */}
            <div className="pt-2">
              <button
                onClick={handleApply}
                disabled={deployedSuccess}
                className={`w-full py-2.5 px-4 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  deployedSuccess
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20'
                }`}
              >
                {deployedSuccess ? (
                  <>
                    <Check className="h-4 w-4" />
                    Strategy Deployed to Execution Engine!
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4" />
                    Deploy Simulated Strategy to Production
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
