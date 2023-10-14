/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{  
        primaryfont: ["sans-serif"]
    },
      backgroundImage:{
        'hero-pattern':"linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url(IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg)"},

    },
  },
  plugins: [],
}

