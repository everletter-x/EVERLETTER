import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseLayout, GlassCard } from '../everletter/shared/components/BaseLayout';
import { Section } from '../everletter/shared/components/Section';
import { useConfigLoader } from '../everletter/shared/utils/configLoader';
import { MusicPlayer } from '../everletter/shared/components/MusicPlayer';
import { CosmicParticles } from '../everletter/shared/components/Effects';

export default function NocturnePage() {
  const { config, loading, error } = useConfigLoader('/config.json');
  const [opened, setOpened] = useState(false);

  if (loading) return <BaseLayout variant="premium"><div className="flex h-screen items-center justify-center text-elegant-white/60">Memuat...</div></BaseLayout>;
  if (error || !config) return <BaseLayout variant="premium"><div className="flex h-screen items-center justify-center text-elegant-white/60">Terjadi kesalahan.</div></BaseLayout>;

  const messages = config.message.split('\n\n');
  const reasons = config.reasons || [
    'Kamu adalah alasan aku percaya pada hal-hal baik.',
    'Di dunia yang bising, suaramu adalah ketenangan.',
    'Kamu tidak sempurna — tapi kamu sempurna untukku.',
  ];

  return (
    <BaseLayout variant="premium">
      <Head>
        <title>Hadiah untuk {config.recipient}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Music player */}
      {config.music && opened && (
        <MusicPlayer src={`/music/${config.music}`} title={config.musicTitle || 'Now Playing'} variant="premium" />
      )}

      <AnimatePresence mode="wait">
        {!opened ? (
          /* ── Gift Box State ── */
          <motion.section
            key="box"
            className="min-h-screen flex flex-col items-center justify-center px-5"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative cursor-pointer group"
              onClick={() => setOpened(true)}
              role="button"
              aria-label="Buka hadiah"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setOpened(true)}
            >
              {/* Box body */}
              <div className="w-52 h-52 sm:w-60 sm:h-60 glass-strong rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-lavender/[0.08] to-rose/[0.05]" />
                {/* Ribbon vertical */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-5 bg-gradient-to-b from-rose/40 to-rose/20 rounded-sm" />
                {/* Ribbon horizontal */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-5 bg-gradient-to-r from-rose/40 to-rose/20 rounded-sm" />
                {/* Bow */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="flex gap-1.5">
                    <motion.div
                      className="w-9 h-7 bg-rose/50 rounded-full -rotate-12"
                      animate={{ rotate: [-12, -8, -12] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-9 h-7 bg-rose/50 rounded-full rotate-12"
                      animate={{ rotate: [12, 8, 12] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="w-3 h-3 rounded-full bg-rose/60 mx-auto -mt-2" />
                </div>
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-4 bg-black/30 rounded-full blur-xl" />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-lavender/[0.04] blur-xl"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-elegant-white/50 text-sm tracking-wide"
            >
              Buka hadiahnya ya.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-3 text-elegant-white/20 text-xs"
            >
              Ketuk kotak di atas
            </motion.p>
          </motion.section>
        ) : (
          /* ── Revealed Content ── */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Subtle particles after reveal */}
            <CosmicParticles count={20} />

            {/* Hero */}
            <section className="min-h-[85vh] flex items-center justify-center px-5 py-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-center max-w-2xl"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-lavender/60 text-sm font-medium tracking-[0.3em] uppercase mb-6"
                >
                  Sebuah Hadiah
                </motion.p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
                  {config.title}
                </h1>
                <p className="mt-8 text-elegant-white/55 text-lg font-light leading-relaxed">
                  {config.subtitle || 'Hadiah ini mungkin sederhana, tapi niatnya besar. Aku harap ini bisa bikin kamu senyum.'}
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

            {/* Hero Message */}
            <Section variant="premium" title="Pesan Utama">
              <GlassCard className="p-8 sm:p-10" intensity="strong">
                {messages.slice(0, 2).map((msg, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    className="text-elegant-white/80 text-lg leading-relaxed font-light mb-6 last:mb-0"
                  >
                    {msg}
                  </motion.p>
                ))}
              </GlassCard>
            </Section>

            {/* Photo Spotlight */}
            {config.photos.length > 0 && (
              <Section variant="premium" title="Momen Istimewa">
                <div className="space-y-5">
                  {config.photos.map((photo, i) => (
                    <GlassCard key={i} delay={i * 0.1} className="overflow-hidden !p-0">
                      <div className="aspect-[16/10] bg-white/[0.02]">
                        <img
                          src={`/photos/${photo}`}
                          alt={`Foto ${i + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x375/1a1a2e/C3B1E1?text=Foto+${i + 1}`; }}
                        />
                      </div>
                      {config.captions?.[i] && (
                        <div className="p-5 border-t border-white/5">
                          <p className="text-elegant-white/60 text-sm italic">{config.captions[i]}</p>
                        </div>
                      )}
                    </GlassCard>
                  ))}
                </div>
              </Section>
            )}

            {/* Reasons */}
            <Section variant="premium" title="Kenapa Kamu Spesial">
              <div className="space-y-4">
                {reasons.map((r, i) => (
                  <GlassCard key={i} delay={i * 0.1} className="p-6 flex items-start gap-4" intensity="subtle">
                    <motion.div
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-lavender/20 to-rose/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-lavender/70 text-xs font-medium">{i + 1}</span>
                    </motion.div>
                    <p className="text-elegant-white/75 font-light leading-relaxed">{r}</p>
                  </GlassCard>
                ))}
              </div>
            </Section>

            {/* Memory Section - Config Driven */}
            <Section variant="premium" title="Kenangan">
              <GlassCard className="p-8 sm:p-10" intensity="strong">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-elegant-white/75 text-lg leading-relaxed font-light"
                >
                  {config.memoryText || 'Setiap momen bersamamu adalah kenangan yang tak ternilai.'}
                </motion.p>
                {config.memoryTextExtra && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-6 text-elegant-white/70 text-lg leading-relaxed font-light"
                  >
                    {config.memoryTextExtra}
                  </motion.p>
                )}
              </GlassCard>
            </Section>

            {/* Personal Message */}
            {messages.length > 2 && (
              <Section variant="premium" title="Yang Ingin Aku Bilang">
                <GlassCard className="p-8 sm:p-10" intensity="strong">
                  {messages.slice(2).map((msg, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.12 }}
                      className="text-elegant-white/80 text-lg leading-relaxed font-light mb-6 last:mb-0"
                    >
                      {msg}
                    </motion.p>
                  ))}
                </GlassCard>
              </Section>
            )}

            {/* Closing */}
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
                    {config.closingMessage || 'Semoga ini jadi pengingat bahwa kamu sangat berarti.'}
                  </p>
                  <div className="mt-8 w-12 h-px bg-lavender/30 mx-auto" />
                  <p className="mt-6 text-elegant-white/55">
                    {config.closingSignature || 'Dari yang selalu ada untukmu'},<br />
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
