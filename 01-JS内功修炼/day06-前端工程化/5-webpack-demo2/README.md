# webpack 分割 chunk

webpack 出现以后，前端出现的几个名词：

**module**、**package**、**bundle**、**chunk**

这几个词，其实翻译过来，意思其实很相近。

那么我们应该如何区分这几个词呢？

## module

一个 CommonJS 的包，就是一个 module。比如该工程下的 module.js 或 index.js

## package

package，是一个整体的概念。是由很多个 module 整合起来的。比如，现在我们现在写一个 npm 包，发布之后，他就是一个 package

## bundle

bundle，其实就是 webpack 打包的结果。比如该工程下的 /dist/index.bundle.js

## chunk

bundle，就是一个典型的 chunk（优化时常用）

## 模块加载的几种方式

### 方式1：require (同步加载)

```js
const module = require('./module');
console.log('this is index.js', module.var1);
// 2个module 打包到 1 个文件里面
```

### 方式2：require.ensure (异步加载)

```js
// 优化一下：加载完 index.bundle.js(主包) 之后，再加载 1.index.bundle.js
require.ensure(['./module'], function(require) {
    const result = require('./module');
    console.log(result);
});
// 2个module 打包到 2 个文件里面
// 打包的结果：index.bundle.js 和 1.index.bundle.js
```

**分包的优势：** 首屏加载的 js 更小

这个很像国外的一个模块化规范： CMD 模块化规范
⚠️ require.ensure 只有在 webpack 环境下才可以使用，并不属于任何的模块化规范

⚠️ 如果有多个 require.ensure，它们是并行加载的

### 方式3：ES6里 import/export (同步加载)

```js
// 在ES6里面， ESModule 规范
import module from './module';
console.log('this is index.js', module.var1);
```

### 方式4：import 函数 (异步加载)

```js
// import 其实还有另一种用法，就是 import 函数，它返回的是一个 promise
import('./module')
    .then(result => {
        console.log('result::', result, 'result.var1::', result.var1);
    });
```

打包的结果，有主包，还有子包。我们一般把子包称做 **chunk** 。如：1.index.bundle.js

### 推荐方案：异步加载

⚠️ 太多的 chunk 是不好的

异步记载，其实际上是 牺牲了 http请求，从而使得  首屏加载 的 主包(eg: index.bundle.js) 比较小。

以上这4种方式，都是通过代码，主动实现分包。那么有没有其他方式呢？

### 通过 webpack 的 optimization 配置

webpack4，通过 optimization 配置可以优化，比如：

```js
// webpack.config.js
// 加载 2 个入口文件
const path = require('path');
module.exports = {
    mode: 'none',
    // 2 个入口文件
    entry: {
        index: './index.js',
        index2: './index2.js'
    },
    // 打包出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    optimization: {
        // 分割 chunk 相关配置
        splitChunks: {
            chunks: 'all',
            minSize: 0
        }
    }
};
```

2个入口文件，打包结果：3个文件（index.bundle.js, index2.bundle.js, 2.bundle.js），其中 2.bundle.js 就是 公共部分。

⚠️ 需要 在 html 中，手动引入 bundle 

```html
<script src="./dist/index.bundle.js"></script>
<script src="./dist/index2.bundle.js"></script>
<script src="./dist/2.bundle.js"></script>
```

### 参考项目

<https://github.com/loatheb/the-super-tiny-web-module-resolver>
