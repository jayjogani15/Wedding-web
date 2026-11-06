import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onLoaded = () => {} }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Elegant quick load timer (1.5 seconds) so user gets a taste of luxury without waiting
    const timer = setTimeout(() => {
      setShow(false);
      if (onLoaded) onLoaded();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory text-deepMaroon"
          style={{
            backgroundImage: `radial-gradient(circle at center, #FFF9EF 0%, #F7EBDD 100%)`,
          }}
        >
          {/* Rotating Golden Mandala Frame & Royal Monogram */}
          <div className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72">
            {/* Rotating Outer Radiant Petals & Concentric Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Outer Dashed Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#C6A15B"
                  strokeWidth="0.9"
                  strokeDasharray="2.5 2"
                />

                {/* Inner Solid Gold Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="41"
                  fill="none"
                  stroke="#A98243"
                  strokeWidth="1"
                />

                {/* 12 Radiant Mandala Petals */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <path
                    key={i}
                    d="M50 11 C54 22 55 29 50 38 C45 29 46 22 50 11 Z"
                    fill="#C6A15B"
                    opacity="0.5"
                    transform={`rotate(${i * 30} 50 50)`}
                  />
                ))}

                {/* Soft center background disc for supreme contrast and clean readability */}
                <circle
                  cx="50"
                  cy="50"
                  r="24"
                  fill="#FFF9EF"
                  opacity="0.92"
                />
              </svg>
            </motion.div>

            {/* Static Centered Monogram Initials & Date (Inside the circles) */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center select-none">
              {/* Perfectly contained J & B Initials */}
              <div className="flex items-center justify-center leading-none">
                <span className="font-script text-5xl sm:text-6xl text-[#722C3B] font-bold drop-shadow-sm pr-0.5">
                  J
                </span>
                <span className="font-serif italic text-2xl sm:text-3xl text-[#722C3B] font-normal mx-0.5">
                  &amp;
                </span>
                <span className="font-script text-5xl sm:text-6xl text-[#722C3B] font-bold drop-shadow-sm pl-0.5">
                  B
                </span>
              </div>

              {/* Auspicious Wedding Date */}
              <div className="font-serif text-[11px] sm:text-xs tracking-[0.28em] text-[#722C3B]/90 font-semibold mt-1">
                26 . 11 . 2026
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mt-7 flex flex-col items-center text-center">
            <span className="text-xs sm:text-sm tracking-[0.35em] text-[#722C3B] uppercase font-serif font-bold">
              A Royal Union
            </span>
            <div className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mt-2.5" />
          </div>

          {/* Subtle loading bar */}
          <div className="w-32 h-[2px] bg-champagne/20 rounded-full mt-4 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="w-full h-full bg-gradient-to-r from-transparent via-champagne to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

