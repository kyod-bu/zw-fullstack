/**
 * 类比于 vue 中的 snabdom -- 比较`DIFF`用！
 */
(function (global) {
    const oprations = {
        // 创建 react 组件
        ReactComponentClass(element) {
            const Component = element.type;
            const inst = (new Component());
            return inst;
        },

        createHostComponent(element) {
            const docElem = document.createElement(element.tag);
            element.curElement = docElem;
            return docElem;
        },

        initElement(element) {
            if (typeof element === 'function') {
                return this.ReactComponentClass(element);
            }
        }
    };

    const works = {
        renderContentText(container, text) {
            container.textContent = text;
        }
    };

    const shouldUpdate = (oldChild, newChild) => {
        return oldChild.key === newChild.key && oldChild.tag === newChild.tag; // 'div, span'
    };

    global.Reconciler = {
        updateContainer(element, container) {
            const inst = oprations.ReactComponentClass(element);
            // element.stateNode = container;
            const newChildren = inst.render();
            console.log('组件树 vdomTree::', newChildren);
            this.updateChild([], newChildren, container, inst);
        },

        updateChild(oldChild, newChild, container, inst) {
            this.updateChildren(oldChild, newChild, container, inst);
            inst.oldChild = newChild;
        },

        flattern(children, prefix = '', res = {}) {
            for (let i = 0, len = children.length; i < len; i++) {
                let child = children[i];
                if (Object.prototype.toString.call(child) === '[object Array]') {
                    this.flattern(child, '' + i, res);
                } else {
                    let key = '';
                    if (child.props.key) {
                        key = prefix + '.' + child.props.key;
                    } else {
                        key = prefix + '.' + i;
                    }
                    res[key] = child;
                }
            }
            return res;
        },

        updateChildren(oldChildren, newChildren, container) {
            console.log('\ndiff=========================');
            console.log('oldChildren:::', oldChildren);
            console.log('newChildren:::', newChildren);
            console.log('container:::', container);
            if (typeof newChildren === 'string') {
                works.renderContentText(
                    container, newChildren
                );
                return;
            }
            newChildren = [].concat(newChildren);
            oldChildren = [].concat(oldChildren);
            const newflatedChildren = this.flattern(newChildren);
            const oldflatedChildren = this.flattern(oldChildren);
            // for (let i = 0, len = newChildren.length; i < len; i++) {
            // 从左到右，从右到左？？顺序？？?
            // 以key做索引去循环，而不是两边向中间缩小
            for (name in newflatedChildren) {
                const oldChild = oldflatedChildren[name];
                const newChild = newflatedChildren[name];
                // 之前的节点可以复用！
                if (oldChild && shouldUpdate(oldChild, newChild)) {
                    if (oldChild.props.children && newChild.props.children) {
                        this.updateChildren(
                            oldChild.props.children,
                            newChild.props.children,
                            oldChild.curElement
                        );
                    }
                } else if (!oldChild) { // 如果没有旧元素的情况
                    const newElement = oprations.createHostComponent(newChild);
                    if (newChild.props.children) {
                        this.updateChildren(
                            [],
                            newChild.props.children,
                            newElement
                        );
                    }
                    container.appendChild(newElement);
                }
            }
            // 回捞一下，所有匹配 key 的，旧的节点
        }
    };
})(window);
