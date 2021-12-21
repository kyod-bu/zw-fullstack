// `类级别`的单例

/**
 * `懒汉`的单例模式
 * @desc 很懒，你不让我做事情，我就不做事情
 */
class Lazy {
    // 这里的 “#” 代表 这是一个私有变量
    static #instance = null;

    static getInstance() {
        if (!Lazy.#instance) {
            Lazy.#instance = new Lazy("lazy");
        }
        return Lazy.#instance;
    }

    constructor(name) {
        console.log("Lazy constructor::", name);
        this.name = name;
    }
}

module.exports = {
    Lazy,
};


// ====== babel 编译之后的代码如下：

// "use strict";

// function _defineProperty(obj, key, value) {
//     if (key in obj) {
//         Object.defineProperty(obj, key, {
//             value: value,
//             enumerable: true,
//             configurable: true,
//             writable: true,
//         });
//     } else {
//         obj[key] = value;
//     }
//     return obj;
// }

// class Lazy {
//     static getInstance() {
//         if (!Lazy.instance) {
//             Lazy.instance = new Lazy("lazy");
//         }

//         return Lazy.instance;
//     }
//     constructor(name) {
//         console.log("Lazy constructor::", name);
//         this.name = name;
//     }
// }

// _defineProperty(Lazy, "instance", null);

// module.exports = {
//     Lazy,
// };
