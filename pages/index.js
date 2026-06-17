import React from 'react';
import { useConfigLoader } from '../../shared/utils/configLoader';
import { BaseLayout } from '../../shared/components/BaseLayout';
import { Section } from '../../shared/components/Section';
import { themeTokens } from '../../shared/theme';
import { motion } from 'framer-motion';

/**
 * Love Letter Scroll Template - Premium 03
 * Displays content in a scrollable format with sections appearing gradually
 */
export default function LoveLetterScroll() {
  const { config, loading, error } = useConfigLoader<{
    recipient: string;
    sender: string;
    title: string;
    message: string;
    photos: string[];
    theme: string;
    music?: string;
  }>('/config.json');

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;
  if (error) return <div className="p-6">Error loading config: {error.message}</div>;
  if (!config) return <div className="p-6">No configuration found</div>;

  // Determine theme class based on config.theme
  const getThemeClass = (theme: string) => {
    switch (theme) {
      case 'pink': return 'bg-pink-50';
      case 'rose': return 'bg-rose-50';
      case 'lavender': return 'bg-lavender-50';
      case 'warm-white': return 'bg-warm-white';
      case 'dark-luxury': return 'bg-dark-luxury text-elegant-white';
      case 'gold-accent': return 'bg-black/50';
      default: return 'bg-white';
    }
  };

  return (
    <BaseLayout className={getThemeClass(config.theme)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-12 px-4"
      >
        {/* Hero Section */}
        <Section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{config.title}</h1>
          <p className="text-lg text-gray-600">
            Untuk {config.recipient}
          </p>
        </Section>

        {/* Opening Letter */}
        <Section className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Pembukaan</h2>
          <p className="text-lg leading-relaxed">
            {config.message.split('\n\n')[0] || config.message}
          </p>
        </Section>

        {/* Photo Section */}
        {config.photos.length > 0 && (
          <Section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Moments Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.photos.map((photo, index) => (
                <motion.key
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.key>
              ))}
            </div>
          </Section>
        )}

        {/* Alasan Sayang (Reasons Why) */}
        <Section className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Alasan Sayang</h2>
          <div className="space-y-4">
            {config.message
              .split('\n\n')
              .slice(1, 3)
              .map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="text-lg text-gray-700">
                    • {reason}
                  </p>
                </motion.div>
              ))}
          </div>
        </Section>

        {/* Memory Section */}
        <Section className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Kenangan Indah</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600">
              Setiap momen bersamamu adalah tengahtan yang tak ternilai.
            </p>
          </motion.div>
        </Section>

        {/* Closing Message */}
        <Section className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Penutup</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-semibold">
              Terima kasih sudah menjadi bagian dari hidupku, {config.recipient}.
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Dengan cinta,<br/>
              {config.sender}
            </p>
          </motion.div>
        </Section>
      </motion.div>
    </BaseLayout>
  );
}