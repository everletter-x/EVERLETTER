import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseLayout, GlassCard } from '../everletter/shared/components/BaseLayout';
import { Section } from '../everletter/shared/components/Section';
import { useConfigLoader } from '../everletter/shared/utils/configLoader';
import { GoldSparkles } from '../everletter/shared/components/Effects';
import { MusicPlayer } from '../everletter/shared/components/MusicPlayer';

type Phase = 'loader' | 'reveal';

export default function EternaPage() {
  const { config, loading, error } = useConfigLoader('/config.json');
  const [phase, setPhase] = useState<Phase>('loader');

  useEffect(() => {
    if (loading || error || !config) return;
    const timer = setTimeout(() => setPhase('reveal'), 3500);
    return () => clearTimeout(timer);
  }, [loading, error, config]);

  if (loading) return <BaseLayout><div className="flex h-screen items-center justify-center text-elegant-white/60">Memuat...</div></BaseLayout>;
  if (error || !config) return <BaseLayout><div className="flex h-screen items-center justify-center text-elegant-white/60">Terjadi kesalahan.</div></BaseLayout>;

  const messages = config.message.split('\n\n');
  const reasons = config.reasons || messages.slice(1, 4);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  return (
    <BaseLayout>
      <Head><title>Surat untuk {config.recipient}</title></Head>

      {/* Music player (optional) */}
      {config.music && (
        <MusicPlayer src={`/music/${config.music}`} title={config.musicTitle || 'Now Playing'} variant="ultra" />
      )}

      <AnimatePresence mode="wait">
        {/* ── Luxury Loader ── */}
        {phase === 'loader' && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Gold ring spinner */}
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-gold/20 border-t-gold/80"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gold/50 text-sm tracking-[0.3em] uppercase"
            >
              Menyiapkan sesuatu yang mewah...
            </motion.p>
            {/* Gold sparkles around loader */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold rounded-full"
                style={{
                  top: `${30 + Math.random() * 40}%`,
                  left: `${30 + Math.random() * 40}%`,
                }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{ duration: 1.5 + Math.random(), delay: Math.random() * 2, repeat: Infinity }}
              />
            ))}
          </motion.div>
        )}

        {/* ── Main Content ── */}
        {phase === 'reveal' && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <GoldSparkles count={25} />

            {/* Hero */}
            <section className="min-h-[90vh] flex items-center justify-center px-5 py-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center max-w-2xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-8"
                >
                  <svg width="20" height="20" viewBox="0 0 10 10" fill="none">
                    <path d="M5 0L6.12 3.88L10 5L6.12 6.12L5 10L3.88 6.12L0 5L3.88 3.88L5 0Z" fill="#D4AF37" />
                  </svg>
                </motion.div>

                <p className="text-gold/60 text-sm font-medium tracking-[0.3em] uppercase mb-6">Sebuah Surat</p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
                  {config.title}
                </h1>
                <p className="mt-8 text-elegant-white/45 text-lg font-light">
                  Untuk {config.recipient}, yang membuat setiap hari terasa lebih berarti.
                </p>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="mt-14 text-elegant-white/20"
                >
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <p className="text-xs mt-2">Scroll ke bawah</p>
                </motion.div>
              </motion.div>
            </section>

            {/* Opening Letter */}
            <Section title="Pembukaan">
              <GlassCard className="p-8 sm:p-10" intensity="strong">
                <motion.p {...fadeUp} className="text-elegant-white/85 text-xl font-light leading-relaxed font-display italic">
                  Aku cuma mau bilang satu hal...
                </motion.p>
                <motion.p {...fadeUp} className="mt-6 text-elegant-white/75 text-lg leading-relaxed font-light">
                  {messages[0] || 'Terima kasih sudah hadir di hidupku.'}
                </motion.p>
              </GlassCard>
            </Section>

            {/* Luxury Photo Gallery */}
            {config.photos.length > 0 && (
              <Section title="Kenangan Kita">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {config.photos.map((photo, i) => (
                    <GlassCard key={i} delay={i * 0.12} className="overflow-hidden !p-0 group">
                      <div className="aspect-[4/5] bg-white/[0.02] relative overflow-hidden">
                        <img
                          src={`/photos/${photo}`}
                          alt={`Kenangan ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x500/0a0a12/D4AF37?text=Foto+${i + 1}`; }}
                        />
                        {/* Gold overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="p-5 border-t border-gold/10">
                        <p className="text-elegant-white/50 text-sm">
                          {config.captions?.[i] || `Kenangan ${i + 1}`}
                        </p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </Section>
            )}

            {/* Why You Matter */}
            <Section title="Alasan Sayang">
              <div className="space-y-4">
                {reasons.slice(0, 4).map((reason, i) => (
                  <GlassCard key={i} delay={i * 0.1} className="p-6 flex items-start gap-4" intensity="subtle">
                    <span className="mt-1 w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-xs font-medium">{i + 1}</span>
                    </span>
                    <p className="text-elegant-white/75 font-light leading-relaxed">{reason}</p>
                  </GlassCard>
                ))}
              </div>
            </Section>

            {/* Memory Section */}
            <Section title="Kenangan Indah">
              <GlassCard className="p-8 sm:p-10" intensity="strong">
                <motion.p {...fadeUp} className="text-elegant-white/75 text-lg leading-relaxed font-light">
                  Setiap momen bersamamu adalah kenangan yang tak ternilai. Dari tawa kecil sampai percakapan panjang tengah malam — semuanya terasa berarti karena bersamamu.
                </motion.p>
                <motion.p {...fadeUp} className="mt-6 text-elegant-white/70 text-lg leading-relaxed font-light">
                  Kalau aku bisa mengulang satu hari, aku akan memilih hari di mana aku pertama kali bertemu kamu.
                </motion.p>
              </GlassCard>
            </Section>

            {/* Long Letter */}
            {messages.length > 3 && (
              <Section title="Yang Ada di Hati">
                <GlassCard className="p-8 sm:p-10" intensity="strong">
                  {messages.slice(3).map((msg, i) => (
                    <p key={i} className="text-elegant-white/80 text-lg leading-relaxed font-light mb-6 last:mb-0">
                      {msg}
                    </p>
                  ))}
                </GlassCard>
              </Section>
            )}

            {/* Final Celebration / Closing */}
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
                    {config.closingMessage || `Terima kasih sudah menjadi bagian dari rencana hidupku, ${config.recipient}.`}
                  </p>
                  <div className="mt-8 w-16 h-px bg-gold/30 mx-auto" />
                  <p className="mt-6 text-elegant-white/50">
                    {config.closingSignature || 'Dengan cinta sepenuh hati'},<br />
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
