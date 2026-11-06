import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { MandalaDivider, DiyaLamp, FloralCorner } from '../components/OrnamentalBorders';
import { Sparkles } from 'lucide-react';

export const MessageSection = () => {
  return (
    <section id="message" className="relative py-24 sm:py-32 px-4 sm:px-6 bg-cream/40 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rosePink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-ivory rounded-3xl p-8 sm:p-14 text-center royal-border-heavy overflow-hidden shadow-royal"
        >
          {/* Floral Corners */}
          <FloralCorner position="top-left" className="absolute top-2 left-2" />
          <FloralCorner position="top-right" className="absolute top-2 right-2" />
          <FloralCorner position="bottom-left" className="absolute bottom-2 left-2" />
          <FloralCorner position="bottom-right" className="absolute bottom-2 right-2" />

          {/* Top Decorative Sparkles */}
          <div className="flex items-center justify-center gap-3 text-champagne mb-6">
            <DiyaLamp className="w-6 h-6" />
            <Sparkles className="w-5 h-5 text-antiqueGold" />
            <DiyaLamp className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-antiqueGold font-semibold mb-4">
            FROM OUR HEARTS TO YOURS
          </h3>

          <MandalaDivider className="my-4 max-w-xs" />

          {/* Emotional Wedding Message */}
          <blockquote className="relative my-6 font-serif italic text-lg sm:text-2xl md:text-3xl text-darkBrown font-normal leading-relaxed tracking-wide">
            <span className="text-champagne font-script text-4xl leading-none mr-2">“</span>
            {weddingConfig.quotes.emotionalMessage}
            <span className="text-champagne font-script text-4xl leading-none ml-2">”</span>
          </blockquote>

          <MandalaDivider className="my-4 max-w-xs" />

          {/* Sign off */}
          <div className="mt-8 space-y-1">
            <p className="font-script text-4xl sm:text-5xl text-deepMaroon">
              {weddingConfig.bride.firstName} &amp; {weddingConfig.groom.firstName}
            </p>
            <p className="text-xs uppercase tracking-widest text-antiqueGold font-medium">
              Together with the Jogani &amp; Parsana Families
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
