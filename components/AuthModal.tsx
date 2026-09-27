'use client';

import React, { useState } from 'react';
import { X, ArrowRight, Check, Sparkles } from 'lucide-react';
import { BufferLogo } from './icons/BufferLogo';

interface AuthModalProps {
  isOpen: boolean;
  type: 'signup' | 'login';
  initialEmail?: string;
  onClose: () => void;
}

export function AuthModal({ isOpen, type, initialEmail = '', onClose }: AuthModalProps) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-md w-full p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <BufferLogo width={100} height={28} />
          <button
            onClick={onClose}
            className="p-1 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
            {type === 'signup' ? 'Get started for free' : 'Log in to X-ion'}
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            {type === 'signup' 
              ? 'Plan, publish, and analyze all your channels from one workspace. No credit card required.' 
              : 'Welcome back! Sign in to access your queue and analytics.'}
          </p>
        </div>

        {success ? (
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-center space-y-1.5 animate-in zoom-in-95">
            <Check className="w-6 h-6 text-emerald-600 mx-auto" />
            <div className="font-bold text-sm">Account connected!</div>
            <div className="text-xs text-emerald-700">Redirecting to your X-ion publishing queue...</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase font-mono mb-1.5">
                Work Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2c4bff]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase font-mono mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2c4bff]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#2c4bff] hover:bg-[#1b3aff] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{type === 'signup' ? 'Create Free Account' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative py-2 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100" />
              </div>
              <span className="relative bg-white px-3 text-xs text-gray-400 font-mono">OR CONTINUE WITH</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSuccess(true)}
                className="py-2.5 px-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => setSuccess(true)}
                className="py-2.5 px-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs font-semibold text-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Apple</span>
              </button>
            </div>

            <p className="text-[11px] text-gray-400 text-center pt-2">
              By clicking sign up, you agree to X-ion&apos;s Terms of Service and Privacy Policy.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
