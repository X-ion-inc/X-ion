'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { OverviewTab } from '@/components/OverviewTab';
import { PipelinesTab } from '@/components/PipelinesTab';
import { AnalyticsTab } from '@/components/AnalyticsTab';
import { ExecutionTab } from '@/components/ExecutionTab';
import { SimulatorTab } from '@/components/SimulatorTab';
import { SchemaModal } from '@/components/SchemaModal';
import { CampaignDetailModal } from '@/components/CampaignDetailModal';
import { 
  INITIAL_PIPELINES, 
  INITIAL_CAMPAIGNS, 
  INITIAL_RULES, 
  INITIAL_ALERTS, 
  INITIAL_LOGS 
} from '@/lib/data';
import { PipelineConnector, CampaignData, ExecutionRule, IntelligenceAlert, PipelineEventLog } from '@/types/xion';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'pipelines' | 'analytics' | 'execution' | 'simulator'>('overview');
  const [pipelines, setPipelines] = useState<PipelineConnector[]>(INITIAL_PIPELINES);
  const [campaigns, setCampaigns] = useState<CampaignData[]>(INITIAL_CAMPAIGNS);
  const [rules, setRules] = useState<ExecutionRule[]>(INITIAL_RULES);
  const [alerts, setAlerts] = useState<IntelligenceAlert[]>(INITIAL_ALERTS);
  const [logs, setLogs] = useState<PipelineEventLog[]>(INITIAL_LOGS);

  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [selectedSchemaPipeline, setSelectedSchemaPipeline] = useState<PipelineConnector | null>(null);
  const [selectedCampaignModal, setSelectedCampaignModal] = useState<CampaignData | null>(null);
  const [evaluationLog, setEvaluationLog] = useState<string[]>([
    'Evaluation engine initialized with 4 active guardrail policies.',
    'Rule #rule-auto-scale-roas checked: Google Ads ROAS 6.14x exceeds target (action queued: Scale +20%).',
    'Rule #rule-killswitch-cpa evaluated: TikTok Ads CPA $18.53 flagged > $15 target (action: Throttle spend 25%).',
  ]);

  // Live simulation effect
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      // Slightly jitter eventsPerSec for active pipelines
      setPipelines((prev) =>
        prev.map((pipe) => {
          if (pipe.status !== 'active') return pipe;
          const jitter = Math.floor((Math.random() - 0.48) * 40);
          const newRate = Math.max(100, pipe.eventsPerSec + jitter);
          return {
            ...pipe,
            eventsPerSec: newRate,
            totalEvents24h: pipe.totalEvents24h + Math.floor(newRate * 2),
          };
        })
      );

      // Periodically inject a synthetic log
      if (Math.random() > 0.4) {
        const types: PipelineEventLog['type'][] = [
          'EVENT_INGEST',
          'IDENTITY_RESOLVED',
          'ATTRIBUTION_CALCULATED',
          'RULE_EVALUATED',
          'SINK_WRITTEN',
        ];
        const randomType = types[Math.floor(Math.random() * types.length)];
        const pipeChoices = INITIAL_PIPELINES;
        const randomPipe = pipeChoices[Math.floor(Math.random() * pipeChoices.length)];

        const summaries = {
          EVENT_INGEST: `Stream batch ingested ${Math.floor(Math.random() * 800 + 200)} micro-events with valid checksum`,
          IDENTITY_RESOLVED: `Cross-device match graph resolved session token to UID2 cluster`,
          ATTRIBUTION_CALCULATED: `Recomputed Shapley marginal lift vector for active cohort`,
          RULE_EVALUATED: `Policy safety scan: all bounds verified optimal within tolerance`,
          SINK_WRITTEN: `Committed micro-partition to Snowflake RAW_EVENTS table`,
        };

        const newLog: PipelineEventLog = {
          id: `log-${Date.now().toString().slice(-6)}`,
          timestamp: new Date().toLocaleTimeString() + '.' + Math.floor(Math.random() * 900 + 100),
          pipelineId: randomPipe.id,
          pipelineName: randomPipe.name,
          type: randomType,
          latencyMs: Math.floor(Math.random() * 25 + 10),
          payloadSummary: summaries[randomType],
          status: 'success',
        };

        setLogs((prev) => [newLog, ...prev.slice(0, 49)]);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isSimulating]);

  // Actions
  const handleBurstIngest = () => {
    setPipelines((prev) =>
      prev.map((p) => ({
        ...p,
        totalEvents24h: p.totalEvents24h + 50000,
        eventsPerSec: p.eventsPerSec + 1200,
      }))
    );

    const burstLog: PipelineEventLog = {
      id: `burst-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toLocaleTimeString(),
      pipelineId: 'pipe-all',
      pipelineName: 'Global Stream Ingestion Bus',
      type: 'EVENT_INGEST',
      latencyMs: 14,
      payloadSummary: 'Manual Ingest Burst: +50,000 synthetic conversion events dispatched across all CDC streams',
      status: 'success',
    };
    setLogs((prev) => [burstLog, ...prev]);

    const burstAlert: IntelligenceAlert = {
      id: `alert-burst-${Date.now()}`,
      timestamp: 'Just now',
      severity: 'info',
      title: 'Manual Ingestion Burst Injected',
      message: 'Processed 50,000 synthetic conversion events. Pipeline buffers and attribution engines updated.',
      metric: '+50,000 Events',
      automatedAction: 'Attribution weights re-indexed',
    };
    setAlerts((prev) => [burstAlert, ...prev]);
  };

  const handleEmergencyKillswitch = () => {
    setCampaigns((prev) =>
      prev.map((c) => ({
        ...c,
        budgetDaily: Math.round(c.budgetDaily * 0.7),
        status: c.channel === 'tiktok' ? 'paused' : 'throttled',
      }))
    );

    const killAlert: IntelligenceAlert = {
      id: `alert-kill-${Date.now()}`,
      timestamp: 'Just now',
      severity: 'critical',
      title: 'Stop-Loss Guardrail Activated',
      message: 'Emergency budget stop-loss engaged. All daily caps reduced by 30%, high-decay ad sets halted.',
      metric: 'Spend throttled -30%',
      automatedAction: 'Guardrail rules enforced',
    };
    setAlerts((prev) => [killAlert, ...prev]);

    setEvaluationLog((prev) => [
      `[EMERGENCY GUARD] Stop-loss killswitch fired. Reduced daily spend caps across all active campaigns.`,
      ...prev,
    ]);
  };

  const handleExport = () => {
    const reportData = {
      exportTimestamp: new Date().toISOString(),
      platform: 'X-ION Campaign Intelligence Infrastructure',
      campaigns,
      pipelines,
      rules,
      recentAlerts: alerts.slice(0, 5),
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `xion-campaign-intelligence-report-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleScaleCampaign = (id: string) => {
    setCampaigns((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const newBudget = Math.round(c.budgetDaily * 1.15);
          return {
            ...c,
            budgetDaily: newBudget,
            status: 'scaled',
          };
        }
        return c;
      })
    );
  };

  const handleThrottleCampaign = (id: string) => {
    setCampaigns((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const newBudget = Math.round(c.budgetDaily * 0.8);
          return {
            ...c,
            budgetDaily: newBudget,
            status: 'throttled',
          };
        }
        return c;
      })
    );
  };

  const handleToggleCampaign = (id: string) => {
    setCampaigns((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            status: c.status === 'paused' ? 'active' : 'paused',
          };
        }
        return c;
      })
    );
  };

  const handleTogglePipeline = (id: string) => {
    setPipelines((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            status: p.status === 'active' ? 'paused' : 'active',
          };
        }
        return p;
      })
    );
  };

  const handleSyncPipeline = (id: string) => {
    setPipelines((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            status: 'syncing',
            totalEvents24h: p.totalEvents24h + 10000,
            lastSync: 'Just now',
          };
        }
        return p;
      })
    );

    setTimeout(() => {
      setPipelines((prev) =>
        prev.map((p) => {
          if (p.id === id) {
            return {
              ...p,
              status: 'active',
            };
          }
          return p;
        })
      );
    }, 1200);
  };

  const handleToggleRule = (id: string) => {
    setRules((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            status: r.status === 'active' ? 'paused' : 'active',
          };
        }
        return r;
      })
    );
  };

  const handleAddRule = (newRule: ExecutionRule) => {
    setRules((prev) => [newRule, ...prev]);
    setEvaluationLog((prev) => [
      `Registered new guardrail rule: "${newRule.name}" [${newRule.priority.toUpperCase()}] for target ${newRule.targetChannel}`,
      ...prev,
    ]);
  };

  const handleExecuteEvaluation = () => {
    const activeRules = rules.filter((r) => r.status === 'active');
    const newLogs: string[] = [
      `[CRON EVALUATION] Scanned ${activeRules.length} active rules against 5 omnichannel nodes.`,
      `[RULE EVAL] Google Search: ROAS 6.14x > 4.2x target => Budget headroom confirmed healthy.`,
      `[RULE EVAL] TikTok Spark: Creative fatigue index 4.1x detected => Triggered asset rotation webhook.`,
      `[RULE EVAL] All guardrail invariants verified. Zero anomalous clearing prices in programmatic DSP.`,
    ];
    setEvaluationLog((prev) => [...newLogs, ...prev]);
  };

  const handleApplyScenario = (summary: string) => {
    setEvaluationLog((prev) => [`[SCENARIO APPLIED] ${summary}`, ...prev]);
  };

  const aggregateEventsPerSec = pipelines.reduce(
    (sum, p) => (p.status === 'active' ? sum + p.eventsPerSec : sum),
    0
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSimulating={isSimulating}
        setIsSimulating={setIsSimulating}
        onBurstIngest={handleBurstIngest}
        onExport={handleExport}
        onEmergencyKillswitch={handleEmergencyKillswitch}
        eventsPerSec={aggregateEventsPerSec}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'overview' && (
          <OverviewTab
            campaigns={campaigns}
            alerts={alerts}
            pipelines={pipelines}
            onScaleCampaign={handleScaleCampaign}
            onThrottleCampaign={handleThrottleCampaign}
            onToggleCampaign={handleToggleCampaign}
            onSelectCampaign={(c) => setSelectedCampaignModal(c)}
          />
        )}

        {activeTab === 'pipelines' && (
          <PipelinesTab
            pipelines={pipelines}
            logs={logs}
            onTogglePipeline={handleTogglePipeline}
            onSyncPipeline={handleSyncPipeline}
            onClearLogs={() => setLogs([])}
            onSelectPipelineSchema={(p) => setSelectedSchemaPipeline(p)}
          />
        )}

        {activeTab === 'analytics' && <AnalyticsTab />}

        {activeTab === 'execution' && (
          <ExecutionTab
            rules={rules}
            onToggleRule={handleToggleRule}
            onAddRule={handleAddRule}
            onExecuteEvaluation={handleExecuteEvaluation}
            evaluationLog={evaluationLog}
          />
        )}

        {activeTab === 'simulator' && (
          <SimulatorTab onApplyScenario={handleApplyScenario} />
        )}
      </main>

      {/* Modals */}
      <SchemaModal
        pipeline={selectedSchemaPipeline}
        onClose={() => setSelectedSchemaPipeline(null)}
      />

      <CampaignDetailModal
        campaign={selectedCampaignModal}
        onClose={() => setSelectedCampaignModal(null)}
        onScale={handleScaleCampaign}
        onThrottle={handleThrottleCampaign}
      />
    </div>
  );
}
