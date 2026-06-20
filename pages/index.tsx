import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';

const products = [
  {
    id: 'bloom',
    name: 'Bloom',
    tier: 'Premium',
    mechanic: 'Loading → 3-2-1 countdown → main page reveal',
    bestFor: 'Birthday, surprise, anniversary',
    emoji: '🌸',
    color: 'from-pink-soft to-rose',
    url: 'https://premium1everletter.vercel.app',
  },
  {
    id: 'nocturne',
    name: 'Nocturne',
    tier: 'Premium',
    mechanic: 'Animated gift box → click to open → reveal',
    bestFor: 'Birthday, apology, confession',
    emoji: '🎁',
    color: 'from-lavender to-pink-soft',
    url: 'https://premium2everletter.vercel.app',
  },
  {
    id: 'eterna',
    name: 'Eterna',
    tier: 'Premium',
    mechanic: 'Scroll-reveal sections appearing one by one',
    bestFor: 'Anniversary, romantic appreciation',
    emoji: '💌',
    color: 'from-rose to-warm-white',
    url: 'https://premium3everletter.vercel.app',
  },
  {
    id: 'heartverse',
    name: 'HeartVerse',
    tier: 'Premium',
    mechanic: 'Photo carousel with captions → final wish',
    bestFor: 'Photo-driven memories, couples',
    emoji: '📸',
    color: 'from-warm-white to-pink-soft',
    url: 'https://premium4everletter.vercel.app',
  },
  {
    id: 'cinematic-letter',
    name: 'Cinematic Letter',
    tier: 'Ultra Premium',
    mechanic: 'Chapter-based cinematic scroll with music',
    bestFor: 'Premium anniversary, serious confession',
    emoji: '🎬',
    color: 'from-dark-luxury to-gold-accent',
    url: 'https://ultra1everletter.vercel.app',
  },
  {
    id: 'signature-memory',
    name: 'Signature Memory',
    tier: 'Ultra Premium',
    mechanic: 'Fully custom layout, customer-request based',
    bestFor: 'Special requests, unique themes',
    emoji: '✨',
    color: 'from-gold-accent to-dark-luxury',
    url: 'https://ultra2everletter.vercel.app',
  },
];

function use3DTilt(ref: React.RefObject<HTMLElement | null>, strength: number = 10) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform =
        `perspective(800px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg)`;
    };
    const handleLeave = () => {
      el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
    };
    el.addEventListener('mousemove', handleMouse);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouse);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [ref, strength]);
}

export default function Landing() {
  const [demoProduct, setDemoProduct] = useState<typeof products[0] | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const bgY1 = useTransform(scrollY, [0, 500], [0, -80]);
  const bgY2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <>
      <Head>
        <title>EverLetter - Turn Feelings Into Memories</title>
        <meta name="description" content="Emotional digital gifts that turn feelings into memories. Personalized messages, photos, and moments crafted into beautiful digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="EverLetter - Turn Feelings Into Memories" />
        <meta property="og:description" content="Emotional digital gifts that turn feelings into memories. Personalized messages, photos, and moments crafted into beautiful digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://everletter.vercel.app" />
        <meta property="og:image" content="https://everletter.vercel.app/og-image.png" />
        <meta property="og:site_name" content="EverLetter" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EverLetter - Turn Feelings Into Memories" />
        <meta name="twitter:description" content="Emotional digital gifts that turn feelings into memories. Personalized messages, photos, and moments crafted into beautiful digital experiences." />
        <meta name="twitter:image" content="https://everletter.vercel.app/og-image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section with 3D Parallax */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Parallax background layers — moving at different speeds */}
        <motion.div className="absolute inset-0 overflow-hidden" style={{ y: bgY1 }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </motion.div>
        <motion.div className="absolute inset-0 overflow-hidden" style={{ y: bgY2 }}>
          <div className="absolute top-1/2 left-[10%] w-48 h-48 bg-gold-accent/3 rounded-full blur-2xl" />
          <div className="absolute top-[20%] right-[15%] w-64 h-64 bg-rose/3 rounded-full blur-2xl" />
          <div className="absolute bottom-[30%] left-[30%] w-40 h-40 bg-starlight-glow/3 rounded-full blur-2xl" />
        </motion.div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center relative z-10"
          ref={heroRef}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-6xl md:text-8xl inline-block transition-transform duration-200" style={{ transformStyle: 'preserve-3d' }}>💌</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6" style={{ transformStyle: 'preserve-3d' }}>
            <span className="gold-gradient">EverLetter</span>
          </h1>

          <p className="text-xl md:text-2xl text-elegant-white/70 mb-4 font-light" style={{ transformStyle: 'preserve-3d' }}>
            Turn Feelings Into Memories
          </p>

          <p className="text-base md:text-lg text-elegant-white/50 max-w-xl mx-auto mb-12" style={{ transformStyle: 'preserve-3d' }}>
            Buat ucapan yang terasa lebih spesial daripada chat biasa.
            <br />
            Emotional digital gifts crafted with love.
          </p>

          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gold-accent text-dark-luxury font-semibold rounded-full hover:bg-gold-accent/90 transition-colors"
            aria-label="Scroll to view template options"
          >
            Lihat Template
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-elegant-white/30 rounded-full flex justify-center"
          >
            <div className="w-1.5 h-3 bg-gold-accent rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilih <span className="gold-gradient">Template</span>
            </h2>
            <p className="text-elegant-white/60 max-w-lg mx-auto">
              Setiap template dirancang untuk memberikan pengalaman emosional yang berbeda.
              Pilih yang paling cocok untuk perasaanmu.
            </p>
          </motion.div>

          {/* Premium Products */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gold-accent mb-8 text-center">
              Premium Templates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.filter(p => p.tier === 'Premium').map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} onDemoClick={setDemoProduct} />
              ))}
            </div>
          </div>

          {/* Ultra Premium Products */}
          <div>
            <h3 className="text-xl font-semibold text-gold-accent mb-8 text-center">
              Ultra Premium Templates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {products.filter(p => p.tier === 'Ultra Premium').map((product, index) => (
                <ProductCard key={product.id} product={product} index={index + 4} onDemoClick={setDemoProduct} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-dark-luxury/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cara <span className="gold-gradient">Pesan</span>
            </h2>
            <p className="text-elegant-white/60">
              Hanya butuh 3 langkah untuk memberikan hadiah digital yang berkesan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Pilih Template', desc: 'Pilih template yang paling cocok untuk momen spesialmu.' },
              { step: '2', title: 'Kirim Data', desc: 'Kirim nama, foto, dan pesan personal melalui WhatsApp.' },
              { step: '3', title: 'Terima Link', desc: 'Dalam 15-60 menit, hadiah digital siap dikirim.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-accent">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-elegant-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memberikan <span className="gold-gradient">Hadiah Spesial</span>?
            </h2>
            <p className="text-elegant-white/60 mb-8">
              Hubungi kami melalui WhatsApp untuk memesan hadiah digitalmu sekarang.
            </p>
            <a
              href="https://wa.me/6282320114535?text=Halo,%20saya%20ingin%20memesan%20EverLetter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
              aria-label="Order via WhatsApp"
            >
              Pesan via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Demo Preview Modal */}
      <AnimatePresence>
        {demoProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setDemoProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[80vh] bg-dark-luxury rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setDemoProduct(null)}
                  className="w-10 h-10 rounded-full bg-elegant-white/10 flex items-center justify-center hover:bg-elegant-white/20 transition-colors"
                  aria-label="Close demo preview"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-gold-accent text-dark-luxury text-sm font-semibold rounded-full">
                  Demo Preview - {demoProduct.name}
                </span>
              </div>
              <iframe
                src={demoProduct.url}
                className="w-full h-full border-0"
                title={`Demo preview of ${demoProduct.name}`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-elegant-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-elegant-white/40 text-sm">
            &copy; 2026 EverLetter. Turn Feelings Into Memories.
          </p>
        </div>
      </footer>
    </>
  );
}

function ProductCard({ product, index, onDemoClick }: { product: typeof products[0]; index: number; onDemoClick: (product: typeof products[0]) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  use3DTilt(cardRef, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div ref={cardRef} className="block glass rounded-2xl p-6 card-hover group relative" style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}>
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <span className="text-2xl">{product.emoji}</span>
        </div>

        <div className="mb-2">
          <span className="text-xs font-medium text-gold-accent uppercase tracking-wider">
            {product.tier}
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

        <p className="text-elegant-white/50 text-sm mb-3">
          {product.mechanic}
        </p>

        <p className="text-elegant-white/40 text-xs mb-3">
          Cocok untuk: {product.bestFor}
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => onDemoClick(product)}
            className="flex items-center text-gold-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:text-gold-accent/80"
            aria-label={`View demo preview of ${product.name}`}
          >
            Lihat Demo
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-elegant-white/50 text-xs hover:text-elegant-white/70 transition-colors"
            aria-label={`Open ${product.name} live demo in new tab`}
          >
            Buka Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
