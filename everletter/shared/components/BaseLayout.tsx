import React from 'react';
import { motion } from 'framer-motion';

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'premium' | 'ultra';
}

/**
 * macOS-inspired frosted glass base layout
 * Premium tier: soft ambient glow with rose/lavender tints
 * Ultra tier: deep black with gold starlight accents
 */
export function BaseLayout({ children, className = '', variant = 'ultra' }: BaseLayoutProps) {
  const baseGradient = variant === 'ultra' ? 'ultra-gradient' : 'premium-gradient';

  return (
    <div className={`relative min-h-screen ${baseGradient} ${className}`}>
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {variant === 'ultra' ? (
          <>
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold/[0.03] blur-[120px]" />
            <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-lavender/[0.04] blur-[100px]" />
            <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-gold/[0.02] blur-[120px]" />
          </>
        ) : (
          <>
            <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-rose/[0.06] blur-[120px]" />
            <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-lavender/[0.08] blur-[100px]" />
            <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-pink-soft/[0.05] blur-[120px]" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/**
 * Glass card wrapper for content sections
 */
export function GlassCard({
  children,
  className = '',
  delay = 0,
  intensity = 'default',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  intensity?: 'subtle' | 'default' | 'strong';
}) {
  const glassClass =
    intensity === 'strong' ? 'glass-strong' :
    intensity === 'subtle' ? 'glass-subtle' : 'glass-card';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`${glassClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default BaseLayout;
