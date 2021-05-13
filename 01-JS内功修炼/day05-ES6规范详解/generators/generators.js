function buy(name, cb) {
    setTimeout(() => {
        cb && cb(null, 'content:' + name);
    }, 5);
}

function buyPromise(name) {
    return new Promise((resolve, reject) => {
        buy(name, function (err, content) {
            if (err) {
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
    return shuanghuanglianContent;
}

var handler = buyAmountGenerators();
handler.next().value.then(content => {
    handler.next(content).value.then(content => {
        handler.next(content).value.then(shuanghuanglianContent => {
            console.log('shuanghuanglianContent:', shuanghuanglianContent);
        });
    });
});
