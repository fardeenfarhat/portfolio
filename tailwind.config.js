/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        react: '#61DAFB',
        mongodb: '#47A248',
        tailwind: '#38BDF8',
        javascript: '#F7DF1E',
        python: '#3776AB',
        cpp: '#00599C',
        nodejs: '#339933',
        mysql: '#4479A1',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-out-down': 'fadeOutDown 0.5s ease-in',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
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
            transform: 'translateY(20px)',
          },
        },
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
      });

  },
  require('tailwind-scrollbar'),
  ],
}

