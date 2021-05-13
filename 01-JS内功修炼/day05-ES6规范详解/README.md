# ES6

## 1. Iterator 和 for...of 循环

### 1.1 可迭代协议 与 迭代器协议

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols> 

### 1.2 为什么要有两个协议

不可能知道一个特定的对象是否实现了迭代器协议，然而创造一个同时满足**迭代器协议**和**可迭代协议**的对象是很 容易的（就像下面的example所示）。这样做允许一个迭代器能被不同希望迭代的语法方式所使用。 因此，很少只实现迭代器协议而不实现可迭代协议。

```javascript
// example
var inHomeYou = {
    cursor: 0,
    next() {
        const actions = ['抖音', '农药', '吃饭', '睡觉'];
        if (this.cursor > 7) {
            return {
                done: true
            };
        }
        return {
            done: false,
            value: actions[this.cursor++ % actions.length]
        };
    },
    [Symbol.iterator]: function () {
        return this; // 返回一个对象
    }
};

// 使用的时候
inHomeYou.next();
inHomeYou.next();
inHomeYou.next();

for (const item of inHomeYou) {
    console.log('item:::', item);
}
```

⚠️ {}、 []、 Map、 Set ... 都实现了 **迭代器协议**

### 1.3 都有哪些语法或特性，使用或实现了可迭代协议与迭代器协议

**for...of / ... / Array.from** 使用了迭代器协议，自制？？？

**[] / Set / Map / generators** 实现了 Iterators

## 2. Generator 函数与异步应用

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator>

### 2.1 基本用法

```javascript
function* liangpiGenerators() {
    console.log('和面之前');
    var a = yield '和面';
    console.log('和完面了');
    var b = yield '蒸';
    console.log('蒸完了');
    var c = yield '切';
}

var handler = liangpiGenerators(); // 返回的是一个句柄，实现了 `迭代器协议` 和 `可迭代协议`
console.log('handler', handler);
handler.next();
console.log('和面完成');
handler.next();
```

### 2.2 next 传递参数

```javascript
function* liangpiGenerators() {
    console.log('和面之前');
    window.status = yield '和面';
    console.log('和完面了');
    var b = yield '蒸';
    console.log('蒸完了');
    var c = yield '切';
}

var handler = liangpiGenerators();
console.log('handler', handler);
handler.next();
console.log('和面完成');
handler.next('累');
```

### 2.3 用 for...of 迭代 generators

```javascript
function* liangpiGenerators() {
    console.log('和面之前');
    window.status = yield '和面';
    console.log('和完面了');
    var b = yield '蒸';
    console.log('蒸完了');
    var c = yield '切';
}
for (let item of liangpiGenerators()) {
    console.log('item:', item);
}
```

### 2.4 generators 处理异步

```js
function buy(name, cb) {
    setTimeout(() => {
        cb && cb(null, 'content:' + name); // err first
    }, 5);
}

// err first 形式
buy('cai', function (err, content) {
    console.log('content', content);
});


// promise 形式
function buyPromise(name) {
  return new Promise((resolve, reject) => {
    buy(name, function(err, content) {
      if(err) {
        reject();
      }
      resolve(content);
    });
  });
}
// 使用 promise 形式
buyPromise('cai')
  .then(function(content) {
    return buyPromise('paomian');
    console.log('content::', content);
  })
  .then(function(content) {
    return buyPromise('paomian');
    console.log('content::', content);
  });


// 引用 generators 形式
function* buyGenerators(name) {
  yield buyPromise(name);
}

let buyTask = buyGenerators('cai');

//console.log(buyTask.next().value); // 这里打印出来的就是 promise 对象

// 这样使用，效果没问题，但是优化效果并不明显
buyTask.next().value.then(content => {
  console.log('content::', content);
});

// 曙光形式：向着光明出发，买完这个，买那个，买很多东西呢？
// 买东西的过程是 串行的
// 书写你的 code（代码） 的时候，可以一步一步走
function* buyAmountGenerators() {
  var caiContent = yield buyPromise('cai');
  var paomianContent = yield buyPromise('paomian' + caiContent);
  var shuanghuanglianContent = yield buyPromise('shuanghuanglian' + paomianContent);
  // done 为 true 时，到这里了！！！
}
// 下面的这个执行，就很搞笑了(写起来舒服，读起来要吐血)
// 往复循环，每一步 给下一步传递上一步的返回值
var handler = buyAmountGenerators();
handler.next().value.then(content => {
  handler.next(content).value.then(content => {
    handler.next(content).value.then(shuanghuanglianContent => {
      console.log('shuanghuanglianContent::', shuanghuanglianContent);
    });
  });
});
// 下面用 递归 优化一下
function runGenerators(handler) {
  return Promise.resolve()
    .then(function nextAction(value) {
      console.log('value::', value);
      var next = handler.next(value);
      if(next.done) {
        // done 为 true 时，已经迭代到最后了，value 没有值了
        return value;
      }
      return Promise.resolve(next.value).then(nextAction);
    });
}
console.log('result::', runGenerators(buyAmountGenerators()));
runGenerators(buyAmountGenerators()); // 这里返回的是个 Promise
// 要想串行的话，如下处理方案就行 .then
runGenerators(buyAmountGenerators()).then(finalRes => {
  console.log('finalRes::', finalRes);
});
```

### 2.5 封装异步处理函数

类似于 [co库](https://www.npmjs.com/package/co) 中的使用方法

```javascript
// 下面的代码中使用了 require 引入第三方库，只能用 node.js 执行
const co = require('co');
const fetch = require('node-fetch');

co(function *() {
    const res = yield fetch('https://mcs.snssdk.com/v1/list?rdn=0.5130960891765854');
    const jsonRes = yield res.json();

    console.log("jsonRes:", jsonRes);
});
```

实战中，还有个推荐：搜索关键字 **你不知道的js generators runners**

## 3. async函数

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function>

### 3.1 基本用法

封装隐式的 Promise 行为，趋近于同步行为，实则为**语法糖**

```javascript
async function buyAmountAsync() {
    var caiContent = await buyPromise('cai');
    var paomianContent = await buyPromise('paomian' + caiContent);
    var shuanghuanglianContent = await buyPromise('shuanghuanglian' + paomianContent);
    return shuanghuanglianContent;
}
```

### 3.2 如何封装旧的函数以适应 async/await 语法

将 error first 风格的函数，封装为 **Promise 形式 ** 的函数即可

```javascript
function buy(name, cb) {
    setTimeout(() => {
        cb && cb(null, 'content:' + name);
    }, 5);
}
function buyPromise(name) {
    return new Promise((resolve, reject) => {
        buy(name, function (err, content) {
            if (err) {
                reject();
            }
            resolve(content);
        });
    });
}

async function buyAmountAsync() {
    var caiContent = await buyPromise('cai');
    var paomianContent = await buyPromise('paomian' + caiContent);
    var shuanghuanglianContent = await buyPromise('shuanghuanglian' + paomianContent);
    return shuanghuanglianContent;
}

buyAmountAsync().then(content => {
    console.log('content:::::::', content);
});
```

### 3.3 babel 编译下的 generators/async/await

```shell
cd generators/
../node_modules/.bin/babel generators.js --out-dir=./dist
```

看编译后的源码：

generators -> 代码切割
async/await 的原理还是老一套（generators）

### 3.4 优势

比 Promise 优势

```javascript
axios()
    .then(function () {
        new Promise(() => {
            reject();
        });
    })
    .then(function () {
        
    })
    .catch(function () {
        // 统一???!!!
    });
```

1. 对于流的控制，更加精细化
2. 直接简单的try-catch体验
3. 同步的书写体验

## 4. Proxy 与 Reflect用法

### 4.1 基本用法

```js
// obj.name
// obj.money
// obj.money = 100000000;
var obj = {};
Object.defineProperty(obj, 'money', {
    get(key) {
        console.log('get a attr');
        return obj[key];
    },

    set(key, value) {
        console.log('get a attr');
        return obj[key] = value
    }
});
```

```js
// obj.money = 100000000;
var obj = {};
var proxiedObj = new Proxy({}, {
    get(target, key, receiver) {
        console.log('key:', key);
    },

    set(target, key, value, receiver) {
        console.log('key:', key, value);
    }
});
proxiedObj.asdasd = 1;
```

### 4.2 可撤销对象

```js
var {proxy, revoke} = Proxy.revocable({}, {
    get(target, key, receiver) {
        console.log('key:', key);
    },

    set(target, key, value, receiver) {
        console.log('key:', key, value);
    }
});
revoke();
```

### 4.3 Reflect 基本用法

### 4.4 在 Vue3.0 中的应用

代理对象与处理对象部分的源码，使用的是Proxy，虽然使用的是TS，但是和ES6中的Proxy与Reflect一致

## 5. Decorators 用法与注意事项

### 5.3 如何装饰类与方法

```js
const itemFy = (target) => {
    console.log('target::::', target);
};

@itemFy
class MyComponent {
    render() {
        return '<div>内容</div>';
    }
}
```

### 5.4 babel 编译下的 Decorators

### 5.5 decorators 与 proxy 的联系与区别

1. Decorators会更改原始对象，装饰是对于原油对象的修改
2. Proxy注重于“代理”，产生新的对象，而非对原始的修改

## 6. class 语法

第二节课(面向对象)讲过，同学们可以自行回顾复习

## 7. babel 配置与插件书写

### 7.1 babel 中的术语

#### Presets

一系列配置的集合

#### polyfill（腻子）

补丁，用于兼容各个浏览器对于语法支持程度的不同，补充的方法或属性集合

#### plugin

现在，Babel 虽然开箱即用，但是什么动作都不做。它基本上类似于 const babel = code => code; ，将代码解析之后再输出同样的代码。如果想要 Babel 做一些实际的工作，就需要为其添加插件

### 7.2 babel-loader 在 webpack 中的注意事项

webpack loader
babel-loader
babel-loader 6.0
babel-plugin-proposal-decorators
babel-preset-env

babel-loader 7.0 @babel/plugin-proposal-decorators

module: {
    use: {
        test: /\.js$/,
        loader: 'babel-loader'
    }
}