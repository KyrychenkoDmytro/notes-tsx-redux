/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        '22': '22px',
        '18': '18px',
      },
      backgroundColor: {
        'table-header': '#999999',
        'table-row': '#e8eaf5',
        'icon-task': '#616161',
        'archived': '#dcccd1'
      },
      maxWidth: {
        '220': '220px',
        '280': '280px',
        '1640': '1640px',
      },
      minWidth: {
        '260': '260px'
      },
      flex: {
        '0-0-42px': '0 0 42px'
      },
      borderSpacing: {
        '20px': '20px'
      }
    },
  },
  plugins: [],
}

