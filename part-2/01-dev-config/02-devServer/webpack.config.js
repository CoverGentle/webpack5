const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:{
    index:'./app.js'
  },
  mode:'development',
  output:{
    publicPath:'/'
  },
  devServer:{
    static:path.resolve(__dirname,'./dist'),
    compress:true,
    port:9999, //端口号
    host:'0.0.0.0',
    headers:{
      'x-Access-Token':'123123'
    },
    proxy:{
      '/api':'http://localhost:9000'
    },
    
    historyApiFallback:true
  },
  plugins:[
    new HtmlWebpackPlugin()
  ]
}