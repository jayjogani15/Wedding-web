import React, { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { useMusic } from './hooks/useMusic';
import { LoadingScreen } from './components/LoadingScreen';
import { OpeningScreen } from './components/OpeningScreen';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetals } from './components/FloatingPetals';
import { BackToTop } from './components/BackToTop';

import { FamilySection } from './sections/FamilySection';
import { DateSection } from './sections/DateSection';
import { CoupleSection } from './sections/CoupleSection';
import { EventSection } from './sections/EventSection';
import { GujaratiSection } from './sections/GujaratiSection';
import { MessageSection } from './sections/MessageSection';
import { RSVPSection } from './sections/RSVPSection';
import { FinalSection } from './sections/FinalSection';

export default function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  const {
    isPlaying,
    isMuted,
    togglePlay,
    toggleMute,
    startMusic,
  } = useMusic();

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
    // User interaction enables browser audio playback
    startMusic();
  };

  return (
    <div className="relative min-h-screen bg-ivory text-darkBrown font-sans selection:bg-rosePink/30 selection:text-deepMaroon">
      {/* 1. Initial Brief Luxury Loading Screen */}
      <LoadingScreen />

      {/* 2. Fullscreen Opening Cinematic Screen (Section 1) */}
      <OpeningScreen
        isOpen={isInvitationOpened}
        onOpenInvitation={handleOpenInvitation}
      />

      {/* Persistent Floating Features */}
      {isInvitationOpened && (
        <>
          {/* Subtle Floating Petals */}
          <FloatingPetals />

          {/* Royal Music Player Controller */}
          <MusicPlayer
            isPlaying={isPlaying}
            isMuted={isMuted}
            togglePlay={togglePlay}
            toggleMute={toggleMute}
          />

          {/* Back to Top Floating Button */}
          <BackToTop />
        </>
      )}

      {/* Main Wedding Invitation Narrative */}
      <main className={`transition-opacity duration-1000 ${isInvitationOpened ? 'opacity-100' : 'opacity-0'}`}>
        {/* Section 2: Family Invitation Card */}
        <FamilySection />

        {/* Section 3: Wedding Date and Live Countdown */}
        <DateSection />

        {/* Section 4: Meet The Bride & Groom */}
        <CoupleSection />

        {/* Section 5: Wedding Celebration & Location */}
        <EventSection />

        {/* DEDICATED SECTION: Our Traditional Gujarati Invitation (Four Original Cards) */}
        <GujaratiSection />

        {/* Section 6: Wedding Message */}
        <MessageSection />

        {/* Section 7: RSVP Section */}
        <RSVPSection />

        {/* Section 8: Final Cinematic Wedding Screen & Footer */}
        <FinalSection />
      </main>

      {/* Vercel Speed Insights & Web Analytics */}
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
