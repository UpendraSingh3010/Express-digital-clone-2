/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4b7bc2',
          lightBlue: '#5890e5',
          sky: '#2aa0ef',
          darkBlue: '#3b629b',
          green: '#a3c244',
          charcoal: '#282d30',
          dark: '#1e2528',
          slate: '#34495e',
          lightBg: '#f6f9fc',
          border: '#e2dfdf',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
