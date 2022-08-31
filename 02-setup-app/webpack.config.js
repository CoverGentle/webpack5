const path = require('path')

module.exports = {
  // 入口
  entry:'./src/index.js',

  // 出口
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'./dist')
  },

  // 模型
  mode:'none'
}