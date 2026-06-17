import React from 'react';
import { themeTokens } from '../theme';

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Base layout component providing common structure and styling
 */
export function BaseLayout({ children, className = '' }: BaseLayoutProps) {
  return (
    <div className={`min-h-screen bg-white text-gray-900 ${className}`}>
      {children}
    </div>
  );
}

export default BaseLayout;