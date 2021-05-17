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
        $content.outerHTML = html;
        this.$el = $container.firstChild;
        return this.$el;
    }

    mount($container) {
        if (!this.$el) {
            this.constructElement();
        }
        $container.appendChild(this.$el);
    }
}