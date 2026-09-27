export interface ChannelItem {
  id: string;
  name: string;
  href: string;
  color: string;
  theme: string;
}

export interface IntegrationToolItem {
  id: string;
  name: string;
  href: string;
  iconBg: string;
}

export interface CoreFeatureItem {
  id: string;
  eyebrow: string;
  heading: string;
  href: string;
  theme: 'fuscia' | 'green' | 'yellow' | 'blue';
  description: string;
  imageAlt: string;
  badge?: string;
}

export interface MoreFeatureItem {
  id: string;
  heading: string;
  href: string;
  theme: 'coral' | 'purple' | 'orange' | 'aqua';
  description: string;
  imageAlt: string;
}

export interface ResourceCardItem {
  id: string;
  title: string;
  description: string;
  href: string;
  theme: 'purple' | 'aqua' | 'coral' | 'fuscia' | 'yellow';
}

export interface FinancialMetric {
  date: string;
  mrr: number;
  arr: number;
  customers: number;
  customerChurnRate: number;
  arpa: number;
}
