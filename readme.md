# webpack5学习内容

## webpack相关配置

## 配置文件 webpack.comfig.js

#### entry 入口
- 入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
- 默认值是：./src/index.js

### output 出口
- 