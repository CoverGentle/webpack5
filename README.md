# webpack5学习内容

## webpack相关配置

## 配置文件 webpack.comfig.js

#### entry 入口
- 入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
- 默认值是：./src/index.js

### output 出口
- 




### 代码分离的方法
#### 代码分离的好处
- 把多个模块的共享代码抽离出去，减少入口文件的大小，提高首屏的加载速度
#### 分离代码的三种方法
- 从入口(entry)起点里边通过配置多个入口实现代码分离
- 防止重复--也是再入口(entry)起点里面，可以把共享的代码抽离出来单独形成一个bundle文件，防止重复打包
- 动态导入(ES6----import) 导入模块方法import来实现代码抽离。分两种：一.懒加载：在浏览器什么时候需要这个模块再去加载它。二.预获取（prefetch）在网络空闲的时候把需要的模块加载下来/预加载（preload）实现页面模块的并行加载 


### 浏览器缓存代码模块
#### 缓存业务代码
- 通过修改出口（output）中的filename,给文件名加上[contenthash]的hash值字符串，当业务代码发生变化，文件名也会发生变化。从而浏览器更新缓存文件获取新的代码
#### 缓存第三方库的代码
- 通过更改splitChunks这个属性来实现，定义一个cacheGroups的缓存组，将业务代码引用的第三方文件打包到同一个文件中在浏览器中缓存。来提高首屏打开速度，节省流量。
 ```
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
 ```
#### 将所有js文件全部打包放置一个scripts的文件夹中

### 拆分开发环境和生产环境配置
#### 公共路径
- 通过在output里面设置publicpath来实现
  ```
  //例：
  publicpath:'http://localhost:8080/'
  
  ```
  #### 环境变量
  通过在命令行里输入 --env 来传递环境变量
  #### 拆分配置文件
  #### npm脚本
  #### 提取公共配置文件
  #### 合并配置文件
  - 通过webpack-merge 来合并配置文件

  ### source-map （用于开发程序员debug更方便）


  ### webpack模块解析简易原理
  - js、css、less、img、html等文件 ——————> loader+module（
  ```
  compiler
  resolvers
  enhanced-resolve

  ```
  ）  ——————>  模块化的文件
  ```
  // 模块解析
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    },
    // 外部扩展优先执行前面的文件类型
    extensions:['.json','.js','.vue']
  }

  ```



