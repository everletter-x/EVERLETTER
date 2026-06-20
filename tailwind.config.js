/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./everletter/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium colors
        'pink-soft': '#F8BBD0',
        'rose': '#E91E63',
        'lavender': '#E6E6FA',
        'warm-white': '#FDF5E6',
        // Ultra colors
        'dark-luxury': '#1A1A1A',
        'gold-accent': '#D4AF37',
        'deep-black': '#0A0A0A',
        'elegant-white': '#F8F6F3',
        'starlight-glow': '#FFF8DC',
      },
      backgroundImage: {
        'glassmorphism': 'none',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
