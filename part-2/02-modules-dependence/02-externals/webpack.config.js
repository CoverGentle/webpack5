const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./app.js',
  mode:'development',
  plugins:[
    new HtmlWebpackPlugin()
  ],

  // 外部扩展
  externalsType:'script',
  externals:{
    jquery:[
      'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js',
      'jQuery'
    ]
  }
}