const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'app.js', 
  },
  watch: false // Set value to true in dev mode.
};
