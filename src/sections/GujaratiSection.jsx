import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gujaratiCardsData } from '../data/gujaratiInvitationData';
import { InvitationBook } from '../components/InvitationBook';
import { InvitationViewer } from '../components/InvitationViewer';
import { InvitationPage } from '../components/InvitationPage';
import { MandalaDivider, DiyaLamp } from '../components/OrnamentalBorders';

/**
 * GujaratiInvitationSection / GujaratiSection Component
 * Rebuilt as an authentic 4-page Gujarati Wedding Invitation Booklet (પત્રિકા પુસ્તિકા)
 */
export const GujaratiSection = () => {
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleOpenViewer = (cardId) => {
    setSelectedCardId(cardId);
  };

  const handleCloseViewer = () => {
    setSelectedCardId(null);
  };

  // Download Individual Page image
  const handleDownloadPage = (card) => {
    const link = document.createElement('a');
    link.href = card.image;
    link.download = `Jahanvi-Brijesh-Patrika-Page-0${card.cardNumber}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // WhatsApp Share for Individual Page
  const handleSharePage = (card) => {
    const text = `*જહાનવી ❤️ બ્રિજેશ - શાહી લગ્ન આમંત્રણ*\n\n*${card.titleGujarati} (Page 0${card.cardNumber})*\n${card.dateFormatted}\nસ્થળ: ${card.venueName}\n\nસંપૂર્ણ કંકોત્રી પુસ્તિકા જોવા માટે અહીં ક્લિક કરો:\n${window.location.href}#gujarati-invitation`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Trigger Complete 4-Page PDF Generation / Print Dialog
  const handleDownloadCompletePdf = () => {
    window.print();
  };

  return (
    <section 
      id="gujarati-invitation" 
      className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#FFF9EF] via-[#F7EBDD]/40 to-[#FFF9EF] overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-5 w-96 h-96 bg-[#E8B7BD]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-5 w-96 h-96 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-[#A98243] text-xs uppercase tracking-[0.25em] font-semibold">
            <DiyaLamp className="w-5 h-5 text-[#C6A15B]" />
            <span>મંગલ કંકોત્રી પુસ્તિકા</span>
            <DiyaLamp className="w-5 h-5 text-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#722C3B] tracking-wider uppercase">
            OUR TRADITIONAL GUJARATI INVITATION
          </h2>

          <p className="gujarati-heading text-xl sm:text-2xl text-[#A98243] font-bold tracking-normal">
            "પરંપરા, પ્રેમ અને પરિવારના આશીર્વાદ સાથે"
          </p>

          <MandalaDivider className="my-3 max-w-sm mx-auto" />

          <p className="font-serif text-xs sm:text-sm text-[#49372E]/80 max-w-xl mx-auto tracking-wide">
            Explore our authentic four-page Gujarati wedding invitation booklet. All family details, lineage, and ceremonies are designed inside each portrait page.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* INVITATION BOOK: 2-COLUMN BOOK SPREAD (DESKTOP) / 1-COLUMN (MOBILE) */}
        {/* ========================================================================= */}
        <InvitationBook
          onOpenViewer={handleOpenViewer}
          onDownloadPage={handleDownloadPage}
          onSharePage={handleSharePage}
        />
      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN DIGITAL PATRIKA VIEWER */}
      {/* ========================================================================= */}
      {selectedCardId && (
        <InvitationViewer
          selectedCardId={selectedCardId}
          onClose={handleCloseViewer}
          onSelectCard={handleOpenViewer}
          onDownloadPdf={handleDownloadCompletePdf}
        />
      )}

      {/* ========================================================================= */}
      {/* PRINT-ONLY CONTAINER: 4-PAGE HIGH-RESOLUTION A4 PDF CONTAINER */}
      {/* ========================================================================= */}
      <div id="gujarati-patrika-print-container" className="hidden">
        {gujaratiCardsData.map((card) => (
          <div key={`print-${card.id}`} className="print-page-break">
            <InvitationPage
              card={card}
              onOpenViewer={() => {}}
              onDownloadPage={() => {}}
              onSharePage={() => {}}
              isPrintView={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// Also export as GujaratiInvitationSection for component naming parity
export const GujaratiInvitationSection = GujaratiSection;
