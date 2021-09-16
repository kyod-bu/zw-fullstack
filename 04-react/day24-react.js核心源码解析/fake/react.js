(function (global) {

    /**
     * 所有组件的基类
     */
    class Component {
        setState(partialState) {
            this.state = {
                ...this.state,
                ...partialState
            };
            // 更新组件树 update???
            Reconciler.updateChild(
                this.oldChild,
                this.render(),
                this.oldChild.curElement,
                this
            );
        }
    }

    const createNode = (type, props, children) => {
        if (children) {
            props.children = children;
        }
        return {
            type: type,
            tag: typeof type === 'function' ? null : type,
            props: props
        };
    };

    /**
     * 创建一个 vdom 的方法
     * @param {string | function} 要创建的 vdom的 'div', App
     */
    const createElement = (type, props, children) => {
        return createNode(type, props, children);
    };

    global.React = {
        createElement,
        Component
    }
})(window);
