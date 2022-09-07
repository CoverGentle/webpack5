const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口
  entry: './src/index.js',

  // 出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'), //实现绝对定位寻找到文件夹
    clean: true, //打包清除之前打包的文件
    assetModuleFilename: 'images/[contenthash][ext]'  //自定义resource文件目录
  },

  // 模型
  mode: 'development',  //默认值:producti   development production none 

  // 精准定位错误代码的位子
  devtool: 'inline-source-map', //精准定位错误代码的位子

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', //模板基于
      filename: 'app.html',  //生成的html文件名
      inject: 'body' //生成的js文件放在那个块级元素下面
    })
  ],

  // webpack-dev-server
  devServer: {
    static: './dist',
    open: true
  },

  // 
  module: {
    rules: [
      // resource资源类型
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]'  //自定义resource文件目录
        }
      },
      // inline类型
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },
      // source
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      // 通用资源类型
      {
        test: /\.jpg$/,
        type: 'asset',
        parser: { //判断图片大小是否超过maxSize,来是否生成单独的文件
          dataUrlCondition: {  
            maxSize: 4 * 1024 * 1024
          }
        }
      }
    ]
  }
}