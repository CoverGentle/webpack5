const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:"development",
  entry:{
    main:{
      import:['./src/app.js','./src/math.js',],
      dependOn:'lodash'
    },
    lodash:'lodash'
  },
  output:{
    clean:true,
    filename: "bundle.js",
  },
  plugins:[
    new HtmlWebpackPlugin(
      {
        title:'页面应用',
        template:'./index.html',
        inject:'body',
        chunks:['main']  //指定引入哪些入口文件
      }
    )
  ]
}