const path = require('path');

module.exports = {
  mode: "production",
  /*...*/
  module: {
    rules: [ {

      use: {
        loader: 'url-loader', // this need file-loader
        options: {
        limit: 50000
        }
      }
    }
  ]

  ,
  },

  entry: {
    js: './src/js/index.js',
    css: './src/assets/styles/css/index.css'
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  }
}