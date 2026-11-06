/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: 'var(--ivory)',
        cream: 'var(--cream)',
        champagne: 'var(--champagne-gold)',
        antiqueGold: 'var(--antique-gold)',
        rosePink: 'var(--rose-pink)',
        blushPink: 'var(--blush-pink)',
        deepMaroon: 'var(--deep-maroon)',
        darkBrown: 'var(--dark-brown)',
        white: 'var(--pure-white)',
      },
      fontFamily: {
        script: ['var(--font-script)', 'cursive'],
        serif: ['var(--font-heading)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        gujarati: ['var(--font-gujarati-serif)', 'var(--font-gujarati)', 'serif'],
        gujaratiSans: ['var(--font-gujarati)', 'sans-serif'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        button: 'var(--radius-button)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        gold: 'var(--shadow-gold)',
        deep: 'var(--shadow-deep)',
        royal: '0 10px 30px -5px rgba(114, 44, 59, 0.15), 0 0 15px 1px rgba(198, 161, 91, 0.25)',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #A98243 0%, #C6A15B 50%, #A98243 100%)',
        'royal-card': 'linear-gradient(180deg, rgba(255, 249, 239, 0.95) 0%, rgba(247, 235, 221, 0.98) 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
