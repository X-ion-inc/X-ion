import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function CanvaLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#00C4CC" />
      <text x="12" y="16" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">C</text>
    </svg>
  );
}

export function GoogleDriveLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8.2 4.5L1.8 15.5h7.2L15.4 4.5H8.2z" fill="#0066DA" />
      <path d="M15.4 4.5l6.8 11.8-3.6 6.2H11.4l3.6-6.2 3.6-6.2-3.2-5.6z" fill="#00AC47" />
      <path d="M1.8 15.5l3.6 6.2h14.4l-3.6-6.2H1.8z" fill="#EA4335" />
    </svg>
  );
}

export function ZapierLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#FF4A00" />
      <path d="M11 6h2v12h-2zM6 11h12v2H6z" fill="white" />
      <path d="M7.7 7.7l1.4-1.4 7.2 7.2-1.4 1.4z" fill="white" />
      <path d="M7.7 16.3l7.2-7.2 1.4 1.4-7.2 7.2z" fill="white" />
    </svg>
  );
}

export function UnsplashLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.5 4h7v4.5h-7V4zm11 7h-4.5v4.5h-6V11H4.5v9h15v-9z" />
    </svg>
  );
}

export function DropboxLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#0061FE">
      <path d="M6 3.5L1 7.2 6 11l5-3.8-5-3.7zm12 0l-5 3.7 5 3.8 5-3.8-5-3.7zM1 14.8l5 3.7 5-3.7-5-3.8-5 3.8zm17-3.8l-5 3.8 5 3.7 5-3.7-5-3.8zM6 19.8l6 4.2 6-4.2-5-3.7h-2l-5 3.7z" />
    </svg>
  );
}

export function ClaudeLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="#D97706">
      <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="#D97706" />
    </svg>
  );
}

export function CursorLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#18181B" />
      <path d="M7 6l10 6-5 1.5-2 4.5L7 6z" fill="white" />
    </svg>
  );
}

export function ChatGPTLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#10A37F" />
      <path d="M16 11.5a3.5 3.5 0 0 0-3-3.4 3.5 3.5 0 0 0-4.5-1.5 3.5 3.5 0 0 0-2.3 3.9 3.5 3.5 0 0 0 1.2 3.8 3.5 3.5 0 0 0 4.5 1.5 3.5 3.5 0 0 0 4.1-4.3z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function OneDriveLogo({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M14.5 9a5 5 0 0 0-4.8 3.5A3.5 3.5 0 0 0 7 16a3.5 3.5 0 0 0 3.5 3.5h8.5a4 4 0 0 0 4-4 4 4 0 0 0-3.8-4A5 5 0 0 0 14.5 9z" fill="#0078D4" />
    </svg>
  );
}

export function getToolIcon(id: string, className = '', size = 24) {
  switch (id) {
    case 'canva': return <CanvaLogo className={className} size={size} />;
    case 'google-drive': return <GoogleDriveLogo className={className} size={size} />;
    case 'zapier': return <ZapierLogo className={className} size={size} />;
    case 'unsplash': return <UnsplashLogo className={className} size={size} />;
    case 'dropbox': return <DropboxLogo className={className} size={size} />;
    case 'claude': return <ClaudeLogo className={className} size={size} />;
    case 'cursor': return <CursorLogo className={className} size={size} />;
    case 'chatgpt': return <ChatGPTLogo className={className} size={size} />;
    case 'onedrive': return <OneDriveLogo className={className} size={size} />;
    default: return <CanvaLogo className={className} size={size} />;
  }
}
