import { defineConfig } from 'windicss/helpers';

function range(size: number, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt);
}

export default defineConfig({
  scan: {
    dirs: ['./'],
    exclude: [
      'node_modules',
      'dist',
      '.git',
      '.github',
      '.nuxt',
      // testing files & folders
      'coverage',
      '**/__snapshots__',
      '*.test.js',
    ],
  },
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1376px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#4B970F',
        secondary: '#0F4B97',
        dark: '#1B1B1B',
        text: '#474747',
        subtext: '#8B8B8B',
        border: '#0000000A',
        successLight: '#F1F8EC',
        star: '#FFC700',
        blue: '#008CDB',
        error: '#E4442E',
        darkPrimary: '#23520A',
        background: '#F5F5F5',
      },
      fontFamily: {
        intl: ['SuisseIntl', 'sans-serif'],
      },
      fontWeight: {
        medium: '450',
      },
      width: {
        fit: 'fit-content',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      fontSize: {
        '1xl': '22px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      container: {
        padding: '0px',
      },
    },
  },
  safelist: [
    range(30).map(i => `p-${i}`), // p-1 to p-30
    range(10).map(i => `mt-${i}`), // mt-1 to mt-10
  ],
});
