const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //主要作用就是在webpack构建后生成html文件，同时把构建好入口js文件引入到生成的html文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css插件

module.exports =  {
  // 入口
  entry: {
    // 多个入口文件打包
    index: './src/index.js',
    another: './src/another-module.js'
  },

  // 出口
  output: {
    path: path.resolve(__dirname, '../dist'), //实现绝对定位寻找到文件夹
    clean: true, //打包清除之前打包的文件
    assetModuleFilename: 'images/[contenthash][ext]',  //自定义resource文件目录
  },


  

  // 插件
  plugins: [
    //webpack打包之后生成html文件，并且把打包好的js文件引入到html中来
    new HtmlWebpackPlugin({
      template: './index.html', //生成的html文件模板基于文件夹中的html
      filename: 'app.html',  //生成的html文件名
      inject: 'body' //生成的js文件放在那个块级元素下面
    }),

    // 抽离css文件
    new MiniCssExtractPlugin(
      {
        filename: 'styles/[contenthash].css'
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
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },

      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      },

      // 加载babel
      {
        test: /\.js$/,
        exclude: /node_module/, //排除node_module里面的js代码
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

    ]
  },


  // 优化配置
  optimization: {
    //webpack内置插件，进行代码分割、抽离，放置到单独的文件夹
    splitChunks: {
      // 
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      }
    }
  }
}