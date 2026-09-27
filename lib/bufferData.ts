import { ChannelItem, IntegrationToolItem, CoreFeatureItem, MoreFeatureItem, ResourceCardItem } from '@/types/buffer';

export const CHANNELS: ChannelItem[] = [
  { id: 'instagram', name: 'Instagram', href: 'https://x-ion.com/instagram', color: '#E1306C', theme: 'instagram' },
  { id: 'facebook', name: 'Facebook', href: 'https://x-ion.com/facebook', color: '#1877F2', theme: 'facebook' },
  { id: 'tiktok', name: 'TikTok', href: 'https://x-ion.com/tiktok', color: '#000000', theme: 'tiktok' },
  { id: 'linkedin', name: 'LinkedIn', href: 'https://x-ion.com/linkedin', color: '#0A66C2', theme: 'linkedin' },
  { id: 'x', name: 'X (Twitter)', href: 'https://x-ion.com/x', color: '#000000', theme: 'x' },
  { id: 'youtube', name: 'YouTube', href: 'https://x-ion.com/youtube', color: '#FF0000', theme: 'youtube' },
  { id: 'threads', name: 'Threads', href: 'https://x-ion.com/threads', color: '#000000', theme: 'threads' },
  { id: 'pinterest', name: 'Pinterest', href: 'https://x-ion.com/pinterest', color: '#BD081C', theme: 'pinterest' },
  { id: 'google-business-profile', name: 'Google Business Profile', href: 'https://x-ion.com/google-business-profile', color: '#4285F4', theme: 'google-business-profile' },
  { id: 'bluesky', name: 'Bluesky', href: 'https://x-ion.com/bluesky', color: '#0285FF', theme: 'bluesky' },
  { id: 'mastodon', name: 'Mastodon', href: 'https://x-ion.com/mastodon', color: '#6364FF', theme: 'mastodon' },
  { id: 'substack', name: 'Substack', href: 'https://x-ion.com/substack', color: '#FF6719', theme: 'substack' },
];

export const INTEGRATION_TOOLS: IntegrationToolItem[] = [
  { id: 'canva', name: 'Canva', href: 'https://x-ion.com/integrations/canva', iconBg: '#00C4CC' },
  { id: 'google-drive', name: 'Google Drive', href: 'https://x-ion.com/integrations/google-drive', iconBg: '#4285F4' },
  { id: 'zapier', name: 'Zapier', href: 'https://x-ion.com/integrations/zapier', iconBg: '#FF4A00' },
  { id: 'unsplash', name: 'Unsplash', href: 'https://x-ion.com/integrations/unsplash', iconBg: '#111111' },
  { id: 'dropbox', name: 'Dropbox', href: 'https://x-ion.com/integrations/dropbox', iconBg: '#0061FE' },
  { id: 'claude', name: 'Claude', href: 'https://x-ion.com/integrations/claude', iconBg: '#D97706' },
  { id: 'onedrive', name: 'OneDrive', href: 'https://x-ion.com/integrations/onedrive', iconBg: '#0078D4' },
  { id: 'cursor', name: 'Cursor', href: 'https://x-ion.com/integrations/cursor', iconBg: '#18181B' },
  { id: 'chatgpt', name: 'ChatGPT', href: 'https://x-ion.com/integrations/chatgpt', iconBg: '#10A37F' },
];

export const SOCIAL_PROOF_BRANDS = [
  { name: 'Metallica', tag: 'Rock Band', size: 'large' },
  { name: 'Benefit', tag: 'Cosmetics', size: 'large' },
  { name: 'Wired', tag: 'Media', size: 'medium' },
  { name: 'Semrush', tag: 'SEO Platform', size: 'small' },
  { name: 'Crocs', tag: 'Footwear', size: 'medium' },
  { name: 'ElevenLabs', tag: 'Voice AI', size: 'small' },
  { name: 'Pizza Hut', tag: 'Restaurant', size: 'large' },
  { name: 'Vice', tag: 'Global Media', size: 'large' },
  { name: 'Clash of Clans', tag: 'Supercell', size: 'large' },
];

export const CORE_FEATURES: CoreFeatureItem[] = [
  {
    id: 'publish',
    eyebrow: 'Publish',
    heading: 'The most complete set of publishing integrations, ever',
    href: 'https://x-ion.com/publish',
    theme: 'fuscia',
    description: 'Schedule your content to the most popular platforms including Facebook, Instagram, TikTok, LinkedIn, Threads, Bluesky, YouTube Shorts, Pinterest, Google Business, Mastodon and X.',
    imageAlt: 'X-ion Publish space with a queue for multiple social media accounts, a calendar view, and scheduling options.',
  },
  {
    id: 'create',
    eyebrow: 'Create',
    heading: 'Turn any idea into the perfect post',
    href: 'https://x-ion.com/create',
    theme: 'green',
    description: 'Whether you’re flying solo or working with a team, X-ion has all the features to help you create, organize, and repurpose your content for any channel. There’s also an AI Assistant if you need it.',
    imageAlt: 'X-ion Create space with columns and sorting for content ideas, including an AI Assistant for generating posts and refining content.',
  },
  {
    id: 'community',
    eyebrow: 'Community',
    heading: 'Reply to comments in a flash',
    href: 'https://x-ion.com/community',
    theme: 'yellow',
    description: 'Engage with your audience across all your channels at 10x speed. X-ion will help you triage and respond to comments from one simple dashboard.',
    imageAlt: 'X-ion Community space with filterable and sortable comments across multiple social media accounts.',
  },
  {
    id: 'insights',
    eyebrow: 'Insights',
    heading: 'Answers, not just analytics',
    href: 'https://x-ion.com/insights',
    theme: 'blue',
    description: 'Whether it’s basic analytics or in-depth reporting, X-ion will help you learn what works and how to improve.',
    imageAlt: 'X-ion Insights showing an all-channels report with top posts and a posts-by-month chart.',
    badge: 'New',
  },
];

export const MORE_FEATURES: MoreFeatureItem[] = [
  {
    id: 'collaborate',
    heading: 'Collaborate',
    href: 'https://x-ion.com/collaborate',
    theme: 'coral',
    description: 'Manage, edit, and approve social media posts from your team.',
    imageAlt: 'X-ion Collaborate space with a publishing calendar and team approval workflows.',
  },
  {
    id: 'mobile-app',
    heading: 'Mobile app',
    href: 'https://x-ion.com/mobile',
    theme: 'purple',
    description: 'Manage your social media accounts from anywhere.',
    imageAlt: 'X-ion mobile app with multiple social media accounts and a publishing queue.',
  },
  {
    id: 'start-page',
    heading: 'Start page',
    href: 'https://x-ion.com/start-page',
    theme: 'orange',
    description: 'Turn your social bio into a powerful, personalized hub.',
    imageAlt: 'X-ion Start Page social bio with custom theming, images, and links.',
  },
  {
    id: 'ai-assistant',
    heading: 'AI assistant',
    href: 'https://x-ion.com/ai-assistant',
    theme: 'aqua',
    description: 'Brainstorm ideas, rewrite content, and craft platform-specific posts.',
    imageAlt: 'X-ion AI Assistant with options to generate posts from prompts and refine content.',
  },
];

export const RESOURCES_LIST: ResourceCardItem[] = [
  {
    id: 'free-tools',
    title: 'Free Marketing Tools',
    description: 'A collection of free tools to make your social media marketing easier and more effective',
    href: 'https://x-ion.com/free-tools',
    theme: 'purple',
  },
  {
    id: 'glossary',
    title: 'Social Media Glossary',
    description: 'A glossary of the most popular terms to help you make sense of all the social media lingo',
    href: 'https://x-ion.com/social-media-terms',
    theme: 'aqua',
  },
  {
    id: 'marketing-101',
    title: 'Social Media Marketing 101',
    description: 'Your go-to guide for mastering the basics of social media and beyond',
    href: 'https://x-ion.com/social-media-marketing',
    theme: 'coral',
  },
  {
    id: 'best-time',
    title: 'Best Time to Post',
    description: 'Discover the best times to post on social media to maximize your engagement',
    href: 'https://x-ion.com/resources/best-time-to-post-social-media',
    theme: 'fuscia',
  },
  {
    id: 'resources-hub',
    title: 'Social Media Resources',
    description: 'A collection of articles and interviews packed with tips, stories, and insights to level up your social media marketing game',
    href: 'https://x-ion.com/resources/',
    theme: 'yellow',
  },
];

export const OPEN_METRICS = {
  mau: '273,098',
  mauSubtitle: 'Monthly active users',
  customers: '81,756',
  customersSubtitle: 'Total customers',
  teammates: '73',
  teammatesSubtitle: 'Across 15 countries',
  arr: '$26.7M',
  arrSubtitle: 'Annual recurring revenue',
};
