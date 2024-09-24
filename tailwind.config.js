/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          50: '#f0f4ff',
          100: '#d9e2ff',
          200: '#b3c5ff',
          300: '#8ca8ff',
          400: '#668bff',
          500: '#406eff',
          600: '#3a57cc',
          700: '#334099',
          800: '#2d2a66',
          900: '#261333',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.blue.400"), 0 0 20px theme("colors.blue.700")',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};