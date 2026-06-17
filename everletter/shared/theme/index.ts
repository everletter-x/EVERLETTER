// Theme tokens for EverLetter
// Defines the design system including colors, spacing, typography, etc.

export const themeTokens = {
  // Premium tier colors
  premium: {
    pinkSoft: '#F8BBD0',
    rose: '#E91E63',
    lavender: '#E6E6FA',
    warmWhite: '#FDF5E6',
  },
  
  // Ultra tier colors
  ultra: {
    darkLuxury: '#1A1A1A',
    goldAccent: '#D4AF37',
    deepBlack: '#0A0A0A',
    elegantWhite: '#F8F6F3',
    starlightGlow: '#FFF8DC',
  },
  
  // Shared spacing
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  
  // Border radius
  radius: {
    none: '0px',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  },
};