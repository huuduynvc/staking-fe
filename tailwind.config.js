module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Your JSX and TSX files for React components
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f26629',
        dark: '#000000',
        lightGray: '#f3f4f6',
        'brand-orange': '#FF753A',
        'brand-gray': '#303030'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Font similar to the one in the image
      },
      spacing: {
        128: '32rem', // For large margins and paddings
        144: '36rem',
      },
      animation: {
        'slide-left': 'slide-left 0.5s ease-out forwards',
        'slide-right': 'slide-right 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-in forwards',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};