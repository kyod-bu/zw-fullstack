/**
 * @description 针对 ./vue.js 存在的2个问题，进行优化处理
 * 1. render 里没有用到的数据 更新之后，会怎样呢？--目前还是会带着render一下
 * 2. 整个 DOM 都刷新吗？？--整个DOM都在跟着刷新，无论有的DOM变了还是没变
 * 
 * @desc 响应式中的 callback，可以留，但不应该整体都刷新
 */

 (function () {

    /**
     * @desc 监听一下 render 中 用到的数据，按需调用
     * 
     * data
     * render(依赖别人的项) -> data.a(被依赖的项) -> data.a.sub[render] 【render函数依赖于data】
     * render -> data.b -> data.b.sub[render, getter]
     * getter -> data.a -> data.a.sub[render]
     * 
     * 情况一：
     * 当data发生变化的时候，无论是render函数，还是getter方法 都要得到一次调用
     * data => change -> render/getter.call
     * 情况二：
     * 当data2发生变化的时候，只有render函数，得到调用
     * data2 => change -> render.call
     */

    // 包装右边的东西（如：data.a/data.b）
    class Dep {
        constructor() {
            this.subs = []; // 谁都依赖了我！！！
        }

        addSub(sub) {
            this.subs.push(sub);
        }

        // 别人依赖我，我一旦变（notify）了，则告诉所有自己的孩子们，调用一下 update
        notify() {
            this.subs.forEach(sub => {
                sub.update();
            });
        }
    }

    Dep.depTarget = null;

    // 包装左边的东西（如：render/getter）
    // 我依赖于别人，别人变了的话，调用一下我的 update 方法
    class Watcher {
        constructor(data, getter) {
            this.getter = getter;
            this.value = this.get();
        }

        get() {
            Dep.depTarget = this; // 调用前，记一下
            let value = this.getter(); // 用到属性的时候
            Dep.depTarget = null; // 调用后
            return value;
        }

        update() {
            this.value = this.get();
        }
    }

    // js 判断类型的几种方法比较 详情见 ./test.js
    const typeTo = val => Object.prototype.toString.call(val);

    // 监听数据变化
    function defineReactive(obj, key, value) {
        // 为对象里的每一个属性，都创建一个Dep对象，即被依赖项的实例
        let dep = new Dep();

        // 监听某个对象上的某个key
        // 当一个对象中的值发生了变化，无论你是获取了，还是设置了，都可以通知我们一下
        Object.defineProperty(obj, key, {

            set(newValue) {
                if (newValue === value) {
                    return;
                }
                dep.notify();
                value = newValue;
            },

            get() {
                dep.addSub(Dep.depTarget);
                // console.log('我被调用了：', key);
                return value;
            }
        });
    }

    function walk(obj) {
        // 对于一个对象的所有 key 都进行绑定
        // 1. 把 obj 的所有 key 拿到手
        // 2. 对所有 key，进行监听
        Object.keys(obj)
            .forEach(key => {
                // 如果 obj[key] 是一个对象，递归处理一下
                if (typeTo(obj[key]) === '[object Object]') {
                    walk(obj[key]);
                }
                // 进行监听
                defineReactive(obj, key, obj[key]);
            });
    }

    // 只要 value 内部发生了变化，就调用一下
    function observe(value) {
        // 如果 value 不是 对象类型，那么就不用响应式
        if (typeTo(value) !== '[object Object]') {
            return null
        }
        return walk(value);
    }

    // kyod
    // 目的：有个地方存储数据，当数据改变之后，相应的视图跟着动起来
    class Vue {

        constructor(options) {
            this.$options = options;
            this.render = options.render;
            this._data = options.data();
            this.$el = typeof options.el === 'string' 
                ? document.querySelector(options.el) 
                : options.el;

            // 监听数据变化，响应式
            // observe(this._data, () => {
            //     console.log('数据变啦！');
            //     // 每次数据变了，刷新一下页面
            //     this.$mount(this.$el);
            // });
            observe(this._data);

            // 监听一下 render 中 用到的数据，按需调用
            new Watcher(this._data, () => {
                // 依赖采集
                // 只有在 render 中 用到的数据，发生了变化，才会调用这个 callback
                // 这里的 callback 函数，应该依赖于 属性（eg: price）
                console.log('getter 里面的 price::', this._data.price);
                // this.$mount(this.$el);
            });

            // this.$mount(this.$el);
            
        }

        // 创建一个元素
        createElement(tagName, data, children) {
            let element = document.createElement(tagName);
            if (typeTo(children) === '[object Array]') {
                children.forEach(child => {
                    element.appendChild(child);
                }); 
            } else {
                element.textContent = children;
            }
            return element;
        }

        // 挂载（渲染到页面上）
        $mount(root) {
            // let divNode = document.createElement('div');
            // divNode.innerHTML = '123123123';
            // root.appendChild(divNode);
            // 当然，我们不用上面的这种方法。在这里，我们调用一下 `render`方法
            const element = this.render(this.createElement); // 得到一个元素
            root.innerHTML = '';
            // root.forEach(child => {
            //     element.appendChild(child);
            // }); 
            root.appendChild(element); // 把得到的元素，插到root上
        }
    }

    window.app = new Vue({
        el: '#app',
        // 这个data不是一个对象，而是一个函数（怕改引用）
        data() {
            return {
                price: 48,
                info: {
                    message: '猪肉价格：'
                }
            };
        },
        // 只有在顶层的时候，会写个 render
        // template: `<div><span>{{this.price}}</span></div>`,
        render(createElement) {
            // 源码中的形参`h`，是`hyper`缩写
            return createElement(
                'div',
                {
                    attrs: {
                        title: this._data.info.message
                    }
                },
                [
                    createElement('span', {}, `${+new Date()}价格标签：${this._data.price}`)
                ]
            );
        }
    });

    setTimeout(() => {
        // window.app._data.price = Math.floor(Math.random() * 100);
        window.app._data.info.message = '新的message';
        // console.log('window.app.price:: ', window.app._data.price);
        console.log('window.app.message:: ', window.app._data.info.message);
    }, 2000);
})();
