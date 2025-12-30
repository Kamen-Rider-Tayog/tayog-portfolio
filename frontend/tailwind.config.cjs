/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#169C78',
          dark: '#4ECDC4',
          DEFAULT: '#169C78',
        },
        'secondary': {
          light: '#F7CAC9',
          dark: '#FBB6CE',
          DEFAULT: '#F7CAC9',
        },
        'background': {
          light: '#F0EEE9',
          dark: '#111827',
          DEFAULT: '#F0EEE9',
        },
        'text': {
          primary: {
            light: '#374151',
            dark: '#F3F4F6',
            DEFAULT: '#374151',
          },
          secondary: {
            light: '#6B7280',
            dark: '#D1D5DB',
            DEFAULT: '#6B7280',
          },
        },
        'card': {
          light: '#FFFFFF',
          dark: '#1F2937',
          DEFAULT: '#FFFFFF',
        },
        'border': {
          light: '#E5E7EB',
          dark: '#374151',
          DEFAULT: '#E5E7EB',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { 
            opacity: '0.7',
            boxShadow: '0 0 20px rgba(22, 156, 120, 0.3)'
          },
          '50%': { 
            opacity: '1',
            boxShadow: '0 0 30px rgba(22, 156, 120, 0.6)'
          },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      transitionDelay: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #169C78, #4ECDC4)',
        'gradient-secondary': 'linear-gradient(90deg, #F7CAC9, #FBB6CE)',
        'gradient-mixed': 'linear-gradient(90deg, #169C78, #4ECDC4, #F7CAC9)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}