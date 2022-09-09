const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  modules: {

  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
