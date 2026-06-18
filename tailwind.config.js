/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./everletter/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-soft': '#F8BBD0',
        'rose': '#E8A0BF',
        'rose-deep': '#C77DBA',
        'lavender': '#C3B1E1',
        'warm-white': '#FDF5E6',
        'dark-luxury': '#0D0D12',
        'gold': '#D4AF37',
        'gold-light': '#F5D77A',
        'deep-black': '#050507',
        'elegant-white': '#F8F6F3',
        'starlight': '#FFF8DC',
        'glass-white': 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        'serif-luxury': ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      backdropBlur: {
        'xs': '4px',
        'glass': '24px',
        'glass-strong': '40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'twinkle': 'star-twinkle 3s ease-in-out infinite',
        'petal-fall': 'petal-fall 8s ease-in-out infinite',
        'gold-sparkle': 'gold-sparkle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
