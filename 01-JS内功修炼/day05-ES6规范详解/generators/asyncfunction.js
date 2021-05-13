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
async function buyAmountAsync() {
    var caiContent = await buyPromise('cai');
    var paomianContent = await buyPromise('paomian' + caiContent);
    var shuanghuanglianContent = await buyPromise('shuanghuanglian' + paomianContent);
    return shuanghuanglianContent;
}

buyAmountAsync().then(content => {
    console.log('content:::::::', content);
});
