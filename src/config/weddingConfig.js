/**
 * Centralized Wedding Configuration
 * Jahanvi ❤️ Brijesh | 26 November 2026
 * 
 * Edit any wedding detail, asset path, or service URL here.
 */

export const weddingConfig = {
  // Couple Information
  bride: {
    firstName: "Jahanvi",
    fullName: "Jahanvi Jogani",
    title: "Beloved dear daughter of",
    parents: "Smt. Jagrutiben Jogani & Shri Kalubhai Jogani",
    portraitAlt: "Portrait of Bride Jahanvi",
    bio: "Graceful, radiant, and bringing endless warmth and light to every moment.",
  },
  groom: {
    firstName: "Brijesh",
    fullName: "Brijesh Parsana",
    title: "Beloved dear son of",
    parents: "Smt. Hansaben Parsana & Shri Dhirajbhai Parsana",
    portraitAlt: "Portrait of Groom Brijesh",
    bio: "Noble, devoted, and beginning this lifelong adventure with devotion and love.",
  },

  // Wedding Date & Time
  eventDate: {
    day: "26",
    month: "NOVEMBER",
    year: "2026",
    time: "6:00 PM",
    displayFullDate: "Thursday, 26 November 2026",
    // Exact Target in IST (Asia/Kolkata: UTC+05:30)
    targetISO: "2026-11-26T18:00:00+05:30",
    timezone: "Asia/Kolkata",
  },

  // Venue & Location
  venue: {
    title: "Wedding Ceremony",
    name: "Ruta Party Plot",
    nameGujarati: "ઋતા પાર્ટી પ્લોટ",
    address: "Near Gurukrupa Bungalows, Behind Shyamdham Mandir, Sarthana Jakatnaka, Surat, Gujarat 395013",
    addressGujarati: "ગુરુકૃપા બંગ્લોઝ ની બાજુમાં, શ્યામધામ મંદિર પાછળ, સરથાણા જકાતનાકા, સુરત.",
    dateFormatted: "26 November 2026",
    timeFormatted: "6:00 PM onwards",
    // Universal Google Maps search URL (works reliably on 100% of browsers/devices)
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ruta+Party+Plot+Shyamdham+Mandir+Sarthana+Jakatnaka+Surat",
    // Direct link provided by user
    shortMapUrl: "https://maps.app.goo.gl/Bc7iVipx5hfjBez97",
    // Driving directions link
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ruta+Party+Plot+Shyamdham+Mandir+Sarthana+Jakatnaka+Surat",
    // Interactive Google Maps Embed
    embedMapUrl: "https://maps.google.com/maps?q=Ruta+Party+Plot,+Shyamdham+Mandir,+Sarthana+Jakatnaka,+Surat,+Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    note: "Ruta Party Plot, Near Shyamdham Mandir, Sarthana Jakatnaka, Surat",
  },

  // Quotes & Messages
  quotes: {
    openingBlessing: "Together with the blessings of our families",
    openingTagline: "Two hearts, one beautiful journey",
    familyInviteHeader: "With joy and the blessings of our elders, we invite you to the wedding of our",
    calendarInvite: "Mark your calendars — our forever begins on this joyous day, and we would be honoured to have you by our side.",
    coupleRomanticMessage: "Two souls, one destiny, and a lifetime of togetherness.",
    emotionalMessage: "With our hearts full and smiles wide, come celebrate our love, share our joy, and help make this day a beautiful memory we will cherish forever!",
    finalTagline: "FOREVER BEGINS HERE",
    finalSubtext: "Your presence will make our celebration even more special.",
    footerText: "Made with love for Jahanvi & Brijesh",
  },

  // WhatsApp Sharing & Contacts
  sharing: {
    // Falls back to current window location if empty
    websiteUrl: "",
    defaultWebsiteUrl: "https://jahanvi-brijesh.wedding",
    whatsappShareText: "You are cordially invited to celebrate the  Wedding of *Jahanvi ❤️ Brijesh* on *26 November 2026*! Please view our official interactive invitation here: ",
    // Default contact number for WhatsApp RSVP fallback (optional)
    organizerWhatsApp: "919023909531",
  },

  // RSVP Service Configuration
  rsvp: {
    storageKey: "jahanvi_brijesh_rsvp_submissions",
    // Configurable API endpoint (if backend or Supabase is connected)
    apiEndpoint: import.meta.env.VITE_RSVP_API_URL || null,
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL || null,
    supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || null,
  },

  // Audio / Music Settings
  music: {
    title: "Indian Background Flute Melody",
    subtitle: "Soulful Bansuri & Romantic Ambient Melody",
    autoPlayPrompt: true,
  },

  // Asset paths
  assets: {
    heroEntrance: `${import.meta.env.BASE_URL}assets/images/hero-palace-entrance.jpg`,
    bridePortrait: `${import.meta.env.BASE_URL}assets/images/bride-portrait.jpg`,
    groomPortrait: `${import.meta.env.BASE_URL}assets/images/groom-portrait.jpg`,
    finalSunset: `${import.meta.env.BASE_URL}assets/images/final-sunset-temple.jpg`,
    gujaratiCard1: `${import.meta.env.BASE_URL}assets/images/gujarati-card-1.jpg`,
    gujaratiCard2: `${import.meta.env.BASE_URL}assets/images/gujarati-card-2.jpg`,
    gujaratiCard3: `${import.meta.env.BASE_URL}assets/images/gujarati-card-3.jpg`,
    gujaratiCard4: `${import.meta.env.BASE_URL}assets/images/gujarati-card-4.jpg`,
    ganeshLogo: `${import.meta.env.BASE_URL}assets/images/ganesh-logo.jpg`,
    kashtbhanjanDev: `${import.meta.env.BASE_URL}assets/images/kashtbhanjan-dev.jpg`,
    harikrishnaMaharaj: `${import.meta.env.BASE_URL}assets/images/harikrishna-maharaj.jpg`,
    swaminarayanLeft: `${import.meta.env.BASE_URL}assets/images/swaminarayan-flower.jpg`,
    swaminarayanRight: `${import.meta.env.BASE_URL}assets/images/swaminarayan-gold.jpg`,
    audioTrack: `${import.meta.env.BASE_URL}assets/audio/dpstudiomusic-indian-background-flute-250098.mp3`,
  }
};
