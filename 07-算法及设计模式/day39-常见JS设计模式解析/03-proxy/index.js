/**
 * 代理模式
 * desc: 使用的比较少
 */
var ProxySingleton = (function () {
    var __instance = new Map();
    // // 对于不支持 Map 的，可以借助 二维数组
    // var __instance = [
    //     [key, value],
    //     ...
    // ];
    return function (Func) {
        if (!__instance.get(Func)) {
            __instance.set(Func, new Func());
        }
        return __instance.get(Func);
    }
})();

function A() {
    this.name = Math.random();
}

function B() {
    this.name = Math.random();
}

var a = new ProxySingleton(A);
var b = new ProxySingleton(A);
var c = new ProxySingleton(B);
console.log(a, b, a===b, c);
