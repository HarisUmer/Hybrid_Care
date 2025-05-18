/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd4ff',
          300: '#8cb6fe',
          400: '#568efc',
          500: '#3167f6', // Primary
          600: '#1d4fd4',
          700: '#1a3eab',
          800: '#1c358c',
          900: '#1c3070',
          950: '#142152',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#dff2ff',
          200: '#b9e5ff',
          300: '#7dd4ff',
          400: '#38bbff',
          500: '#06a1f8', // Secondary
          600: '#0081d1',
          700: '#0068a8',
          800: '#00578a',
          900: '#054973',
          950: '#042e4a',
        },
        accent: {
          50: '#fff1f0',
          100: '#ffe1de',
          200: '#ffc7c0',
          300: '#ffa093',
          400: '#ff6c5a',
          500: '#ff3d26', // Accent/Red
          600: '#ed2305',
          700: '#c71705',
          800: '#a2170c',
          900: '#85190f',
          950: '#480905',
        },
        success: {
          50: '#effef7',
          500: '#10b981',
          900: '#064e3b',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          900: '#7f1d1d',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg')",
        'about-pattern': "url('https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg')",
      },
    },
  },
  plugins: [],
};