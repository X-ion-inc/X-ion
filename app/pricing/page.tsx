'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, HelpCircle, ArrowRight, ShieldCheck, Zap, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [channelCount, setChannelCount] = useState<number>(3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const discountMultiplier = billingCycle === 'yearly' ? 0.8 : 1.0;

  const essentialsPerChannel = billingCycle === 'yearly' ? 5 : 6;
  const teamPerChannel = billingCycle === 'yearly' ? 10 : 12;

  const essentialsTotal = Math.round(essentialsPerChannel * channelCount);
  const teamTotal = Math.round(teamPerChannel * channelCount);
  const agencyBase = billingCycle === 'yearly' ? 100 : 120;
  const agencyTotal = channelCount > 10 ? agencyBase + (channelCount - 10) * (billingCycle === 'yearly' ? 4 : 5) : agencyBase;

  const faqs = [
    {
      q: 'What is considered a "channel"?',
      a: 'A channel is any single social media profile you connect to X-ion. For instance, if you have one Instagram account, one LinkedIn page, and one TikTok account, that counts as 3 channels.'
    },
    {
      q: 'Can I change my plan or cancel anytime?',
      a: 'Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your billing settings. If you cancel, your subscription remains active until the end of the current billing cycle.'
    },
    {
      q: 'Is there a free trial for the paid plans?',
      a: 'Yes, all paid plans come with a 14-day free trial. No credit card is required to test out Essentials or Team.'
    },
    {
      q: 'Do you offer non-profit or student discounts?',
      a: 'We proudly offer a 50% lifetime discount to registered 501(c)(3) non-profit organizations and accredited educational institutions.'
    },
    {
      q: 'What happens if I exceed my channel limit?',
      a: 'With our flexible per-channel pricing on Essentials and Team, you only pay for the exact number of active channels you use. You can add or disconnect channels at any time with prorated billing.'
    }
  ];

  return (
    <div className="bg-[#fafafa] text-gray-900 py-16 sm:py-24">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-tight">
          Transparent, predictable pricing
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Whether you&apos;re an ambitious solo creator or a high-velocity marketing agency, only pay for what you actually use.
        </p>

        {/* Billing Switch & Channel Slider Box */}
        <div className="mt-10 p-6 sm:p-8 bg-white rounded-3xl border border-gray-200 shadow-sm max-w-2xl mx-auto">
          {/* Billing Frequency Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-gray-950' : 'text-gray-500'}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'yearly' ? 'monthly' : 'yearly')}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors cursor-pointer ${
                billingCycle === 'yearly' ? 'bg-[#2c4bff]' : 'bg-gray-300'
              }`}
              aria-label="Toggle billing frequency"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-md ${
                  billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-gray-950' : 'text-gray-500'}`}>
              <span>Annual billing</span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>

          {/* Interactive Channel Slider */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-left">
            <div className="flex items-center justify-between">
              <label htmlFor="channel-range" className="text-sm font-bold text-gray-900">
                Number of social channels:
              </label>
              <span className="text-xl font-extrabold text-[#2c4bff] px-3 py-1 bg-blue-50 rounded-xl">
                {channelCount} {channelCount === 1 ? 'channel' : 'channels'}
              </span>
            </div>
            <input
              id="channel-range"
              type="range"
              min="1"
              max="25"
              value={channelCount}
              onChange={(e) => setChannelCount(parseInt(e.target.value, 10))}
              className="w-full mt-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2c4bff]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
              <span>1 channel</span>
              <span>10 channels</span>
              <span>25+ channels</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Tier 1: Free */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Free</div>
            <h3 className="text-2xl font-bold text-gray-950 mt-1">Starter</h3>
            <p className="text-xs text-gray-500 mt-2">For individuals starting out with social presence.</p>

            <div className="mt-6 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-950">$0</span>
              <span className="text-sm text-gray-500 ml-1">/ forever</span>
            </div>

            <ul className="mt-8 space-y-3.5 text-xs text-gray-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Up to <strong>3 channels</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>10 scheduled posts</strong> per channel</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Basic publishing calendar</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Free Start Page link in bio</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="https://app.scrutium.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl border border-gray-300 hover:border-gray-950 text-gray-950 font-bold text-sm text-center block transition-colors"
            >
              Get started free
            </a>
          </div>
        </div>

        {/* Tier 2: Essentials (POPULAR) */}
        <div className="bg-white rounded-3xl p-8 border-2 border-[#2c4bff] relative flex flex-col justify-between shadow-xl ring-4 ring-blue-50">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2c4bff] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
            Most popular
          </div>

          <div>
            <div className="text-xs font-bold text-[#2c4bff] uppercase tracking-wider">Essentials</div>
            <h3 className="text-2xl font-bold text-gray-950 mt-1">Creator</h3>
            <p className="text-xs text-gray-500 mt-2">All publishing, engagement &amp; basic analytics.</p>

            <div className="mt-6 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-950">${essentialsTotal}</span>
              <span className="text-xs text-gray-500 ml-1">/ month ({channelCount} ch)</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">${essentialsPerChannel}/channel/mo billed {billingCycle}</div>

            <ul className="mt-8 space-y-3.5 text-xs text-gray-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Unlimited</strong> scheduled posts</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Full engagement &amp; comment inbox</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Deep post &amp; story analytics</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>AI content assistant (100 prompts/mo)</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="https://app.scrutium.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#2c4bff] hover:bg-[#1b3aff] text-white font-bold text-sm text-center block shadow-md hover:shadow-lg transition-all"
            >
              Start 14-day free trial
            </a>
          </div>
        </div>

        {/* Tier 3: Team */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Team</div>
            <h3 className="text-2xl font-bold text-gray-950 mt-1">Collaboration</h3>
            <p className="text-xs text-gray-500 mt-2">Unlimited users, draft workflows and approvals.</p>

            <div className="mt-6 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-950">${teamTotal}</span>
              <span className="text-xs text-gray-500 ml-1">/ month ({channelCount} ch)</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">${teamPerChannel}/channel/mo billed {billingCycle}</div>

            <ul className="mt-8 space-y-3.5 text-xs text-gray-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Unlimited team members</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Draft review &amp; post approval flow</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Exportable branded PDF reports</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Custom team permission roles</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="https://app.scrutium.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl border border-gray-300 hover:border-gray-950 text-gray-950 font-bold text-sm text-center block transition-colors"
            >
              Start 14-day free trial
            </a>
          </div>
        </div>

        {/* Tier 4: Agency */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Agency</div>
            <h3 className="text-2xl font-bold text-gray-950 mt-1">High Scale</h3>
            <p className="text-xs text-gray-500 mt-2">For digital marketing agencies managing many brands.</p>

            <div className="mt-6 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-950">${agencyTotal}</span>
              <span className="text-xs text-gray-500 ml-1">/ month</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">Includes 10 channels, $5/mo each extra</div>

            <ul className="mt-8 space-y-3.5 text-xs text-gray-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Agency client management portal</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>White-labeled client dashboards</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Priority 1-hour SLA support</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="https://app.scrutium.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl border border-gray-300 hover:border-gray-950 text-gray-950 font-bold text-sm text-center block transition-colors"
            >
              Contact agency sales
            </a>
          </div>
        </div>

      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-950 text-center tracking-tight">
          Compare plan features
        </h2>
        <p className="text-center text-sm text-gray-500 mt-2">
          Everything you need to know about our capabilities across tiers.
        </p>

        <div className="mt-12 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/70">
                  <th className="py-4 px-6 font-bold text-gray-900 w-1/3">Feature</th>
                  <th className="py-4 px-4 font-bold text-gray-900 text-center">Free</th>
                  <th className="py-4 px-4 font-bold text-gray-900 text-center">Essentials</th>
                  <th className="py-4 px-4 font-bold text-gray-900 text-center">Team</th>
                  <th className="py-4 px-4 font-bold text-gray-900 text-center">Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="py-3.5 px-6 font-medium text-gray-900">Channels included</td>
                  <td className="py-3.5 px-4 text-center">Up to 3</td>
                  <td className="py-3.5 px-4 text-center">Custom</td>
                  <td className="py-3.5 px-4 text-center">Custom</td>
                  <td className="py-3.5 px-4 text-center">10 included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-gray-900">Scheduled posts per channel</td>
                  <td className="py-3.5 px-4 text-center">10</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-600">Unlimited</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-600">Unlimited</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-gray-900">Team seats</td>
                  <td className="py-3.5 px-4 text-center">1 user</td>
                  <td className="py-3.5 px-4 text-center">1 user</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-600">Unlimited</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-gray-900">Approval workflows</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">—</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">—</td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-gray-900">Analytics history</td>
                  <td className="py-3.5 px-4 text-center">None</td>
                  <td className="py-3.5 px-4 text-center">Full history</td>
                  <td className="py-3.5 px-4 text-center">Full history</td>
                  <td className="py-3.5 px-4 text-center">Full history</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-gray-900">Engagement inbox</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">—</td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-gray-900">Custom branded reports</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">—</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">—</td>
                  <td className="py-3.5 px-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-600">White-label</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-extrabold text-gray-950 text-center tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full py-4 px-6 text-left flex items-center justify-between font-semibold text-gray-900 text-sm hover:text-[#2c4bff] transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                {openFaq === index ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="bg-[#2c4bff] rounded-3xl p-10 sm:p-14 text-white relative overflow-hidden shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to streamline your social presence?
          </h2>
          <p className="mt-4 text-blue-100 text-base max-w-xl mx-auto">
            Join over 273,000 creators, marketers, and brands. Free forever plan available.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.scrutium.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#bbf7d0] hover:bg-[#86efac] text-gray-950 font-bold text-sm shadow-md transition-all"
            >
              Get started for free
            </a>
            <a
              href="https://app.scrutium.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white font-medium text-sm transition-all"
            >
              Log in to your account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
