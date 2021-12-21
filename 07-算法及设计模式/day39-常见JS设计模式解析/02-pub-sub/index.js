/**
 * 观察者模式
 * 典型的 `事件触发`和`事件注册` 异步化的模式
 */
var map = {}; // 注意：这里的map必须是全局可访问到的

// 监听
function listen(key, fn) {
    if (!map[key]) {
        map[key] = [];
    }
    map[key].push(fn);
    // 另一种做法：也是 redux 的做法
    return function () {
        map[key] = map[key].filter(item => item !== fn);
    }
}

// 触发
function trigger(key, data) {
    map[key].forEach(item => item(data));
}

// 删除
function remove(key, fn) {
    var result = [];
    for(var i=0; i<map[key].length; i++) {
        var currentFn = map[key][i];
        if (fn !== currentFn) {
            result.push(currentFn)
        }
    }
    map[key] = result;
}

// function event1Cb() {
//     console.log('this is listen 1');
// }

// 注册第一个函数
// listen(
//     'event1',
//     event1Cb
// );
var unListen = listen(
    'event1',
    function () {
        console.log('this is listen 1 ...');
    }
);

// 注册第二个函数
listen(
    'event2',
    function () {
        console.log('this is listen 2');
    }
);

// 某个异步事件结束之后，调用 trigger
trigger('event1');
// trigger('event1');
// trigger('event2');
console.log('-------------');
// remove('event1', event1Cb); // 取消具名函数
unListen(); // 取消匿名函数
trigger('event1');
// 采用匿名函数，更符合我们的直观感受
// 不需要更多的变量命名，可以避免环境污染的问题，更符合我们的要求

// // ====== 典型的 pub-sub 模型
// // 订阅
// document.onclick = function () {
//     // ...
// }
// // 取消订阅（难点）
// document.onclick = null;


// // ====== 另一个比较复杂的例子：
// // 跟我们一开始的例子特别像
// function clickEvent1() {
//     console.log('click event1 ...');
// }
// function clickEvent2() {
//     console.log('click event2 ...');
// }
// // 这里传入的第二个参数 点击事件回调函数，必须是一个具名函数，不能是匿名函数，否则取消订阅的时候就傻眼了
// document.addEventListener('click', clickEvent1);
// document.addEventListener('click', clickEvent2);
// document.removeEventListener('click', clickEvent1);
// // 这个案例，维护了一个数组
