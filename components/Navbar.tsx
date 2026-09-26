'use client';

import React from 'react';
import { 
  Zap, 
  Database, 
  BarChart3, 
  Cpu, 
  Sliders, 
  Activity, 
  Download, 
  ShieldAlert, 
  RefreshCw 
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'overview' | 'pipelines' | 'analytics' | 'execution' | 'simulator';
  setActiveTab: (tab: 'overview' | 'pipelines' | 'analytics' | 'execution' | 'simulator') => void;
  isSimulating: boolean;
  setIsSimulating: React.Dispatch<React.SetStateAction<boolean>>;
  onBurstIngest: () => void;
  onExport: () => void;
  onEmergencyKillswitch: () => void;
  eventsPerSec: number;
}

export function Navbar({
  activeTab,
  setActiveTab,
  isSimulating,
  setIsSimulating,
  onBurstIngest,
  onExport,
  onEmergencyKillswitch,
  eventsPerSec,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      {/* Top micro-bar */}
      <div className="border-b border-slate-800/80 px-4 py-1.5 text-xs flex flex-wrap items-center justify-between text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-emerald-400 font-semibold tracking-wider">PIPELINE CDC LIVE</span>
          </span>
          <span className="text-slate-600">|</span>
          <span className="font-mono text-slate-300">
            INGESTION: <strong className="text-cyan-400 font-semibold">{eventsPerSec.toLocaleString()}</strong> events/s
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 font-mono">LATENCY P99: <strong className="text-slate-200">22ms</strong></span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 font-mono">CLUSTER: <span className="text-indigo-300">eu-west2-edge</span></span>
        </div>

        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors flex items-center gap-1 border ${
              isSimulating 
                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60'
                : 'bg-amber-950/60 border-amber-500/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            <Activity className="h-3 w-3" />
            {isSimulating ? 'STREAM ACTIVE' : 'STREAM PAUSED'}
          </button>

          <button
            onClick={onBurstIngest}
            className="px-2 py-0.5 rounded text-[11px] font-mono transition-colors bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/50 flex items-center gap-1"
            title="Inject 50,000 synthetic conversion events into pipelines"
          >
            <RefreshCw className="h-3 w-3" />
            +50k Ingest Burst
          </button>

          <button
            onClick={onEmergencyKillswitch}
            className="px-2 py-0.5 rounded text-[11px] font-mono transition-colors bg-rose-950/50 border border-rose-500/40 text-rose-300 hover:bg-rose-900/50 flex items-center gap-1"
            title="Emergency budget guardrail killswitch"
          >
            <ShieldAlert className="h-3 w-3" />
            Stop-Loss Guard
          </button>

          <button
            onClick={onExport}
            className="px-2 py-0.5 rounded text-[11px] font-mono transition-colors bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-1"
          >
            <Download className="h-3 w-3" />
            Export Intel
          </button>
        </div>
      </div>

      {/* Main header navbar */}
      <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
            <div className="h-full w-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <Zap className="h-5 w-5 text-cyan-400 fill-cyan-400/20" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-white font-mono">
                X-ION<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-mono">
                CORE v2.4
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Campaign Intelligence Infrastructure &amp; Real-time Execution
            </p>
          </div>
        </div>

        {/* Tab navigation */}
        <nav className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Activity className="h-3.5 w-3.5" />
            Overview
          </button>

          <button
            onClick={() => setActiveTab('pipelines')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'pipelines'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Database className="h-3.5 w-3.5" />
            Data Pipelines
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'analytics'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BarChart3 className="h-3.5 w-3.5" />
            Attribution Engine
          </button>

          <button
            onClick={() => setActiveTab('execution')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'execution'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Cpu className="h-3.5 w-3.5" />
            Execution Rules
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Sliders className="h-3.5 w-3.5" />
            Strategy Simulator
          </button>
        </nav>
      </div>
    </header>
  );
}
