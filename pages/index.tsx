import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseLayout, GlassCard } from '../everletter/shared/components/BaseLayout';

const products = [
  {
    id: 'bloom',
    name: 'Bloom',
    tier: 'Premium',
    tagline: 'Hitungan mundur menuju kejutan.',
    desc: 'Loading → Countdown 3-2-1 → Halaman utama terbuka. Cocok untuk ulang tahun, anniversary, dan kejutan romantis.',
    price: 'Rp 49.000',
    color: 'from-rose/20 to-pink-soft/20',
    accent: 'rose',
    href: '/bloom',
  },
  {
    id: 'nocturne',
    name: 'Nocturne',
    tier: 'Premium',
    tagline: 'Buka hadiahnya, rasakan kejutannya.',
    desc: 'Gift box animasi → klik untuk buka → konten terungkap. Ideal untuk birthday, permintaan maaf, dan pernyataan perasaan.',
    price: 'Rp 49.000',
    color: 'from-lavender/20 to-rose/10',
    accent: 'lavender',
    href: '/nocturne',
  },
  {
    id: 'eterna',
    name: 'Eterna',
    tier: 'Premium',
    tagline: 'Surat cinta yang mengalir tanpa akhir.',
    desc: 'Scroll bertahap → section muncul satu per satu. Sempurna untuk pesan panjang, anniversary, dan apresiasi romantis.',
    price: 'Rp 49.000',
    color: 'from-gold/20 to-starlight/10',
    accent: 'gold',
    href: '/eterna',
  },
  {
    id: 'heartverse',
    name: 'Heartverse',
    tier: 'Premium',
    tagline: 'Setiap foto punya cerita.',
    desc: 'Card slider → tiap foto punya caption → pesan penutup. Cocok untuk pasangan dengan banyak kenangan.',
    price: 'Rp 49.000',
    color: 'from-lavender/20 to-rose/20',
    accent: 'lavender',
    href: '/heartverse',
  },
  {
    id: 'cinematic',
    name: 'Cinematic Letter',
    tier: 'Ultra Premium',
    tagline: 'Pengalaman sinematik untuk seseorang yang mengubah hidupmu.',
    desc: 'Intro sinematik → chapter scrolling → foto + musik → surat panjang → ending scene. Untuk kejutan ultimate.',
    price: 'Rp 149.000',
    color: 'from-gold/20 to-gold-light/10',
    accent: 'gold',
    href: '/cinematic',
  },
  {
    id: 'signature',
    name: 'Signature Memory',
    tier: 'Ultra Premium',
    tagline: 'Sepenuhnya custom. Sepenuhnya untukmu.',
    desc: 'Layout custom berdasarkan permintaan. Untuk proposal, wedding, graduation, atau momen yang tak tergantikan.',
    price: 'Rp 199.000',
    color: 'from-gold/30 to-starlight/10',
    accent: 'gold',
    href: '/signature',
  },
];

const testimonials = [
  {
    name: 'Anisa R.',
    location: 'Jakarta',
    text: 'Pacarku nangis pas buka halaman ini. Dia bilang ini hadiah paling berkesan yang pernah dia terima. Worth every rupiah.',
    product: 'Bloom',
    rating: 5,
  },
  {
    name: 'Dimas P.',
    location: 'Bandung',
    text: 'Kirain bakal biasa aja, ternyata hasilnya premium banget. Temen-temen cewekku langsung pada mau juga.',
    product: 'Nocturne',
    rating: 5,
  },
  {
    name: 'Rafi A.',
    location: 'Surabaya',
    text: 'Udah 3 kali order buat anniversary. Setiap tahun pakai template berbeda, dan hasilnya selalu bikin istriku terharu.',
    product: 'Eterna',
    rating: 5,
  },
  {
    name: 'Keisha M.',
    location: 'Yogyakarta',
    text: 'Aku kira cuma website biasa, tapi ternyata ada countdown-nya, ada fotonya, ada pesan panjang. Bener-bener kayak experience.',
    product: 'Bloom',
    rating: 5,
  },
  {
    name: 'Fadhil R.',
    location: 'Medan',
    text: 'Yang cinematic letter itu beda level. Pacarku bilang kayak nonton film pendek tentang hubungan kami. Speechless.',
    product: 'Cinematic Letter',
    rating: 5,
  },
  {
    name: 'Laras W.',
    location: 'Semarang',
    text: 'Pesen Signature Memory buat proposal suami. Dia sampai bilang ini lebih berkesan dari cincinnya. Nangis bareng kami.',
    product: 'Signature Memory',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="glass-card p-8 sm:p-10">
              <StarRating count={testimonials[current].rating} />
              <p className="mt-5 text-elegant-white/90 text-lg leading-relaxed font-light italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-elegant-white font-medium">{testimonials[current].name}</p>
                  <p className="text-elegant-white/50 text-sm">{testimonials[current].location} · {testimonials[current].product}</p>
                </div>
                <span className="glass-subtle px-3 py-1 text-xs text-gold font-medium">Verified</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-gold' : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <BaseLayout>
      <Head>
        <title>EverLetter — Turn Feelings Into Memories</title>
        <meta name="description" content="Hadiah digital emosional yang mengubah perasaan menjadi kenangan. Template premium untuk pasangan, ulang tahun, anniversary, dan momen spesial." />
      </Head>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-5">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-gold/80 text-sm font-medium tracking-[0.3em] uppercase mb-6">Emotional Digital Gifts</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
              Turn Feelings Into{' '}
              <span className="gold-gradient">Memories</span>
            </h1>
            <p className="mt-6 text-elegant-white/60 text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto">
              Buat ucapan yang terasa lebih spesial daripada chat biasa. Personal, sinematik, dan tak terlupakan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#premium" className="glass-card px-8 py-4 text-center text-elegant-white font-medium card-hover">
              Lihat Koleksi
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%20EverLetter%2C%20aku%20mau%20pesan!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold/90 hover:bg-gold px-8 py-4 rounded-2xl text-deep-black font-semibold transition-all"
            >
              Pesan via WhatsApp
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-elegant-white/30 text-xs"
          >
            1.200+ hadiah terkirim · 4.9/5 rating · Respons 15 menit
          </motion.p>
        </div>
      </section>

      {/* ── Premium Products ── */}
      <section id="premium" className="px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-rose/80 text-xs font-medium tracking-[0.3em] uppercase mb-3">Premium Collection</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Pilih Template, Kirim Perasaan</h2>
            <p className="mt-4 text-elegant-white/50 max-w-lg mx-auto">
              Empat template premium yang dirancang untuk membuat seseorang merasa spesial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.filter(p => p.tier === 'Premium').map((product, i) => (
              <GlassCard key={product.id} delay={i * 0.1} className="p-8">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-5`}>
                  <span className="text-lg font-bold text-elegant-white">{product.name[0]}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-elegant-white">{product.name}</h3>
                  <span className="glass-subtle px-2 py-0.5 text-[10px] text-elegant-white/60 font-medium uppercase tracking-wider">Premium</span>
                </div>
                <p className="text-elegant-white/70 text-sm mb-4 leading-relaxed">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold">{product.price}</span>
                  <Link href={product.href} className="glass-subtle px-4 py-2 text-sm text-elegant-white/80 hover:text-elegant-white card-hover">
                    Lihat Demo →
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ultra Premium ── */}
      <section className="px-5 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold/80 text-xs font-medium tracking-[0.3em] uppercase mb-3">Ultra Premium</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Pengalaman <span className="gold-gradient">Tanpa Batas</span>
            </h2>
            <p className="mt-4 text-elegant-white/50 max-w-lg mx-auto">
              Untuk momen yang terlalu penting untuk dibuat biasa saja. Sinematik, custom, dan sepenuhnya personal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.filter(p => p.tier === 'Ultra Premium').map((product, i) => (
              <GlassCard key={product.id} delay={i * 0.15} className="p-8 sm:p-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                  <span className="text-xl font-bold text-elegant-white">{product.name[0]}</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-semibold text-elegant-white">{product.name}</h3>
                  <span className="glass-subtle px-2.5 py-0.5 text-[10px] text-gold font-medium uppercase tracking-wider">Ultra Premium</span>
                </div>
                <p className="text-elegant-white/70 mb-5 leading-relaxed">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold text-lg">{product.price}</span>
                  <Link href={product.href} className="glass-subtle px-5 py-2.5 text-sm text-gold hover:text-gold-light card-hover">
                    Lihat Demo →
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-5 py-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold/80 text-xs font-medium tracking-[0.3em] uppercase mb-3">Kata Mereka</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Cerita dari yang Sudah Merasakan</h2>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="px-5 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Cara Pesan</h2>
            <p className="mt-4 text-elegant-white/50">Semudah kirim pesan WhatsApp. Selesai dalam 15–60 menit.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Pilih Template', desc: 'Lihat demo, pilih yang paling cocok untuk momenmu.' },
              { step: '02', title: 'Kirim Data', desc: 'Nama, foto, pesan — kirim via WhatsApp. Kami yang atur.' },
              { step: '03', title: 'Terima Link', desc: 'Dalam 15–60 menit, link siap dikirim ke orang spesial.' },
            ].map((item, i) => (
              <GlassCard key={item.step} delay={i * 0.12} className="p-8 text-center">
                <span className="text-gold/40 text-4xl font-bold">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-elegant-white">{item.title}</h3>
                <p className="mt-2 text-elegant-white/60 text-sm">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-5 py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-xl font-semibold gold-gradient inline-block">EverLetter</p>
          <p className="mt-3 text-elegant-white/40 text-sm">Turn Feelings Into Memories</p>
          <p className="mt-6 text-elegant-white/20 text-xs">© 2025 EverLetter. Semua hadiah dibuat dengan sepenuh hati.</p>
        </div>
      </footer>
    </BaseLayout>
  );
}
