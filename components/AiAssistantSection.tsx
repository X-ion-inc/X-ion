'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles, Send, Bot, CheckCircle2, Copy } from 'lucide-react';

export function AiAssistantSection() {
  const [promptText, setPromptText] = useState('Review the last 6 months of my posts in X-ion and tell me which posts have the most engagement.');
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleSimulateChat = () => {
    setIsTyping(true);
    setChatResponse(null);
    setTimeout(() => {
      setIsTyping(false);
      setChatResponse(`Based on your X-ion analytics across LinkedIn, X, and Instagram for the past 6 months:

1. 🚀 "How we reached $26M ARR with 73 people" (LinkedIn) - 14,200 reactions, 420 comments, 8.4% engagement rate.
2. 💡 "The 3-step framework for sustainable creator growth" (Instagram Reel) - 89,400 views, 1,280 shares.
3. 🧵 "Transparency in remote compensation" (Threads/X) - 3,100 reposts.

Shall I draft 3 follow-up post ideas based on post #1 and queue them for next Tuesday?`);
    }, 800);
  };

  return (
    <section id="ai-assistant" className="py-20 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f8fafc] rounded-3xl border border-gray-200/80 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center overflow-hidden">
          
          {/* Left Column: Copy & Steps (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2c4bff] font-mono">
                MCP · API · Agents
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-950 tracking-tight leading-[1.2]">
                Plan, post, and learn, right from your AI assistant
              </h2>
            </div>

            <p className="text-base text-gray-600 leading-relaxed font-normal">
              Connect X-ion to Claude or ChatGPT and manage your whole workflow from a conversation. Pull your performance data, plan content around what’s working, and send content straight to your queue.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <span className="font-bold text-gray-950 shrink-0">Ask:</span>
                <span>“What were my top posts this month?” Your AI pulls real numbers from X-ion.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <span className="font-bold text-gray-950 shrink-0">Plan:</span>
                <span>Turn what’s working into next week’s content ideas.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <span className="font-bold text-gray-950 shrink-0">Post:</span>
                <span>Content lands in your X-ion queue, ready to post.</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://x-ion.com/mcp"
                className="px-6 py-3 rounded-xl bg-[#2c4bff] hover:bg-[#1b3aff] text-white text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://developers.x-ion.com/guides/integrations/mcp.html"
                className="px-6 py-3 rounded-xl bg-white hover:bg-gray-100 text-gray-800 text-sm font-semibold border border-gray-200 transition-all inline-flex items-center gap-2"
              >
                <span>Read documentation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Claude/ChatGPT MCP Simulator (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-7 space-y-4">
              {/* Header Greeting */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-gray-900">Claude × X-ion MCP</span>
                    <span className="text-[10px] text-gray-400 block font-mono">Agent Protocol v1.4</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg text-xs font-medium">
                  <span className="px-2.5 py-0.5 bg-white text-gray-900 rounded shadow-xs font-semibold">Chat</span>
                  <span className="px-2.5 py-0.5 text-gray-500">Cowork</span>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 min-h-[140px] text-xs">
                {/* User Prompt */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-blue-50 text-blue-950 p-3 rounded-2xl rounded-tr-sm border border-blue-100 font-medium">
                    {promptText}
                  </div>
                </div>

                {/* AI Response */}
                {isTyping ? (
                  <div className="flex items-center gap-2 text-gray-400 py-3">
                    <Bot className="w-4 h-4 animate-spin text-[#2c4bff]" />
                    <span className="font-mono text-xs">Calling tool: `xion.get_posts_analytics(window='6m')`...</span>
                  </div>
                ) : chatResponse ? (
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[#2c4bff] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl rounded-tl-sm text-gray-800 space-y-2 whitespace-pre-line leading-relaxed font-sans">
                      {chatResponse}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-400 font-mono text-[11px]">
                    Click &ldquo;Send Query&rdquo; below to simulate Claude querying X-ion MCP.
                  </div>
                )}
              </div>

              {/* Composer Input Bar */}
              <div className="pt-2 border-t border-gray-100">
                <div className="relative">
                  <input
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="How can I help you today?"
                    className="w-full pl-4 pr-24 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#2c4bff]"
                  />
                  <button
                    onClick={handleSimulateChat}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#2c4bff] hover:bg-[#1b3aff] text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Send</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
