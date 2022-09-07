
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') //压缩css插件
const TerserPlugin = require('terser-webpack-plugin') //压缩js文件

module.exports = {
   // 入口

  // 出口
  output: {
    filename: 'scripts/[name].[contenthash].js', //打包的js文件放置scripts文件夹中。使用[contenthash]便于解决浏览器缓存问题
    publicPath: 'http://localhost:8080/' //公共文件路径
  },

  // 模型
  mode:'production',  //默认值:production   development production none 

  // 优化配置
  optimization: {
    minimizer: [
      // 压缩css文件
      new CssMinimizerPlugin(),
      // 压缩js文件
      new TerserPlugin({
        extractComments:false //取消打包出license文件
      })
    ],

  },

  // 生产环境去除warnning警告
  performance:{
    hints:false
  }
}