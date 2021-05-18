export default class Component {

    constructor(props) {
        this.props = props;
    }

    render() {
        return '<div>我是基类不要渲染我</div>';
    }

    constructElement() {
        const html = this.render();
        const $content = document.createElement('div');
        const $container = document.createElement('div');
        $container.appendChild($content);
        $content.outerHTML = html; // 变成一个 DOM
        this.$el = $container.firstChild;
        return this.$el; // 把 字符串 变成 fragment
    }

    // 把 DOM 插入到 $container 里面
    mount($container) {
        if (!this.$el) {
            this.constructElement();
        }
        $container.appendChild(this.$el);
    }
}

// // vue 的实现
// new Vue({
//     template: '<div></div>',
//     el: document.getElementById('app')
// });
