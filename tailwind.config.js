// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
      ore: "#FF4655",
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
  ],
};
