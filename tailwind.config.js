/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-orange': '#E9AA52',
        'soft-red': '#F15D51',
        'off-white': '#FFFDFA',
        'grayish-blue': '#5E607A',
        'dark-grayish-blue': '#C5C6CE',
        'very-dark-blue': '#00001A',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sm: [
        '14px',
        {
          lineHeight: '24px',
          letterSpacing: '4.38px',
          fontWeight: '800',
        },
      ],
      base: ['15px', '26px'],
      lg: [
        '18px',
        {
          lineHeight: '24px',
          fontWeight: '800',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight: '24px',
          fontWeight: '800',
        },
      ],
      '2xl': [
        '32px',
        {
          lineHeight: '32px',
          fontWeight: '800',
        },
      ],
      '3xl': [
        '40px',
        {
          lineHeight: '40px',
          fontWeight: '800',
        },
      ],
      '4xl': [
        '56px',
        {
          lineHeight: '56px',
          fontWeight: '800',
        },
      ],
    },
  },
  plugins: [],
};
