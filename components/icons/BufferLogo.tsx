import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export function BufferLogo({ className = '', width = 36, height = 36, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 font-extrabold tracking-tight ${className}`}>
      <div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
        <Image
          src="/logo/logo.png"
          alt="X-ion Logo"
          width={width || 36}
          height={height || 36}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="text-xl font-extrabold text-gray-950 font-sans tracking-tight flex items-center">
          X-ion<span className="text-[#2c4bff]">.</span>
        </span>
      )}
    </div>
  );
}

export function BufferIconMark({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shrink-0 flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo/logo.png"
        alt="X-ion Icon"
        width={size}
        height={size}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}
