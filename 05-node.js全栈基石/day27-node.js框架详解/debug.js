/**
 * 内存泄漏：常存在于闭包里面
 */
let index = 0;
let cache = {
    method: function() {
        console.log('this is cache', index);
    }
};

debugger;

function cacheInfo(info) {
    index += 1;
    const prevCache = cache;
    const method = function() {
        if (prevCache) {
            prevCache.method();
        }
    };

    cache = {
        info,
        method() {
            method();
            console.log('this is method', index);
        }
    }
}

for (var i = 0; i < 100000; i++) {
    const info = new Array(1000000);
    cacheInfo(info);
}
