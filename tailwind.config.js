module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    linearBorderGradients: {
      directions: { // defaults to these values
        't': 'to top',
        'tr': 'to top right',
        'r': 'to right',
        'br': 'to bottom right',
        'b': 'to bottom',
        'bl': 'to bottom left',
        'l': 'to left',
        'tl': 'to top left',
      },
      colors: { // defaults to {}
        'red': '#f00',
        'red-blue': ['#f00', '#00f'],
        'blue-green': ['#0000ff', '#00FF00'],
        'red-green-blue': ['#f00', '#0f0', '#00f'],
        'instagram-gradient': ['#821cff', '#fa7e1e', '#d62976', '#962fbf', '#4f5bd5'],
        'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      },
      background: {
        'gray-50': '#F9FAFB',
        'gray-900':'#111827',
        'white':'#ffff',
        'black':'#0000',
        
      },
      borders: { // defaults to these values (optional)
        '1': '1px',
        '1.5':'1.5px',
        '2': '2px',
        '4': '4px',
      },
    },

  },
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
};
