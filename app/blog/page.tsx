'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, CheckCircle2, Clock, Calendar, User } from 'lucide-react';

interface ArticleItem {
  id: number;
  title: string;
  excerpt: string;
  category: 'growth' | 'product' | 'case-study';
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const articles: ArticleItem[] = [
    {
      id: 1,
      featured: true,
      title: 'How a 2-Person Brand Generated 14M Organic Views Across Reels & TikTok Without Paying for Ads',
      excerpt: 'Instead of chasing short-lived audio trends, this indie footwear company focused on raw behind-the-scenes problem solving. Here is the exact 4-part storytelling framework they deployed across channels.',
      category: 'case-study',
      author: 'Elena Rostova',
      date: 'September 24, 2026',
      readTime: '6 min read'
    },
    {
      id: 2,
      title: 'The Algorithmic Shift: Why Short-Form Retention Curves Matter More Than Hashtags in 2026',
      excerpt: 'We analyzed 500,000 video posts across Instagram, TikTok, and YouTube Shorts. Here is what separates content that stops thumbs within 1.2 seconds from content that gets skipped.',
      category: 'growth',
      author: 'Marcus Vance',
      date: 'September 21, 2026',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Building Our Official Model Context Protocol (MCP) Server for Autonomous AI Agents',
      excerpt: 'A technical deep-dive into how we designed an MCP server that allows Claude and Cursor agents to schedule posts and query social performance safely.',
      category: 'product',
      author: 'David Chen',
      date: 'September 18, 2026',
      readTime: '8 min read'
    },
    {
      id: 4,
      title: 'Why We Measure Team Output by Shipped Outcomes Instead of Hours Logged',
      excerpt: 'Inside our 4-day work week experiment: lessons learned after 3 consecutive years of zero Friday meetings and 100% remote asynchronous collaboration.',
      category: 'growth',
      author: 'Sarah Jenkins',
      date: 'September 14, 2026',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Repurposing 101: How to Turn One High-Signal Tweet into a Multi-Platform Engine',
      excerpt: 'Step-by-step workflow for transforming an impactful 280-character observation into a LinkedIn document slide deck, an Instagram carousel, and a script for TikTok.',
      category: 'case-study',
      author: 'Elena Rostova',
      date: 'September 10, 2026',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Announcing First-Comment Automation for Instagram & LinkedIn',
      excerpt: 'Keep your captions clean and aesthetic. Automatically publish hashtag groups, links, and disclaimers as the first comment the moment your post goes live.',
      category: 'product',
      author: 'David Chen',
      date: 'September 04, 2026',
      readTime: '3 min read'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscriberEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const filteredArticles = articles.filter(a => selectedCategory === 'all' || a.category === selectedCategory);
  const featuredArticle = articles.find(a => a.featured);

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2c4bff] bg-blue-50 px-3 py-1 rounded-full mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>X-ion Publication</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Stories, strategies, and playbooks
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Honest tactical advice on audience growth, remote work culture, and building an enduring presence on social media.
        </p>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-gray-200 rounded-2xl max-w-md mx-auto shadow-2xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === 'all' ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
            }`}
          >
            All ({articles.length})
          </button>
          <button
            onClick={() => setSelectedCategory('growth')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === 'growth' ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
            }`}
          >
            Growth Tactics
          </button>
          <button
            onClick={() => setSelectedCategory('case-study')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === 'case-study' ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => setSelectedCategory('product')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === 'product' ? 'bg-[#2c4bff] text-white shadow-xs' : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
            }`}
          >
            Engineering
          </button>
        </div>
      </div>

      {/* Featured Article Card */}
      {selectedCategory === 'all' && featuredArticle && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 hover:shadow-lg transition-all group">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <span className="font-bold text-[#2c4bff] uppercase tracking-wider text-[11px]">Featured Story</span>
              <span aria-hidden="true">·</span>
              <span>{featuredArticle.date}</span>
              <span aria-hidden="true">·</span>
              <span>{featuredArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 group-hover:text-[#2c4bff] transition-colors leading-tight">
              {featuredArticle.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
              {featuredArticle.excerpt}
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                <User className="w-4 h-4 text-gray-400" />
                <span>By {featuredArticle.author}</span>
              </div>
              <span className="text-xs font-bold text-[#2c4bff] group-hover:underline flex items-center gap-1.5">
                <span>Read full article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.filter(a => selectedCategory !== 'all' || !a.featured).map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-3xl p-7 border border-gray-200/80 hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                <span className="text-[#2c4bff] font-semibold capitalize">{article.category.replace('-', ' ')}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-950 group-hover:text-[#2c4bff] transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="mt-3 text-xs text-gray-600 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>{article.date}</span>
              <span className="font-semibold text-gray-800">{article.author}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#2c4bff] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Get our best strategies sent every Tuesday
          </h2>
          <p className="mt-3 text-sm text-blue-100 max-w-lg mx-auto">
            Join 65,000+ creators and founders getting high-signal social marketing tactics. Zero spam, unsubscribe with one click.
          </p>

          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="flex-1 h-12 px-4 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 text-xs focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-xl bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="mt-3 text-xs text-emerald-300 font-semibold flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>You&apos;re subscribed! Check your inbox for this week&apos;s issue.</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
