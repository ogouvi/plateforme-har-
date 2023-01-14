/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage:{
      'hero1':"url('../public/assets/images/tractor-june252020.jpg')",
      'hero2':"url('../public/assets/images/john-deere-tractors-800x533-1.jpg')",
      'hero3':"url('../public/assets/images/pexels-pixabay-219794.jpg')",
      'heroApropos':"url('../public/assets/images/pexels-airin-party-767240.jpg')",
      'heroServ':"url('../public/assets/images/pexels-mark-stebnicki-2749165.jpg')",
      'heroAchat':"url('../public/assets/images/slider-02.jpg')",
      'heroVend':"url('../public/assets/images/pexels-maarten-van-den-heuvel-2284170.jpg')",
     },
     
     keyframes:{
      'open-menu':{
        '0%':{transform:'scaleY(0)'},
        '80%':{transform:'scaleY(1.2)'},
        '100%':{transform:'scaleY(1)'},
      },
    },
    animation: {
      'open-menu':'open-menu 0.5s ease-in-out forwards',
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
    require("flowbite/plugin")
  ],
}
