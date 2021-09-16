# react.js 核心模块源码解析

```sh
# 源码
https://github.com/facebook/react.git
```

## 课程安排

1. 旧版本的 react
2. v15
3. 源码

## 旧版本的 react

### react 应用 `/origin-old`

```sh
.
├── src/
    ├── index.jsx
├── index.html
├── package.json
└── webpack.config.js # webpack 配置

# 编译
./node_modules/.bin/webpack --watch
```

### 核心源码解析 `/fake`

```sh
.
├── index.html
├── index.js # 应用 React 和 ReactDOM
├── react.js # 包含 React（负责 createElement 和 Component）
├── react-dom.js # 包含 ReactDOM（负责 render：把 element 渲染到 container 上）
└── reconciler.js # 类比于 vue 中的 snabdom -- 比较`DIFF`用！
```

#### `react.js`

```js
(function (global) {
    global.React = {
        createElement, // 创建 vdom 的方法
        Component // 组件的基类
    }
})(window);
```

#### `react-dom.js`

```js
(function (global) {
    global.ReactDOM = {
        render // 渲染组件树 vdomTree
    };
})(window);
```

#### `reconciler.js`

```js
/**
 * 调和器
 * 类比于 vue 中的 snabdom -- 比较`DIFF`用！
 */
(function (global) {
    global.Reconciler = {
        // 更新组件树
        updateContainer(element, container) {
        },

        updateChild(oldChild, newChild, container, inst) {
        },

        flattern(children, prefix = '', res = {}) {
        },

        // 更新组件树实现（核心）
        updateChildren(oldChildren, newChildren, container) {
        }
    };
})(window);
```

#### 实例模块分析

```html
<div id="app">
  <div className="appContainer">
    <div></div>
    <span>111</span>
    <span>222</span>
    <span>333</span>
  </div>
</div>
```

![实现预期](./img/实现预期.png)

## 新版本的 react

### 新版本 react 应用 `/origin`

和旧版本的应用，是一样的。

不一样的是**渲染方式**

```jsx
// 旧版本的应用
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// 新版本的应用
ReactDOM.createRoot(document.getElementById('app')).render(<App />);
```

## 总结一下

* **比 diff**（消耗 js）
* **改 DOM**（交给浏览器）

### 之前的方案

```js
// 组件树
div1
    div2,
        span1
    span2,
    span3
```

### 新版本的方案

```js
// 组件树
div1(vdom)(fiber)
    div2(vdom)(fiber),
        span1(vdom)(fiber)
    span2(vdom)(fiber),
    span3(vdom)(fiber)

// fiber 其实还是一个对象：
fiber{
  expirationTime: ,
  stateNode: DOM!, // 指向原来的 DOM
  updateQueue,effect:
}

// vdom
vdom {
    -> dom
}

// vdom 结构
div1.children = [div2, span2, span3];
div2.children = [span1];

// fiber 结构
div1.child = div2;
div2.sibling = span2;
span2.sibling = span3;
div2.child = span1;
```

```js
flag = false;
lastNode = null;
onClick = () => {
    ajax();
    // 改DOM？？？
    // 改vdom
    // 给节点？？？// 优先安排
    flag = true;
};

// propsDiff???
function visit(node) {
    // 变量？？？
    if (flag === true) {
        lastNode = node;
        return;
    }
    if (node.children) {
        setTimeout(function () {
            node.children.forEach(visit);
        }, 1);
    }
};
/*链表式的结构
                 div1
       /          |    \
     div2       span2  span3
  /    |   \
span1 span5 span6
*/
```

#### 比diff

比较 diff(算DOMdiff))
div1 -> div2 -> span1 -> onClick -> span4 -> span5 div2-span2 span3

```markdown
                div1(updateQueue)
            /
div2(updateQueue = [''(updateQueue)]) ----- span2(updateQueue = ['add', props]) ----- span3(updateQueue = [])
        | 👆         👆          👆
span1(updateQueue) - span5(updateQueue) - span6(updateQueue)
```

// 不可打断
commit -> 改DOM!!
