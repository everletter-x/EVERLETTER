import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseLayout, GlassCard } from '../everletter/shared/components/BaseLayout';
import { useConfigLoader } from '../everletter/shared/utils/configLoader';
import { MusicPlayer } from '../everletter/shared/components/MusicPlayer';
import { StarfieldEffect } from '../everletter/shared/components/Effects';

type Scene = 'opening' | 'ch1' | 'ch2' | 'gallery' | 'letter' | 'ending';

export default function CinematicPage() {
  const { config, loading, error } = useConfigLoader('/config.json');
  const [scene, setScene] = useState<Scene>('opening');

  useEffect(() => {
    if (loading || error || !config) return;
    const timer = setTimeout(() => setScene('ch1'), 5500);
    return () => clearTimeout(timer);
  }, [loading, error, config]);

  if (loading) return <BaseLayout><div className="flex h-screen items-center justify-center text-elegant-white/60">Memuat...</div></BaseLayout>;
  if (error || !config) return <BaseLayout><div className="flex h-screen items-center justify-center text-elegant-white/60">Terjadi kesalahan.</div></BaseLayout>;

  const messages = config.message.split('\n\n');
  const chapters = config.chapters || [
    { title: 'Awal Mula', content: messages[0] || 'Ada orang-orang yang hadir dalam hidup kita tanpa banyak suara, tapi mengubah segalanya.' },
    { title: 'Yang Tak Terucapkan', content: messages[1] || 'Setiap momen bersamamu terasa seperti adegan yang layak diingat.' },
  ];

  const hasPhotos = config.photos && config.photos.length > 0;
  const scenes: Scene[] = hasPhotos
    ? ['opening', 'ch1', 'ch2', 'gallery', 'letter', 'ending']
    : ['opening', 'ch1', 'ch2', 'letter', 'ending'];
  const sceneIndex = scenes.indexOf(scene);

  // Navigate to next scene safely
  const goToNextScene = (targetScene: Scene) => {
    if (scenes.includes(targetScene)) {
      setScene(targetScene);
    }
  };

  return (
    <BaseLayout>
      <Head>
        <title>Untuk {config.recipient} — Sebuah Cerita Sinematik</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Music player - mandatory for cinematic */}
      {config.music && (
        <MusicPlayer src={`/music/${config.music}`} title={config.musicTitle || 'Soundtrack'} variant="ultra" />
      )}

      {/* Subtle starfield */}
      <StarfieldEffect count={30} color="#FFF8DC" />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/[0.03]">
        <motion.div
          className="h-full bg-gradient-to-r from-gold/40 to-gold/80"
          animate={{ width: `${((sceneIndex + 1) / scenes.length) * 100}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      {/* Scene Navigation (floating dots) */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {scenes.map((s, i) => (
          <button
            key={s}
            onClick={() => setScene(s)}
            aria-label={`Scene ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              s === scene ? 'bg-gold w-2 h-6' : 'bg-white/15 hover:bg-white/30 w-2 h-2'
            }`}
          />
        ))}
      </nav>

      <AnimatePresence mode="wait">
        {/* ── Opening Scene ── */}
        {scene === 'opening' && (
          <motion.section
            key="opening"
            className="min-h-screen flex items-center justify-center px-5 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="text-gold/50 text-xs tracking-[0.5em] uppercase mb-10"
              >
                Sebuah Cerita
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1.2 }}
                className="font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-tight"
              >
                Untuk seseorang yang<br />
                <span className="gold-gradient">mengubah hidupku</span><br />
                tanpa banyak bicara.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
                className="mt-12 text-elegant-white/25 text-sm tracking-wide"
              >
                Untuk {config.recipient}
              </motion.p>
            </div>
          </motion.section>
        )}

        {/* ── Chapter 1 ── */}
        {scene === 'ch1' && (
          <motion.section
            key="ch1"
            className="min-h-screen flex items-center justify-center px-5 py-20 relative z-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gold/30 text-xs tracking-[0.5em] uppercase mb-4">Chapter 01</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">{chapters[0]?.title || 'Awal Mula'}</h2>
              <GlassCard className="p-8 sm:p-12" intensity="strong">
                <p className="text-elegant-white/80 text-lg leading-relaxed font-light font-serif-luxury">
                  {chapters[0]?.content || messages[0]}
                </p>
                {messages[1] && (
                  <p className="mt-6 text-elegant-white/70 text-lg leading-relaxed font-light font-serif-luxury">
                    {messages[1]}
                  </p>
                )}
              </GlassCard>
              <button onClick={() => goToNextScene('ch2')} className="mt-12 glass-subtle px-8 py-3 text-sm text-gold card-hover tracking-wide">
                Lanjut →
              </button>
            </div>
          </motion.section>
        )}

        {/* ── Chapter 2 ── */}
        {scene === 'ch2' && (
          <motion.section
            key="ch2"
            className="min-h-screen flex items-center justify-center px-5 py-20 relative z-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gold/30 text-xs tracking-[0.5em] uppercase mb-4">Chapter 02</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">{chapters[1]?.title || 'Yang Tak Terucapkan'}</h2>
              <GlassCard className="p-8 sm:p-12" intensity="strong">
                <p className="text-elegant-white/80 text-lg leading-relaxed font-light font-serif-luxury">
                  {chapters[1]?.content || 'Setiap momen bersamamu terasa seperti adegan yang layak diingat. Bukan karena sempurna — tapi karena nyata.'}
                </p>
                {messages[2] && (
                  <p className="mt-6 text-elegant-white/70 text-lg leading-relaxed font-light font-serif-luxury">
                    {messages[2]}
                  </p>
                )}
              </GlassCard>
              <button onClick={() => goToNextScene(hasPhotos ? 'gallery' : 'letter')} className="mt-12 glass-subtle px-8 py-3 text-sm text-gold card-hover tracking-wide">
                {hasPhotos ? 'Galeri →' : 'Surat →'}
              </button>
            </div>
          </motion.section>
        )}

        {/* ── Gallery with Ken Burns ── */}
        {scene === 'gallery' && hasPhotos && (
          <motion.section
            key="gallery"
            className="min-h-screen flex items-center justify-center px-5 py-20 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="max-w-4xl mx-auto w-full">
              <div className="text-center mb-14">
                <p className="text-gold/30 text-xs tracking-[0.5em] uppercase mb-4">Galeri</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold">Momen yang Terabadikan</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {config.photos.map((photo, i) => (
                  <GlassCard key={i} delay={i * 0.12} className="overflow-hidden !p-0 !rounded-2xl group" intensity="subtle">
                    <div className="aspect-square bg-white/[0.02] overflow-hidden">
                      <motion.img
                        src={`/photos/${photo}`}
                        alt={`Momen ${i + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 8, ease: 'linear' }}
                        onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x400/0a0a12/D4AF37?text=Momen+${i + 1}`; }}
                      />
                    </div>
                    {config.captions?.[i] && (
                      <div className="p-3 border-t border-gold/10">
                        <p className="text-elegant-white/40 text-xs">{config.captions[i]}</p>
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>
              <div className="text-center mt-12">
                <button onClick={() => goToNextScene('letter')} className="glass-subtle px-8 py-3 text-sm text-gold card-hover tracking-wide">
                  Surat Terakhir →
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* ── Long Letter ── */}
        {scene === 'letter' && (
          <motion.section
            key="letter"
            className="min-h-screen flex items-center justify-center px-5 py-20 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-gold/30 text-xs tracking-[0.5em] uppercase mb-4">Surat</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold">Yang Ada di Hati</h2>
              </div>
              <GlassCard className="p-8 sm:p-12" intensity="strong">
                <div className="space-y-6">
                  {messages.map((msg, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.15 }}
                      className="text-elegant-white/80 text-lg leading-relaxed font-light font-serif-luxury"
                    >
                      {msg}
                    </motion.p>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: messages.length * 0.15 + 0.3 }}
                  >
                    <div className="mt-10 w-20 h-px bg-gold/25 mx-auto" />
                    <p className="mt-6 text-center text-elegant-white/50 font-serif-luxury italic">
                      {config.memoryText || 'Terima kasih sudah menjadi rumah.'}
                    </p>
                  </motion.div>
                </div>
              </GlassCard>
              <div className="text-center mt-12">
                <button onClick={() => goToNextScene('ending')} className="glass-subtle px-8 py-3 text-sm text-gold card-hover tracking-wide">
                  Penutup →
                </button>
              </div>
            </div>
          </motion.section>
        )}

        {/* ── Ending Scene ── */}
        {scene === 'ending' && (
          <motion.section
            key="ending"
            className="min-h-screen flex items-center justify-center px-5 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="text-center max-w-xl mx-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                <p className="text-gold/40 text-xs tracking-[0.5em] uppercase mb-10">— Selesai —</p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  <span className="gold-gradient">{config.recipient}</span>
                </h2>
                <p className="mt-10 text-elegant-white/55 text-xl font-light">
                  {config.closingMessage || 'Kamu bukan sekadar seseorang yang aku kenal.'}
                </p>
                <p className="mt-3 text-elegant-white/45 text-lg font-light">
                  Kamu adalah cerita yang tidak ingin aku akhiri.
                </p>
                <div className="mt-14 w-24 h-px bg-gold/25 mx-auto" />
                <p className="mt-8 text-elegant-white/35 text-sm">
                  Dibuat dengan sepenuh hati oleh
                </p>
                <p className="mt-2 text-elegant-white font-medium text-lg">{config.sender}</p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </BaseLayout>
  );
}
