/**
 * 高阶函数，操作闭包
 */
function HOCFunc(num) {
    return function () {
        num += 1;
        return num;
    }
}

const add = HOCFunc(10);
add();
add();
