'use client';

import React, { useState } from 'react';
import { 
  Database, 
  Layers, 
  Terminal, 
  Pause, 
  Play, 
  RefreshCw, 
  Code, 
  Server, 
  CheckCircle, 
  AlertCircle, 
  Zap,
  Filter,
  Eye,
  ArrowRight
} from 'lucide-react';
import { PipelineConnector, PipelineEventLog } from '@/types/xion';

interface PipelinesTabProps {
  pipelines: PipelineConnector[];
  logs: PipelineEventLog[];
  onTogglePipeline: (id: string) => void;
  onSyncPipeline: (id: string) => void;
  onClearLogs: () => void;
  onSelectPipelineSchema: (pipeline: PipelineConnector) => void;
}

export function PipelinesTab({
  pipelines,
  logs,
  onTogglePipeline,
  onSyncPipeline,
  onClearLogs,
  onSelectPipelineSchema,
}: PipelinesTabProps) {
  const [logFilter, setLogFilter] = useState<'all' | 'EVENT_INGEST' | 'IDENTITY_RESOLVED' | 'ATTRIBUTION_CALCULATED' | 'RULE_EVALUATED' | 'SINK_WRITTEN'>('all');
  const [selectedLogPayload, setSelectedLogPayload] = useState<PipelineEventLog | null>(null);

  const filteredLogs = logFilter === 'all' 
    ? logs 
    : logs.filter(l => l.type === logFilter);

  const totalEventsRate = pipelines.reduce((sum, p) => p.status === 'active' ? sum + p.eventsPerSec : sum, 0);
  const avgLatency = Math.round(pipelines.reduce((sum, p) => sum + p.latencyMs, 0) / pipelines.length);

  return (
    <div className="space-y-6">
      {/* Top Pipeline Health Banner */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
            <Server className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">CDC Ingestion Infrastructure &amp; Stream Topology</h2>
            <p className="text-xs text-slate-400">
              Low-latency data pipelines powering real-time campaign attribution and bidstream execution.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="text-right">
            <div className="text-slate-400">AGGREGATE THROUGHPUT</div>
            <div className="text-emerald-400 font-bold">{totalEventsRate.toLocaleString()} ev/s</div>
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <div className="text-right">
            <div className="text-slate-400">AVERAGE LATENCY</div>
            <div className="text-cyan-400 font-bold">{avgLatency} ms</div>
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <div className="text-right">
            <div className="text-slate-400">CONNECTORS</div>
            <div className="text-white font-bold">{pipelines.filter(p => p.status === 'active').length} / {pipelines.length} Active</div>
          </div>
        </div>
      </div>

      {/* Connectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pipelines.map((pipe) => (
          <div 
            key={pipe.id}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 space-y-3.5 hover:border-slate-700 transition-all backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-slate-100">{pipe.name}</h3>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{pipe.channelLabel}</div>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-semibold ${
                pipe.status === 'active' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' :
                pipe.status === 'syncing' ? 'bg-cyan-950 text-cyan-400 border-cyan-800 animate-pulse' :
                'bg-slate-800 text-slate-400 border-slate-700'
              }`}>
                {pipe.status}
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <div>
                <span className="text-slate-500 block text-[10px]">CURRENT RATE</span>
                <span className="text-cyan-300 font-bold">
                  {pipe.status === 'active' ? `${pipe.eventsPerSec.toLocaleString()} /s` : '0 /s'}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">24H VOLUME</span>
                <span className="text-slate-200">
                  {(pipe.totalEvents24h / 1_000_000).toFixed(1)}M events
                </span>
              </div>
              <div className="mt-1">
                <span className="text-slate-500 block text-[10px]">LATENCY P99</span>
                <span className="text-slate-200">{pipe.latencyMs} ms</span>
              </div>
              <div className="mt-1">
                <span className="text-slate-500 block text-[10px]">ERROR RATE</span>
                <span className="text-emerald-400">{(pipe.errorRate * 100).toFixed(3)}%</span>
              </div>
            </div>

            {/* Protocol & Schema Info */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800/60">
              <span className="font-mono text-[11px] bg-slate-800/80 px-2 py-0.5 rounded text-indigo-300">
                {pipe.protocol}
              </span>
              <button
                onClick={() => onSelectPipelineSchema(pipe)}
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
              >
                <Code className="h-3 w-3" />
                Schema ({pipe.schemaFields.length} cols)
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => onTogglePipeline(pipe.id)}
                className={`flex-1 py-1.5 px-3 rounded text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-colors border ${
                  pipe.status === 'active'
                    ? 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border-slate-700'
                    : 'bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border-emerald-700'
                }`}
              >
                {pipe.status === 'active' ? (
                  <>
                    <Pause className="h-3 w-3" /> Pause Ingest
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" /> Resume Ingest
                  </>
                )}
              </button>

              <button
                onClick={() => onSyncPipeline(pipe.id)}
                className="py-1.5 px-3 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 rounded text-xs font-mono transition-colors flex items-center gap-1"
                title="Trigger immediate synthetic batch sync"
              >
                <RefreshCw className="h-3 w-3" />
                Sync Batch
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Live Pipeline Event Log Stream (Terminal style) */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
        <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-slate-200">
              REAL-TIME CDC EVENT LOG STREAM
            </span>
            <span className="text-[10px] font-mono bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800">
              BUFFER: {logs.length} events
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Filter pills */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
              <Filter className="h-3 w-3 text-slate-500 ml-1" />
              {(['all', 'EVENT_INGEST', 'IDENTITY_RESOLVED', 'ATTRIBUTION_CALCULATED', 'RULE_EVALUATED', 'SINK_WRITTEN'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setLogFilter(f)}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    logFilter === f
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f === 'all' ? 'All' : f.replace('_', ' ')}
                </button>
              ))}
            </div>

            <button
              onClick={onClearLogs}
              className="px-2.5 py-1 text-[11px] font-mono text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
            >
              Clear Buffer
            </button>
          </div>
        </div>

        {/* Terminal logs list */}
        <div className="p-4 space-y-1.5 max-h-72 overflow-y-auto font-mono text-xs">
          {filteredLogs.length === 0 ? (
            <div className="py-8 text-center text-slate-500">No logs matching filter.</div>
          ) : (
            filteredLogs.map((log) => (
              <div 
                key={log.id} 
                onClick={() => setSelectedLogPayload(log)}
                className="py-1 px-2 rounded hover:bg-slate-900/80 cursor-pointer flex flex-wrap items-baseline gap-3 text-slate-300 transition-colors border border-transparent hover:border-slate-800"
              >
                <span className="text-slate-500 text-[11px] shrink-0">{log.timestamp}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold uppercase shrink-0 ${
                  log.type === 'EVENT_INGEST' ? 'bg-blue-950 text-blue-400 border border-blue-800/40' :
                  log.type === 'IDENTITY_RESOLVED' ? 'bg-purple-950 text-purple-400 border border-purple-800/40' :
                  log.type === 'ATTRIBUTION_CALCULATED' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40' :
                  log.type === 'RULE_EVALUATED' ? 'bg-amber-950 text-amber-400 border border-amber-800/40' :
                  'bg-cyan-950 text-cyan-400 border border-cyan-800/40'
                }`}>
                  {log.type}
                </span>
                <span className="text-slate-400 text-xs font-medium shrink-0">[{log.pipelineName}]</span>
                <span className="text-slate-200 truncate flex-1">{log.payloadSummary}</span>
                <span className="text-slate-500 text-[11px] shrink-0 font-mono">{log.latencyMs}ms</span>
              </div>
            ))
          )}
        </div>

        {/* Selected Log Inspector */}
        {selectedLogPayload && (
          <div className="border-t border-slate-800 bg-slate-900/90 p-3 text-xs font-mono flex items-center justify-between gap-4">
            <div className="truncate text-slate-300">
              <span className="text-cyan-400 font-bold mr-2">LOG DETAILS:</span>
              <span>{selectedLogPayload.id}</span>
              <span className="mx-2 text-slate-600">|</span>
              <span className="text-slate-400">{selectedLogPayload.payloadSummary}</span>
            </div>
            <button
              onClick={() => setSelectedLogPayload(null)}
              className="text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
