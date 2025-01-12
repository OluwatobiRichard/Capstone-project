module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      opacity: ['group-hover'],
      display: ['group-hover'],
    },
  },
  plugins: [],
};
