import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { submitRSVP, buildWhatsAppRSVPUrl } from '../services/rsvpService';
import { MandalaDivider, DiyaLamp, FloralCorner } from '../components/OrnamentalBorders';
import { CheckCircle2, AlertCircle, Send, HeartHandshake, MessageSquareShare, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RSVPSection = () => {
  const [formData, setFormData] = useState({
    guestName: '',
    phone: '',
    guestCount: '1',
    attendance: 'attending',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successData, setSuccessData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const result = await submitRSVP(formData);
      setSuccessData(result.data);

      // Instantly forward complete RSVP information directly to host's WhatsApp
      const waUrl = buildWhatsAppRSVPUrl(formData);
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      // Confetti burst on attendance confirmation
      if (formData.attendance === 'attending') {
        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#C6A15B', '#E8B7BD', '#722C3B'],
          });
        } catch (e) {}
      }
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please check your inputs or RSVP via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setFormData({
      guestName: '',
      phone: '',
      guestCount: '1',
      attendance: 'attending',
      message: '',
    });
  };

  const whatsappUrl = buildWhatsAppRSVPUrl(formData);

  return (
    <section id="rsvp" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-ivory overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-champagne/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2 mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-antiqueGold text-xs uppercase tracking-[0.25em] font-semibold">
            <DiyaLamp className="w-4 h-4" />
            <span>Celebrate With Us</span>
            <DiyaLamp className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-deepMaroon tracking-wider uppercase">
            WE WOULD LOVE TO HAVE YOU WITH US
          </h2>
          <MandalaDivider className="my-4" />
          <p className="font-serif text-sm sm:text-base text-darkBrown/80 max-w-md mx-auto">
            Please confirm your gracious presence by filling out the RSVP below.
          </p>
        </motion.div>

        {/* RSVP Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "600px 0px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-cream/30 rounded-3xl p-6 sm:p-10 royal-border overflow-hidden"
        >
          <FloralCorner position="top-left" className="absolute top-2 left-2" />
          <FloralCorner position="top-right" className="absolute top-2 right-2" />

          {successData ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-4"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-deepMaroon">
                RSVP Received With Joy!
              </h3>

              <p className="font-serif text-base text-darkBrown/90 max-w-md mx-auto">
                Thank you, <strong className="text-deepMaroon">{successData.guestName}</strong>! 
                {successData.attendance === 'attending' 
                  ? ` We are thrilled to celebrate our special day with you (Guests: ${successData.guestCount}).`
                  : ' We will miss you dearly, but your warm blessings remain forever close to our hearts.'}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                {/* Send via WhatsApp confirmation */}
                <a
                  href={buildWhatsAppRSVPUrl(successData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow"
                >
                  <MessageSquareShare className="w-4 h-4" />
                  <span>Open in WhatsApp (+91 90239 09531)</span>
                </a>

                {/* Edit or Submit Another */}
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full border border-champagne text-xs sm:text-sm font-semibold text-darkBrown hover:bg-cream transition-colors"
                >
                  Submit Another RSVP
                </button>
              </div>
            </motion.div>
          ) : (
            /* RSVP Form */
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              {/* Error Message Alert */}
              <AnimatePresence>
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Guest Name */}
              <div>
                <label htmlFor="guestName" className="block text-xs uppercase tracking-wider font-semibold text-darkBrown mb-1.5">
                  Guest Name <span className="text-deepMaroon">*</span>
                </label>
                <input
                  type="text"
                  id="guestName"
                  name="guestName"
                  required
                  value={formData.guestName}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh & Family"
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-champagne/50 text-darkBrown placeholder-darkBrown/40 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-darkBrown mb-1.5">
                  Mobile Number (India) <span className="text-deepMaroon">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-champagne/50 text-darkBrown placeholder-darkBrown/40 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition"
                />
                <span className="text-[11px] text-darkBrown/60 mt-1 block">
                  10-digit Indian mobile number for invitation updates
                </span>
              </div>

              {/* Number of Guests */}
              <div>
                <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider font-semibold text-darkBrown mb-1.5">
                  Number of Guests <span className="text-deepMaroon">*</span>
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  required
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-champagne/50 text-darkBrown focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance Confirmation Radio */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-darkBrown mb-2">
                  Will You Be Joining Us? <span className="text-deepMaroon">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition ${
                      formData.attendance === 'attending'
                        ? 'bg-rosePink/15 border-deepMaroon text-deepMaroon font-medium'
                        : 'bg-ivory border-champagne/40 text-darkBrown/80 hover:bg-cream/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="attending"
                      checked={formData.attendance === 'attending'}
                      onChange={handleChange}
                      className="accent-deepMaroon w-4 h-4"
                    />
                    <span className="text-sm">Joyfully Attending</span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition ${
                      formData.attendance === 'unable'
                        ? 'bg-rosePink/15 border-deepMaroon text-deepMaroon font-medium'
                        : 'bg-ivory border-champagne/40 text-darkBrown/80 hover:bg-cream/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="unable"
                      checked={formData.attendance === 'unable'}
                      onChange={handleChange}
                      className="accent-deepMaroon w-4 h-4"
                    />
                    <span className="text-sm">Regretfully Unable</span>
                  </label>
                </div>
              </div>

              {/* Optional Personal Message */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-darkBrown mb-1.5">
                  Warm Wishes / Message to Couple (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a heartfelt blessing or message for Jahanvi & Brijesh..."
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-champagne/50 text-darkBrown placeholder-darkBrown/40 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full font-serif font-semibold tracking-wider text-xs sm:text-sm uppercase text-white shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 gold-shimmer-btn flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>SENDING RSVP TO WHATSAPP...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquareShare className="w-4.5 h-4.5 text-white" />
                      <span>CONFIRM &amp; SEND TO WHATSAPP</span>
                    </>
                  )}
                </button>

                {/* Subtext info */}
                <div className="text-center pt-2">
                  <span className="text-xs text-darkBrown/70">
                    Delivers your RSVP details directly to host WhatsApp (+91 90239 09531)
                  </span>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
