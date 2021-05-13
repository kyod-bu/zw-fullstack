const itemFy = (target) => {
    target.prototype.click = function () {
        console.log('click');
    }
    return target;
};

// 同一个装饰器，两种不同的玩法
const renderShell = (clickAble) => {
    console.log('renderShell');
    return (targetPrototype, propName) => {
        const originRender = targetPrototype[propName];
        targetPrototype[propName] = function () {
            const prefix = clickAble
                ? '<div class="outer" onclick="click">'
                : '<div class="outer">' ;
            return prefix + originRender.call(this) + '</div>';
        };
        return targetPrototype;
    }
}

const renderCloseAble = () => {
    console.log('renderCloseAble');
    return (targetPrototype, propName) => {
        const originRender = targetPrototype[propName];
        targetPrototype[propName] = function () {
            return originRender.call(this) + '<span>x</span>';
        };
        return targetPrototype;
    }
}

// @itemFy
class MyComponent {

    @renderShell(true)
    @renderCloseAble()
    render() {
        return '<div>内容</div>';
    }
}

// 类的本尊其实就是 function MyComponent() {}

// 剥洋葱理论，先执行里面的装饰器，再执行外面的装饰器
// 两个方法装饰器的打印结果应该是：
// renderShell renderCloseAble  然后是先走下边的修饰器，再走上边的修饰器

/* 最终的打印结果如下：
renderShell
renderCloseAble
<div class="outer" onclick="click">
    <div>内容</div>
    <span>x</span>
</div>
*/

var myComponent = new MyComponent();
console.log(myComponent.render(), '\n');
// console.log(myComponent.renderTwo());


// proxy 的写法
var myNewComponent = new Proxy(new MyComponent(), {
    get(target, propName) {
        // 把 render 方法给拦截掉
        if ('render' === propName) {
            originRender = target;
            target[propName] = function () {
                // 重新定义一个方法
            }
        }
    },

    set() {}
})
