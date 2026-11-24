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
          dark: '#0A0A0B',
          muted: '#52525B',
          subtle: '#71717A',
          lightMuted: '#A1A1AA',
          border: '#ECECEE',
          cardBg: '#FAFAFA',
          accent: '#0066CC',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}

