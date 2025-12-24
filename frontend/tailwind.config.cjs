/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your main three colors with dark mode variants
        'primary': {
          light: '#169C78',    // Light mode green
          dark: '#4ECDC4',     // Dark mode teal
          DEFAULT: '#169C78',
        },
        'secondary': {
          light: '#F7CAC9',    // Light mode pink
          dark: '#FBB6CE',     // Dark mode light pink
          DEFAULT: '#F7CAC9',
        },
        'background': {
          light: '#F0EEE9',    // Light mode background
          dark: '#111827',     // Dark mode background (gray-900)
          DEFAULT: '#F0EEE9',
        },
        // Text colors
        'text': {
          primary: {
            light: '#374151',  // gray-700
            dark: '#F3F4F6',   // gray-100
            DEFAULT: '#374151',
          },
          secondary: {
            light: '#6B7280',  // gray-600
            dark: '#D1D5DB',   // gray-300
            DEFAULT: '#6B7280',
          },
        },
        // Card colors
        'card': {
          light: '#FFFFFF',
          dark: '#1F2937',     // gray-800
          DEFAULT: '#FFFFFF',
        },
        'border': {
          light: '#E5E7EB',    // gray-200
          dark: '#374151',     // gray-700
          DEFAULT: '#E5E7EB',
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      transitionDelay: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your main three colors with dark mode variants
        'primary': {
          light: '#169C78',    // Light mode green
          dark: '#4ECDC4',     // Dark mode teal
          DEFAULT: '#169C78',
        },
        'secondary': {
          light: '#F7CAC9',    // Light mode pink
          dark: '#FBB6CE',     // Dark mode light pink
          DEFAULT: '#F7CAC9',
        },
        'background': {
          light: '#F0EEE9',    // Light mode background
          dark: '#111827',     // Dark mode background (gray-900)
          DEFAULT: '#F0EEE9',
        },
        // Text colors
        'text': {
          primary: {
            light: '#374151',  // gray-700
            dark: '#F3F4F6',   // gray-100
            DEFAULT: '#374151',
          },
          secondary: {
            light: '#6B7280',  // gray-600
            dark: '#D1D5DB',   // gray-300
            DEFAULT: '#6B7280',
          },
        },
        // Card colors
        'card': {
          light: '#FFFFFF',
          dark: '#1F2937',     // gray-800
          DEFAULT: '#FFFFFF',
        },
        'border': {
          light: '#E5E7EB',    // gray-200
          dark: '#374151',     // gray-700
          DEFAULT: '#E5E7EB',
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      transitionDelay: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}