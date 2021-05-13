// // Generator 函数
// function* liangpiGenerators() {
//     console.log('和面之前');
//     var a = yield '和面';
//     console.log('和面完了');
//     var b = yield '蒸';
//     console.log('蒸完了');
//     var c = yield '切';
// }

// var handler = liangpiGenerators(); // 返回的是一个句柄
// console.log('handler', handler);
// handler.next();
// console.log('和面完了');
// handler.next();

function buy(name, cb) {
    setTimeout(() => {
        cb && cb(null, 'content:' + name); // err first
    }, 5);
}

function buyPromise(name) {
    return new Promise((resolve, reject) => {
      buy(name, function(err, content) {
        if(err) {
          reject();
        }
        resolve(content);
      });
    });
  }

function* buyAmountGenerators() {
    var caiContent = yield buyPromise('cai');
    var paomianContent = yield buyPromise('paomian' + caiContent);
    var shuanghuanglianContent = yield buyPromise('shuanghuanglian' + paomianContent);
    // done 为 true 时，到这里了！！！
    // 使用 co 库 时，需要返回
    return shuanghuanglianContent;
  }
// co 库
// yarn add co
const co = require('co');
console.log(co(buyAmountGenerators)); // 返回的是个 Promise 对象
co(buyAmountGenerators).then(content => {
    console.log('buyAmountGenerators::', content);
});


const co = require('co');
const fetch = require('node-fetch');

co(function *() {
    const res = yield fetch('https://mcs.snssdk.com/v1/list?rdn=0.5130960891765854');
    const jsonRes = yield res.json();

    console.log("jsonRes:", jsonRes);
});
