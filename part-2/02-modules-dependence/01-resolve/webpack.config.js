const path = require('path')
module.exports = {
  mode:"development",
  entry:{
    main:'./src/app.js'
  },
  // 模块解析
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src') //设置别名
    },
    // 外部扩展优先执行前面的文件类型
    extensions:['.json','.js','.vue']
  }
}