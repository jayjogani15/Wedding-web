import React from 'react';

/**
 * Auspicious Kalash & Coconut Motif (Purna Kumbha)
 */
export const AuspiciousEmblem = ({ className = "w-16 h-16 text-champagne" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="goldGradEmblem" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C6A15B" />
        <stop offset="50%" stopColor="#ECC575" />
        <stop offset="100%" stopColor="#A98243" />
      </linearGradient>
    </defs>
    {/* Kalash Pot */}
    <path d="M30 60 C30 80 70 80 70 60 C70 50 64 45 60 45 L40 45 C36 45 30 50 30 60 Z" fill="url(#goldGradEmblem)" stroke="#722C3B" strokeWidth="1.5" />
    <ellipse cx="50" cy="45" rx="10" ry="3" fill="#FFF9EF" stroke="#A98243" strokeWidth="1" />
    <path d="M38 78 L62 78 L58 84 L42 84 Z" fill="#A98243" />
    {/* Mango Leaves */}
    <path d="M50 43 C46 32 38 28 32 32 C38 38 44 42 48 44" fill="#722C3B" opacity="0.8" />
    <path d="M50 43 C54 32 62 28 68 32 C62 38 56 42 52 44" fill="#722C3B" opacity="0.8" />
    <path d="M50 43 C48 30 50 20 50 20 C50 20 52 30 50 43" fill="#C6A15B" />
    {/* Auspicious Coconut */}
    <circle cx="50" cy="30" r="8" fill="url(#goldGradEmblem)" stroke="#722C3B" strokeWidth="1" />
    {/* Swastik / Tilak on pot */}
    <path d="M47 57 H53 M50 54 V60 M47 54 V56 M53 58 V60 M51 54 H53 M47 60 H49" stroke="#722C3B" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/**
 * Hanging Royal Indian Temple Bell with chain
 */
export const HangingBell = ({ className = "w-8 h-20 text-champagne" }) => (
  <svg viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} animate-bell`}>
    <defs>
      <linearGradient id="goldBellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C6A15B" />
        <stop offset="50%" stopColor="#FFF9EF" />
        <stop offset="100%" stopColor="#A98243" />
      </linearGradient>
    </defs>
    {/* Chain links */}
    <line x1="20" y1="0" x2="20" y2="45" stroke="#A98243" strokeWidth="1.5" strokeDasharray="3 2" />
    {/* Bell Crown */}
    <circle cx="20" cy="46" r="3" fill="#C6A15B" />
    {/* Bell Body */}
    <path d="M12 68 C12 52 28 52 28 68 C30 72 32 75 34 76 C20 78 20 78 6 76 C8 75 10 72 12 68 Z" fill="url(#goldBellGrad)" stroke="#722C3B" strokeWidth="1" />
    {/* Bell Rimmer and Clapper */}
    <ellipse cx="20" cy="76" rx="14" ry="2.5" fill="#A98243" />
    <circle cx="20" cy="82" r="3.5" fill="#722C3B" stroke="#C6A15B" strokeWidth="1" />
    {/* Small decorative beads */}
    <circle cx="20" cy="88" r="1.5" fill="#C6A15B" />
  </svg>
);

/**
 * Ornate Indian Mandala Center Divider
 */
export const MandalaDivider = ({ className = "my-8" }) => (
  <div className={`flex items-center justify-center gap-3 max-w-lg mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-champagne/60 to-champagne"></div>
    <div className="flex items-center gap-1.5 text-champagne">
      <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
      <svg className="w-6 h-6 text-champagne animate-pulse-subtle" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14 8L20 6L16 11L22 13L16 15L20 20L14 18L12 24L10 18L4 20L8 15L2 13L8 11L4 6L10 8L12 2Z" fill="currentColor" opacity="0.85"/>
        <circle cx="12" cy="12" r="2.5" fill="#722C3B" />
      </svg>
      <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-champagne/60 to-champagne"></div>
  </div>
);

/**
 * Traditional Indian Diya Lamp
 */
export const DiyaLamp = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} animate-diya`}>
    {/* Diya Base */}
    <path d="M10 38 C12 50 48 50 50 38 C42 36 18 36 10 38 Z" fill="#A98243" stroke="#722C3B" strokeWidth="1" />
    <ellipse cx="30" cy="38" rx="20" ry="4" fill="#C6A15B" />
    {/* Flame */}
    <path d="M30 14 C36 24 35 34 30 36 C25 34 24 24 30 14 Z" fill="url(#flameGrad)" />
    <circle cx="30" cy="28" r="3" fill="#FFF9EF" opacity="0.8" />
    <defs>
      <linearGradient id="flameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FFF9EF" />
        <stop offset="30%" stopColor="#ECC575" />
        <stop offset="70%" stopColor="#E8B7BD" />
        <stop offset="100%" stopColor="#722C3B" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Ornate Floral Corner Accent (Top Left, Top Right, Bottom Left, Bottom Right)
 */
export const FloralCorner = ({ position = "top-left", className = "" }) => {
  const rotation = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'scale-x-[-1] scale-y-[-1]',
  }[position] || '';

  return (
    <div className={`pointer-events-none select-none ${rotation} ${className}`}>
      <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 L95 5 L95 12 L12 12 L12 95 L5 95 Z" fill="#C6A15B" opacity="0.5" />
        <path d="M18 18 L65 18 C50 25 25 50 18 65 Z" fill="#E8B7BD" opacity="0.35" />
        <circle cx="28" cy="28" r="6" fill="#722C3B" opacity="0.7" />
        <circle cx="28" cy="28" r="3" fill="#C6A15B" />
        {/* Mughal Paisley Floral Tendril */}
        <path d="M15 15 C35 15 50 30 50 50 C50 65 35 75 25 70 C15 65 20 45 35 45 C45 45 45 55 40 58" stroke="#A98243" strokeWidth="2" strokeLinecap="round" />
        <circle cx="15" cy="15" r="3" fill="#C6A15B" />
      </svg>
    </div>
  );
};

/**
 * Peacock Feather Art Motif
 */
export const PeacockMotif = ({ className = "w-8 h-12" }) => (
  <svg viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="peacockEye" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#1E3A8A" />
        <stop offset="40%" stopColor="#0D9488" />
        <stop offset="70%" stopColor="#C6A15B" />
        <stop offset="100%" stopColor="#722C3B" />
      </radialGradient>
    </defs>
    <path d="M25 80 Q24 50 25 35" stroke="#A98243" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="25" cy="30" rx="18" ry="24" fill="none" stroke="#C6A15B" strokeWidth="1.5" strokeDasharray="3 2" />
    <ellipse cx="25" cy="30" rx="12" ry="18" fill="url(#peacockEye)" />
    <ellipse cx="25" cy="28" rx="6" ry="9" fill="#0284C7" />
    <ellipse cx="25" cy="26" rx="3" ry="5" fill="#1E293B" />
  </svg>
);

/**
 * Traditional Lord Ganesh Iconography for Wedding Patrika
 */
export const GaneshSilhouette = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ganeshGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C6A15B" />
        <stop offset="50%" stopColor="#ECC575" />
        <stop offset="100%" stopColor="#A98243" />
      </linearGradient>
    </defs>
    {/* Crown / Mukut */}
    <path d="M42 16 L50 6 L58 16 L54 22 L46 22 Z" fill="url(#ganeshGold)" stroke="#722C3B" strokeWidth="1" />
    <circle cx="50" cy="14" r="2" fill="#722C3B" />
    {/* Head & Forehead with Tilak */}
    <path d="M38 24 Q50 20 62 24 Q66 32 64 42 Q60 48 52 48 Q44 48 40 42 Q36 32 38 24 Z" fill="url(#ganeshGold)" opacity="0.9" />
    <path d="M48 24 H52 M50 20 V28" stroke="#722C3B" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="50" cy="30" r="1.5" fill="#722C3B" />
    {/* Trunk (Sondh) */}
    <path d="M48 38 Q48 58 56 60 Q62 61 64 56 Q65 52 61 52 Q58 52 56 56" stroke="url(#ganeshGold)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <path d="M48 38 Q48 58 56 60 Q62 61 64 56 Q65 52 61 52 Q58 52 56 56" stroke="#722C3B" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
    {/* Left Ear */}
    <path d="M38 26 C28 26 24 38 32 44 C36 46 38 42 38 38 Z" fill="url(#ganeshGold)" stroke="#722C3B" strokeWidth="1" />
    {/* Right Ear */}
    <path d="M62 26 C72 26 76 38 68 44 C64 46 62 42 62 38 Z" fill="url(#ganeshGold)" stroke="#722C3B" strokeWidth="1" />
    {/* Modak in Hand */}
    <circle cx="34" cy="58" r="4" fill="#C6A15B" stroke="#722C3B" strokeWidth="1" />
    {/* Tusk (Dant) */}
    <path d="M44 42 L42 46" stroke="#FFF9EF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/**
 * Royal Rajasthani / Gujarati Palace Arch Top Border Motif
 */
export const RoyalArchTop = ({ className = "w-full h-8" }) => (
  <svg viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={className}>
    <path d="M0 35 Q100 35 150 25 Q180 18 200 8 Q220 18 250 25 Q300 35 400 35" stroke="#C6A15B" strokeWidth="2" fill="none" />
    <path d="M0 38 Q100 38 150 28 Q180 21 200 11 Q220 21 250 28 Q300 38 400 38" stroke="#A98243" strokeWidth="1" strokeDasharray="3 2" fill="none" />
    <circle cx="200" cy="8" r="3" fill="#722C3B" stroke="#C6A15B" strokeWidth="1" />
    <circle cx="150" cy="25" r="2" fill="#C6A15B" />
    <circle cx="250" cy="25" r="2" fill="#C6A15B" />
  </svg>
);

/**
 * Kashtbhanjan Dev / Sacred Bajrangbali Emblem for Card 3
 */
export const KashtbhanjanEmblem = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="sacredHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ECC575" />
        <stop offset="60%" stopColor="#C6A15B" />
        <stop offset="100%" stopColor="#722C3B" />
      </radialGradient>
    </defs>
    {/* Halo Rays */}
    <circle cx="50" cy="50" r="42" stroke="#C6A15B" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
    <circle cx="50" cy="50" r="36" fill="url(#sacredHalo)" opacity="0.3" stroke="#A98243" strokeWidth="1.5" />
    {/* Gada (Mace) Silhouette */}
    <path d="M48 20 L52 20 L51 68 L49 68 Z" fill="#722C3B" />
    <circle cx="50" cy="22" r="10" fill="#C6A15B" stroke="#722C3B" strokeWidth="1.5" />
    <circle cx="50" cy="22" r="4" fill="#722C3B" />
    <ellipse cx="50" cy="72" rx="4" ry="2" fill="#C6A15B" />
    {/* Sacred Tilak */}
    <path d="M46 44 Q50 38 54 44 V52 Q50 56 46 52 Z" fill="#722C3B" />
    <path d="M50 42 V50" stroke="#FFF9EF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

