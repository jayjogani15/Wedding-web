import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { AuspiciousEmblem, DiyaLamp, HangingBell } from '../components/OrnamentalBorders';
import { ChevronDown } from 'lucide-react';

export const FinalSection = () => {
  const scrollToRSVP = () => {
    const el = document.getElementById('rsvp');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-darkBrown text-ivory">
      {/* Background Image: Final Sunset Palace Mandap */}
      <div className="absolute inset-0 z-0">
        <img
          src={weddingConfig.assets.finalSunset}
          alt="Palace Mandap Celebration"
          className="w-full h-full object-cover object-center transform scale-105"
          loading="lazy"
        />
        {/* Soft Royal Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkBrown via-deepMaroon/70 to-darkBrown/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-darkBrown/60 via-transparent to-darkBrown/95" />
      </div>

      {/* Hanging Bells on Top */}
      <div className="relative z-10 flex justify-between px-8 sm:px-16 pt-4 pointer-events-none">
        <HangingBell className="w-8 h-28 text-champagne/70" />
        <HangingBell className="w-8 h-28 text-champagne/70" />
      </div>

      {/* Center Emotional Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 text-center my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Diya Motifs */}
          <div className="flex items-center justify-center gap-3">
            <DiyaLamp className="w-8 h-8" />
            <AuspiciousEmblem className="w-14 h-14 text-champagne" />
            <DiyaLamp className="w-8 h-8" />
          </div>

          {/* Couple Names */}
          <h2 className="font-script text-5xl sm:text-7xl lg:text-8xl text-cream tracking-wide drop-shadow-md">
            {weddingConfig.bride.firstName} <span className="text-rosePink font-serif text-3xl sm:text-5xl align-middle">❤️</span> {weddingConfig.groom.firstName}
          </h2>

          {/* Tagline */}
          <div className="space-y-2">
            <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.35em] text-champagne font-bold">
              {weddingConfig.quotes.finalTagline}
            </p>
            <p className="font-serif italic text-base sm:text-xl text-cream/90 max-w-lg mx-auto">
              "{weddingConfig.quotes.finalSubtext}"
            </p>
          </div>

          {/* RSVP Button */}
          <div className="pt-6">
            <button
              onClick={scrollToRSVP}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-serif font-semibold tracking-widest text-xs sm:text-sm uppercase text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 gold-shimmer-btn cursor-pointer"
            >
              <span>CONFIRM YOUR PRESENCE (RSVP)</span>
              <ChevronDown className="w-4 h-4 text-white animate-bounce" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 text-center border-t border-champagne/30 bg-black/40 backdrop-blur-sm">
        <div className="max-w-md mx-auto space-y-2">
          <p className="font-serif text-xs sm:text-sm tracking-widest text-cream/80">
            {weddingConfig.quotes.footerText}
          </p>
          <div className="flex items-center justify-center gap-2 text-[11px] text-champagne tracking-widest uppercase">
            <span>26 NOVEMBER 2026</span>
            <span>•</span>
            <span>ROYAL WEDDING INVITATION</span>
          </div>
        </div>
      </footer>
    </section>
  );
};
