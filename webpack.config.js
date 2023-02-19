const path = require('path');

module.exports = {
  mode: "development",
  /*...*/
  entry: {
    js: './src/assets/index.js',
    css: './src/assets/css/index.scss'
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  }
}