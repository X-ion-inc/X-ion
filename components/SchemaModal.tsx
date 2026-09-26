'use client';

import React from 'react';
import { Database, X, Code, CheckCircle, Shield } from 'lucide-react';
import { PipelineConnector } from '@/types/xion';

interface SchemaModalProps {
  pipeline: PipelineConnector | null;
  onClose: () => void;
}

export function SchemaModal({ pipeline, onClose }: SchemaModalProps) {
  if (!pipeline) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-cyan-950/80 border border-cyan-800/60 rounded-lg text-cyan-400">
              <Database className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white font-mono">{pipeline.name}</h3>
              <p className="text-xs text-slate-400 font-mono">
                Protocol: {pipeline.protocol} | Channel: {pipeline.channelLabel}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 text-[11px]">
            <span>INGESTION SCHEMA &amp; SERIALIZATION FORMAT</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <Shield className="h-3 w-3" /> GDPR / CCPA Redacted &amp; Hashed
            </span>
          </div>

          <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 space-y-2 max-h-60 overflow-y-auto">
            {pipeline.schemaFields.map((field, idx) => (
              <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-800/60 last:border-none">
                <span className="text-cyan-300 font-bold">{field}</span>
                <span className="text-slate-500 text-[11px]">
                  {field.includes('id') ? 'UUID / STRING (Indexed)' :
                   field.includes('cost') || field.includes('spend') || field.includes('price') ? 'DECIMAL(12,4) (Currency)' :
                   field.includes('at') || field.includes('timestamp') ? 'TIMESTAMP_TZ (UTC)' :
                   field.includes('vector') ? 'VECTOR(1536) / EMBED' :
                   'INTEGER (Metric)'}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2 bg-slate-950/60 rounded border border-slate-800">
              <span className="text-slate-500 block">BUFFER TOPIC</span>
              <span className="text-slate-200">cdc.xion.{pipeline.channel}.v1</span>
            </div>
            <div className="p-2 bg-slate-950/60 rounded border border-slate-800">
              <span className="text-slate-500 block">RETRY POLICY</span>
              <span className="text-slate-200">Exponential (max 5)</span>
            </div>
            <div className="p-2 bg-slate-950/60 rounded border border-slate-800">
              <span className="text-slate-500 block">ENCRYPTION</span>
              <span className="text-emerald-400">TLS 1.3 / AES-256</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
