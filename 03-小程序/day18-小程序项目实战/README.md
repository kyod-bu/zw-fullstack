# 小程序实战

## 小程序代码编写及工程化

### 小程序原有的 npm 使用及不足

1. 在小程序中执行命令安装 npm 包：

   ```sh
   npm init --yes
   npm i moment lodash
   ```

2. 微信开发工具进行配置--本地配置

   * 使用 npm 模块 ☑️
   * 工具-->构建 npm

3. 使用

   ```js
   import moment from 'moment';
   // import { camelCase } from 'lodash';
   
   App({
     onLaunch: function () {
       let time = moment(new Date().getTime()).format("YY-MM-DD hh:mm:ss");
       console.log('aaa', time);
     }
   })
   ```

⚠️ 直接引进 loadsh 会报错，报错信息：

```js
// 引入lodash：
import lodash from 'lodash'
/**
VM861:5 app.js错误:
 TypeError: Cannot read property 'prototype' of undefined
    at runInContext (lodash.js:1465)
    at Object.<anonymous> (lodash.js:17184)
    at Object.func (lodash.js:17210)
    at __REQUIRE__ (VM846 index.js:5)
    at lodash.js:17210
    at lodash.js:17210
    at require (VM838 WAService.js:2)
    at r (VM838 WAService.js:2)
    at app.js? [sm]:2
    at require (VM838 WAService.js:2)
*/
```

根据报错信息，解决小程序 lodash 的报错：

报错指示到：lodash.js:1465

/node_modules/lodash/lodash.js 中，查一段代码 `var root`

```js
/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

// 控制台打印一下，当前的root
console.log('root-root::::', root); // 结果为{}
```

**问题原因：**

Loads 内的 root 参数不支持 Array，只需要替换 root 即可

**解决方案：重新给root赋值**

```js
var root = {
  Array: Array,
  Date: Date,
  Error: Error,
  Math: Math,
  Object: Object,
  Function: Function,
  RegExp: RegExp,
  String: String,
  TypeError: TypeError,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval
};
```

### 小程序使用 webpack + npm 重新构建 ⭐️

```sh
# 1. 利用微信开发者工具，以typescript为模板 新建一个工程 `tstest`
# 进入根目录
cd tstest
# 2. 安装依赖
npm i --save-dev webpack webpack-cli copy-webpack-plugin clean-webpack-plugin @babel/core @babel/preset-env babel-loader
# 3. 在根目录下创建 src 目录，准备归档开发源码
# 4. 把 ~/tstest/miniprogram 目录下的 所有文件，全部copy到 /src 目录下
# 5. 想要使用 webpack，需要在根目录下创建 webpack.config.js，并进行配置
# 		copy-webpack-plugin：可以把一堆文件从一个文件夹copy到另一个文件夹
# 		clean-webpack-plugin：每次生成dist之前，先清空dist
# 6. 在根目录下创建 .babelrc，并进行配置
# 7. 安装 ts 相关依赖
npm install -g typescript
npm install --save-dev typescript ts-loader source-map-loader
# 8. 在 /package.json 里面配置 `scripts`
# 	"dev": "NODE_ENV=dev webpack --watch --config ./webpack.config.js"
		npm run dev
##############################################################################
# 太多的配置看上去很麻烦，接下来我们在根目录下创建一个/config目录，归档配置相关文档
# 1. /config/dev.js
# 	 /config/prod.js
#	   /config/test.js
#	   /config/default.js
#	   /config/index.js
# 	 顺便把 webpack.config.js 也移到/config/里面
# 2. demo
# 5. demo
```

#### 需要解决的问题

我们使⽤lodash、mobx、typescript等第三⽅库是为了⼲什么，是为了使⽤他们已经编写好的 js 代码，那既然微信的 npm ⽅式有很多不⽀持的，那我们可以寻找市⾯上可以达到我们⽬的的⽅法，webpack 进⼊了我们的视线。

1. 前置步骤 - 安装基本依赖

   ```sh
   npm i --save-dev webpack webpack-cli copy-webpack-plugin clean-webpack-plugin @babel/core @babel/preset-env babel-loader
   ```

2. 配置 babel，webpack.config.js

### 全局配置

1. 如果使用 node 的话，可以使用 config 这个 npm 包

2. 小程序暂未提供环境判断的方式，只能手动更改

### 使用 typescript

1. 安装相关依赖

   ```sh
   npm install -g typescript
   npm install --save-dev typescript ts-loader source-map-loader
   ```

2. 添加 rule

   ```json
   rules: [
     {
       test: /\.tsx?$/,
       use: 'ts-loader',
       exclude: /node_modules/
     }
   ]
   ```

## 编写属于自己的小程序 cli

1. 注册 npm 账号

2. 使用到的辅助工具

   ```txt
   chalk: node 彩⾊输出
   commander： 获取指令⼯具
   download-git-repo： 下载github代码
   inquirer： 产⽣⼀些问题供⽤户选择的插件
   ora： 进度条⼯具
   ```

3. 写一个自己的 cli 具体的过程

   ```sh
   # 1. 创建一个cli项目，初始化
   mkdir my-cli
   cd my-cli
   npm init -y
   # 2. 安装依赖
   npm i chalk commander download-git-repo inquirer ora
   ```

demo
