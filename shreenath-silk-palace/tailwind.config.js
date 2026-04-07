/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50:  '#fdf2f4',
          100: '#fce7ea',
          200: '#f9c5cc',
          300: '#f49aa6',
          400: '#ed6878',
          500: '#e13d52',
          600: '#cf2039',
          700: '#ac1830',
          800: '#8f172c',
          900: '#7a172b',
        },
        gold: {
          50:  '#fdfbea',
          100: '#faf3c0',
          200: '#f6e47e',
          300: '#f0cf3c',
          400: '#e8b91a',
          500: '#c9960e',
          600: '#a3720a',
          700: '#7e530c',
          800: '#684210',
          900: '#593712',
        },
        cream: '#fdf6ec',
        darkbg: '#1a0a0a',
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"Poppins"', 'sans-serif'],
        hindi:  ['"Tiro Devanagari Hindi"', 'serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #7a172b 0%, #ac1830 40%, #8f172c 100%)',
        'gold-gradient':  'linear-gradient(135deg, #c9960e 0%, #e8b91a 50%, #c9960e 100%)',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease forwards',
        fadeIn:   'fadeIn 0.6s ease forwards',
        shimmer:  'shimmer 3s linear infinite',
        float:    'float 3s ease-in-out infinite',
        pulse:    'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
