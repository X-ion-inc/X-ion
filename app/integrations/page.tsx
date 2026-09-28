'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ExternalLink, Check, ArrowRight, Layers, Sparkles, Code2, Cpu } from 'lucide-react';
import { CHANNELS, INTEGRATION_TOOLS } from '@/lib/bufferData';
import { getChannelIcon } from '@/components/icons/ChannelLogos';
import { getToolIcon } from '@/components/icons/IntegrationLogos';

interface IntegrationDetail {
  id: string;
  name: string;
  category: 'social' | 'tools' | 'ai';
  description: string;
  features: string[];
  type: 'channel' | 'tool';
}

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'social' | 'tools' | 'ai'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allIntegrations: IntegrationDetail[] = useMemo(() => [
    {
      id: 'instagram',
      name: 'Instagram',
      category: 'social',
      description: 'Schedule Reels, Stories, Carousels, and single photos with auto-publishing and first comment automation.',
      features: ['Reels Auto-publish', 'Stories Scheduling', 'Carousel Support', 'First Comment', 'Audience Analytics'],
      type: 'channel',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      category: 'social',
      description: 'Schedule and auto-post short-form video content directly to your personal or business TikTok account.',
      features: ['Direct Video Publishing', 'Sound Suggestions', 'Hashtag Trending', 'Engagement Analytics'],
      type: 'channel',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      category: 'social',
      description: 'Publish text, document carousels (PDFs), images, and videos to LinkedIn Profiles and Company Pages.',
      features: ['Document PDFs', 'Company Pages', 'Personal Profiles', 'Polls Scheduling', 'Impressions Breakdown'],
      type: 'channel',
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      category: 'social',
      description: 'Schedule single posts and multi-tweet threads with auto-retweet delays and engagement tracking.',
      features: ['Thread Scheduling', 'Image & Video Uploads', 'Auto-Retweet', 'Poll Support', 'Link Tracking'],
      type: 'channel',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      category: 'social',
      description: 'Manage Facebook Pages and Groups seamlessly with high-res photo, video, and Reel scheduling.',
      features: ['Facebook Pages', 'Groups Support', 'Facebook Reels', 'Geo-targeting', 'Comment Management'],
      type: 'channel',
    },
    {
      id: 'youtube',
      name: 'YouTube Shorts',
      category: 'social',
      description: 'Schedule YouTube Shorts and long-form video uploads with customizable titles, descriptions, and tags.',
      features: ['Shorts Auto-publish', 'Custom Thumbnails', 'Visibility Modes (Public/Unlisted)', 'Subscriber Analytics'],
      type: 'channel',
    },
    {
      id: 'threads',
      name: 'Threads',
      category: 'social',
      description: 'Connect with your community on Meta’s conversational platform with rich text, links, and imagery.',
      features: ['Text & Link Posts', 'Multi-image Posts', 'Direct Auto-publish', 'Engagement Tracking'],
      type: 'channel',
    },
    {
      id: 'pinterest',
      name: 'Pinterest',
      category: 'social',
      description: 'Drive high-intent traffic by scheduling Pins to specific boards with destination URLs.',
      features: ['Board Pinning', 'Custom Destination URLs', 'Alt-text for Accessibility', 'Click Analytics'],
      type: 'channel',
    },
    {
      id: 'bluesky',
      name: 'Bluesky',
      category: 'social',
      description: 'Publish freely on the decentralized AT Protocol network with full thread and media capabilities.',
      features: ['AT Protocol Integration', 'Rich Media Support', 'Thread Chains', 'Alt Text Accessibility'],
      type: 'channel',
    },
    {
      id: 'mastodon',
      name: 'Mastodon',
      category: 'social',
      description: 'Cross-post to the Fediverse across decentralized servers and instances.',
      features: ['Decentralized Fediverse', 'Content Warnings (CW)', 'Custom Emoji Support', 'Alt-text'],
      type: 'channel',
    },
    {
      id: 'canva',
      name: 'Canva',
      category: 'tools',
      description: 'Design captivating social graphics in Canva and push them directly to your X-ion queue in one click.',
      features: ['Direct Export to Queue', 'Folder Sync', 'Template Library', 'One-Click Resizing'],
      type: 'tool',
    },
    {
      id: 'google-drive',
      name: 'Google Drive',
      category: 'tools',
      description: 'Import video, images, and copy directly from shared company Google Drive folders.',
      features: ['Direct Cloud Import', 'Shared Drive Access', 'Bulk Media Uploads', 'Lossless Assets'],
      type: 'tool',
    },
    {
      id: 'unsplash',
      name: 'Unsplash',
      category: 'tools',
      description: 'Search and insert millions of royalty-free, high-resolution stock photographs directly into post drafts.',
      features: ['In-app Photo Search', 'High-res Original Assets', 'Photographer Attribution', 'Fast Insertion'],
      type: 'tool',
    },
    {
      id: 'dropbox',
      name: 'Dropbox',
      category: 'tools',
      description: 'Pull high-definition video clips and photos directly from your personal or team Dropbox storage.',
      features: ['Team Space Folders', 'Direct Video Sync', 'Automatic Preview Transcoding', 'Zero Compression'],
      type: 'tool',
    },
    {
      id: 'zapier',
      name: 'Zapier',
      category: 'tools',
      description: 'Connect X-ion to over 5,000+ business applications to trigger automated social posts and notifications.',
      features: ['5,000+ App Triggers', 'RSS to Social Flow', 'CRM Lead Alerts', 'E-commerce New Product Posts'],
      type: 'tool',
    },
    {
      id: 'claude',
      name: 'Claude & AI Tools',
      category: 'ai',
      description: 'Supercharge copy generation and multi-channel content repurposing with state-of-the-art LLMs.',
      features: ['Tone Customization', 'Thread Re-formatting', 'Hook Generator', 'Hashtag Extraction'],
      type: 'tool',
    },
    {
      id: 'cursor',
      name: 'MCP & Developer SDK',
      category: 'ai',
      description: 'Connect AI agents and codebases to your social publishing queues via Model Context Protocol (MCP).',
      features: ['MCP Server Endpoints', 'REST API v2', 'Webhook Subscriptions', 'CLI Scheduling Tool'],
      type: 'tool',
    }
  ], []);

  const filteredIntegrations = useMemo(() => {
    return allIntegrations.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [allIntegrations, activeCategory, searchQuery]);

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2c4bff] bg-blue-50 px-3 py-1 rounded-full mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Connected Ecosystem</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Works with all your favorite tools and channels
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Manage every platform from one central mission control, and connect directly into your creation workflow.
        </p>

        {/* Search Bar & Filter Tabs */}
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search platforms, channels, or tools (e.g. TikTok, Canva, LinkedIn)..."
              className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c4bff] text-sm shadow-xs transition-all"
            />
          </div>

          {/* Segmented Filter Control */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-gray-200 rounded-2xl shadow-2xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === 'all' ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
              }`}
            >
              All Integrations ({allIntegrations.length})
            </button>
            <button
              onClick={() => setActiveCategory('social')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === 'social' ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
              }`}
            >
              Social Channels (10)
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === 'tools' ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
              }`}
            >
              Design &amp; Media (5)
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeCategory === 'ai' ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
              }`}
            >
              AI &amp; Developer MCP (2)
            </button>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        {filteredIntegrations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8">
            <p className="text-base text-gray-500 font-medium">No integrations found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 text-xs font-bold text-[#2c4bff] hover:underline"
            >
              Reset search &amp; filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-3xl p-7 border border-gray-200/80 hover:border-gray-300 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform">
                      {item.type === 'channel' ? (
                        getChannelIcon(item.id, 'w-7 h-7', 28)
                      ) : (
                        getToolIcon(item.id, 'w-7 h-7', 28)
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {item.category === 'social' ? 'Social Network' : item.category === 'ai' ? 'AI / Developer' : 'Creative Tool'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-950 mt-4 group-hover:text-[#2c4bff] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">Key Capabilities</div>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="https://app.scrutium.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#2c4bff] hover:text-[#1b3aff] flex items-center gap-1.5"
                  >
                    <span>Connect {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Active API
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Developer API & MCP Section */}
      <div id="api" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gray-950 text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Model Context Protocol (MCP) &amp; REST</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Connect your autonomous agents and internal tools
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Programmatically schedule posts, pull analytics, and reply to comments using our official REST API or connect LLMs directly with our official Model Context Protocol (MCP) server.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Webhooks for post events</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Claude / Cursor MCP compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>99.99% API uptime</span>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://app.scrutium.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-sm inline-flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Generate Developer API Key</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Code Preview Box */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-5 font-mono text-xs text-gray-300 shadow-inner overflow-x-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-gray-500 text-[11px]">
              <span>curl POST /v2/posts/schedule</span>
              <span className="text-emerald-400">HTTP 201 Created</span>
            </div>
            <pre className="pt-4 leading-relaxed">
{`curl -X POST https://api.scrutium.com/v2/posts \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channels": ["instagram_123", "linkedin_456"],
    "text": "Excited to launch our new product today! 🚀",
    "media_urls": ["https://cdn.example.com/demo.mp4"],
    "schedule_time": "2026-10-01T14:30:00Z"
  }'`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
