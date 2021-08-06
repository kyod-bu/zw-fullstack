/**
 * @description 观察者模型
 * 遗留问题：观察者模式？？？
 * a = middle = b, c 发布订阅
 * a = b
 * a = c
 */
class Event {
    constructor(name) {
        this.name = name;
        // 库
        this.observers = {};
        // this.on = this.on.bind(this);
        // this.emit = this.emit.bind(this);
    }

    // 相当于`注册`一个事件
    on = (type, fn) => {
        if (this.observers[type]) {
            this.observers[type].push(fn);
        } else {
            this.observers[type] = [fn];
        }
    };

    //  触发一个事件
    emit = (type, opt) => {
        this.observers[type].map((item) => [item(opt)]);
    };
}

// const events = new Event();
// events.on('buy', (val) => {
//     console.log('buybuybuy...', val.name);
// });
// events.on('go', () => {
//     console.log('gogogogo...');
// });

// events.emit('buy', {name: '可乐'});
// events.emit('buy', {name: '雪碧'});
