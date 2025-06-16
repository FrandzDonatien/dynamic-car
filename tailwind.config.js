/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/preline/preline.js"
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
    fontFamily: {
      jost:["Jost", "sans-serif"],
      lobster:["Lobster", "sans-serif"]
    },
    colors: {
      'body': colors.slate[800],
      'body-bg': colors.slate[100],
      'body-bordered': colors.white,

      primary: {
        '50': '#E6F9EC',    // Très clair, arrière-plan doux
        '100': '#B3EFCF',   // Clair, surbrillance
        '200': '#90E5B5',   // Clair intermédiaire
        '300': '#66D98D',   // Accent léger
        '400': '#39CE6C',   // Couleur principale claire
        '500': '#1CCA57',   // Base (principale)
        '600': '#18A74A',   // Foncé pour textes/boutons
        '700': '#159B45',   // Plus foncé, éléments critiques
        '800': '#107634',   // Très foncé pour contrastes
        '900': '#0B5123',   // Ultra foncé, titre ou bordure
        '950': '#052911',   // Fond sombre très contrasté
      },


      //sidebar light
      'vertical-menu': colors.white,
      'vertical-menu-border': '#90E5B5',
      'vertical-menu-item': '#39CE6C',
      'vertical-menu-item-hover': '#1CCA57',
      'vertical-menu-item-bg-hover': '#E6F9EC',
      'vertical-menu-item-active': '#1CCA57',
      'vertical-menu-item-bg-active': '#E6F9EC',
      'vertical-menu-sub-item': colors.slate[400],
      'vertical-menu-sub-item-hover': '#1CCA57',
      'vertical-menu-sub-item-active': '#1CCA57',

     //sidebar dark
      'vertical-menu-dark': colors.slate[900],
      'vertical-menu-border-dark': colors.slate[900],
      'vertical-menu-item-dark': colors.slate[500],
      'vertical-menu-item-hover-dark': '#1CCA57',
      'vertical-menu-item-bg-hover-dark': colors.slate[800],
      'vertical-menu-item-active-dark': '#1CCA57',
      'vertical-menu-item-bg-active-dark': colors.slate[800],
      'vertical-menu-sub-item-dark': colors.slate[500],
      'vertical-menu-sub-item-hover-dark': '#1CCA57',
      'vertical-menu-sub-item-active-dark': '#1CCA57',

      //sidebar brand
      'vertical-menu-brand': '#0B5123',
      'vertical-menu-border-brand': '#0B5123',
      'vertical-menu-item-brand': '#66D98D',
      'vertical-menu-item-hover-brand': '#E6F9EC',
      'vertical-menu-item-bg-hover-brand': "#224097",
      'vertical-menu-item-active-brand': '#E6F9EC',
      'vertical-menu-item-bg-active-brand': "#224097",
      'vertical-menu-sub-item-brand': "#a4bbfd",
      'vertical-menu-sub-item-hover-brand': '#E6F9EC',
      'vertical-menu-sub-item-active-brand': '#E6F9EC',

      //sidebar modern
      'vertical-menu-to-modern': '#0B5123',
      'vertical-menu-form-modern': colors.green[900],
      'vertical-menu-border-modern': '#0B5123',
      'vertical-menu-item-modern': "rgba(255, 255, 255, 0.60)",
      'vertical-menu-item-hover-modern': "rgba(255, 255, 255)",
      'vertical-menu-item-bg-hover-modern': "rgba(255, 255, 255, 0.06)",
      'vertical-menu-item-active-modern': '#E6F9EC',
      'vertical-menu-item-bg-active-modern': "rgba(255, 255, 255, 0.06)",
      'vertical-menu-sub-item-modern': "rgba(255, 255, 255, 0.50)",
      'vertical-menu-sub-item-hover-modern': colors.white,
      'vertical-menu-sub-item-active-modern': colors.white,

      //TOPBAR
      'topbar': colors.white,
      'topbar-border': colors.slate[200],
      'topbar-item': colors.slate[700],
      'topbar-item-hover': colors.slate[800],
      'topbar-item-bg-hover': colors.slate[100],

      'topbar-dark': colors.slate[900],
      'topbar-border-dark': colors.slate[700],
      'topbar-item-dark': colors.slate[400],
      'topbar-item-hover-dark': colors.slate[100],
      'topbar-item-bg-hover-dark': colors.slate[800],

      'topbar-brand': '#0B5123',
      'topbar-border-brand': '#107634',
      'topbar-item-brand': "#a4bbfd",
      'topbar-item-hover-brand': colors.white,
      'topbar-item-bg-hover-brand': "#224097",

      'topbar-modern': colors.white,

      custom: {
        50: '#E6F9EC',
        100: '#B3EFCF',
        200: '#90E5B5',
        300: '#66D98D',
        400: '#39CE6C',
        500: '#1CCA57', // Using Tailwind's color palette
        600: '#18A74A',
        700: '#159B45',
        800: '#107634',
        900: '#0B5123',
        950: '#052911',
      },
      red: {
        50: colors.red[50],
        100: colors.red[100],
        200: colors.red[200],
        300: colors.red[300],
        400: colors.red[400],
        500: colors.red[500], // Using Tailwind's color palette
        600: colors.red[600],
        700: colors.red[700],
        800: colors.red[800],
        900: colors.red[900],
        950: colors.red[950],
      },
      green: {
        50: "#EAFAF7",
        100: "#D2F4EE",
        200: "#A0E8DB",
        300: "#56D7BF",
        400: "#2DBDA3",
        500: "#249782", // Using Tailwind's color palette
        600: "#208875",
        700: "#1C7767",
        800: "#186355",
        900: "#11463C",
        950: "#0B2D27"
      },

      yellow: {
        50: colors.yellow[50],
        100: colors.yellow[100],
        200: colors.yellow[200],
        300: colors.yellow[300],
        400: colors.yellow[400],
        500: colors.yellow[500], // Using Tailwind's color palette
        600: colors.yellow[600],
        700: colors.yellow[700],
        800: colors.yellow[800],
        900: colors.yellow[900],
        950: colors.yellow[950],
      },

      orange: {
        50: colors.orange[50],
        100: colors.orange[100],
        200: colors.orange[200],
        300: colors.orange[300],
        400: colors.orange[400],
        500: colors.orange[500], // Using Tailwind's color palette
        600: colors.orange[600],
        700: colors.orange[700],
        800: colors.orange[800],
        900: colors.orange[900],
        950: colors.orange[950],
      },

      sky: {
        50: colors.sky[50],
        100: colors.sky[100],
        200: colors.sky[200],
        300: colors.sky[300],
        400: colors.sky[400],
        500: colors.sky[500], // Using Tailwind's color palette
        600: colors.sky[600],
        700: colors.sky[700],
        800: colors.sky[800],
        900: colors.sky[900],
        950: colors.sky[950],
      },

      purple: {
        50: colors.purple[50],
        100: colors.purple[100],
        200: colors.purple[200],
        300: colors.purple[300],
        400: colors.purple[400],
        500: colors.purple[500], // Using Tailwind's color palette
        600: colors.purple[600],
        700: colors.purple[700],
        800: colors.purple[800],
        900: colors.purple[900],
        950: colors.purple[950],
      },

      zink: {
        50: "#E2EAF3",
        100: "#C8D7E9",
        200: "#92AFD3",
        300: "#5885BC",
        400: "#395F8E",
        500: "#233A57",
        600: "#1C2E45",
        700: "#132337",
        800: "#0F1824",
        900: "#070C12",
        950: "#030507"
      },

    },
  },

  daisyui: {
    theme:[
      
    ],
    darkTheme: "cupcake",
    base:true,
    styled:true,
    utils:true,
    prefix:'',
    logs:true,
    themeRoot:':root'
  },

  plugins: [
    require("daisyui"),
    require('preline/plugin'),
  ],
}

