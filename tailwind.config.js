/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gris-oscuro': '#1c1c1c',
        verde: '#5e905f',
        naranja: '#fc9708',
        cremita: '#fefeef',
      },

      fontFamily: {
        bolton: ['Bolton'],
      },

      backgroundImage: {
        fondo1: "url('../../public/fondo1.png')",
        fondo2: "url('../../public/fondo2.png')",
        fondo3: "url('../../public/fondo3.png')",
      },
    },
  },
  plugins: [],
};
