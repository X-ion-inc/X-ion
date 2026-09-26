'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Play, 
  Pause, 
  Plus, 
  Zap, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Sliders,
  Send,
  Webhook
} from 'lucide-react';
import { ExecutionRule, ChannelType } from '@/types/xion';

interface ExecutionTabProps {
  rules: ExecutionRule[];
  onToggleRule: (id: string) => void;
  onAddRule: (rule: ExecutionRule) => void;
  onExecuteEvaluation: () => void;
  evaluationLog: string[];
}

export function ExecutionTab({
  rules,
  onToggleRule,
  onAddRule,
  onExecuteEvaluation,
  evaluationLog,
}: ExecutionTabProps) {
  const [isCreatingRule, setIsCreatingRule] = useState(false);
  const [newRuleName, setNewRuleName] = useState('');
  const [newRuleCondition, setNewRuleCondition] = useState('IF Hourly CPA > $18.00 AND Impressions > 5000');
  const [newRuleAction, setNewRuleAction] = useState<ExecutionRule['action']>('scale_budget');
  const [newRuleActionLabel, setNewRuleActionLabel] = useState('Adjust daily budget');
  const [newRuleChannel, setNewRuleChannel] = useState<ChannelType | 'all'>('meta');
  const [newRulePriority, setNewRulePriority] = useState<ExecutionRule['priority']>('p2');

  const handleCreateRuleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRuleName.trim()) return;

    const created: ExecutionRule = {
      id: `rule-${Date.now()}`,
      name: newRuleName,
      condition: newRuleCondition,
      action: newRuleAction,
      actionLabel: newRuleActionLabel || 'Trigger automated strategy action',
      targetChannel: newRuleChannel,
      status: 'active',
      lastTriggered: 'Never',
      triggerCount: 0,
      priority: newRulePriority,
    };

    onAddRule(created);
    setIsCreatingRule(false);
    setNewRuleName('');
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-950/80 border border-indigo-800/60 text-indigo-400">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">
              Real-Time Algorithmic Execution Engine
            </h2>
            <p className="text-xs text-slate-400">
              Autonomous bidding guardrails, stop-loss triggers, and automated multi-channel spend orchestration.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCreatingRule(true)}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
          >
            <Plus className="h-3.5 w-3.5" />
            Create Execution Rule
          </button>

          <button
            onClick={onExecuteEvaluation}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/60 transition-colors flex items-center gap-1.5"
            title="Evaluate active rules against current live metrics"
          >
            <Zap className="h-3.5 w-3.5" />
            Evaluate Rules Now
          </button>
        </div>
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rules.map((rule) => (
          <div
            key={rule.id}
            className={`rounded-xl border p-4 space-y-3 transition-all backdrop-blur-sm ${
              rule.status === 'active'
                ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                : 'bg-slate-950/40 border-slate-800/60 opacity-60'
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono px-2 py-0.2 rounded font-bold uppercase ${
                    rule.priority === 'p1' ? 'bg-rose-950 text-rose-300 border border-rose-800/60' :
                    rule.priority === 'p2' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' :
                    'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {rule.priority.toUpperCase()} GUARDRAIL
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    TARGET: <strong className="text-slate-200">{rule.targetChannel.toUpperCase()}</strong>
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-slate-100 mt-1.5">
                  {rule.name}
                </h3>
              </div>

              <button
                onClick={() => onToggleRule(rule.id)}
                className={`p-1.5 rounded text-xs font-mono transition-colors ${
                  rule.status === 'active'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700 hover:bg-emerald-900'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
                title={rule.status === 'active' ? 'Pause Rule' : 'Activate Rule'}
              >
                {rule.status === 'active' ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              </button>
            </div>

            {/* Condition preview */}
            <div className="bg-slate-950/80 rounded-lg p-2.5 border border-slate-800/80 text-xs font-mono space-y-1.5">
              <div className="text-[10px] text-slate-500 uppercase tracking-wide">TRIGGER CRITERIA</div>
              <div className="text-cyan-300 font-semibold">{rule.condition}</div>
              <div className="flex items-center gap-1.5 text-emerald-400 pt-1 border-t border-slate-800/60">
                <ArrowRight className="h-3 w-3 shrink-0" />
                <span>Action: {rule.actionLabel}</span>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
              <span>Triggers 24h: <strong className="text-white">{rule.triggerCount}</strong></span>
              <span>Last evaluated: <span className="text-slate-300">{rule.lastTriggered}</span></span>
            </div>
          </div>
        ))}
      </div>

      {/* Execution Audit Log Console */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3 shadow-xl">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-200">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span className="font-bold">LIVE EXECUTION ENGINE DISPATCH AUDIT LOG</span>
          </div>
          <span className="text-slate-500">Autonomous Webhook &amp; API Dispatcher</span>
        </div>

        <div className="bg-slate-900/90 rounded-lg p-3 font-mono text-xs text-slate-300 max-h-48 overflow-y-auto space-y-1.5 border border-slate-800/80">
          {evaluationLog.length === 0 ? (
            <div className="text-slate-500 py-3 text-center">
              No executions yet. Click &ldquo;Evaluate Rules Now&rdquo; to trigger an algorithmic pass.
            </div>
          ) : (
            evaluationLog.map((line, idx) => (
              <div key={idx} className="flex items-baseline gap-2">
                <span className="text-slate-500 text-[11px]">{new Date().toLocaleTimeString()}</span>
                <span className="text-emerald-400">&gt;</span>
                <span>{line}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Create Rule Modal Form */}
      {isCreatingRule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Cpu className="h-4 w-4 text-cyan-400" />
                <span>Configure New Execution Guardrail Rule</span>
              </h3>
              <button
                onClick={() => setIsCreatingRule(false)}
                className="text-slate-400 hover:text-white text-xs font-mono"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleCreateRuleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-slate-300 mb-1">RULE NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Dynamic Spend Throttle on Margin Drop"
                  value={newRuleName}
                  onChange={(e) => setNewRuleName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">TRIGGER CONDITION EXPRESSION</label>
                <input
                  type="text"
                  required
                  value={newRuleCondition}
                  onChange={(e) => setNewRuleCondition(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">TARGET CHANNEL</label>
                  <select
                    value={newRuleChannel}
                    onChange={(e) => setNewRuleChannel(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="meta">Meta Ads</option>
                    <option value="google">Google Ads</option>
                    <option value="tiktok">TikTok Ads</option>
                    <option value="programmatic">The Trade Desk</option>
                    <option value="all">All Connected Channels</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">GUARDRAIL PRIORITY</label>
                  <select
                    value={newRulePriority}
                    onChange={(e) => setNewRulePriority(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="p1">P1 - Critical Guardrail (Immediate)</option>
                    <option value="p2">P2 - Tactical Optimization (Paced)</option>
                    <option value="p3">P3 - Maintenance &amp; Rotation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">AUTOMATED ACTION</label>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { id: 'scale_budget', label: 'Scale Budget +20%' },
                      { id: 'pause_creative', label: 'Pause / Throttle Ad Set' },
                      { id: 'bid_adjust', label: 'Adjust Target CPA / ROAS Bid' },
                      { id: 'dispatch_webhook', label: 'Dispatch Webhook Event' },
                    ] as const
                  ).map((act) => (
                    <button
                      type="button"
                      key={act.id}
                      onClick={() => {
                        setNewRuleAction(act.id);
                        setNewRuleActionLabel(act.label);
                      }}
                      className={`p-2 rounded text-left border transition-colors ${
                        newRuleAction === act.id
                          ? 'bg-cyan-950 border-cyan-500 text-cyan-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {act.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreatingRule(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors"
                >
                  Deploy Rule to Engine
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
