const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') //压缩css插件
module.exports = {
  // 入口
  entry: {
    index:'./src/index.js',
    another:'./src/another-module.js'

    // 防止打包重复的插件或代码 
    // index:{
    //   import:'./src/index.js',
    //   dependOn:'shared'
    // },
    // another:{
    //   import:'./src/another-module.js',
    //   dependOn:'shared'
    // },
    // shared:'lodash'
  },

  // 出口
  output: {
    filename: 'scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'), //实现绝对定位寻找到文件夹
    clean: true, //打包清除之前打包的文件
    assetModuleFilename: 'images/[contenthash][ext]'  //自定义resource文件目录
  },

  // 模型
  mode: 'development',  //默认值:production   development production none 

  // 精准定位错误代码的位子
  devtool: 'inline-source-map', //精准定位错误代码的位子

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', //模板基于
      filename: 'app.html',  //生成的html文件名
      inject: 'body' //生成的js文件放在那个块级元素下面
    }),

    // 抽离css文件
    new MiniCssExtractPlugin(
      {
        filename:'styles/[contenthash].css'
      }
    ),
  ],

  // webpack-dev-server
  devServer: {
    static: './dist',
    open: true
  },

  // 资源模块
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
      },

      // css配置
      {
        test:/\.(css|less)$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
      },

      // 加载字体
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/,
        type:'asset/resource'
      },

      // 加载babel
      {
        test:/\.js$/,
        exclude:/node_module/, //排除node_module里面的js代码
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      }

    ]
  },


  // 优化配置
  optimization:{
    minimizer:[
       // 压缩css文件
      new CssMinimizerPlugin()
    ],

    //webpack内置插件，进行代码分割、抽离，放置到单独的文件夹
    splitChunks:{
      cacheGroups:{
        vendor:{
          test:/[\\/]node_modules[\\/]/,
          name:'vendors',
          chunks:'all'
        },
      }
    }
  }
}