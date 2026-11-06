import React from 'react';
import { 
  FloralCorner, 
  DiyaLamp, 
  GaneshSilhouette, 
  KashtbhanjanEmblem,
  AuspiciousEmblem 
} from './OrnamentalBorders';
import { Eye, Download, Share2, MapPin, ExternalLink } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

/**
 * InvitationPage Component
 * Renders an authentic, royal, traditionally designed portrait page of the
 * Jahanvi & Brijesh Gujarati Wedding Patrika (મંગલ કંકોત્રી).
 * Balanced, harmonious header alignment across all 4 pages.
 */
export const InvitationPage = ({ 
  card, 
  onOpenViewer, 
  onDownloadPage, 
  onSharePage, 
  isPrintView = false, 
  isInsideViewer = false 
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      {/* ========================================================================= */}
      {/* THE WEDDING INVITATION BOOK PAGE */}
      {/* ========================================================================= */}
      <div 
        id={`invitation-page-${card.cardNumber}`}
        className={`relative w-full flex-1 max-w-[530px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#FFFDF9] border-[2.5px] border-[#C6A15B] rounded-2xl shadow-xl overflow-hidden font-gujarati text-darkBrown transition-all duration-300 flex flex-col justify-between ${
          isPrintView ? 'shadow-none border-2 p-6' : 'hover:shadow-2xl p-5 sm:p-7'
        }`}
      >
        {/* Subtle Watermark Paper Texture */}
        <div className="absolute inset-0 bg-royal-paper opacity-35 pointer-events-none" />

        {/* Inner Golden Hairline Filigree Border */}
        <div className="absolute inset-2 sm:inset-2.5 border border-[#A98243]/50 rounded-xl pointer-events-none" />
        <div className="absolute inset-3 sm:inset-3.5 border border-[#ECC575]/30 rounded-lg pointer-events-none" />

        {/* Traditional Floral Corner Ornaments */}
        <FloralCorner position="top-left" className="absolute top-2 left-2 z-10 w-7 h-7 text-[#C6A15B] pointer-events-none" />
        <FloralCorner position="top-right" className="absolute top-2 right-2 z-10 w-7 h-7 text-[#C6A15B] pointer-events-none" />
        <FloralCorner position="bottom-left" className="absolute bottom-2 left-2 z-10 w-7 h-7 text-[#C6A15B] pointer-events-none" />
        <FloralCorner position="bottom-right" className="absolute bottom-2 right-2 z-10 w-7 h-7 text-[#C6A15B] pointer-events-none" />

        {/* Elegant Centered Page Badge (Clean, No Stray Lines) */}
        <div className="relative z-10 flex justify-center mb-2">
          <span className="px-3.5 py-0.5 rounded-full bg-[#FAF3E8] border border-[#C6A15B]/70 text-[#722C3B] text-[10px] sm:text-[11px] font-serif font-bold tracking-widest uppercase shadow-xs">
            ॥ પત્રિકા પૃષ્ઠ ૦{card.cardNumber} ॥
          </span>
        </div>

        {/* ========================================================================= */}
        {/* PAGE 01 — ગણેશ નોતરૂ (Ganesh Notru & Svaruchi Bhojan) */}
        {/* ========================================================================= */}
        {card.cardNumber === 1 && (
          <div className="relative z-10 flex-1 flex flex-col justify-between text-center space-y-3.5 sm:space-y-4">
            {/* Consistent Symmetrical Header with Sacred Lord Ganesha Logo */}
            <div className="flex flex-col items-center space-y-1">
              <div className="relative flex items-center justify-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#C6A15B] via-[#ECC575] to-[#722C3B] shadow-md border border-[#C6A15B]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white relative flex items-center justify-center">
                    <img
                      src={weddingConfig.assets.ganeshLogo}
                      alt="શ્રી ગણેશાય નમઃ"
                      className="w-full h-full object-contain p-1 filter contrast-[1.05]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              <p className="gujarati-heading text-xs sm:text-sm font-bold tracking-wider text-[#A98243]">
                {card.content.shloka}
              </p>

              <h2 className="gujarati-heading text-2xl sm:text-3xl lg:text-4xl font-black text-[#722C3B] leading-tight">
                {card.content.mainHeading}
              </h2>

              <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#A98243]">
                {card.content.subHeading}
              </p>

              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-1" />
            </div>

            {/* Auspicious Muhurat & Timing Scroll Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF8] via-[#F8EFE3] to-[#FFFDF8] border-2 border-[#C6A15B]/70 text-center space-y-2 shadow-md relative overflow-hidden">
              <p className="gujarati-heading text-lg sm:text-xl font-black text-[#722C3B]">
                {card.content.tithi}
              </p>
              
              <div className="inline-block px-4 py-1 rounded-full bg-[#FFFDF7] border border-[#C6A15B]/60 shadow-xs">
                <p className="gujarati-body text-sm sm:text-base font-bold text-[#49372E]">
                  🗓️ {card.content.tarikh}
                </p>
              </div>

              <p className="gujarati-body text-sm sm:text-base font-bold text-[#722C3B]">
                ⏰ {card.content.samay}
              </p>

              <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent my-1.5" />

              <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#A98243] italic">
                “{card.content.nimantran}”
              </p>
            </div>

            {/* Sthal (Venue) */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF7] border border-[#C6A15B]/60 shadow-xs space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#A98243] tracking-wider uppercase">
                <MapPin className="w-4 h-4 text-[#C6A15B]" />
                <span>{card.content.sthalTitle}</span>
              </div>
              <p className="gujarati-heading text-lg sm:text-xl font-black text-[#722C3B]">
                {card.content.sthalDetails[0]}
              </p>
              <p className="gujarati-body text-xs sm:text-sm text-[#49372E]/90 leading-relaxed">
                {card.content.sthalDetails[1]} {card.content.sthalDetails[2]}
              </p>
              <p className="gujarati-body text-xs sm:text-sm text-[#49372E]/90 font-medium">
                {card.content.sthalDetails[3]}
              </p>
              {!isPrintView && (
                <div className="pt-1.5 flex justify-center">
                  <a
                    href={weddingConfig.venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#722C3B] hover:bg-[#49372E] text-[#FFF9EF] border border-[#C6A15B] text-[11px] font-bold transition-all shadow-xs cursor-pointer"
                    title="ગુગલ મેપ્સ પર લોકેશન જુઓ"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#ECC575]" />
                    <span>મેપ્સ પર લોકેશન જુઓ</span>
                    <ExternalLink className="w-3 h-3 text-[#ECC575]" />
                  </a>
                </div>
              )}
            </div>

            {/* Nimantrak (Host & Phone) */}
            <div className="pt-3 border-t border-[#C6A15B]/50 space-y-1 pb-1">
              <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#722C3B]">
                {card.content.nimantrakTitle}
              </p>
              <p className="gujarati-body text-sm sm:text-base font-bold text-[#49372E]">
                {card.content.nimantrakNames[0]} • {card.content.nimantrakNames[1]}
              </p>
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#FAF2E6] border border-[#C6A15B]/40 mt-1">
                <p className="gujarati-body text-xs sm:text-sm font-bold text-[#722C3B]">
                  📞 {card.content.contact}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PAGE 02 — પરિવાર આમંત્રણ અને લગ્ન સ્થળ (Family Invitation) */}
        {/* ========================================================================= */}
        {card.cardNumber === 2 && (
          <div className="relative z-10 flex-1 flex flex-col justify-between text-center space-y-3 sm:space-y-3.5">
            {/* Consistent Symmetrical Header */}
            <div className="flex flex-col items-center space-y-1">
              <div className="relative flex items-center justify-center">
                <AuspiciousEmblem className="w-12 h-12 sm:w-14 sm:h-14 text-[#C6A15B] drop-shadow-sm" />
              </div>

              <p className="gujarati-heading text-xs sm:text-sm font-bold tracking-wider text-[#A98243]">
                {card.content.shloka}
              </p>

              <h2 className="gujarati-heading text-2xl sm:text-3xl lg:text-4xl font-black text-[#722C3B] leading-tight">
                ॥ પરિવાર આમંત્રણ ॥
              </h2>

              <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#A98243]">
                ॥ મોસાળ પક્ષ • ભાણેજ પક્ષ • શુભ સ્થળ ॥
              </p>

              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-1" />
            </div>

            {/* Mosal Paksh Box */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#FFFDF8] via-[#FAF2E6] to-[#FFFDF8] border-2 border-[#C6A15B]/70 text-center space-y-1 shadow-sm">
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#722C3B] text-[#FFF9EF] text-xs font-bold mb-1 shadow-xs border border-[#C6A15B]/60">
                {card.content.mosalTitle}
              </div>
              <p className="gujarati-body text-xs sm:text-sm font-bold text-[#49372E]">
                {card.content.mosalNames[0]}
              </p>
              <p className="gujarati-body text-xs sm:text-sm font-bold text-[#49372E]">
                {card.content.mosalNames[1]} <span className="inline-block px-2 py-0.5 rounded-full bg-[#C6A15B]/20 text-[#722C3B] font-bold text-xs ml-1">{card.content.mosalNames[2]}</span>
              </p>
            </div>

            {/* Bhanej Paksh Box */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#FFFDF8] via-[#FAF2E6] to-[#FFFDF8] border-2 border-[#C6A15B]/70 shadow-sm text-left">
              <div className="text-center mb-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#722C3B] text-[#FFF9EF] text-xs font-bold shadow-xs border border-[#C6A15B]/60">
                  {card.content.bhanejTitle}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {card.content.bhanejNames.map((name, idx) => (
                  <p key={idx} className="gujarati-body text-xs sm:text-sm font-semibold text-[#49372E] flex items-center gap-1.5 leading-snug">
                    <span className="text-[#C6A15B] font-bold text-base leading-none">✦</span>
                    <span>{name}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Niwas Sthal Details */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFFDF7] border border-[#C6A15B]/60 text-center space-y-1 shadow-xs">
              <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#722C3B]">
                {card.content.nivasTitle}
              </p>
              <p className="gujarati-body text-xs sm:text-sm font-bold text-[#49372E]">
                {card.content.nivasNames[0]} • {card.content.nivasNames[1]}
              </p>
              <p className="gujarati-body text-xs text-[#49372E]/85 leading-relaxed">
                {card.content.nivasNames[2]} {card.content.nivasNames[3]}
              </p>
              <p className="gujarati-body text-xs font-bold text-[#722C3B]">
                📞 {card.content.nivasNames[4]}
              </p>
            </div>

            {/* Lagna Sthal Details */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-b from-[#FAF2E6] via-[#FFFDF8] to-[#FAF2E6] border-2 border-[#C6A15B]/80 text-center space-y-1 shadow-sm pb-1">
              <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#722C3B]">
                {card.content.lagnaSthalTitle}
              </p>
              <p className="gujarati-heading text-base sm:text-lg font-black text-[#722C3B]">
                {card.content.lagnaSthalDetails[0]}
              </p>
              <p className="gujarati-body text-xs text-[#49372E]/90 font-medium">
                {card.content.lagnaSthalDetails[1]} {card.content.lagnaSthalDetails[2]} {card.content.lagnaSthalDetails[3]}
              </p>
              {!isPrintView && (
                <div className="pt-1 flex justify-center">
                  <a
                    href={weddingConfig.venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#722C3B] hover:bg-[#49372E] text-[#FFF9EF] border border-[#C6A15B] text-[11px] font-bold transition-all shadow-xs cursor-pointer"
                    title="ગુગલ મેપ્સ પર લગ્ન સ્થળ જુઓ"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#ECC575]" />
                    <span>મેપ્સ પર લગ્ન સ્થળ જુઓ</span>
                    <ExternalLink className="w-3 h-3 text-[#ECC575]" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PAGE 03 — સ્નેહાધિન પરિવારજનો (Jogani Elders & Well-Wishers) */}
        {/* ========================================================================= */}
        {card.cardNumber === 3 && (
          <div className="relative z-10 flex-1 flex flex-col justify-between text-center space-y-3 sm:space-y-3.5">
            {/* Consistent Symmetrical Header with Sacred Kashtbhanjan Dev Darshan */}
            <div className="flex flex-col items-center space-y-1">
              <div className="relative flex items-center justify-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#C6A15B] via-[#ECC575] to-[#722C3B] shadow-md border border-[#C6A15B]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#FFF9EF] relative">
                    <img
                      src={weddingConfig.assets.kashtbhanjanDev}
                      alt="શ્રી કષ્ટભંજન દેવ હનુમાનજી સાળંગપુર"
                      className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.03]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              <p className="gujarati-heading text-xs sm:text-sm font-bold tracking-wider text-[#A98243]">
                {card.content.shloka}
              </p>

              <h2 className="gujarati-heading text-2xl sm:text-3xl lg:text-4xl font-black text-[#722C3B] leading-tight">
                {card.content.heading}
              </h2>

              <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#A98243]">
                ॥ સ્નેહીજનો અને પરિવાર વડીલો ॥
              </p>

              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-1" />
            </div>

            {/* Two Balanced Columns of Elders */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FFFDF8] via-[#FAF2E6] to-[#FFFDF8] border-2 border-[#C6A15B]/70 shadow-md text-left">
              <div className="text-center border-b border-[#C6A15B]/40 pb-1.5 mb-3">
                <span className="inline-block px-4 py-0.5 rounded-full bg-[#722C3B] text-[#FFF9EF] text-xs font-bold shadow-xs border border-[#C6A15B]/60">
                  ॥ પરિવાર વડીલો ॥
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5 relative">
                {/* Subtle vertical center divider on sm+ screens */}
                <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#C6A15B]/50 to-transparent" />
                
                <div className="space-y-1 sm:pr-2">
                  {card.content.column1.map((name, i) => (
                    <p key={i} className="gujarati-body text-xs sm:text-sm text-[#49372E] font-medium flex items-start gap-1.5 leading-snug">
                      <span className="text-[#C6A15B] font-bold text-xs mt-0.5">✦</span>
                      <span>{name}</span>
                    </p>
                  ))}
                </div>
                <div className="space-y-1 sm:pl-2">
                  {card.content.column2.map((name, i) => (
                    <p key={i} className="gujarati-body text-xs sm:text-sm text-[#49372E] font-medium flex items-start gap-1.5 leading-snug">
                      <span className="text-[#C6A15B] font-bold text-xs mt-0.5">✦</span>
                      <span>{name}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Family Matrushri Blessing Ribbon */}
            <div className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#F7EBDD]/60 via-[#E8B7BD]/30 to-[#F7EBDD]/60 border border-[#C6A15B]/60 text-center shadow-xs">
              <p className="gujarati-heading text-xs sm:text-sm font-black text-[#722C3B]">
                🙏 {card.content.blessingMessage} 🙏
              </p>
            </div>

            {/* Darshanabhilashi Section */}
            <div className="p-4 rounded-xl bg-gradient-to-b from-[#FFFDF8] via-[#FAF2E6] to-[#FFFDF8] border-2 border-[#C6A15B]/70 shadow-sm text-left pb-1.5">
              <div className="text-center border-b border-[#C6A15B]/40 pb-1.5 mb-2.5">
                <span className="inline-block px-3.5 py-0.5 rounded-full bg-[#722C3B] text-[#FFF9EF] text-xs font-bold shadow-xs border border-[#C6A15B]/60">
                  ॥ {card.content.darshanaTitle} ॥
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {card.content.darshanabhilashi.map((name, i) => (
                  <p key={i} className="gujarati-body text-xs sm:text-sm text-[#49372E] font-medium flex items-center gap-1.5 leading-snug">
                    <span className="text-[#C6A15B] font-bold text-xs">✦</span>
                    <span>{name}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PAGE 04 — લગ્ન પ્રસંગો અને કાર્યક્રમ (Avasar Mangalyam - 5 Ceremonies) */}
        {/* ========================================================================= */}
        {card.cardNumber === 4 && (
          <div className="relative z-10 flex-1 flex flex-col justify-between text-center space-y-3 sm:space-y-3.5">
            {/* Consistent Symmetrical Header with Sacred Shree Harikrishna Maharaj Logo */}
            <div className="flex flex-col items-center space-y-1">
              <div className="relative flex items-center justify-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#C6A15B] via-[#ECC575] to-[#722C3B] shadow-md border border-[#C6A15B]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white relative flex items-center justify-center">
                    <img
                      src={weddingConfig.assets.harikrishnaMaharaj}
                      alt="શ્રી હરિકૃષ્ણ મહારાજ"
                      className="w-full h-full object-cover object-top filter contrast-[1.05]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              <p className="gujarati-heading text-xs sm:text-sm font-bold tracking-wider text-[#A98243]">
                {card.content.shloka}
              </p>

              <h2 className="gujarati-heading text-2xl sm:text-3xl lg:text-4xl font-black text-[#722C3B] leading-tight">
                {card.content.heading}
              </h2>

              <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#A98243]">
                ॥ શુભ લગ્ન પ્રસંગો અને કાર્યક્રમ ॥
              </p>

              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent mx-auto mt-1" />
            </div>

            {/* 5 Distinct Wedding Events with Gold Borders */}
            <div className="space-y-2.5 sm:space-y-3">
              {card.content.events.map((ev, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#FFFDF8] via-[#FAF2E6] to-[#FFFDF8] border-2 border-[#C6A15B]/70 shadow-sm text-center relative overflow-hidden flex flex-col items-center justify-center transition-all hover:border-[#722C3B]/60"
                >
                  {/* Left Golden Accent Bar */}
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C6A15B] via-[#ECC575] to-[#A98243]" />
                  
                  <h3 className="gujarati-heading text-base sm:text-lg font-black text-[#722C3B]">
                    {ev.name}
                  </h3>

                  <div className="inline-block px-3 py-0.5 rounded-full bg-[#FFFDF7] border border-[#C6A15B]/50 shadow-xs mt-1">
                    <p className="gujarati-body text-xs sm:text-sm font-bold text-[#49372E]">
                      🗓️ {ev.dateTime}
                    </p>
                  </div>

                  {ev.subtext && (
                    <p className="gujarati-heading text-xs sm:text-sm font-bold text-[#A98243] mt-1 italic">
                      “{ev.subtext}”
                    </p>
                  )}

                  <p className="gujarati-body text-[11px] sm:text-xs text-[#722C3B] font-semibold mt-0.5">
                    📍 {ev.place}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Blessing */}
            <div className="pt-2.5 border-t border-[#C6A15B]/50 pb-1">
              <div className="flex items-center justify-center gap-2">
                <DiyaLamp className="w-3.5 h-3.5" />
                <p className="font-serif italic text-xs sm:text-sm text-[#722C3B] font-bold">
                  જહાનવી ❤️ બ્રિજેશ • શુભ વિવાહ ૨૬/૧૧/૨૦૨૬
                </p>
                <DiyaLamp className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* COMPACT EXTERNAL ACTION BUTTONS */}
      {/* ========================================================================= */}
      {!isPrintView && !isInsideViewer && (
        <div className="mt-3.5 flex items-center justify-center gap-2 w-full max-w-[530px]">
          <button
            onClick={() => onOpenViewer(card.id)}
            className="flex-1 py-2 px-3.5 rounded-full bg-[#722C3B] hover:bg-[#49372E] text-[#FFF9EF] text-xs font-gujarati font-bold transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer border border-[#C6A15B]"
          >
            <Eye className="w-3.5 h-3.5 text-[#ECC575]" />
            <span>સંપૂર્ણ કંકોત્રી જુઓ (View Full)</span>
          </button>

          <button
            onClick={() => onDownloadPage(card)}
            aria-label={`Download Page ${card.cardNumber}`}
            className="p-2 rounded-full border border-[#C6A15B] text-[#49372E] hover:bg-[#C6A15B]/20 transition cursor-pointer bg-[#FFFDF7]"
            title="પેજ ડાઉનલોડ કરો"
          >
            <Download className="w-3.5 h-3.5 text-[#A98243]" />
          </button>

          <button
            onClick={() => onSharePage(card)}
            aria-label={`Share Page ${card.cardNumber}`}
            className="p-2 rounded-full border border-[#C6A15B] text-[#49372E] hover:bg-emerald-50 transition cursor-pointer bg-[#FFFDF7]"
            title="વોટ્સએપ પર શેર કરો"
          >
            <Share2 className="w-3.5 h-3.5 text-[#25D366]" />
          </button>
        </div>
      )}
    </div>
  );
};
