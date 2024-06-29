import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-bg': 'url(../public/Header/header-bg.png)',
        'booking-form-bg': 'url(../public/BookingForm/book-bg.png)',
      },
      colors: {
        primary: {
          light: '#67e8f9',
          DEFAULT: '#ff4d30',
          dark: '#fa4226',
        },
        secondary: {
          light: '#67e8f9',
          DEFAULT: '#706f7b',
          dark: '#fa4226',
        },
        blackish: {
          light: '#67e8f9',
          DEFAULT: '#010103',
          dark: '#fa4226',
        },
        formInput: {
          light: '#67e8f9',
          DEFAULT: '#ababab',
          dark: '#fa4226',
        },
      },
      screens: {
        xs: '450px',
        med: '800px',
      },
    },
  },
  plugins: [],
};
export default config;
