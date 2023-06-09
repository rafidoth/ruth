/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors :{
        'ruth' : '#00A06E',
        'ruth-bg-900' : '#0d1117',
        'ruth-bg-800' :'#0F221A'
      },
      fontFamily: {
        inter : ['Inter'],
        jetBrain : ['JetBrains Mono'],
      }
    },
  },
  plugins: [],
}
