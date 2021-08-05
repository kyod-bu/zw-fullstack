/**
 * Vue 实例
 * @description 关于`render`，常用的2种写法：
 * 写法一：
 * <template>
 *     <div>{{price}}</div>
 * </template>
 * 写法二：
 * template: `<div>{{price}}</div>`,
 * @desc 最后都会被编译成 `render`方法
 * 
 * @summary 需要实现的功能：
 * 1. 可以渲染视图
 * 2. 数据变更之后，能把之前的视图更新一下
 * @description 最早的jquery实现，可参考 ./jquery.js
 */

(function () {

    // 1. render 里没有用到的数据 更新之后，会怎样呢？--目前还是会带着render一下
    // 2. 整个 DOM 都刷新吗？？--整个DOM都在跟着刷新，无论有的DOM变了还是没变
    // 以上2个问题，解决方案见 ./vue2.js

    // js 判断类型的几种方法比较 详情见 ./test.js
    const typeTo = val => Object.prototype.toString.call(val);

    // 监听数据变化
    function defineReactive(obj, key, value, callback) {
        // 监听某个对象上的某个key
        // 当一个对象中的值发生了变化，无论你是获取了，还是设置了，都可以通知我们一下
        Object.defineProperty(obj, key, {

            set(newValue) {
                if (newValue === value) {
                    return;
                }
                value = newValue;
                callback && callback();
            },

            get() {
                return value;
            }
        });
    }

    function walk(obj, callback) {
        // 对于一个对象的所有 key 都进行绑定
        // 1. 把 obj 的所有 key 拿到手
        // 2. 对所有 key，进行监听
        Object.keys(obj)
            .forEach(key => {
                // 如果 obj[key] 是一个对象，递归处理一下
                if (typeTo(obj[key]) === '[object Object]') {
                    walk(obj[key], callback);
                }
                // 进行监听
                defineReactive(obj, key, obj[key], callback);
            });
    }

    // 只要 value 内部发生了变化，就调用一下
    function observe(value, callback) {
        // 如果 value 不是 对象类型，那么就不用响应式
        if (typeTo(value) !== '[object Object]') {
            return null
        }
        return walk(value, callback);
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
            observe(this._data, () => {
                console.log('数据变啦！');
                // 每次数据变了，刷新一下页面
                this.$mount(this.$el);
            });
            this.$mount(this.$el);
            
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
