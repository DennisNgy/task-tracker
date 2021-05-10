module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,ts}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
