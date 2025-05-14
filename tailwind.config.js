


module.exports = {
  content: ["./src/*/.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./src/*/.{js,jsx,ts,tsx}"], // 👈 Purge Fix
};