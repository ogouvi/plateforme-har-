/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'fontFamily':{
        primary: 'Poppins',
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
