// 实现一个迭代器
var myIteratorObj = {
    next() {
        return {
            done: true,
            value: '1'
        }
    }
};

var inHomeYou = {
    cursor: 0,
    next() {
        const actions = ['douyin', '农药', 'eat', 'sleep'];
        if (this.cursor > 7) {
            return {
                done: true
            };
        }
        return {
            done: false,
            value: actions[this.cursor++ % actions.length]
        };
    },
    [Symbol.iterator]: function () {
        return this; // 返回一个对象
    }
};

// 使用的时候
inHomeYou.next();
inHomeYou.next();
inHomeYou.next();

for (const item of inHomeYou) {
    console.log('item:::', item);
}

// {} [] Map Set 都实现了 `迭代器协议`
