/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
     backgroundImage:{
      'hero1':"url('../public/assets/images/june.webp')",
      'hero2':"url('../public/assets/images/john-deere-tractors-800x533-1.webp')",
      'hero3':"url('../public/assets/images/African-Fruit.webp')",
      'heroApropos':"url('../public/assets/images/pexels-airin-party-767240.webp')",
      'heroServ':"url('../public/assets/images/pexels-mark-stebnicki-2749165.webp')",
      'heroAchat':"url('../public/assets/images/slider-02.webp')",
      'heroVend':"url('../public/assets/images/pexels-maarten-van-den-heuvel-2284170.webp')",
     },
     
     keyframes:{
      'open-menu':{
        '0%':{transform:'scaleY(0)'},
        '80%':{transform:'scaleY(1.2)'},
        '100%':{transform:'scaleY(1)'},
      },
      'torch': {
        from: {
          backgroundPosition: '-100% 0',
        },
        to: {
          backgroundPosition: '200% 0',
        },
      },
    },
    animation: {
      'open-menu':'open-menu 0.5s ease-in-out forwards',
      'torch': 'torch 5s infinite',
    },

    },
    
    
    colors:{
        primary_color:'#28B04C',
        bg_welc:'#432A16',
        bg_nav:'#705943',
        nav_hover:'#FFC509',
        bg_button:'#1B5E31',
        bg_footer:'#1AB24B',
        bg_desc:'#B7B74C',
        bg_client:'#1F6E48',
        bg_Card:'#63A04E',
        bg_parts:'#DEF3E3',
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        lg: '35px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
  },


  plugins: [
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin"),
    require("daisyui"),
   // require('@tailwindcss/aspect-ratio'),
  ],
}
