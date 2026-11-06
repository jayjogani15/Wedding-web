import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * InvitationNavigation Component
 * Top bar header and next/prev arrow buttons for Fullscreen Viewer
 */
export const InvitationNavigation = ({ 
  currentIndex, 
  totalCount, 
  currentTitle, 
  onPrev, 
  onNext, 
  onClose 
}) => {
  return (
    <>
      {/* Top Left: Title & Page Indicator */}
      <div className="flex items-center gap-2.5 bg-[#49372E]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#C6A15B]/40 text-[#FFF9EF] shadow-xl">
        <span className="gujarati-heading text-xs sm:text-sm text-[#C6A15B] font-bold m-0 p-0 text-left">
          {currentTitle}
        </span>
        <span className="text-[11px] text-[#FFF9EF]/70 font-mono">
          ({currentIndex + 1} / {totalCount})
        </span>
      </div>

      {/* Floating Left Arrow */}
      <button
        onClick={onPrev}
        aria-label="Previous Page"
        className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#49372E]/90 hover:bg-[#C6A15B] text-[#FFF9EF] hover:text-[#49372E] border border-[#C6A15B]/50 flex items-center justify-center transition-all shadow-2xl cursor-pointer"
        title="અગાઉનું પેજ (Previous Page)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Floating Right Arrow */}
      <button
        onClick={onNext}
        aria-label="Next Page"
        className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#49372E]/90 hover:bg-[#C6A15B] text-[#FFF9EF] hover:text-[#49372E] border border-[#C6A15B]/50 flex items-center justify-center transition-all shadow-2xl cursor-pointer"
        title="આગળનું પેજ (Next Page)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
};
