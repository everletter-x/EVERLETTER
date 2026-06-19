import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getThemeClasses, setThemeAttribute } from '../theme';

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
  theme?: string;
  ultra?: boolean;
}

export function BaseLayout({ children, className = '', theme = 'pink', ultra = false }: BaseLayoutProps) {
  const tokens = getThemeClasses(theme);

  useEffect(() => {
    setThemeAttribute(theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen ${tokens.bg} ${tokens.text} antialiased selection:bg-white/20 overflow-x-hidden ${className}`}
    >
      {ultra && <div className="film-grain" />}
      {children}
    </div>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function GlassCard({ children, delay = 0, className = '' }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default BaseLayout;
