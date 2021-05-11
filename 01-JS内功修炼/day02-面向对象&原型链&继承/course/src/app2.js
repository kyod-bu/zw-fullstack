/**
 * 原型链
 */
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
var teacher = new Teacher();
// 比如new一个对象后， teacher.buybuybuy;
// 搜索属性的过程
teacher.buybuybuy // 在teacher对象上，找有没有buybuybuy这个属性，没有
teacher.__proto__ != null // 当前对象的 __proto__ 是个对象？？？是！
teacher.__proto__.buybuybuy // 当前对象换成 teacher.__proto__ 继续上述步骤，直到搜索到null为止，如果一直找不到，直接返回 undefined 
// teacher.__proto__.__proto__.__proto__...buybuybuy



function Teacher () {}
Teacher.prototype = {
    money: 10000,
    job: {
        salary: 500,
    },
    buybuybuy: function () {
        // 10000
        var money = this.money;
        // this === wife
        // wife.money = 10000 - 100 // 给 wife 新加了个属性
        // teacher.money = 10000 - 100 // 给 teacher 新加了个属性
        this.money = money - 100;
        // 9900
        console.log('money: ', this.money);
    }
};

var wife = new Teacher();
var teacher = new Teacher();
wife.buybuybuy(); // 9900
teacher.buybuybuy(); // 9900
// 在实例上创建属性money，并没有修改原型上的

wife.job.salary = 0;
console.log("teacher::", teacher.job.salary); // 0
// 实际上是下面的调用：
// var wife = new Teacher();
// var teacher = new Teacher();
// 
// var job = wife.job;
// job.salary = 0;
// var newJob = teacher.job; // 这里的 newJob 和上面的 job 是同一个job
// console.log("teacher::", newJob.salary); 

// 属性屏蔽！！！

// [[Prototype]] 
// internal properties 函数的标准对象，不能直接访问
function Teacher () {}
var teacher = new Teacher();
// teacher.[[Prototype]] = Teacher.prototype;
// teacher.__proto__ = person.[[Prototype]]; // 浏览器给我们提供了便捷的方式
// teacher.__proto__ = Teacher.prototype;

// new 出来的对象是访问不到prototype的
// [[Prototype]] 的访问器我们可以间接访问一下，通过 teacher.__proto__ 
