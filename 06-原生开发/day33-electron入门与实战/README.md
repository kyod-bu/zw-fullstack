# Electron 开发及实践

使用 JavaScript，HTML 和 CSS 构建跨平台的**桌面应用程序**。

官网：<https://www.electronjs.org/>

## 桌面开发简介

桌面应用程序，又称为 GUI 程序（Graphical User Interface），但是和 GUI 程序也有一些区别。桌面应用程序将 GUI 程序从 GUI 具体为“桌面”，使冷冰冰的像块木头一样的电脑概念更具人性化，更生动和富有活力。

我们电脑上使用的各种客户端程序都属于桌面应用程序，近年来 WEB 和移动端的兴起让桌面程序渐渐暗淡，但是在某些日常功能或者行业应用中，桌面应用程序仍然是必不可少的。

从早起的 *C++ MFC* 开发桌面端内容，到如今只需要使用 JS 就能跨平台开发。

## electron 简介

electron 使用 web 的技术栈来进行桌面开发，是我们通过 html / css / js 就能开发出来一个桌面端的应用来。

Electron 是由 GitHub 开发，用 HTML、CSS、JavaScript 来构建跨平台桌面应用程序的一个开源库。**Electron 通过将 Chromium 和 Node.js 合并到同一个运行时环境中，并将其打包为 Mac、Windows 和 Linux 系统下的应用**来实现这一目的。

我们常见的 VSCode、ATOM 编辑器，都是使用 electron 进行开发的。

***electron 的优点：***

* 可以直接使用 web 端生态，开发成本低，迁移成本低，扩展性较强
* 跨平台，我们可以轻松打包编译到多个桌面平台（Mac、Windows、Linux）

## electron 安装

和 node-sass 等包一样，很多 node.js 模块都需要在 npm 上安装完成之后，去其他地方获取一些其他依赖。比如 有些模块会把自己的一些其他依赖托管在 github 上，有些模块会把自己的依赖托管在 aws 上。

这类模块在安装的最后就会去这些第三方平台下载其他内容，但这类第三方平台一般国内访问会比较慢，所以需要我们使用国内的镜像，他们会在每次这些第三方平台更新时，下载一份相同的内容同步更新到国内，这样从国内的地址下载就会很快。

electron 就是这样一类最后需要下载依赖的模块，我们需要设置：

```shell
ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
```

或者在 **.npmrc** 文件中加入 `ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/`

这样当我们 npm 进行安装依赖时，基于 npm 安装的生命周期，electron 处理内部依赖，就会去对应的位置下载我们需要的剩余部分依赖。

⚠️ 很多依赖都有相似的情况，以 electron 为例，大家一定要记住这种使用的情景，后续在遇到相同的问题时，就知道如何进行排查。

## electron 架构解析

在开始 electron 的架构解析之前，我们必须看一个简单的 electron 例子 [electron-quick-start](https://github.com/electron/electron-quick-start)。我们使用 electron 写一个简单的桌面时钟。

⚠️ 对于 electron 应用，在安装完成之后，是一个可执行的二进制文件。

electron 渲染时分为**渲染进程（renderer.js）**和**主进程（main.js）**。渲染进程顾名思义，就是用来渲染内容，但主进程用来处理逻辑。

我们可以发现，对于渲染进程来说，我们并不能直接使用模块化或是 node.js 相关 API，就像是在浏览器中渲染一个 html 一样。

当然我们可以通过在 main.js 里面配置，webPreferences.nodeIntegration 设置为 true，让我们可以直接在渲染进程中使用 node.js，这样也可以使用诸如 require 的 CommonJS 模块化规范。

```js
/* 主进程 main.js */
webPreferences: {
    nodeIntegration: true, // 配置，将 node 注入到 渲染进程中去
    contextIsolation: false,
    preload: path.join(__dirname, 'preload.js')
}
```

【备注】主进程可以理解为服务端，渲染进程可以理解为客户端/浏览器端。

***electron 架构 主要分为：***

* Chromium
* Node.js
* 系统 API
* 主进程 ⭐️（必须有且只有一个）
* 渲染进程 ⭐️

## electron 复杂应用

大部分情况下，我们并不会直接在渲染进程中使用 node.js 相关操作，这种操作很容易在渲染过程中造成内存泄漏，同时 CPU 密集任务可能还会影响到渲染进程的渲染。

这时候就需要我们手动的使用一些第三方工具，如 webpack / babel 等，对模块化相关的内容进行处理，只有处理完成之后，我们才能在渲染进程中使用。

诸如刚才的应用，我们就可以使用 electron 推荐的方式，主进程与渲染进程之间进行通信，主进程设置图标等信息，渲染进程仅负责渲染元素。

```shell
# electron-reload 修改之后，不需要重启可以自动更新 electron 应用
npm i --save-dev electron-reload
```

## electron 打包

package

make

## electron 的缺点

创建GitHub工程的流程

life-assistant
