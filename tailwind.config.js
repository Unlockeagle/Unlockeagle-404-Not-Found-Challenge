/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {        
        fontInconsolata: ['Inconsolata', 'monospace'],
        fontSpaceMono700: ['Space Mono', 'monospace'],
        fontSpaceMono400: ['Space Mono', 'monospace'],
        fontMonserrat700: ['Montserrat', 'sans-serif'],
        
      }

    },
  },
  plugins: [],
}

