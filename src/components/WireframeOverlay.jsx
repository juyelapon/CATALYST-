import React from 'react';

/**
 * Recreates the subtle rounded wireframe circuits visible in the Figma hero cards
 */
export default function WireframeOverlay({ className = "" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden opacity-30 ${className}`}>
      <svg 
        viewBox="0 0 1000 350" 
        className="w-full h-full object-cover" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wireframe rounded rectangular paths with circuit-like bends */}
        <rect x="40" y="30" width="340" height="180" rx="28" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
        <rect x="180" y="80" width="280" height="200" rx="32" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
        <rect x="340" y="140" width="240" height="160" rx="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
        <rect x="70" y="160" width="180" height="140" rx="20" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2" />
        
        {/* Subtle dot matrix grid */}
        <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.07)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>
    </div>
  );
}
