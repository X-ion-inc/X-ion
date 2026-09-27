import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function BufferLogo({ className = '', width = 120, height = 36 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 font-extrabold tracking-tight ${className}`}>
      <div className="w-8 h-8 rounded-xl bg-[#2c4bff] text-white flex items-center justify-center font-mono text-lg shadow-sm">
        X
      </div>
      <span className="text-xl font-extrabold text-gray-950 font-sans tracking-tight">
        X-ion<span className="text-[#2c4bff]">.</span>
      </span>
    </div>
  );
}

export function BufferIconMark({ className = '', size = 28 }: { className?: string; size?: number }) {
  return (
    <div className={`w-7 h-7 rounded-xl bg-[#2c4bff] text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm ${className}`}>
      X
    </div>
  );
}
