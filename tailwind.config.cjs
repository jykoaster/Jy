/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat 1s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
      colors: {
        primary: 'rgba(17,17,17,<alpha-value>)',
        secondary: 'rgba(255,255,255,<alpha-value>)',
        third: 'rgba(96,134,119,<alpha-value>)',
      },
    },
  },
  plugins: [],
}
