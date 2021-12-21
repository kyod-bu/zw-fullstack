// /**
//  * 单例模式
//  */
// var Singleton = function (name) {
//     this.name = name;
//     this.instance = null;
// }

// Singleton.prototype.getName = function () {
//     console.log(':::', this.name);
//     return this.name;
// }

// Singleton.getInstance = function (name) {
//     if (!this.instance) {
//         this.instance = new Singleton(name);
//     }
//     return this.instance;
// }

// // demo 验证：
// var a = Singleton.getInstance('a');
// var b = Singleton.getInstance('b');
// console.log(a, b, a===b);

// 可以使用闭包的形式，优化上面的函数：
// 通过传入一个构造函数的形式，里面存储一个闭包的变量
var ProxySingleton = (function () {
    var __instance = null;
    return function (Func) {
        if (!__instance) {
            __instance = new Func();
        }
        return __instance;
    }
})();

// ==测试一下
function A() {
    this.name = Math.random();
}

// // ====== 基于类，来写单例：
// // 比较来看，还是推荐闭包的形式（使用闭包的形式，只要 __instance 不暴漏出去，永远都无法修改它）
// // 推荐闭包 👍
// function Person() {
//     Person.__instance = this
// }
// Person.__instance = null; // 基于类的写法，可以在外面修改 __instance（不推荐）

// // ====== 转换成 ES6 的写法：
// class Person {
//     static __instance = null; // 通过 static 进行缓存
//     constructor(name) {
//         this.name = name;
//     }
// }

var a = new ProxySingleton(A);
var b = new ProxySingleton(A);
console.log(a, b, a===b);

// 闭包的主要难点是：寻找这个 __instance 变量
