const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //主要作用就是在webpack构建后生成html文件，同时把构建好入口js文件引入到生成的html文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css插件

module.exports =  {

    // 出口
    output: {
      filename: 'scripts/[name].js', //打包的js文件放置scripts文件夹中。使用[contenthash]便于解决浏览器缓存问题
    },

    // 精准定位错误代码的位子
    devtool: 'inline-source-map', //精准定位错误代码的位子

    // 模型
    mode:'development',  //默认值:production   development production none 

    // webpack-dev-server
    devServer: {
      static: './dist',
      open: true
    },
}