/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0057FF',
          dark: '#0044CC',
          light: '#3379FF',
          glow: 'rgba(0, 87, 255, 0.15)',
        },
        secondary: {
          DEFAULT: '#00B4D8',
          dark: '#0090AD',
          light: '#33C3E0',
        },
        accent: {
          DEFAULT: '#00D084',
          dark: '#00A669',
          light: '#33DA9D',
        },
        darknavy: {
          DEFAULT: '#0B1220',
          light: '#131B2E',
          dark: '#060A12',
          card: '#111928',
          border: '#1F2A37',
        },
        medical: {
          blue: '#0057FF',
          cyan: '#00B4D8',
          green: '#00D084',
          bg: '#F8FBFF',
          dark: '#0B1220',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
