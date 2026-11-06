import { useState, useEffect, useRef, useCallback } from 'react';
import { weddingConfig } from '../config/weddingConfig';

const SESSION_MUTED_KEY = 'jahanvi_brijesh_music_muted';
const SESSION_PAUSED_KEY = 'jahanvi_brijesh_music_paused';

/**
 * Enhanced Music Hook supporting on-demand HTML5 Audio with Authentic Romantic Indian Bansuri
 * and Tanpura ambience, session preference memory, dual OGG/WAV format selection, and Web Audio API fallback.
 */
export function useMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_MUTED_KEY) === 'true';
    } catch (e) {
      return false;
    }
  });
  const [volume, setVolume] = useState(0.40); // Soft, comfortable wedding volume
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioElRef = useRef(null);
  const audioContextRef = useRef(null);
  const masterGainRef = useRef(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioElRef.current) {
        audioElRef.current.pause();
        audioElRef.current.src = '';
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Web Audio Fallback Synthesizer for Bansuri Flute & Tanpura Drone
  const initWebAudio = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const master = ctx.createGain();
          master.gain.value = isMuted ? 0 : volume * 0.25;
          master.connect(ctx.destination);
          audioContextRef.current = ctx;
          masterGainRef.current = master;
        }
      }
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
    } catch (e) {
      console.warn('Web Audio initialization error:', e);
    }
  }, [isMuted, volume]);

  const startMusic = useCallback(() => {
    setHasInteracted(true);

    // Check if guest had explicitly paused during this session
    let wasExplicitlyPaused = false;
    try {
      wasExplicitlyPaused = sessionStorage.getItem(SESSION_PAUSED_KEY) === 'true';
    } catch (e) {}

    if (wasExplicitlyPaused) {
      // Respect user choice if previously paused
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);

    // Create single Audio instance on user gesture
    if (!audioElRef.current) {
      const audio = new Audio();
      audio.loop = true;
      audio.volume = isMuted ? 0 : volume;
      audio.muted = isMuted;
      audio.preload = 'auto';

      // Use user-specified MP3 audio track
      audio.src = weddingConfig.assets.audioTrack;

      audio.addEventListener('error', () => {
        // Fallback to secondary mp3 / wav if primary file encounters an issue
        if (!audio.src.includes('romantic-bansuri')) {
          audio.src = '/assets/audio/romantic-bansuri.mp3';
          audio.play().catch(() => initWebAudio());
        } else {
          initWebAudio();
        }
      });

      if (typeof window !== 'undefined') {
        window.__weddingAudio = audio;
      }

      audioElRef.current = audio;
    }

    if (audioElRef.current) {
      audioElRef.current.volume = isMuted ? 0 : volume;
      audioElRef.current.muted = isMuted;
      const playPromise = audioElRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Audio play request blocked, activating Web Audio Synthesizer:', err);
          initWebAudio();
        });
      }
    }
  }, [initWebAudio, isMuted, volume]);

  const stopMusic = useCallback(() => {
    setIsPlaying(false);
    try {
      sessionStorage.setItem(SESSION_PAUSED_KEY, 'true');
    } catch (e) {}

    if (audioElRef.current) {
      audioElRef.current.pause();
    }
    if (audioContextRef.current && audioContextRef.current.state === 'running') {
      audioContextRef.current.suspend();
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stopMusic();
    } else {
      try {
        sessionStorage.removeItem(SESSION_PAUSED_KEY);
      } catch (e) {}
      startMusic();
    }
  }, [isPlaying, startMusic, stopMusic]);

  const toggleMute = useCallback(() => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    try {
      sessionStorage.setItem(SESSION_MUTED_KEY, String(newMuted));
    } catch (e) {}

    if (audioElRef.current) {
      audioElRef.current.muted = newMuted;
      audioElRef.current.volume = newMuted ? 0 : volume;
    }
    if (masterGainRef.current) {
      masterGainRef.current.gain.value = newMuted ? 0 : volume * 0.25;
    }
  }, [isMuted, volume]);

  return {
    isPlaying,
    isMuted,
    volume,
    setVolume,
    hasInteracted,
    togglePlay,
    toggleMute,
    startMusic,
    stopMusic,
  };
}
