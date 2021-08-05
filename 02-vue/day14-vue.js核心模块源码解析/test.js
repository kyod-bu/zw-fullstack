/**
 * js判断类型的几种方法
 */

const obj = []

console.log("方法一：", Object.prototype.toString.call(obj)); // "[object Array]"
console.log("方法二：", Object.prototype.toString(obj)); // "[object Object]"
console.log("方法三：", (typeof obj)); "object"
// 方法四：instanceof
function Car(color) {
    this.color = color;
}
const auto = new Car('red');
console.log("方法四：", auto instanceof Car); // true

// 方法五：constructor
// 场景一：
function Target() {};
Target.prototype = { render() {} };
Target.constructor // ƒ Function() { [native code] }
// 场景二：继承
function Target() {};
Target.prototype = {
    constructor: Target,
    render() {}
};
function SubTarget() {
    Target.call(this);
}
SubTarget.prototype = Object.create(Target.prototype);
SubTarget.prototype.constructor = SubTarget;
var target = new SubTarget();
console.log("方法五：", target.constructor); // ƒ SubTarget() { Target.call(this); }
// 这会存在问题：
target instanceof Target // true
target instanceof SubTarget // true
target.constructor === Target // false 抓瞎了
target.constructor === SubTarget // true

// // instanceof 的本质：不停的往上爬
function instanceofFun(target, Target) {
    let proto = target.__proto__;
    while(proto) {
        // 直到 proto === Target.prototype 结束
        if (proto === Target.prototype) {
            return true;
        }
        proto = proto.__proto__;
    }
    // 如果一直没找到，直接返回 false
    return false;
    console.log('test...')
}
