import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { 
  AuspiciousEmblem, 
  MandalaDivider, 
  FloralCorner, 
  HangingBell,
  DiyaLamp 
} from '../components/OrnamentalBorders';

export const FamilySection = () => {
  return (
    <section id="invitation" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden bg-royal-paper">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-rosePink/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-champagne/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-ivory rounded-3xl p-5 xs:p-8 sm:p-14 lg:p-16 royal-border-heavy text-center overflow-hidden"
        >
          {/* 4 Ornate Floral Corners */}
          <FloralCorner position="top-left" className="absolute top-2 left-2 z-10 w-5 h-5 sm:w-7 sm:h-7" />
          <FloralCorner position="top-right" className="absolute top-2 right-2 z-10 w-5 h-5 sm:w-7 sm:h-7" />
          <FloralCorner position="bottom-left" className="absolute bottom-2 left-2 z-10 w-5 h-5 sm:w-7 sm:h-7" />
          <FloralCorner position="bottom-right" className="absolute bottom-2 right-2 z-10 w-5 h-5 sm:w-7 sm:h-7" />

          {/* Hanging Bells Decoration on sides */}
          <div className="absolute top-0 left-12 hidden md:block pointer-events-none">
            <HangingBell className="w-6 h-24 text-champagne/80" />
          </div>
          <div className="absolute top-0 right-12 hidden md:block pointer-events-none">
            <HangingBell className="w-6 h-24 text-champagne/80" />
          </div>

          {/* Top Auspicious Diya & Kalash Emblem with Left & Right Swaminarayan Medallion Logos */}
          <div className="relative z-10 flex items-center justify-center gap-2 xs:gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto mb-6 sm:mb-8">
            {/* Left Divine Medallion Logo (Bhagwan Swaminarayan) */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-14 h-14 xs:w-18 xs:h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full p-[2px] sm:p-[2.5px] bg-gradient-to-tr from-[#C6A15B] via-[#ECC575] to-[#722C3B] shadow-md border border-[#C6A15B] hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-white relative flex items-center justify-center shadow-inner">
                  <img
                    src={weddingConfig.assets.swaminarayanLeft}
                    alt="શ્રી સ્વામિનારાયણ ભગવાન"
                    className="w-full h-full object-cover object-center filter contrast-[1.05]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Central Auspicious Kalash & Sacred Invocations */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 px-1 sm:px-2">
              <AuspiciousEmblem className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 text-champagne mb-1.5 sm:mb-2 drop-shadow" />
              <div className="space-y-1 sm:space-y-1.5 text-center">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <span className="h-[1px] w-2 sm:w-8 bg-champagne"></span>
                  <span className="font-serif text-[9px] xs:text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.1em] xs:tracking-[0.16em] sm:tracking-[0.22em] text-antiqueGold font-bold whitespace-nowrap">
                    || Jay Shree Swaminarayan ||
                  </span>
                  <span className="h-[1px] w-2 sm:w-8 bg-champagne"></span>
                </div>
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <span className="h-[1px] w-2 sm:w-8 bg-champagne"></span>
                  <span className="font-serif text-[9px] xs:text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.1em] xs:tracking-[0.16em] sm:tracking-[0.22em] text-deepMaroon font-bold whitespace-nowrap">
                    || Shree Ganeshay Namah ||
                  </span>
                  <span className="h-[1px] w-2 sm:w-8 bg-champagne"></span>
                </div>
              </div>
            </div>

            {/* Right Divine Medallion Logo (Shree Ghanshyam Maharaj) */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-14 h-14 xs:w-18 xs:h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full p-[2px] sm:p-[2.5px] bg-gradient-to-tr from-[#722C3B] via-[#ECC575] to-[#C6A15B] shadow-md border border-[#C6A15B] hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-white relative flex items-center justify-center shadow-inner">
                  <img
                    src={weddingConfig.assets.swaminarayanRight}
                    alt="શ્રી ઘનશ્યામ મહારાજ"
                    className="w-full h-full object-cover object-top filter contrast-[1.05]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Invitation Lead Text */}
          <p className="relative z-10 max-w-2xl mx-auto font-serif text-sm sm:text-base md:text-lg text-darkBrown/90 leading-relaxed tracking-wide">
            {weddingConfig.quotes.familyInviteHeader}
          </p>

          <MandalaDivider className="my-6 sm:my-8" />

          {/* Bride's Lineage & Name */}
          <div className="relative z-10 space-y-2 mb-6">
            <p className="font-serif italic text-xs sm:text-sm tracking-widest text-deepMaroon uppercase">
              {weddingConfig.bride.title}
            </p>
            <h3 className="font-serif text-base sm:text-xl font-semibold text-darkBrown tracking-wide">
              {weddingConfig.bride.parents}
            </h3>
            
            <div className="py-2">
              <h2 className="font-script text-5xl sm:text-7xl lg:text-8xl text-deepMaroon tracking-wide leading-normal">
                {weddingConfig.bride.firstName}
              </h2>
            </div>
          </div>

          {/* Golden Ampersand Divider with Diya Motifs */}
          <div className="relative z-10 flex items-center justify-center gap-4 my-6 sm:my-8">
            <DiyaLamp className="w-6 h-6 hidden xs:block" />
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-champagne"></div>
            <span className="font-serif italic text-3xl sm:text-4xl text-champagne drop-shadow">&amp;</span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-champagne"></div>
            <DiyaLamp className="w-6 h-6 hidden xs:block" />
          </div>

          {/* Groom's Lineage & Name */}
          <div className="relative z-10 space-y-2 mt-6">
            <div className="py-2">
              <h2 className="font-script text-5xl sm:text-7xl lg:text-8xl text-deepMaroon tracking-wide leading-normal">
                {weddingConfig.groom.firstName}
              </h2>
            </div>

            <p className="font-serif italic text-xs sm:text-sm tracking-widest text-deepMaroon uppercase">
              {weddingConfig.groom.title}
            </p>
            <h3 className="font-serif text-base sm:text-xl font-semibold text-darkBrown tracking-wide">
              {weddingConfig.groom.parents}
            </h3>
          </div>

          <MandalaDivider className="my-6 sm:my-8" />

          {/* Auspicious Blessing Quote */}
          <p className="relative z-10 font-serif italic text-sm sm:text-base text-antiqueGold max-w-md mx-auto">
            "Request the honor of your presence and blessings as we celebrate this sacred bond."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
