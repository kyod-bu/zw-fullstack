/**
 * Promise 详解
 */

// 一个异步函数 dynamicFunc
// var dynamicFunc = function(cb) {
//     setTimeout(function() {
//         cb();
//     }, 1000);
//     console.log(456); // 这里打印 456，要先于回调函数的打印 123
// }
// dynamicFunc(function() {console.log(123)});

// 多个异步函数嵌套，回调地狱!!!
// setTimeout(function () {
//     console.log(123);
//     setTimeout(function () {
//         console.log(321);
//         // ...
//     }, 2000);
// }, 1000);


// Promise 让“异步”变的近乎“同步”
function promise1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('1s 后输出');
            resolve();
        }), 1000;
    })
}
function promise2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function (params) {
            console.log('2s 后输出');
        }, 2000);
    })
}
// 串型调用
// promise1().then(function () {
//     return promise2();
// });
// // 也可以写成
// promise1().then(promise2);


var promises = [promise1(), promise2()];
(async function() {
    for (const promise of promises) {
        await promise;
    }
}())


// function promise3() {
//     return new Promise(function(resolve, reject){
//         var random = Math.random() * 10; // 随机生成一个 1～10 的数字
//         setTimeout(function() {
//             if (random >= 5) {
//                 resolve(random);
//             } else {
//                 reject(random);
//             }
//         }, 1000);
//     });
// }
// var onResolve = function (val) {
//     console.log('已完成，输出的数字是：', val);
// };
// var onReject = function (val) {
//     console.log('已拒绝，输出的数字是：', val);
// };

// 拦截最终变为【已拒绝】状态的promise
// 方法1： 使用then的第二个参数
// promise3().then(onResolve, onReject);

// 方法2： 使用.catch方法捕获前方promise抛出的异常
// promise3().catch(onReject).then(onResolve);

// 方法3： 使用try-catch拦截代码块中promise抛出的异常
// try {
//     promise3().then(onResolve);
// } catch (e) {
//     onReject(e);
// }


// node.js 里面，可以采用下面的方式，将一个普通的函数，转换为一个 promise 函数
// require('util').promisify
// var fs = require('fs');
// fs.readFile('./promise.js', 'utf-8',  (err, result) => { // node.js里面，err总是在函数的第一个参数
//     console.log(result);
// });

// var readFileAsync = require('util').promisify(fs.readFile);
// readFileAsync('./promise.js', 'utf-8')
//     .then(result => {
//         console.log(result);
//     });



// promisify 的具体实现
// var promisify = function (func) {
//     return function(...args) {
//         return new Promise(function(resolve, reject) {
//             args.push(function(err, result) {
//                 if (err) reject(err);
//                 resolve(result);
//             });
//             func.apply(func, args);
//         });
//     }
// }
// 验证一下
// var readFileAsync = promisify(fs.readFile);
// readFileAsync('./promise.js', 'utf-8')
//     .then(result => {
//         console.log(result);
//     });


// vue-element-admin 后台管理系统
// vue-admin
// 权限相关
