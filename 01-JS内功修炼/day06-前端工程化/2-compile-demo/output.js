"use strict";

require('@babel/polyfill'); // 对没有实现的方法进行兼容处理
// Array.prototype.includes = function(item) {
//     // 
//     return true;
// }


const func = () => console.log('hello es6');

const arr = [1, 2, 3];
var a = new Promise();
console.log(arr.includes(2));
