import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseLayout, GlassCard } from '../everletter/shared/components/BaseLayout';
import { Section } from '../everletter/shared/components/Section';
import { useConfigLoader } from '../everletter/shared/utils/configLoader';
import { CosmicParticles } from '../everletter/shared/components/Effects';

const defaultCaptions = [
  'Pertama kali kita bertemu — dan segalanya berubah.',
  'Tawa yang tidak pernah bosan aku dengar.',
  'Momen kecil yang jadi kenangan besar.',
  'Bersamamu, tempat biasa jadi istimewa.',
  'Di antara semua foto, ini yang paling aku sayang.',
  'Kamu, dalam setiap frame kebahagiaanku.',
  'Kenangan ini tidak akan aku tukar dengan apa pun.',
  'Setiap cerita selalu kembali ke kamu.',
];

export default function HeartversePage() {
  const { config, loading, error } = useConfigLoader('/config.json');
  const [currentPhoto, setCurrentPhoto] = useState(0);

  if (loading) return <BaseLayout variant="premium"><div className="flex h-screen items-center justify-center text-elegant-white/60">Memuat...</div></BaseLayout>;
  if (error || !config) return <BaseLayout variant="premium"><div className="flex h-screen items-center justify-center text-elegant-white/60">Terjadi kesalahan.</div></BaseLayout>;

  const messages = config.message.split('\n\n');
  const captions = config.captions || defaultCaptions;
  const totalPhotos = config.photos.length;

  const nextPhoto = () => setCurrentPhoto((p) => Math.min(p + 1, totalPhotos - 1));
  const prevPhoto = () => setCurrentPhoto((p) => Math.max(p - 1, 0));

  return (
    <BaseLayout variant="premium">
      <Head><title>Cerita Kita — untuk {config.recipient}</title></Head>

      {/* Cosmic particles */}
      <CosmicParticles count={35} />

      {/* Nebula background effects */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-lavender/[0.04] blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-rose/[0.03] blur-[130px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lavender/[0.02] blur-[200px]" />
      </div>

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-5 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lavender/60 text-sm font-medium tracking-[0.3em] uppercase mb-6"
          >
            Sebuah Cerita
          </motion.p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
            {config.title}
          </h1>
          <p className="mt-8 text-elegant-white/50 text-lg font-light leading-relaxed">
            Di antara miliaran kemungkinan, aku bersyukur dipertemukan denganmu.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-elegant-white/30 text-sm"
          >
            Untuk {config.recipient}
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      {messages.length > 0 && (
        <Section variant="premium" title="Cerita Kita">
          <GlassCard className="p-8 sm:p-10" intensity="strong">
            <p className="text-elegant-white/80 text-lg leading-relaxed font-light">
              {messages[0]}
            </p>
            {messages[1] && (
              <p className="mt-5 text-elegant-white/70 text-lg leading-relaxed font-light">
                {messages[1]}
              </p>
            )}
          </GlassCard>
        </Section>
      )}

      {/* Photo Story Cards - Carousel */}
      {totalPhotos > 0 && (
        <section className="px-5 py-16 relative z-10">
          <div className="max-w-lg mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lavender/50 text-xs tracking-[0.3em] uppercase mb-8 text-center"
            >
              Galeri Kenangan
            </motion.p>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhoto}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                >
                  <GlassCard className="overflow-hidden !p-0" intensity="strong">
                    <div className="aspect-[4/5] bg-white/[0.02] relative">
                      <img
                        src={`/photos/${config.photos[currentPhoto]}`}
                        alt={captions[currentPhoto % captions.length]}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x500/1a1a2e/C3B1E1?text=Foto+${currentPhoto + 1}`; }}
                      />
                      {/* Cosmic overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent" />
                      {/* Caption overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.p
                          key={`caption-${currentPhoto}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="text-elegant-white/90 text-base leading-relaxed font-light"
                        >
                          {captions[currentPhoto % captions.length]}
                        </motion.p>
                      </div>
                    </div>
                    <div className="p-5 border-t border-white/5 flex items-center justify-between">
                      <p className="text-elegant-white/30 text-xs">
                        {currentPhoto + 1} / {totalPhotos}
                      </p>
                      <div className="flex gap-1">
                        {config.photos.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPhoto(i)}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              i === currentPhoto ? 'w-6 bg-lavender' : 'w-1.5 bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prevPhoto}
                  disabled={currentPhoto === 0}
                  className="glass-subtle w-12 h-12 rounded-full flex items-center justify-center text-elegant-white/60 disabled:opacity-20 card-hover"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <motion.p
                  className="text-elegant-white/20 text-xs"
                  key={currentPhoto}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Geser untuk melanjutkan
                </motion.p>

                <button
                  onClick={nextPhoto}
                  disabled={currentPhoto === totalPhotos - 1}
                  className="glass-subtle w-12 h-12 rounded-full flex items-center justify-center text-elegant-white/60 disabled:opacity-20 card-hover"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Personal Letter */}
      <Section variant="premium" title="Surat untukmu">
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
          {messages.length <= 2 && (
            <p className="text-elegant-white/80 text-lg leading-relaxed font-light">
              Setiap foto punya cerita. Dan setiap cerita selalu kembali ke kamu.
            </p>
          )}
        </GlassCard>
      </Section>

      {/* Universe Ending / Final Wish */}
      <section className="px-5 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-xl mx-auto"
        >
          <GlassCard className="p-10 sm:p-14" intensity="strong">
            <p className="font-display text-2xl sm:text-3xl font-semibold leading-snug">
              Terima kasih sudah jadi bagian dari kenanganku, {config.recipient}.
            </p>
            <p className="mt-5 text-elegant-white/55 text-lg font-light">
              Semoga setiap foto di sini mengingatkanmu bahwa kamu tidak pernah sendiri.
            </p>
            <div className="mt-8 w-12 h-px bg-lavender/30 mx-auto" />
            <p className="mt-6 text-elegant-white/50">
              {config.closingSignature || 'Selalu'},<br />
              <span className="text-elegant-white font-medium">{config.sender}</span>
            </p>
          </GlassCard>
        </motion.div>
      </section>
    </BaseLayout>
  );
}
