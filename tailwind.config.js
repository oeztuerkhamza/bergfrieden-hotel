/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // Hotel Bergfrieden brand — luxe-intimate Black Forest palette
        forest: {
          50:  '#f3f7f3',
          100: '#e3ede3',
          200: '#c6dcc6',
          300: '#9bc09b',
          400: '#6c9d6c',
          500: '#4a7d4a',
          600: '#386338',
          700: '#2e4f2e',
          800: '#27402a',
          900: '#1f3322',
          950: '#0f1c12',
        },
        cream: {
          50:  '#fdfbf6',
          100: '#faf5eb',
          200: '#f4ead2',
          300: '#ebd9b0',
          400: '#dfc188',
          500: '#d2a85f',
          600: '#bf8d48',
          700: '#9d703a',
          800: '#7d5a32',
          900: '#664a2c',
        },
        bronze: {
          50:  '#fbf8f3',
          100: '#f4ecdd',
          200: '#e8d6b5',
          300: '#d9bb88',
          400: '#c89f5c',
          500: '#bc8945',
          600: '#a67238',
          700: '#88582f',
          800: '#70472c',
          900: '#5d3c28',
        },
        ink: {
          50:  '#f6f6f5',
          100: '#e6e6e3',
          200: '#cdcdc7',
          300: '#a8a89e',
          400: '#807f74',
          500: '#65645a',
          600: '#504f47',
          700: '#42413b',
          800: '#383832',
          900: '#1f1f1c',
        },
      },
      fontFamily: {
        // Serif display for headings — elegant, classic
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Clean sans for body
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        wider: '0.08em',
        widest: '0.2em',
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgb(0 0 0 / 0.08), 0 8px 24px -4px rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 16px -2px rgb(0 0 0 / 0.12), 0 16px 48px -4px rgb(0 0 0 / 0.1)',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'silk': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'ken-burns': {
          '0%':   { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.08) translate(-1%,-1%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'ken-burns': 'ken-burns 12s ease-out infinite alternate',
      },
    },
  },
  plugins: [],
};
