// `类级别`的单例

/**
 * `饿汉`的单例模式
 * @desc 很饿，很着急吃东西
 */
class Eager {
    static instance = new Eager("eager");

    constructor(name) {
        console.log("Eager constructor::", name);
        this.name = name;
    }
}

module.exports = {
    Eager,
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

// class Eager {
//     constructor(name) {
//         console.log("Eager constructor::", name);
//         this.name = name;
//     }
// }

// _defineProperty(Eager, "instance", new Eager("eager"));

// module.exports = {
//     Eager,
// };
