import React from 'react';
import { motion } from 'framer-motion';
import { gujaratiCardsData } from '../data/gujaratiInvitationData';
import { InvitationPage } from './InvitationPage';

/**
 * InvitationBook Component
 * Renders the 4 portrait pages as TWO CLEAN, BALANCED SPREADS:
 * - Upper Side (Row 1): Pages 01 & 02 (Equal height, leveled footer buttons)
 * - Lower Side (Row 2): Pages 03 & 04 (Equal height, leveled footer buttons)
 * Clean, distraction-free traditional presentation with zero unwanted divider lines.
 */
export const InvitationBook = ({ 
  onOpenViewer, 
  onDownloadPage, 
  onSharePage 
}) => {
  const page1 = gujaratiCardsData[0];
  const page2 = gujaratiCardsData[1];
  const page3 = gujaratiCardsData[2];
  const page4 = gujaratiCardsData[3];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 sm:space-y-16">
      {/* ========================================================================= */}
      {/* 1. UPPER SIDE: PAGE 01 & PAGE 02 (EQUAL HEIGHT SPREAD) */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "600px 0px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch justify-items-center">
          {/* Page 01 */}
          <div className="w-full flex justify-center">
            <InvitationPage
              card={page1}
              onOpenViewer={onOpenViewer}
              onDownloadPage={onDownloadPage}
              onSharePage={onSharePage}
              isPrintView={false}
            />
          </div>

          {/* Page 02 */}
          <div className="w-full flex justify-center">
            <InvitationPage
              card={page2}
              onOpenViewer={onOpenViewer}
              onDownloadPage={onDownloadPage}
              onSharePage={onSharePage}
              isPrintView={false}
            />
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. LOWER SIDE: PAGE 03 & PAGE 04 (EQUAL HEIGHT SPREAD) */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "600px 0px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch justify-items-center">
          {/* Page 03 */}
          <div className="w-full flex justify-center">
            <InvitationPage
              card={page3}
              onOpenViewer={onOpenViewer}
              onDownloadPage={onDownloadPage}
              onSharePage={onSharePage}
              isPrintView={false}
            />
          </div>

          {/* Page 04 */}
          <div className="w-full flex justify-center">
            <InvitationPage
              card={page4}
              onOpenViewer={onOpenViewer}
              onDownloadPage={onDownloadPage}
              onSharePage={onSharePage}
              isPrintView={false}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
