/**
 * 创建对象的几种方式：
 * 1. 工厂方法
 * 2. 构造函数方法
 * 3. 原型模式
 * 4. 组合模式（构造函数+原型模式）
 * 5. ES6的写法（class语法糖）
*/

// 1.工厂方法
function Teacher () {
    var teacher = {}; // 相同功效 var teacher = new Object();
    teacher.money = 10000000000;
    return teacher;
}

var teacher = Teacher(); // 创建一个对象实例
var wife = Teacher(); // 创建一个对象实例

// React 中的使用（不算完全的工厂模式）
class React extends Component {
    constructor(props) {
        this.state = { loading: false };
    };
}

// Vue 中的使用（比较典型）
export default {
    data() {
        return {
            money: 1000000000
        };
    },

    // vue里面，之所以写成上面的形式，而不是当前这种。是因为这个组件可能会被使用好多次
    // 但是微信小程序是这样写的。
    // data: {
    //     money: 1000000000
    // },

    template: '<div></div>'
}

// 2.构造函数方式
// 当函数被 new 的时候，this指向new出来的对象
function Teacher () {
    this.money = 100000;
    this.buybuybuy = function () {
        this.money -= 100;
        console.log('money: ', this.money);
    };
}

var teacher = new Teacher(); 
var wife = new Teacher();
teacher.buybuybuy === wife.buybuybuy; // false

// 3.原型模式
// 3.1 原型是在构造函数中的
// 3.2 每声明一个函数的时候
//      浏览器会在内存中创建一个对象
//      对象中增加一个 constructor 属性
//      浏览器会把 constructor 属性指向Teacher
//      Teacher.prototype 赋值对象
function Teacher () {}
Teacher.prototype = {
    money: 10000,
    job: {
        salary: 50000,
    },
    buybuybuy: function () {
        this.money -= 100;
        console.log('money: ', this.money);
    }
};

var teacher = new Teacher();
var wife = new Teacher();
teacher.buybuybuy === wife.buybuybuy; // true
// 当new多个对象时，属性共享。当改一个对象时，可能会更改多个对象
wife.job.salary = 0;
console.log('teacher::', teacher.job.salary); // 0
// 缺点很明显：属性和方法都共享，改其中一个，其他都改变了
teacher.buybuybuy(); // 9900
wife.buybuybuy(); // 9900
// 两次的结果一样，为啥呢？属性money好像没有共享，但实际上并不是

// 4.组合模式 （这里已经有点像‘类’）
// 为了防止互相引用对方的变量，采取的 “构造函数法” 和 “原型模式” 组合，取长补短
// 把那些【不可以】共享的部分，放在构造函数里面
// 这样操作的结果：属性不共享，方法共享。可以批量创建对象
function Teacher () {
    this.money = 10000;
    this.job = {
        salary: 50000,
    }
}
// Teacher.mood = 'good'; // 把静态属性挂到function上，这样就很像面向对象了
Teacher.prototype = {
    buybuybuy: function () {
        this.money -= 100;
        console.log('money: ', this.money);
    }
};

var teacher = new Teacher();
var wife = new Teacher();
teacher.job.salary = 0;
Teacher.mood = 'super good'; // 不用new出来对象，可以直接修改静态属性，该属性挂在方法上，所有对象共享
console.log('wife.job.salary::', wife.job.salary); // 50000

// 问题：new的时候发生了什么呢？
function New (constructorFun) {
    // 首先浏览器会创建一个对象，然后原型指向你给create传递的参数
    var obj = Object.create(null); 
    // 然后以你新创建的对象，去调用一下构造函数 constructorFun
    // 构造函数 constructorFun 有返回值，采用返回值作为新的对象；否则采用 Object.create 创建出来的对象
    var resObj = constructorFun.call(obj) || obj;
    // 把新创建的对象的 __proto__ 指向你的构造函数的 prototype
    resObj.__proto__ = constructorFun.prototype;
    return resObj;
}
// resObj.a => resObj.__proto__.a;  // 比如 resObj.a，会先上 resObj.__proto__ 去找 a

// 举个例子
function Teacher() {
    this.money = 10000;
    this.job = {
        salary: 100
    };
    // 返回了一个新对象
    return {
        money: 20
    };
}
var teacher = new Teacher(); // 这个 teacher 就是 构造函数的返回值，而不是 new出来的新对象
console.log('teacher:::', teacher); 

// 5.ES6的写法
// ES6已经有class，但并不是真正的类，只是基于原型继承的【语法糖】
class Teacher {
    static mood = 'good'; // 静态属性
    constructor() {
        this.money = 10000;
    }

    buybuybuy() {
        this.money -= 100;
        console.log('money: ', this.money);
    }
}
// 调用静态属性
Teacher.mood = 'super good';

// 使用vscode 的 live-server 插件，调试过程中，页面会自动刷新，不用每次修改，都去手动刷新
