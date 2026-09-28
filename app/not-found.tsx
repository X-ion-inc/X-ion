import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-black text-[#2c4bff]">404</h1>
      <h2 className="text-2xl font-bold text-gray-950 mt-4">Page not found</h2>
      <p className="text-sm text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-[#2c4bff] hover:bg-[#1b3aff] text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
