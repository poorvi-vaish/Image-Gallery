module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.imgur.com/sZkJAG4.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black"],
  },
}
