/**
 * 继承
 * 1. 原型链继承
 * 2. 借助构造函数继承
 * 3. 原型链+借用构造函数的组合继承
 * 4. 寄生组合式继承
 * 5. ES6 的class
 */

// 1. 原型链继承 -> '类' -> 继承
// 父
function Teacher() {
    this.money = 10000;
}
Teacher.prototype = {
    buybuybuy() {
        this.money -= 100;
        console.log('money:', this.money)
    }
};
var teacher = new Teacher(); 

// 子
function Son() {}
Son.prototype = new Teacher();
var son = new Son();
var son2 = new Son();
// son.__proto__ -> new Teacher() -> new Teacher().__proto__ -> Teacher.prototype
console.log('teacher:', son.buybuybuy, son.money, son2.buybuybuy, son2.money);


// 3. 借助构造函数继承 （原型链 + 借用构造）
function Teacher() {
    this.money = 10000;
}
Teacher.prototype = {
    buybuybuy() {
        this.money -= 100;
        console.log('money:', this.money)
    }
};
var teacher = new Teacher(); 

// 子
function Son() {
    console.log(this); // 每次 new Son() 时，this指向新的实例对象
    Teacher.call(this); // 借用 Teacher
}
Son.prototype = new Teacher();
// son.__proto__ -> Son.prototype -> 不行
// son.__proto__ -> new Teacher() -> new Teacher().__proto__ -> Teacher.prototype
var son = new Son();
var son2 = new Son();
// son.money
// son2.money
// 调用了2次 new Teacher()，无参数时，不会造成致命性打击
// 如果Teacher有参数时，多次调用，会产生致命性打击
console.log('teacher:', son.buybuybuy, son.money, son2.buybuybuy, son2.money);


// 4. 寄生组合式继承
function Teacher() {
    this.money = 10000;
}
Teacher.prototype = {
    buybuybuy() {
        this.money -= 100;
        console.log('money:', this.money)
    }
};
var teacher = new Teacher(); 

// 子
function Son() {
    Teacher.call(this); // 借用 Teacher
}
// Object.create
// 创建一个对象{}，并且把对象的__proto__赋值为Object.create的参数
Son.prototype = Object.create(Teacher.prototype);
// son.__proto__ -> Son.prototype -> 不行
// son.__proto__ -> Son.prototype -> {} -> {}.__proto__ -> Teacher.prototype
var son = new Son();
var son2 = new Son();

// 5. ES6
class Teacher {
    static mood = 'good';

    constructor () {
        this.money = 10000;
    }

    buybuybuy() {
        this.money -= 100;
        console.log('money:', this.money);
    }
}

class Son extends Teacher {}

var son = new Son();

// todo： 把 5. ES6 部分的代码拷贝到一个 index.js 文件中，看看Babel编译后的结果
// 编译命令： ./node_modules/.bin/webpack
// beautify 插件，可以格式化


// 作业：
// 私有属性
