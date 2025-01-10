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
      });
  },
  ],
}

