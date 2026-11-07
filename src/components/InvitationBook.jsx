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
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
        {gujaratiCardsData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "600px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="w-full flex justify-center"
          >
            <InvitationPage
              card={card}
              onOpenViewer={onOpenViewer}
              onDownloadPage={onDownloadPage}
              onSharePage={onSharePage}
              isPrintView={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
