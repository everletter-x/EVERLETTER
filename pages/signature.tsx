import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { BaseLayout, GlassCard } from '../everletter/shared/components/BaseLayout';
import { Section } from '../everletter/shared/components/Section';
import { useConfigLoader } from '../everletter/shared/utils/configLoader';
import { MusicPlayer } from '../everletter/shared/components/MusicPlayer';
import { StarfieldEffect, GoldSparkles } from '../everletter/shared/components/Effects';

export default function SignaturePage() {
  const { config, loading, error } = useConfigLoader('/config.json');

  if (loading) return <BaseLayout><div className="flex h-screen items-center justify-center text-elegant-white/60">Memuat...</div></BaseLayout>;
  if (error || !config) return <BaseLayout><div className="flex h-screen items-center justify-center text-elegant-white/60">Terjadi kesalahan.</div></BaseLayout>;

  const messages = config.message.split('\n\n');

  return (
    <BaseLayout>
      <Head><title>{config.title} — Khusus untuk {config.recipient}</title></Head>

      {/* Music player */}
      {config.music && (
        <MusicPlayer src={`/music/${config.music}`} title={config.musicTitle || 'Now Playing'} variant="ultra" />
      )}

      {/* Starfield */}
      <StarfieldEffect count={40} />

      {/* Gold sparkles */}
      <GoldSparkles count={15} />

      {/* Hero - Custom Grand Opening */}
      <section className="min-h-screen flex items-center justify-center px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, type: 'spring', stiffness: 100 }}
            className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-10"
          >
            <svg width="28" height="28" viewBox="0 0 10 10" fill="none">
              <path d="M5 0L6.12 3.88L10 5L6.12 6.12L5 10L3.88 6.12L0 5L3.88 3.88L5 0Z" fill="#D4AF37" />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gold/50 text-xs tracking-[0.5em] uppercase mb-6"
          >
            Signature Memory
          </motion.p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
            {config.title}
          </h1>
          <p className="mt-8 text-elegant-white/45 text-lg font-light leading-relaxed">
            Halaman ini dibuat khusus untukmu. Setiap detailnya menyesuaikan cerita kita.
          </p>
          <p className="mt-4 text-elegant-white/25 text-sm">
            Untuk {config.recipient}
          </p>
        </motion.div>
      </section>

      {/* Story Section - Custom */}
      <Section title="Cerita Kita">
        <GlassCard className="p-8 sm:p-10" intensity="strong">
          <p className="text-elegant-white/85 text-xl font-light leading-relaxed font-display italic">
            Beberapa perasaan memang terlalu penting untuk dibuat biasa saja.
          </p>
          <p className="mt-6 text-elegant-white/70 text-lg leading-relaxed font-light">
            {messages[0] || 'Ini bukan sekadar halaman. Ini adalah bukti bahwa ada seseorang yang memikirkanmu sedalam itu.'}
          </p>
        </GlassCard>
      </Section>

      {/* Photo Gallery - Mosaic Layout */}
      {config.photos.length > 0 && (
        <Section title="Momen Berharga">
          <div className="grid grid-cols-2 gap-3">
            {config.photos.map((photo, i) => (
              <GlassCard
                key={i}
                delay={i * 0.1}
                className={`overflow-hidden !p-0 group ${
                  i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
                intensity="subtle"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={`/photos/${photo}`}
                    alt={`Momen ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x400/0a0a12/D4AF37?text=Momen+${i + 1}`; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {config.captions?.[i] && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-elegant-white/80 text-sm">{config.captions[i]}</p>
                    </div>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>
      )}

      {/* Personal Message - Full Width */}
      <section className="px-5 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold/35 text-xs tracking-[0.5em] uppercase mb-10 text-center">Pesan Khusus</p>
          </motion.div>
          <div className="space-y-5">
            {messages.slice(1).map((msg, i) => (
              <GlassCard key={i} delay={i * 0.12} className="p-7" intensity="strong">
                <p className="text-elegant-white/80 text-lg leading-relaxed font-light font-serif-luxury">{msg}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Is Special - Modular Feature Grid */}
      <Section title="Kenapa Ini Spesial">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '✦', text: 'Dibuat sepenuhnya custom sesuai keinginanmu.' },
            { icon: '◈', text: 'Setiap detail punya makna, bukan sekadar dekorasi.' },
            { icon: '❖', text: 'Bisa dipakai untuk momen apa pun — tanpa batas.' },
            { icon: '✧', text: 'Ini bukan template. Ini ceritamu.' },
          ].map((item, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-6 text-center" intensity="subtle">
              <span className="text-gold text-xl">{item.icon}</span>
              <p className="mt-3 text-elegant-white/65 text-sm font-light">{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Reasons (if provided) */}
      {config.reasons && config.reasons.length > 0 && (
        <Section title="Alasan Istimewa">
          <div className="space-y-4">
            {config.reasons.map((reason, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-6 flex items-start gap-4" intensity="subtle">
                <span className="mt-0.5 w-7 h-7 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-xs font-medium">{i + 1}</span>
                </span>
                <p className="text-elegant-white/75 font-light leading-relaxed">{reason}</p>
              </GlassCard>
            ))}
          </div>
        </Section>
      )}

      {/* Closing - Grand Finale */}
      <section className="px-5 py-24 text-center relative z-10">
        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/[0.03] blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-xl mx-auto relative z-10"
        >
          <GlassCard className="p-10 sm:p-16" intensity="strong">
            <p className="text-gold/35 text-xs tracking-[0.5em] uppercase mb-8">Penutup</p>
            <p className="font-display text-3xl sm:text-4xl font-bold leading-snug">
              Karena kamu layak mendapatkan<br />
              <span className="gold-gradient">sesuatu yang luar biasa.</span>
            </p>
            <div className="mt-10 w-24 h-px bg-gold/25 mx-auto" />
            <p className="mt-6 text-elegant-white/45">
              {config.closingSignature || 'Dengan segala ketulusan'},
            </p>
            <p className="mt-2 text-elegant-white text-xl font-display font-semibold">
              {config.sender}
            </p>
          </GlassCard>
        </motion.div>
      </section>
    </BaseLayout>
  );
}
