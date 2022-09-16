/**
 * webpack打包解析路径
 * 1.绝对路径
 * 2.相对路径
 * 3.模块路径
 */ 

const math = require('@/math.js') 
const _ = require('lodash')
const mathJson = require('/src/main.json')

console.log(math.add(4, 5));
const str = _.join(['hello','webpack'],' ');
console.log(str);
console.log(mathJson,'mathJson');