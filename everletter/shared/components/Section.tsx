import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  padding?: string;
  backgroundColor?: string;
}

/**
 * Generic section component for content blocks
 */
export function Section({
  title,
  children,
  className = '',
  padding = 'py-8',
  backgroundColor = 'bg-white'
}: SectionProps) {
  return (
    <section className={`${padding} ${backgroundColor} ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      <div className="prose">{children}</div>
    </section>
  );
}

export default Section;