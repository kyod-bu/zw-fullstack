// 为了测试模块化而准备的 moduleA.js
var m = require("./moduleB");
setTimeout(() => console.log('在moduleA.js中的输出：', m), 1000);


// setTimeout(() => document.querySelector("#tdialog-buttonwrap > a.btn.btn-primary > span").click(), 1*1000);
