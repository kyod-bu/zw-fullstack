// 执行上下文
function demo(num) {
    /*
    executionContext = {
        scopeChain: {}, // 创建作⽤域链（scope chain） 
        variableObject: {
            // JS解析器（浏览器/node）会帮我们创建一个 执行上下文，把我们的变量给提出来
            name: undefined,
            getData: undefined,
            c: undefined,
            num: undefined,
            arguments: []
        }, // 初始化变量、函数、形参 
        this: {} // 指定this 
    }
    */
   console.log('name:::::', name);
    var name = "xiaowa";
    var getData = function getData() {};
    function c() {}
}

demo(100);





for(var i = 0; i < 10; i++) {
    console.log('i:', i);
}

for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log('i:', i);
    }, 0);
}

for(var i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log('i:', i);
        }, 0);
    })(i);
}
for(var i = 0; i < 10; i++) {
    console.log('i:', i);
}