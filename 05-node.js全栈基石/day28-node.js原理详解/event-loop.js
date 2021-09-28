/**
 * Event Loop 事件循环模型
 */
function multiply(a, b) {
    return a * b;
    // throw new Error();
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    console.log(square(n));
}

printSquare(4);

// 调用栈: printSquare(4) -> square(4) -> multiply(4, 4)

/**
 * 事件循环
 */
setTimeout(() => {
    console.log("timeout");
}, 5000);

console.log("hello");

/**
 * 宏任务｜微任务
 */
setTimeout(() => {
    console.log("timeout222");
}, 0);

new Promise((resolve) => {
    console.log("promise222");
    resolve();
}).then(() => {
    console.log("then222");
});

console.log("hello222");
