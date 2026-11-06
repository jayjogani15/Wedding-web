import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { MandalaDivider, PeacockMotif, FloralCorner } from '../components/OrnamentalBorders';
import { Heart } from 'lucide-react';

export const CoupleSection = () => {
  return (
    <section id="couple" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-ivory overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blushPink/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-champagne/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2 mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-antiqueGold text-xs uppercase tracking-[0.25em] font-semibold">
            <PeacockMotif className="w-5 h-7" />
            <span>The Eternal Union</span>
            <PeacockMotif className="w-5 h-7 scale-x-[-1]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-deepMaroon tracking-wider uppercase">
            MEET THE BRIDE &amp; GROOM
          </h2>
          <MandalaDivider className="my-4" />
        </motion.div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-stretch">
          {/* Bride Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "600px 0px" }}
            transition={{ duration: 0.8 }}
            className="group relative bg-cream/30 rounded-3xl p-6 sm:p-8 royal-border flex flex-col items-center text-center hover:shadow-royal transition-all duration-500 overflow-hidden"
          >
            <FloralCorner position="top-left" className="absolute top-2 left-2" />
            <FloralCorner position="top-right" className="absolute top-2 right-2" />

            {/* Portrait Frame with Ornate Gold Border */}
            <div className="relative w-64 sm:w-72 aspect-[530/723] rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-[#ECC575] via-[#C6A15B] to-[#A98243] shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#FFFDF7]">
                <img
                  src={weddingConfig.assets.bridePortrait}
                  alt={weddingConfig.bride.portraitAlt}
                  className="w-full h-full object-cover object-center filter brightness-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-6 space-y-2">
              <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-deepMaroon bg-rosePink/20 px-3 py-1 rounded-full">
                THE BRIDE
              </span>
              <h3 className="font-script text-4xl sm:text-5xl text-deepMaroon">
                {weddingConfig.bride.firstName}
              </h3>
              <p className="font-serif italic text-xs tracking-wider text-antiqueGold">
                {weddingConfig.bride.title} {weddingConfig.bride.parents}
              </p>
              <p className="font-serif text-sm text-darkBrown/80 max-w-xs mx-auto pt-2 leading-relaxed">
                {weddingConfig.bride.bio}
              </p>
            </div>
          </motion.div>

          {/* Groom Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "600px 0px" }}
            transition={{ duration: 0.8 }}
            className="group relative bg-cream/30 rounded-3xl p-6 sm:p-8 royal-border flex flex-col items-center text-center hover:shadow-royal transition-all duration-500 overflow-hidden"
          >
            <FloralCorner position="top-left" className="absolute top-2 left-2" />
            <FloralCorner position="top-right" className="absolute top-2 right-2" />

            {/* Portrait Frame with Ornate Gold Border */}
            <div className="relative w-64 sm:w-72 aspect-[530/723] rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-[#ECC575] via-[#C6A15B] to-[#A98243] shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#FFFDF7]">
                <img
                  src={weddingConfig.assets.groomPortrait}
                  alt={weddingConfig.groom.portraitAlt}
                  className="w-full h-full object-cover object-center filter brightness-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-6 space-y-2">
              <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-deepMaroon bg-rosePink/20 px-3 py-1 rounded-full">
                THE GROOM
              </span>
              <h3 className="font-script text-4xl sm:text-5xl text-deepMaroon">
                {weddingConfig.groom.firstName}
              </h3>
              <p className="font-serif italic text-xs tracking-wider text-antiqueGold">
                {weddingConfig.groom.title} {weddingConfig.groom.parents}
              </p>
              <p className="font-serif text-sm text-darkBrown/80 max-w-xs mx-auto pt-2 leading-relaxed">
                {weddingConfig.groom.bio}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Romantic Connecting Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-deepMaroon mb-2">
            <Heart className="w-4 h-4 fill-current text-rosePink" />
            <span className="w-8 h-[1px] bg-champagne"></span>
            <Heart className="w-4 h-4 fill-current text-deepMaroon" />
            <span className="w-8 h-[1px] bg-champagne"></span>
            <Heart className="w-4 h-4 fill-current text-rosePink" />
          </div>
          <p className="font-serif italic text-base sm:text-lg text-darkBrown/90">
            "{weddingConfig.quotes.coupleRomanticMessage}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
