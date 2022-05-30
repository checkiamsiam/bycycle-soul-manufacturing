module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerbg': "url('/src/assets/images/banner.png')",
        'reviewbg': "url('/src/assets/images/review-bg.png')",
        'chosebg': "url('/src/assets/images/chosebg.png')",
        'notfound': "url('/src/assets/images/not-found.png')" ,
        'logsin': "url('/src/assets/images/login-signup-bg.png')" ,
        'dashboard': "url('/src/assets/images/dashboard.png')" ,
        'portfolio': "url('/src/assets/images/portfolio.png')" ,
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customTheme: {
          "primary": "#FF7533",

          "secondary": "#943d24",

          "accent": "#c3b091",

          "neutral": "#D6D6D6",

          "base-100": "#ffffff",

          "info": "#1C5BE3",

          "success": "#1EA978",

          "warning": "#B97113",

          "error": "#F33558",
        },
      },
      "dark",
    ],
  },
}
