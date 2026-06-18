import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
  src: string;
  title?: string;
  variant?: 'premium' | 'ultra';
  autoPlay?: boolean;
}

/**
 * Floating music button with audio playback
 * Shows spinning disc when playing, paused state when stopped
 * Music source and title auto-defined by config
 */
export function MusicPlayer({ src, title = 'Now Playing', variant = 'ultra', autoPlay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const accentColor = variant === 'ultra' ? 'bg-gold/20 border-gold/30' : 'bg-rose/20 border-rose/30';
  const iconColor = variant === 'ultra' ? 'text-gold' : 'text-rose';
  const ringColor = variant === 'ultra' ? 'border-gold/20' : 'border-rose/20';

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="metadata" />

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        onClick={togglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`music-btn glass-strong ${accentColor} border`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {/* Spinning disc */}
        <div className={`w-8 h-8 rounded-full border-2 ${ringColor} flex items-center justify-center ${isPlaying ? 'music-btn-spinning' : ''}`}>
          <div className={`w-2 h-2 rounded-full ${isPlaying ? (variant === 'ultra' ? 'bg-gold' : 'bg-rose') : 'bg-white/30'}`} />
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute bottom-full mb-2 right-0 glass-subtle px-3 py-1.5 whitespace-nowrap"
            >
              <p className="text-elegant-white/70 text-xs">{title}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Playing indicator */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ boxShadow: ['0 0 0 0 rgba(212,175,55,0.2)', '0 0 0 12px rgba(212,175,55,0)', '0 0 0 0 rgba(212,175,55,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </>
  );
}

export default MusicPlayer;
