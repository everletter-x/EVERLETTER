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
        'glassmorphism': 'url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E")',
      }
    },
  },
  plugins: [],
}