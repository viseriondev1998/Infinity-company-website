/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
          extend: {
               colors: {
                    primary: {
                         50: "#f8f3ff",
                         100: "#f1e9fe",
                         200: "#e6d6fe",
                         300: "#d1b5fd",
                         400: "#b68bfa",
                         500: "#985cf6",
                         600: "#803aed",
                         700: "#6d28d9",
                         800: "#5b21b6",
                         900: "#4c1d95",
                         950: "#311065",
                    },
               },
               fontFamily: {
                    sans: ["'Montserrat', sans-serif"],
               },
          },
     },
     plugins: [],
};
