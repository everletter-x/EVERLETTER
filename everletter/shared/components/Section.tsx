import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  variant?: 'premium' | 'ultra';
  align?: 'left' | 'center';
}

/**
 * Section component with glassmorphism styling
 * Premium: soft rose-tinted titles
 * Ultra: gold-accented titles
 */
export function Section({
  title,
  children,
  className = '',
  titleClassName = '',
  variant = 'ultra',
  align = 'left',
}: SectionProps) {
  const titleColor = variant === 'ultra'
    ? 'text-elegant-white'
    : 'text-elegant-white/90';

  const titleAccent = variant === 'ultra'
    ? 'after:bg-gold/40'
    : 'after:bg-rose/40';

  return (
    <section className={`py-12 px-5 sm:px-8 ${className}`}>
      <div className="max-w-2xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`font-display text-2xl sm:text-3xl font-semibold mb-8 ${titleColor} ${titleAccent} ${titleClassName} ${
              align === 'center' ? 'text-center' : ''
            } relative after:content-[''] after:block after:w-10 after:h-[2px] after:mt-3 ${
              align === 'center' ? 'after:mx-auto' : ''
            }`}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
