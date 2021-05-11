// 1. CommonJS 模块化
// index.js
require("./moduleA");
var m = require("./moduleB");
console.log('在index.js中的输出：', m);
// // moduleA.js
// var m = require("./moduleB");
// setTimeout(() => console.log(m), 1000);
// // moduleB.js
// var m = new Date().getTime();
// module.exports = m;

// CommonJS 模块化，打印出的结果完全一致
// 在不同的模块加载了 moduleB 两次，我们得到了相同的结果。这说明它保证了模块单例。


// 2. AMD 模块化的写法
// index.js
// 入口模块加载模块，第一个参数：入口模块的依赖列表；第二个参数：回调
require(['moduleA', 'moduleB'], function(moduleA, moduleB){
    console.log(moduleB);
});
// // moduleA.js
// define(function(require) {
//     var m = require("moduleB");
//     setTimeout(() => console.log(m), 1000);
// });
// // moduleB.js
// define(function(require) {
//     var m = new Date().getTime();
//     return m;
// });

// AMD 模块化，打印出的结果也是一致的


// 3. UMD 模块化
// 能同时被 `CommonJS规范` 和 `AMD规范` 加载
// 一个返回随机数的模块，浏览器使用 AMD 模块
define(function () {
    return function () {
        return Math.random();
    }
})
// 一个随机数的模块，Node.js 使用 CommonJS 模块
module.exports = function () {
    return Math.random();
}
// 一个随机数的模块，使用 UMD 模块
// 首先检测当前加载模块的规范究竟是什么？即当前的环境
//      如果 module.exports 在当前环境中为对象，那么肯定是 CommonJS
//      如果当前环境中有 define 函数，且 define.amd 为 true，那么肯定是 AMD
// 最后，即使没有检测出来当前环境的模块化规范，我们也可以直接把模块内容挂载到全局对象上
(function(self, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        // 当前环境是 CommonJS 规范环境
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // 当前环境是 AMD 规范环境
        define(factory);
    } else {
        // 什么环境都不是，直接挂载到全局对象上
        self.umdModule = factory();
    }
}(this, function() {
    return function () {
        return Math.random();
    }
}));


// 4. ESModule 模块化规范
// ES6 之后，使用 ESModule 规范，我们可以通过 `import` 和 `export` 两个关键词来对模块进行导入与导出。
// index.js
import './moduleA';
import m from './moduleB';
console.log(m);
// moduleA.js
import m from './moduleB';
setTimeout(() => console.log(m), 1000);
// moduleB.js
var m = new Date().getTime();
export default m;

/** 各种模块化规范，总结对比 */
// CommonJS 模块，只能在 Node.js 环境中才能运行【同步加载】
// AMD 模块，适合 WEB 端开发【异步加载】，不能直接运行在 node 端，因为内部的 `define` 函数，`require` 函数都必须配合在浏览器中加载 require.js 这类 AMD 库才能使用
// UMD 模块化，能同时被 `CommonJS规范` 和 `AMD规范` 加载
// ESModule 模块化规范