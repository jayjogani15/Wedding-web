import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gujaratiCardsData } from '../data/gujaratiInvitationData';
import { InvitationPage } from './InvitationPage';
import { InvitationNavigation } from './InvitationNavigation';
import { InvitationDownloadControls } from './InvitationDownloadControls';

/**
 * InvitationViewer Component
 * Fullscreen Interactive Wedding Patrika Reader
 */
export const InvitationViewer = ({ 
  selectedCardId, 
  onClose, 
  onSelectCard, 
  onDownloadPdf 
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentIndex = gujaratiCardsData.findIndex((c) => c.id === selectedCardId);
  const currentCard = gujaratiCardsData[currentIndex] || gujaratiCardsData[0];

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (selectedCardId) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedCardId]);

  // Reset zoom on page navigation
  useEffect(() => {
    setZoomLevel(1);
  }, [selectedCardId]);

  // Keyboard navigation & Escape key handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + gujaratiCardsData.length) % gujaratiCardsData.length;
    onSelectCard(gujaratiCardsData[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % gujaratiCardsData.length;
    onSelectCard(gujaratiCardsData[nextIdx].id);
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.2, 2.0));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.2, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  // Download Individual Page image
  const handleDownloadPage = () => {
    const link = document.createElement('a');
    link.href = currentCard.image;
    link.download = `Jahanvi-Brijesh-Patrika-Page-0${currentCard.cardNumber}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // WhatsApp Share with Authentic Gujarati Message
  const handleShare = () => {
    const text = `*જહાનવી ❤️ બ્રિજેશ - શાહી લગ્ન આમંત્રણ*\n\n*${currentCard.titleGujarati} (Page 0${currentCard.cardNumber})*\n${currentCard.dateFormatted}\nસ્થળ: ${currentCard.venueName}\n\nસંપૂર્ણ કંકોત્રી પુસ્તિકા જોવા માટે અહીં ક્લિક કરો:\n${window.location.href}#gujarati-invitation`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!selectedCardId) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#120C09]/95 backdrop-blur-md p-2 sm:p-4 select-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Top Floating Control Bar */}
        <div className="absolute top-2 left-2 right-2 sm:top-5 sm:left-6 sm:right-6 flex items-center justify-between z-30 pointer-events-auto">
          <InvitationNavigation
            currentIndex={currentIndex}
            totalCount={gujaratiCardsData.length}
            currentTitle={currentCard.titleGujarati}
            onPrev={handlePrev}
            onNext={handleNext}
            onClose={onClose}
          />

          <InvitationDownloadControls
            zoomLevel={zoomLevel}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onResetZoom={handleResetZoom}
            onDownloadPage={handleDownloadPage}
            onDownloadPdf={onDownloadPdf}
            onShare={handleShare}
            onClose={onClose}
          />
        </div>

        {/* Center Page Viewport with Vertical Scroll support */}
        <div className="relative w-full h-full max-h-[92vh] flex items-center justify-center overflow-auto p-2 pt-20 pb-6">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: zoomLevel }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[520px] my-auto"
          >
            <InvitationPage
              card={currentCard}
              onOpenViewer={() => {}}
              onDownloadPage={handleDownloadPage}
              onSharePage={handleShare}
              isPrintView={false}
              isInsideViewer={true}
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
