# 设计模式实战

使用开发者模式创建一个《头条》

## 单例模式（singleton）‼️

### 模块级别

典型应用：redux store

```js
// store.js
import reducer form './reducer';
import { configureStore } from 'redux';

const store = configureStore({ reducer });

export {
    store,
};

// app-a.js
import { store } from './store';

// app-b.js
import { store } from './store';

// a文件 和 b文件 引入的 store 应该是同一个
```

### 类级别

***饿汉*** 的单例模式

```js
/**
 * `饿汉`的单例模式
 * @desc 很饿，很着急吃东西
 */
class Eager {
    static instance = new Eager("eager");

    constructor(name) {
        console.log("Eager constructor::", name);
        this.name = name;
    }
}

module.exports = {
    Eager,
};
```

```js
// index.js
const { Eager } = require("./eager"); // 直接引入，已经实例化了
```

***懒汉*** 的单例模式

```js
/**
 * `懒汉`的单例模式
 * @desc 很懒，你不让我做事情，我就不做事情
 */
class Lazy {
    // 这里的 “#” 代表 这是一个私有变量
    static #instance = null;

    static getInstance() {
        if (!Lazy.#instance) {
            Lazy.#instance = new Lazy("lazy");
        }
        return Lazy.#instance;
    }

    constructor(name) {
        console.log("Lazy constructor::", name);
        this.name = name;
    }
}

module.exports = {
    Lazy,
};
```

```js
const { Lazy } = require("./lazy"); // 直接引入，并不会实例化

const ins1 = Lazy.getInstance(); // 在这里调用，才会实例化
Lazy.instance = null;
const ins2 = Lazy.getInstance();

console.log(ins1 === ins2); // true，符合预期
```

### 第三方

```html
<html>
    <head></head>

    <body>
        <script src="loadScript.js"></script>
        <script>
            const l1 = LodashLoader.getInstance();
            // 很多中间的代码
            const l2 = LodashLoader.getInstance();

            console.log(l1 === l2);
        </script>
    </body>
</html>
```

```js
// loadScript.js
class LodashLoader {
    static instance = null;

    static getInstance() {
        if (!LodashLoader.instance) {
            LodashLoader.instance = new LodashLoader();
        }

        return LodashLoader.instance;
    }

    constructor() {
        loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js");
    }
}

function loadScript(url) {
    const $script = document.createElement("script");
    $script.src = url;
    $script.onload = () => {
        console.log("loaded::", url);
    };

    document.body.appendChild($script);
}

// UMD
window.LodashLoader = LodashLoader;
```

借助 http-server 进行调试：

```shell
npm i http-server
```

```shell
# 启动一个 http 服务：
python3 -m http.server 1234
```

在浏览器中访问 <http://localhost:1234/> ，开发者模式观察 lodash 的加载情况

**总结一下：**

虽然在 **index.html** 中执行了多次 `LodashLoader.getInstance();` 但是页面里面只包含了一份

```html
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>
```

符合预期！

## 观察者模式（pub-sub）‼️

观察者模式又叫做**发布-订阅**模式，是我们最常见的设计模式之一。

## 代理模式（proxy）

## 迭代器模式（iterator）

## 职责链模式（chain）

## 装饰器模式（decorator）

## 策略模式（strategy）

demo
