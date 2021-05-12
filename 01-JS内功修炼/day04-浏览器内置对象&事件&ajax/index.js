// todo：课件 48min，利用可视化，理解一下 setTimeout
// 为什么会使用一个 setTimeout 0
setTimeout(function() {
    console.log("hello event");
}, 0);

console.log('hello');
// 上面的结果，先打印 hello ，后打印 hello event

// 使用 setTimeout 来模拟 setInterval
function func() {
    var loop = function() {
        console.log('hello event');
        setTimeout(loop, 1000);
    }
    setTimeout(loop, 1000);
}
func();
