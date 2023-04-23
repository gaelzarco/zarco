/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        animation: {
            'gradient': 'gradientAnimation 2s infinite',
        },
    },
},
variants: {
    extend: {
        ringColor: ['focus'],
        ringOpacity: ['focus'],
        ringWidth: ['focus'],
    },
},
// ...
plugins: [],
}
