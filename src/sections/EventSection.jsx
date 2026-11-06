import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { MandalaDivider, DiyaLamp, FloralCorner } from '../components/OrnamentalBorders';
import { Calendar, Clock, MapPin, ExternalLink, Navigation, Copy, Check } from 'lucide-react';

export const EventSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullText = `${weddingConfig.venue.name} (${weddingConfig.venue.nameGujarati})\n${weddingConfig.venue.address}\nGoogle Maps: ${weddingConfig.venue.shortMapUrl}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {});
    }
  };

  return (
    <section id="event" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-cream/30 via-ivory to-cream/30 overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-rosePink/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2 mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-antiqueGold text-xs uppercase tracking-[0.25em] font-semibold">
            <DiyaLamp className="w-4 h-4" />
            <span>Sacred Ceremonies &amp; Venue</span>
            <DiyaLamp className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-deepMaroon tracking-wider uppercase">
            JOIN US IN OUR CELEBRATION
          </h2>
          <MandalaDivider className="my-4" />
        </motion.div>

        {/* Premium Wedding Event & Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto bg-ivory rounded-3xl p-6 sm:p-10 royal-border-heavy text-center overflow-hidden shadow-2xl"
        >
          {/* Corner Ornaments */}
          <FloralCorner position="top-left" className="absolute top-2 left-2" />
          <FloralCorner position="top-right" className="absolute top-2 right-2" />
          <FloralCorner position="bottom-left" className="absolute bottom-2 left-2" />
          <FloralCorner position="bottom-right" className="absolute bottom-2 right-2" />

          {/* Event Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/15 border border-champagne/40 text-deepMaroon text-xs sm:text-sm font-serif font-semibold tracking-widest uppercase mb-4">
            <Navigation className="w-3.5 h-3.5 text-champagne" />
            <span>{weddingConfig.venue.title}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-darkBrown mb-1">
            {weddingConfig.venue.name}
          </h3>
          <p className="gujarati-heading text-lg sm:text-xl font-bold text-[#722C3B] mb-6">
            ॥ {weddingConfig.venue.nameGujarati} ॥
          </p>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left max-w-lg mx-auto">
            {/* Date Details */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-cream/40 border border-champagne/30">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-champagne/20 text-deepMaroon shrink-0 mt-0.5">
                <Calendar className="w-5 h-5 text-deepMaroon" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-antiqueGold block">
                  DATE
                </span>
                <span className="font-serif text-sm sm:text-base font-bold text-darkBrown block">
                  {weddingConfig.venue.dateFormatted}
                </span>
                <span className="text-xs text-darkBrown/70">
                  Thursday Evening
                </span>
              </div>
            </div>

            {/* Time Details */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-cream/40 border border-champagne/30">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-champagne/20 text-deepMaroon shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-deepMaroon" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-antiqueGold block">
                  TIME
                </span>
                <span className="font-serif text-sm sm:text-base font-bold text-darkBrown block">
                  {weddingConfig.venue.timeFormatted}
                </span>
                <span className="text-xs text-darkBrown/70">
                  Baraat &amp; Hastamelap
                </span>
              </div>
            </div>
          </div>

          {/* Full Venue Address Box */}
          <div className="p-4 rounded-2xl bg-[#FFFDF7] border border-[#C6A15B]/50 shadow-sm max-w-lg mx-auto mb-6 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#722C3B] uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#C6A15B]" />
              <span>શુભ લગ્ન સ્થળ / Venue Address</span>
            </div>
            <p className="font-serif text-sm sm:text-base font-semibold text-darkBrown">
              {weddingConfig.venue.address}
            </p>
            <p className="gujarati-body text-xs sm:text-sm text-[#722C3B] font-medium pt-0.5">
              {weddingConfig.venue.addressGujarati}
            </p>
          </div>

          {/* ========================================================================= */}
          {/* INTERACTIVE LIVE EMBEDDED GOOGLE MAP */}
          {/* ========================================================================= */}
          <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden border-2 border-[#C6A15B]/70 shadow-lg mb-6 bg-cream/40">
            <div className="w-full h-64 sm:h-80">
              <iframe
                title="Ruta Party Plot Wedding Venue Google Map"
                src={weddingConfig.venue.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[1.1]"
              />
            </div>
            {/* Overlay hint banner at bottom of map */}
            <div className="p-2 bg-[#FFFDF7]/95 border-t border-[#C6A15B]/40 text-xs font-serif text-[#49372E] flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <span className="truncate">Ruta Party Plot • Sarthana Jakatnaka, Surat</span>
            </div>
          </div>

          {/* Location Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Primary Universal Google Maps Button */}
            <a
              href={weddingConfig.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 rounded-full font-serif font-bold tracking-wider text-xs sm:text-sm uppercase text-white shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 gold-shimmer-btn cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-white animate-bounce" />
              <span>OPEN IN GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/90" />
            </a>

            {/* Driving Directions Button */}
            <a
              href={weddingConfig.venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-serif font-bold text-xs sm:text-sm uppercase text-[#722C3B] bg-[#FFF9EF] hover:bg-[#F7EBDD] border border-[#C6A15B] shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#C6A15B]" />
              <span>GET DIRECTIONS</span>
            </a>

            {/* Copy Address Button */}
            <button
              onClick={handleCopyAddress}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-serif font-bold text-xs sm:text-sm text-[#49372E] bg-cream/80 hover:bg-cream border border-champagne/60 shadow-sm transition-all duration-300 cursor-pointer"
              title="Copy venue address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#A98243]" />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Direct shortlink backup note */}
          <div className="mt-4 pt-3 border-t border-champagne/30 text-[11px] text-darkBrown/60">
            <span>Direct Google Maps link:&nbsp;</span>
            <a
              href={weddingConfig.venue.shortMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#722C3B] font-semibold hover:text-[#A98243]"
            >
              {weddingConfig.venue.shortMapUrl}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
