/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#030712',
          900: '#0A0D18',
          850: '#111827',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        electric: {
          light: '#60A5FA',
          DEFAULT: '#0066FF',
          dark: '#0047B3',
          glow: 'rgba(0, 102, 255, 0.4)',
        },
        gold: {
          light: '#FFE566',
          DEFAULT: '#FFD700',
          dark: '#B8860B',
          glow: 'rgba(255, 215, 0, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Montserrat"', 'Arial', 'sans-serif'],
        mono: ['"Montserrat"', 'Arial', 'sans-serif'],
        display: ['"Unbounded"', '"Montserrat"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
