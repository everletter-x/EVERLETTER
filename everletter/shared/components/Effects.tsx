import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/* ── Flower Petals ── */
export function PetalsEffect({ count = 15, color = '#F8BBD0' }: { count?: number; color?: string }) {
  const petals = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    })),
  [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: '-5%',
            width: p.size,
            height: p.size * 0.7,
            borderRadius: '50% 0 50% 50%',
            background: color,
            opacity: 0.4,
            transform: `rotate(${p.rotation}deg)`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, 40 * (Math.random() > 0.5 ? 1 : -1)],
            rotate: [p.rotation, p.rotation + 720],
            opacity: [0.5, 0.3, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ── Starfield ── */
export function StarfieldEffect({ count = 50, color = '#F8F6F3' }: { count?: number; color?: string }) {
  const stars = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 3,
    })),
  [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            backgroundColor: color,
          }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ── Gold Sparkles ── */
export function GoldSparkles({ count = 20 }: { count?: number }) {
  const sparkles = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 3 + Math.random() * 5,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 4,
    })),
  [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 10 10" fill="none">
            <path d="M5 0L6.12 3.88L10 5L6.12 6.12L5 10L3.88 6.12L0 5L3.88 3.88L5 0Z" fill="#D4AF37" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Cosmic / Nebula Particles ── */
export function CosmicParticles({ count = 30 }: { count?: number }) {
  const particles = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
      color: ['#C3B1E1', '#E8A0BF', '#F8BBD0', '#FFF8DC', '#F8F6F3'][Math.floor(Math.random() * 5)],
    })),
  [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            filter: `blur(${p.size > 4 ? 1 : 0}px)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15 * (Math.random() > 0.5 ? 1 : -1), 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default { PetalsEffect, StarfieldEffect, GoldSparkles, CosmicParticles };
