const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:{
    index:'./app.js'
  },
  devtool:'cheap-module-source-map', //开发环境中 debug服务
  mode:'development',
  plugins:[
    new HtmlWebpackPlugin()
  ]
}