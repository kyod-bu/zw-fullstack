const decorator = (obj) => {
    // 给 obj 对象添加一个 send 方法
    obj.send = function (method, ...args) {
        if (!this[method]) {
            return this.methodMissing.apply(this, [method, ...args]);
        }
    };

    obj.methodMissing =
        obj.methodMissing ||
        function (...args) {
            console.log(...args);
        };

    return obj;
};

module.exports = {
    decorator,
};
