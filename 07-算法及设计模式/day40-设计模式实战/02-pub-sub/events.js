class EventEmitter {
    constructor() {
        this._events = {};
    }

    // 事件监听
    on(name, cb) {
        if (!this._events[name]) {
            this._events[name] = [];
        }

        this._events[name].push(cb);

        // { data: [function] }
        // { data: [function, function] }
        // { data: [function, function, function, ...] }
    }

    // 触发事件
    emit(name, ...args) {
        if (!this._events[name]) {
            return;
        }

        // [function, function]
        for(const fn of this._events[name]) {
            fn.apply(null, args);
        }
    }

    // 取消事件
    off(name, cb) {
        // {}
        if (!this._events[name]) {
            return;
        }

        // { data: [function, function] }
        const index = this._events[name].findIndex(evt => evt === cb);
        // 1 | 0 | -1
        if (index >= 0) {
            this._events[name].splice(index, 1);
            // index = 0
            // { data: [function] }
        }
    }
}

module.exports = {
    EventEmitter,
};
