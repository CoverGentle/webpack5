const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{
    index:'./app.js'
  },
  output:{
    path:path.resolve(__dirname,'./dist'), //实现绝对定位寻找到文件夹
    publicPath:'/',
  },
  mode:'development',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  devServer:{
    hot:fasle
  },
  plugins:[
    new HtmlWebpackPlugin(),
   
  ]
}