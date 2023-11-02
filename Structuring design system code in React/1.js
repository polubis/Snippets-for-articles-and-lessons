/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      // The override happens here!
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      // ...
    }
  }
}
