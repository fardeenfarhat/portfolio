/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        react: '#61DAFB',
        mongodb: '#47A248',
        tailwind: '#38BDF8',
        javascript: '#F7DF1E',
        python: '#3776AB',
        cpp: '#00599C',
        nodejs: '#339933',
        mysql: '#4479A1',
        'purple-glow': '#a855f7',
        'pink-glow': '#ec4899',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'fade-out-down': 'fadeOutDown 0.3s ease-in',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeOutDown: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
          '.delay-1': {
              'animation-delay': '1s',
          },
          '.delay-2': {
              'animation-delay': '2s',
          },
          '.delay-3': {
              'animation-delay': '3s',
          },
          '.grid-cols-auto': {
          'grid-template-columns': 'repeat(auto-fill, minmax(350px, 1fr))',
        },
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });

  },
  require('tailwind-scrollbar'),
  ],
}

