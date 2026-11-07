import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { AuspiciousEmblem, HangingBell, FloralCorner } from './OrnamentalBorders';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const OpeningScreen = ({ isOpen, onOpenInvitation }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Auspicious celebratory golden and rose petals burst
    try {
      confetti({
        particleCount: 60,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#C6A15B', '#ECC575', '#E8B7BD', '#722C3B', '#FFF9EF'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }

    setTimeout(() => {
      onOpenInvitation();
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="opening-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          style={{ willChange: 'opacity, transform' }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-ivory select-none"
        >
          {/* Background Cinematic Image with warm sunset overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={weddingConfig.assets.heroEntrance}
              alt="Royal Indian Palace Entrance"
              className="w-full h-full object-cover object-center transform scale-105 animate-[pulseSubtle_8s_ease-in-out_infinite]"
              loading="eager"
            />
            {/* Cinematic Gradient Vignette: warm golden sunset & deep royal maroon shades */}
            <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/90 via-deepMaroon/60 to-darkBrown/75 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-darkBrown/70 via-transparent to-darkBrown/95" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-champagne/15 via-transparent to-darkBrown/80" />
          </div>

          {/* Hanging Traditional Brass Bells on Top Corners */}
          <div className="absolute top-0 left-6 sm:left-16 z-10 pointer-events-none hidden xs:block">
            <HangingBell className="w-8 sm:w-10 h-24 sm:h-32 text-[#C6A15B] drop-shadow-md" />
          </div>
          <div className="absolute top-0 right-6 sm:right-16 z-10 pointer-events-none hidden xs:block">
            <HangingBell className="w-8 sm:w-10 h-24 sm:h-32 text-[#C6A15B] drop-shadow-md" />
          </div>

          {/* Central Royal Invitation Royal Card Frame — High Contrast Opaque Royal Ivory Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-xl w-[90%] sm:w-full mx-auto my-auto px-6 sm:px-10 py-8 sm:py-12 text-center rounded-2xl bg-[#FFFDF7] border-2 border-[#C6A15B] shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden"
          >
            {/* Subtle Royal Paper Texture */}
            <div className="absolute inset-0 bg-royal-paper opacity-35 pointer-events-none" />

            {/* Ornate Inner Double Border Line */}
            <div className="absolute inset-2 sm:inset-3 border border-[#C6A15B]/50 rounded-xl pointer-events-none" />
            <div className="absolute inset-4 sm:inset-5 border border-[#A98243]/25 rounded-lg pointer-events-none" />

            {/* Floral Corner Accents */}
            <FloralCorner position="top-left" className="absolute top-2 left-2 z-10 w-6 h-6 text-[#C6A15B] pointer-events-none" />
            <FloralCorner position="top-right" className="absolute top-2 right-2 z-10 w-6 h-6 text-[#C6A15B] pointer-events-none" />
            <FloralCorner position="bottom-left" className="absolute bottom-2 left-2 z-10 w-6 h-6 text-[#C6A15B] pointer-events-none" />
            <FloralCorner position="bottom-right" className="absolute bottom-2 right-2 z-10 w-6 h-6 text-[#C6A15B] pointer-events-none" />

            {/* Auspicious Emblem */}
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
              className="relative z-10 flex justify-center mb-4"
            >
              <AuspiciousEmblem className="w-14 h-14 sm:w-16 sm:h-16 text-[#C6A15B] drop-shadow-md" />
            </motion.div>

            {/* Subtitle / Blessing */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative z-10 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#722C3B] font-serif font-bold"
            >
              {weddingConfig.quotes.openingBlessing}
            </motion.p>

            {/* Couple Names in Script & Serif */}
            <div className="relative z-10 my-4 sm:my-6 space-y-1">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.9 }}
                className="font-script text-6xl sm:text-7xl lg:text-8xl text-[#722C3B] font-normal tracking-wide drop-shadow-[0_2px_4px_rgba(114,44,59,0.15)] leading-tight"
              >
                {weddingConfig.bride.firstName}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex items-center justify-center gap-3 text-[#C6A15B]"
              >
                <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-[#C6A15B]"></div>
                <span className="font-serif italic text-2xl sm:text-3xl text-[#A98243] font-bold">&amp;</span>
                <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-[#C6A15B]"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.9 }}
                className="font-script text-6xl sm:text-7xl lg:text-8xl text-[#722C3B] font-normal tracking-wide drop-shadow-[0_2px_4px_rgba(114,44,59,0.15)] leading-tight"
              >
                {weddingConfig.groom.firstName}
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative z-10 text-sm sm:text-base font-serif italic text-[#49372E] font-semibold tracking-wide mb-8"
            >
              "{weddingConfig.quotes.openingTagline}"
            </motion.p>

            {/* Open Invitation Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="relative z-10 flex justify-center"
            >
              <button
                onClick={handleOpenClick}
                disabled={isOpening}
                aria-label="Open wedding invitation"
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-serif font-bold tracking-[0.18em] text-xs sm:text-sm uppercase text-white shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-80 gold-shimmer-btn cursor-pointer border border-[#C6A15B]/50"
              >
                <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>OPEN WEDDING INVITATION</span>
                <Sparkles className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform" />
              </button>
            </motion.div>

            {/* Wedding Date Pill */}
            <div className="relative z-10 mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm tracking-[0.25em] text-[#722C3B] font-serif font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
              <span>26 NOVEMBER 2026</span>
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
