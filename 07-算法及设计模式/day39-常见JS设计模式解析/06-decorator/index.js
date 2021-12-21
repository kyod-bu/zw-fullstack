/**
 * 装饰器模式
 * @desc 你的 node 版本，应该是不支持装饰器语法，可以使用 babel 编译一下，再执行
 */
function isLogin(status) {
    return function (target) {
        target.isLogin = status;
        return target;
    }
}

@isLogin(false)
class A {

}

console.log(A, new A());
