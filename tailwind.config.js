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
        // New Pharmaceutical Brand Colors
        primary: {
          DEFAULT: '#0B5ED7',  // Deep Medical Blue
          dark: '#084BA8',
          light: '#3D7FE0',
          glow: 'rgba(11, 94, 215, 0.12)',
        },
        secondary: {
          DEFAULT: '#0F9D94',  // Professional Teal
          dark: '#0C7D76',
          light: '#3FB4AD',
        },
        accent: {
          DEFAULT: '#22A06B',  // Emerald Green
          dark: '#1A7F54',
          light: '#4DB687',
        },
        // Neutral Palette
        slate: {
          50: '#F8FAFC',   // Warm Off White
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        darknavy: {
          DEFAULT: '#1F2937',  // Dark Slate
          light: '#374151',
          dark: '#111827',
          card: '#FFFFFF',
          border: '#E5E7EB',
        },
        // Semantic Colors
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#DC2626',
        // Medical Context Colors
        medical: {
          blue: '#0B5ED7',
          teal: '#0F9D94',
          green: '#22A06B',
          bg: '#F8FAFC',
          dark: '#1F2937',
          text: '#1F2937',
          'text-secondary': '#6B7280',
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
