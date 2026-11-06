import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { useCountdown } from '../hooks/useCountdown';
import { MandalaDivider, DiyaLamp } from '../components/OrnamentalBorders';
import { Clock } from 'lucide-react';

export const DateSection = () => {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown(weddingConfig.eventDate.targetISO);

  return (
    <section id="date" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-ivory via-cream/40 to-ivory overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="space-y-2 mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-antiqueGold text-xs uppercase tracking-[0.25em] font-semibold">
            <DiyaLamp className="w-4 h-4" />
            <span>Save The Auspicious Date</span>
            <DiyaLamp className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-deepMaroon tracking-wider uppercase">
            A DATE TO REMEMBER
          </h2>
          <MandalaDivider className="my-4" />
        </motion.div>

        {/* 3 Premium Decorative Date Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-3xl mx-auto mb-10">
          {/* Day Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "600px 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative bg-ivory rounded-2xl p-5 sm:p-6 royal-border text-center transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-antiqueGold font-semibold mb-2">
              DAY
            </div>
            <div className="font-serif text-5xl sm:text-6xl font-bold text-deepMaroon tracking-tight my-auto">
              {weddingConfig.eventDate.day}
            </div>
            <div className="text-xs text-darkBrown/60 font-medium mt-2">
              Thursday
            </div>
          </motion.div>

          {/* Month Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "600px 0px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative bg-ivory rounded-2xl px-2 sm:px-3 md:px-4 py-5 sm:py-6 royal-border text-center transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-antiqueGold font-semibold mb-2">
              MONTH
            </div>
            <div className="font-serif text-2xl xs:text-3xl sm:text-2xl md:text-3xl font-bold text-deepMaroon tracking-tight sm:tracking-normal whitespace-nowrap my-auto leading-none">
              {weddingConfig.eventDate.month}
            </div>
            <div className="text-xs text-darkBrown/60 font-medium mt-2">
              Kartik Month (Auspicious)
            </div>
          </motion.div>

          {/* Year Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "600px 0px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group relative bg-ivory rounded-2xl p-5 sm:p-6 royal-border text-center transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-antiqueGold font-semibold mb-2">
              YEAR
            </div>
            <div className="font-serif text-5xl sm:text-6xl font-bold text-deepMaroon tracking-tight my-auto">
              {weddingConfig.eventDate.year}
            </div>
            <div className="text-xs text-darkBrown/60 font-medium mt-2">
              Vikram Samvat 2083
            </div>
          </motion.div>
        </div>

        {/* Text Under Cards */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto font-serif italic text-base sm:text-lg text-darkBrown/90 leading-relaxed mb-14"
        >
          "{weddingConfig.quotes.calendarInvite}"
        </motion.p>

        {/* Live Countdown Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto bg-ivory/95 rounded-3xl p-6 sm:p-10 royal-border-heavy shadow-royal"
        >
          <div className="flex items-center justify-center gap-2 mb-6 text-xs sm:text-sm uppercase tracking-[0.25em] text-deepMaroon font-semibold">
            <Clock className="w-4 h-4 text-champagne" />
            <span>Counting Down In Anticipation (IST)</span>
          </div>

          {isCompleted ? (
            <div className="py-8 space-y-3">
              <div className="font-script text-4xl sm:text-6xl text-deepMaroon">
                The Auspicious Wedding Day is Here!
              </div>
              <p className="font-serif text-base text-darkBrown/90">
                Today we unite as one. Shower your blessings upon Jahanvi &amp; Brijesh!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {/* Days */}
              <div className="bg-cream/50 rounded-xl p-4 sm:p-5 border border-champagne/40 text-center">
                <span className="block font-serif text-4xl sm:text-5xl font-bold text-deepMaroon">
                  {String(days).padStart(2, '0')}
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-antiqueGold uppercase mt-1">
                  DAYS
                </span>
              </div>

              {/* Hours */}
              <div className="bg-cream/50 rounded-xl p-4 sm:p-5 border border-champagne/40 text-center">
                <span className="block font-serif text-4xl sm:text-5xl font-bold text-deepMaroon">
                  {String(hours).padStart(2, '0')}
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-antiqueGold uppercase mt-1">
                  HOURS
                </span>
              </div>

              {/* Minutes */}
              <div className="bg-cream/50 rounded-xl p-4 sm:p-5 border border-champagne/40 text-center">
                <span className="block font-serif text-4xl sm:text-5xl font-bold text-deepMaroon">
                  {String(minutes).padStart(2, '0')}
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-antiqueGold uppercase mt-1">
                  MINUTES
                </span>
              </div>

              {/* Seconds */}
              <div className="bg-cream/50 rounded-xl p-4 sm:p-5 border border-champagne/40 text-center">
                <span className="block font-serif text-4xl sm:text-5xl font-bold text-deepMaroon">
                  {String(seconds).padStart(2, '0')}
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-antiqueGold uppercase mt-1">
                  SECONDS
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
