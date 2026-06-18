import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseLayout, GlassCard } from '../everletter/shared/components/BaseLayout';
import { Section } from '../everletter/shared/components/Section';
import { useConfigLoader } from '../everletter/shared/utils/configLoader';
import { PetalsEffect } from '../everletter/shared/components/Effects';

type Phase = 'loading' | 'countdown' | 'reveal';

export default function BloomPage() {
  const { config, loading, error } = useConfigLoader('/config.json');

  const [phase, setPhase] = useState<Phase>('loading');
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (loading || error || !config) return;
    const loadTimer = setTimeout(() => setPhase('countdown'), 2800);
    return () => clearTimeout(loadTimer);
  }, [loading, error, config]);

  useEffect(() => {
    if (phase !== 'countdown') return;
    if (count <= 0) { setPhase('reveal'); return; }
    const timer = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, count]);

  if (loading) return (
    <BaseLayout variant="premium">
      <div className="flex h-screen items-center justify-center text-elegant-white/60">Memuat...</div>
    </BaseLayout>
  );
  if (error || !config) return (
    <BaseLayout variant="premium">
      <div className="flex h-screen items-center justify-center text-elegant-white/60">Terjadi kesalahan.</div>
    </BaseLayout>
  );

  const messages = config.message.split('\n\n');
  const reasons = config.reasons || [
    'Kamu bikin hari-hariku terasa lebih hidup.',
    'Senyummu itu obat buat semua capekku.',
    'Bersamamu, aku jadi versi terbaik dari diriku.',
  ];

  return (
    <BaseLayout variant="premium">
      <Head>
        <title>Untuk {config.recipient} — dari {config.sender}</title>
      </Head>

      <AnimatePresence mode="wait">
        {/* ── Loading Phase ── */}
        {phase === 'loading' && (
          <motion.div
            key="loading"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pulsing flower bud */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose/40 to-pink-soft/40 blur-sm" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-pink-soft/60 to-rose/30 blur-xs" />
            </motion.div>
            <p className="mt-10 text-elegant-white/50 text-sm tracking-[0.2em]">
              Sedang menyiapkan sesuatu yang spesial untukmu...
            </p>
          </motion.div>
        )}

        {/* ── Countdown Phase ── */}
        {phase === 'countdown' && count > 0 && (
          <motion.div
            key={`count-${count}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              key={count}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-[clamp(5rem,20vw,14rem)] font-bold text-elegant-white/90"
            >
              {count}
            </motion.span>
            {/* Subtle petal hint */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-3 h-2 rounded-full bg-pink-soft/40"
                  animate={{ y: [0, -8, 0], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* ── Reveal Phase ── */}
        {phase === 'reveal' && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Flower petals */}
            <PetalsEffect count={18} color="#F8BBD0" />

            {/* Hero */}
            <section className="min-h-[90vh] flex items-center justify-center px-5 py-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-center max-w-2xl"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-rose/70 text-sm font-medium tracking-[0.3em] uppercase mb-6"
                >
                  Untuk {config.recipient}
                </motion.p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
                  {config.title}
                </h1>
                <p className="mt-8 text-elegant-white/55 text-lg font-light leading-relaxed">
                  {config.subtitle || 'Ada sesuatu yang sudah lama ingin aku sampaikan. Hari ini, aku buatkan ini khusus untukmu.'}
                </p>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="mt-14 text-elegant-white/25"
                >
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <p className="text-xs mt-2">Scroll ke bawah</p>
                </motion.div>
              </motion.div>
            </section>

            {/* Personal Message / Letter */}
            <Section variant="premium" title="Dari Hati untuk Hati">
              <GlassCard className="p-8 sm:p-10" intensity="strong">
                <div className="space-y-6">
                  {messages.map((msg, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.12 }}
                      className="text-elegant-white/80 text-lg leading-relaxed font-light"
                    >
                      {msg}
                    </motion.p>
                  ))}
                </div>
              </GlassCard>
            </Section>

            {/* Reasons Why Special */}
            <Section variant="premium" title="Kenapa Kamu Spesial">
              <div className="space-y-4">
                {reasons.map((reason, i) => (
                  <GlassCard key={i} delay={i * 0.1} className="p-6 flex items-start gap-4" intensity="subtle">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-rose/20 to-pink-soft/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <span className="text-rose/70 text-xs font-medium">{i + 1}</span>
                    </motion.div>
                    <p className="text-elegant-white/75 font-light leading-relaxed">{reason}</p>
                  </GlassCard>
                ))}
              </div>
            </Section>

            {/* Flowers Meaning */}
            <Section variant="premium" title="Arti Bunga untukmu">
              <GlassCard className="p-8 sm:p-10" intensity="strong">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { flower: 'Mawar', meaning: 'Cinta yang tulus dan abadi', emoji: '🌹' },
                    { flower: 'Tulip', meaning: 'Kebahagiaan sempurna', emoji: '🌷' },
                    { flower: 'Lavender', meaning: 'Ketenangan dan kedamaian', emoji: '💜' },
                  ].map((f, i) => (
                    <GlassCard key={i} delay={i * 0.1} className="p-5 text-center" intensity="subtle">
                      <span className="text-3xl">{f.emoji}</span>
                      <p className="mt-3 text-elegant-white font-medium text-sm">{f.flower}</p>
                      <p className="mt-1 text-elegant-white/50 text-xs">{f.meaning}</p>
                    </GlassCard>
                  ))}
                </div>
              </GlassCard>
            </Section>

            {/* Photo Gallery */}
            {config.photos.length > 0 && (
              <Section variant="premium" title="Momen Kita">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {config.photos.map((photo, i) => (
                    <GlassCard key={i} delay={i * 0.1} className="overflow-hidden !p-0">
                      <div className="aspect-[4/5] bg-white/[0.02]">
                        <img
                          src={`/photos/${photo}`}
                          alt={`Kenangan ${i + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x500/1a1a2e/F8BBD0?text=Foto+${i + 1}`; }}
                        />
                      </div>
                      <div className="p-4 border-t border-white/5">
                        <p className="text-elegant-white/50 text-sm">
                          {config.captions?.[i] || `Kenangan ${i + 1}`}
                        </p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </Section>
            )}

            {/* Final Wish / Closing */}
            <section className="px-5 py-24 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-xl mx-auto"
              >
                <GlassCard className="p-10 sm:p-14" intensity="strong">
                  <p className="font-display text-2xl sm:text-3xl font-semibold leading-snug">
                    {config.closingMessage || 'Semoga halaman kecil ini bisa membuatmu tersenyum.'}
                  </p>
                  <div className="mt-8 w-12 h-px bg-rose/40 mx-auto" />
                  <p className="mt-6 text-elegant-white/55">
                    {config.closingSignature || 'Dengan sepenuh hati'},<br />
                    <span className="text-elegant-white font-medium">{config.sender}</span>
                  </p>
                </GlassCard>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </BaseLayout>
  );
}
