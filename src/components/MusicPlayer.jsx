import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';

export const MusicPlayer = ({ isPlaying, isMuted, togglePlay, toggleMute }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2 select-none">
      {/* Floating Song Title Tooltip Pill */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#FFFDF7]/95 backdrop-blur-md border border-[#C6A15B]/70 shadow-[0_8px_25px_rgba(73,55,46,0.18)] text-xs text-[#49372E] font-serif shadow-royal whitespace-nowrap pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-[#C6A15B] animate-ping" />
            <div className="flex flex-col text-left">
              <span className="font-bold text-[#722C3B] leading-tight">
                {weddingConfig.music.title}
              </span>
              <span className="text-[10px] text-[#A98243] italic">
                {isPlaying ? (isMuted ? 'Muted' : 'Playing Bansuri Melody') : 'Music Paused'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Royal Golden Circular Music Controller */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className={`relative flex items-center gap-1.5 p-1.5 rounded-full bg-gradient-to-br from-[#FFFDF7] via-[#FFF9EF] to-[#F7EBDD] border-2 border-[#C6A15B] shadow-[0_10px_30px_rgba(114,44,59,0.22)] backdrop-blur-md transition-all duration-300 ${
          isPlaying && !isMuted ? 'ring-2 ring-[#C6A15B]/50 ring-offset-2 ring-offset-[#FFF9EF]' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Play / Pause Circular Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause Bansuri Flute music" : "Play Bansuri Flute music"}
          title={isPlaying ? "Pause Bansuri Flute" : "Play Bansuri Flute"}
          className={`relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all duration-300 cursor-pointer shadow-md ${
            isPlaying
              ? 'bg-gradient-to-br from-[#722C3B] to-[#551C28] text-[#FFF9EF]'
              : 'bg-gradient-to-br from-[#C6A15B] to-[#A98243] text-white hover:brightness-105'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current text-[#FFF9EF]" />
          ) : (
            <Play className="w-5 h-5 ml-0.5 fill-current text-white" />
          )}

          {/* Golden Rotating Ring when playing */}
          {isPlaying && !isMuted && (
            <span className="absolute inset-0 rounded-full border border-dashed border-[#C6A15B]/40 animate-[spin_10s_linear_infinite]" />
          )}
        </button>

        {/* Dynamic Animated Bansuri Music Wave Lines */}
        {isPlaying && !isMuted && (
          <div className="flex items-center gap-[3px] h-5 px-1.5" aria-hidden="true">
            <span className="w-1 bg-[#C6A15B] rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-3.5" />
            <span className="w-1 bg-[#722C3B] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.2s] h-5" />
            <span className="w-1 bg-[#A98243] rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.4s] h-4" />
            <span className="w-1 bg-[#C6A15B] rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.1s] h-3" />
          </div>
        )}

        {/* Mute / Unmute Secondary Toggle */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute Bansuri Flute" : "Mute Bansuri Flute"}
          title={isMuted ? "Unmute Bansuri Flute" : "Mute Bansuri Flute"}
          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#722C3B] hover:text-[#A98243] hover:bg-[#F7EBDD] transition-colors cursor-pointer"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-[#722C3B]/80" />
          ) : (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#C6A15B]" />
          )}
        </button>
      </motion.div>
    </div>
  );
};
