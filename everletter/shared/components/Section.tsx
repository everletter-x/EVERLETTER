import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  variant?: 'premium' | 'ultra';
}

/**
 * Section component with glassmorphism styling
 */
export function Section({
  title,
  children,
  className = '',
  titleClassName = '',
  variant = 'ultra',
}: SectionProps) {
  const titleColor = variant === 'ultra'
    ? 'text-elegant-white'
    : 'text-elegant-white';

  return (
    <section className={`py-12 px-5 sm:px-8 ${className}`}>
      <div className="max-w-2xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`font-display text-2xl sm:text-3xl font-semibold mb-8 ${titleColor} ${titleClassName}`}
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
