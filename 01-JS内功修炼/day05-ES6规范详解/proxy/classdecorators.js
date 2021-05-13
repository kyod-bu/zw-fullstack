const itemFy = (target) => {
    target.prototype.click = function () {
        console.log('click');
    }
    return target;
};

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

class MyComponent {

    @renderShell(true)
    @renderCloseAble()
    render() {
        return '<div>内容</div>';
    }
}

// function MyComponent() {}

var myComponent = new MyComponent();
console.log(myComponent.render(), '\n');
// console.log(myComponent.renderTwo());