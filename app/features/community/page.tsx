'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Heart, CornerDownRight, CheckCircle2, ArrowRight, Zap, Filter, ShieldAlert, Send } from 'lucide-react';
import { getChannelIcon } from '@/components/icons/ChannelLogos';

interface CommentItem {
  id: number;
  author: string;
  avatar: string;
  channel: string;
  time: string;
  postTitle: string;
  text: string;
  sentiment: 'question' | 'praise' | 'urgent';
  replied?: boolean;
}

export default function CommunityFeaturePage() {
  const [filterSentiment, setFilterSentiment] = useState<string>('all');
  const [replyText, setReplyText] = useState<{ [key: number]: string }>({});
  const [repliedIds, setRepliedIds] = useState<number[]>([]);

  const comments: CommentItem[] = [
    {
      id: 1,
      author: 'sarah_creator',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      channel: 'instagram',
      time: '12m ago',
      postTitle: 'Spring Product Launch Reel',
      text: 'Does this integration support LinkedIn document carousels as well, or only images? Looking to migrate my agency!',
      sentiment: 'question'
    },
    {
      id: 2,
      author: 'david_growth',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      channel: 'linkedin',
      time: '34m ago',
      postTitle: 'Scaling from $0 to $26M ARR without VC',
      text: 'This transparency is so refreshing. Most SaaS companies hide their revenue numbers. Kudos to the whole team!',
      sentiment: 'praise'
    },
    {
      id: 3,
      author: 'alex_dropship',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      channel: 'tiktok',
      time: '1h ago',
      postTitle: 'How to automate 30 days of content in 1 hour',
      text: 'Need help connecting my Pinterest board! Keep getting a token error on mobile.',
      sentiment: 'urgent'
    }
  ];

  const handleSendReply = (id: number) => {
    if (!replyText[id]) return;
    setRepliedIds([...repliedIds, id]);
  };

  const filteredComments = comments.filter(c => filterSentiment === 'all' || c.sentiment === filterSentiment);

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Unified Community Inbox</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Never miss an important customer comment
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Triage comments across Instagram, Facebook, TikTok, and LinkedIn in one distraction-free unified inbox at 10x speed.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.scrutium.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Try Community Inbox free
          </a>
          <Link
            href="/features/publish"
            className="px-6 py-3.5 rounded-full border border-gray-300 hover:border-gray-900 text-gray-800 font-semibold text-sm transition-all"
          >
            Explore publishing suite
          </Link>
        </div>
      </div>

      {/* Interactive Unified Inbox Demo */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Inbox Header */}
          <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4 bg-gray-50/50">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">Unified Inbox</span>
              <span className="text-xs bg-blue-100 text-[#2c4bff] px-2 py-0.5 rounded-full font-bold">
                {comments.length - repliedIds.length} unread
              </span>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-gray-200/60 rounded-xl text-xs">
              <button
                onClick={() => setFilterSentiment('all')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  filterSentiment === 'all' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                All Comments
              </button>
              <button
                onClick={() => setFilterSentiment('question')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  filterSentiment === 'question' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Questions Only
              </button>
              <button
                onClick={() => setFilterSentiment('urgent')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  filterSentiment === 'urgent' ? 'bg-white text-gray-950 shadow-xs' : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                Needs Attention
              </button>
            </div>
          </div>

          {/* Comment Threads */}
          <div className="divide-y divide-gray-100 p-6 space-y-6">
            {filteredComments.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs uppercase text-gray-700 shrink-0">
                      {item.author[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-950">@{item.author}</span>
                        <span className="shrink-0">{getChannelIcon(item.channel, 'w-4 h-4', 16)}</span>
                        <span className="text-[11px] text-gray-400">· {item.time}</span>
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-0.5">
                        on post: &quot;{item.postTitle}&quot;
                      </div>
                      <p className="text-sm text-gray-800 mt-2 leading-relaxed font-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                    item.sentiment === 'question' ? 'bg-blue-100 text-blue-800' :
                    item.sentiment === 'urgent' ? 'bg-amber-100 text-amber-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {item.sentiment === 'question' ? 'Question' : item.sentiment === 'urgent' ? 'Support Needed' : 'Praise'}
                  </span>
                </div>

                {/* Inline Quick Reply Field */}
                {repliedIds.includes(item.id) ? (
                  <div className="mt-4 ml-13 p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-2 text-xs text-emerald-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Replied: &quot;{replyText[item.id]}&quot; (Sent to {item.channel})</span>
                  </div>
                ) : (
                  <div className="mt-4 ml-13 flex items-center gap-2">
                    <CornerDownRight className="w-4 h-4 text-gray-400 shrink-0" />
                    <input
                      type="text"
                      placeholder={`Reply directly to @${item.author}...`}
                      value={replyText[item.id] || ''}
                      onChange={(e) => setReplyText({ ...replyText, [item.id]: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendReply(item.id)}
                      className="flex-1 h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2c4bff]"
                    />
                    <button
                      onClick={() => handleSendReply(item.id)}
                      className="h-10 px-4 rounded-xl bg-[#2c4bff] hover:bg-[#1b3aff] text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Keyboard-First Shortcuts</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Fly through your inbox without touching your mouse. Use `J` and `K` to cycle comments, `R` to reply, and `E` to mark resolved.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">AI Sentiment Highlighting</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Automatically surfaces high-intent purchasing inquiries, bug complaints, or influencer mentions at the top of your feed.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2c4bff] flex items-center justify-center mb-6">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-950">Collision Detection</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            See real-time presence indicators when another teammate is currently typing a response, preventing awkward duplicate answers.
          </p>
        </div>
      </div>
    </div>
  );
}
