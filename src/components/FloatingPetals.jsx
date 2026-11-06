import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingPetals = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsEnabled(false);
    }

    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsEnabled(false);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Generate a fixed set of smooth floating petals (mix of rose pink and marigold golden tones)
  const petals = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      xStart: Math.random() * 100, // %
      xEnd: (Math.random() * 100 + (Math.random() * 20 - 10)), // drift
      size: 14 + Math.random() * 14, // px
      duration: 12 + Math.random() * 10, // seconds
      delay: Math.random() * 15, // seconds
      rotateStart: Math.random() * 360,
      rotateEnd: Math.random() * 720,
      color: i % 3 === 0 
        ? '#E8B7BD' // Rose pink
        : i % 3 === 1 
        ? '#F6DDE0' // Blush pink
        : '#ECC575', // Golden marigold petal
      opacity: 0.5 + Math.random() * 0.35,
    }));
  }, []);

  if (!isEnabled || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            width: petal.size,
            height: petal.size * 1.3,
            left: `${petal.xStart}vw`,
            top: '-5%',
          }}
          animate={{
            y: ['0vh', '108vh'],
            x: [`${petal.xStart}vw`, `${petal.xEnd}vw`],
            rotate: [petal.rotateStart, petal.rotateEnd],
            rotateX: [0, 180, 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Petal Organic SVG Shape */}
          <svg
            viewBox="0 0 30 40"
            fill="none"
            style={{ width: '100%', height: '100%', opacity: petal.opacity }}
          >
            <path
              d="M15 0 C5 8 0 20 5 32 C10 40 20 40 25 32 C30 20 25 8 15 0 Z"
              fill={petal.color}
              stroke="#A98243"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

