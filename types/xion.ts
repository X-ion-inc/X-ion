export type ChannelType = 'meta' | 'google' | 'tiktok' | 'programmatic' | 'shopify' | 'snowflake';

export interface PipelineConnector {
  id: string;
  name: string;
  channel: ChannelType;
  channelLabel: string;
  status: 'active' | 'syncing' | 'paused' | 'error';
  eventsPerSec: number;
  totalEvents24h: number;
  latencyMs: number;
  errorRate: number;
  lastSync: string;
  schemaFields: string[];
  protocol: 'gRPC' | 'Kafka' | 'REST Webhook' | 'Snowflake CDC' | 'Segment Spec';
}

export interface CampaignData {
  id: string;
  name: string;
  channel: ChannelType;
  channelLabel: string;
  status: 'active' | 'scaled' | 'throttled' | 'paused' | 'flagged';
  budgetDaily: number;
  spendToday: number;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  cpa: number;
  targetCpa: number;
  roas: number;
  targetRoas: number;
  attributionShare: number; // percentage
  healthScore: number; // 0-100
  trend: 'up' | 'down' | 'stable';
  creativeFatigue: 'low' | 'moderate' | 'high';
  recommendations: string[];
}

export type AttributionModelType = 'shapley' | 'markov' | 'data_driven' | 'time_decay' | 'first_touch';

export interface AttributionChannelMetric {
  channel: ChannelType;
  channelLabel: string;
  attributedConversions: number;
  attributedRevenue: number;
  blendedRoas: number;
  sharePct: number;
  confidenceInterval: [number, number];
}

export interface ExecutionRule {
  id: string;
  name: string;
  condition: string;
  action: 'scale_budget' | 'pause_creative' | 'bid_adjust' | 'dispatch_webhook';
  actionLabel: string;
  targetChannel: ChannelType | 'all';
  status: 'active' | 'paused';
  lastTriggered: string;
  triggerCount: number;
  priority: 'p1' | 'p2' | 'p3';
}

export interface IntelligenceAlert {
  id: string;
  timestamp: string;
  severity: 'critical' | 'warning' | 'info' | 'success';
  title: string;
  message: string;
  metric: string;
  automatedAction?: string;
}

export interface PipelineEventLog {
  id: string;
  timestamp: string;
  pipelineId: string;
  pipelineName: string;
  type: 'EVENT_INGEST' | 'IDENTITY_RESOLVED' | 'ATTRIBUTION_CALCULATED' | 'RULE_EVALUATED' | 'SINK_WRITTEN';
  latencyMs: number;
  payloadSummary: string;
  status: 'success' | 'warn' | 'error';
}
