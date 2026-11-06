import { weddingConfig } from '../config/weddingConfig';

/**
 * Validates Indian 10-digit mobile phone number
 * (allows leading +91, 0, or plain 10 digits starting with 6-9)
 */
export function validateIndianPhone(phone) {
  if (!phone) return false;
  const cleanPhone = phone.toString().replace(/[\s\-\(\)\+]/g, '');
  // Match 10 digits starting with 6, 7, 8, or 9 (or prefixed with 91 or 0)
  const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  return regex.test(cleanPhone);
}

/**
 * Submit RSVP to persistent storage (localStorage) and configured API/Supabase endpoint
 */
export async function submitRSVP(formData) {
  const { guestName, phone, guestCount, attendance, message } = formData;

  // Validation checks
  if (!guestName || guestName.trim().length < 2) {
    throw new Error("Please enter your full name (minimum 2 characters).");
  }

  const cleanPhone = phone ? phone.trim().replace(/[\s\-\(\)]/g, '') : "";
  if (!validateIndianPhone(cleanPhone)) {
    throw new Error("Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).");
  }

  const countNum = parseInt(guestCount, 10);
  if (isNaN(countNum) || countNum < 1 || countNum > 20) {
    throw new Error("Please specify a valid number of guests (1 to 20).");
  }

  if (!attendance) {
    throw new Error("Please select whether you will be attending.");
  }

  const submission = {
    id: 'rsvp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    guestName: guestName.trim(),
    phone: cleanPhone,
    guestCount: countNum,
    attendance,
    message: message ? message.trim() : "",
    createdAt: new Date().toISOString(),
  };

  // 1. Save or update in local store
  const storageKey = weddingConfig.rsvp.storageKey;
  let existingList = [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      existingList = JSON.parse(raw);
    }
  } catch (e) {
    console.warn("Could not read local RSVP store:", e);
  }

  // Update existing record if same phone, or add new record
  const existingIndex = existingList.findIndex(item => item.phone === cleanPhone);
  if (existingIndex >= 0) {
    existingList[existingIndex] = submission;
  } else {
    existingList.push(submission);
  }

  // 2. Try Supabase or remote API if configured
  let remoteSaved = false;
  if (weddingConfig.rsvp.apiEndpoint) {
    try {
      const response = await fetch(weddingConfig.rsvp.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (response.ok) {
        remoteSaved = true;
      }
    } catch (apiErr) {
      console.warn("Remote RSVP API failed, saving to local store:", apiErr);
    }
  }

  // 3. Save to local storage for persistence
  try {
    existingList.push(submission);
    localStorage.setItem(storageKey, JSON.stringify(existingList));
  } catch (storageErr) {
    console.error("Local storage error:", storageErr);
    throw new Error("Could not save your RSVP locally. Please try sharing via WhatsApp.");
  }

  return {
    success: true,
    data: submission,
    remoteSaved,
  };
}

/**
 * Builds prefilled WhatsApp message for RSVP sent directly to organizer
 */
export function buildWhatsAppRSVPUrl(formData) {
  const { guestName, phone, guestCount, attendance, message } = formData;
  const isAttending = attendance === 'attending';
  const statusEmoji = isAttending 
    ? '🎉 Joyfully Attending (હાજરી આપશે)' 
    : '🙏 Regretfully Unable (ક્ષમાપ્રાર્થી)';
  
  const text = 
`💐 *લગ્ન આમંત્રણ પ્રતિસાદ (WEDDING RSVP)* 💐
*જહાનવી ❤️ બ્રિજેશના શુભ લગ્ન*
*તારીખ / Date:* 26 November 2026

👤 *અતિથિનું નામ (Guest Name):* ${guestName || 'Guest'}
📱 *મોબાઇલ નંબર (Mobile):* ${phone || '-'}
✨ *હાજરી (Response):* ${statusEmoji}
👥 *કુલ સભ્યો (No. of Guests):* ${guestCount || 1}
${message ? `💌 *શુભેચ્છા સંદેશ (Message):* "${message}"\n` : ''}
📍 *શુભ સ્થળ:* ઋતા પાર્ટી પ્લોટ, સરથાણા જકાતનાકા, સુરત

જહાનવી અને બ્રિજેશના શુભ લગ્ન પ્રસંગે પધારવા બદલ ખૂબ ખૂબ આભાર! 🙏`;

  const rawTarget = weddingConfig.sharing.organizerWhatsApp || "919023909531";
  const cleanTarget = rawTarget.toString().replace(/[^0-9]/g, '');
  return `https://api.whatsapp.com/send?phone=${cleanTarget}&text=${encodeURIComponent(text)}`;
}

/**
 * Get all local RSVP submissions (for testing / admin verification)
 */
export function getSavedRSVPs() {
  try {
    const raw = localStorage.getItem(weddingConfig.rsvp.storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

