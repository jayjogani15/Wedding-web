import React from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Download, 
  FileText, 
  Share2, 
  X 
} from 'lucide-react';

/**
 * InvitationDownloadControls Component
 * Controls for Zooming, Downloading Single Page, Downloading 4-Page PDF,
 * WhatsApp Sharing, and Closing the Viewer
 */
export const InvitationDownloadControls = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onDownloadPage,
  onDownloadPdf,
  onShare,
  onClose
}) => {
  return (
    <div className="flex items-center gap-2">
      {/* Zoom Controls (Desktop / Tablet) */}
      <div className="hidden sm:flex items-center gap-1 bg-[#49372E]/90 backdrop-blur-md p-1 rounded-full border border-[#C6A15B]/40 text-[#FFF9EF]">
        <button
          onClick={onZoomOut}
          aria-label="Zoom Out"
          className="p-1.5 hover:text-[#C6A15B] transition-colors"
          title="ઝૂમ આઉટ (-)"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={onResetZoom}
          aria-label="Reset Zoom"
          className="p-1.5 hover:text-[#C6A15B] transition-colors text-xs font-mono px-2"
          title="રીસેટ"
        >
          {Math.round(zoomLevel * 100)}%
        </button>
        <button
          onClick={onZoomIn}
          aria-label="Zoom In"
          className="p-1.5 hover:text-[#C6A15B] transition-colors"
          title="ઝૂમ ઇન (+)"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>

      {/* Download 4-Page Complete PDF Button */}
      <button
        onClick={onDownloadPdf}
        aria-label="Download Complete PDF"
        className="flex items-center gap-1.5 bg-[#C6A15B] hover:bg-[#A98243] text-[#49372E] hover:text-[#FFF9EF] font-bold text-xs px-3.5 py-2 rounded-full transition shadow-md cursor-pointer"
        title="સંપૂર્ણ ૪-પેજ કંકોત્રી PDF ડાઉનલોડ"
      >
        <FileText className="w-3.5 h-3.5" />
        <span className="hidden md:inline">સંપૂર્ણ PDF</span>
      </button>

      {/* Download Single Page Button */}
      <button
        onClick={onDownloadPage}
        aria-label="Download This Page"
        className="flex items-center gap-1.5 bg-[#FFF9EF]/20 hover:bg-[#C6A15B]/30 text-[#FFF9EF] border border-[#C6A15B]/60 font-semibold text-xs px-3 py-2 rounded-full transition cursor-pointer"
        title="આ પેજ ડાઉનલોડ કરો"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden lg:inline">પેજ ડાઉનલોડ</span>
      </button>

      {/* WhatsApp Share Button */}
      <button
        onClick={onShare}
        aria-label="Share on WhatsApp"
        className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs px-3.5 py-2 rounded-full transition shadow-md cursor-pointer"
        title="વોટ્સએપ પર શેર કરો"
      >
        <Share2 className="w-3.5 h-3.5" />
        <span className="hidden xs:inline">શેર</span>
      </button>

      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Viewer"
        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#FFF9EF]/20 text-[#FFF9EF] hover:bg-[#E8B7BD] hover:text-[#49372E] transition-colors cursor-pointer"
        title="બંધ કરો (Esc)"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};
