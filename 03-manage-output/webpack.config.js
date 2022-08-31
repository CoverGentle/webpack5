const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口
  entry:'./src/index.js',

  // 出口
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist')
  },

  // 模型
  mode:'none',

  // 插件
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html', //模板基于
      filename:'app.html',  //生成的html文件名
      inject:'body' //生成的js文件放在那个块级元素下面
    })
  ]
}