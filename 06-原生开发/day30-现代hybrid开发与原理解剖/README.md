# hybrid 与原生开发

前端在 2020 年已经不再是一个单一的网页前端的概念，而是分为了**桌面浏览器端**，**移动端**，**小程序端**，**iOS** 和**安卓应用端**等等的一个**大前端概念**。

## 浏览器前端开发 *vs* Native APP 开发

* Native APP 因为使用原生的语法开发，性能和效率都更强。

* Native APP 因为使用原生的语法和相关的 API，整体功能更多，能够调用更多的端内能力，例如截屏、推送、甚至文件的读写等等。
* 前端开发 html 5 因为兼容性好，一次编写只要有浏览器环境，都可以直接运行。
* 前端开发 html 5 更新方便，只需要我们更新 URL 对应内容即可。

### 混合开发的流派

**使用 webview 直接使用 html 内容**：一种方式是直接在安卓原生和 iOS 原生当中，使用原生的 webview 组件，加载一个 html 页面内容。（Android 下是 WebView，iOS 8 之前是 UIWebview，之后是 WKWebview）

我们在这里可以把它类比为小程序，小程序里面提供了一个 webview 组件，让我们能够直接加载一个在线的网页，也就是直接使用了 html 来进行开发。

**JS 编译 & 运行时映射**：以 react-native 和 weex 为代表，前者使用 react 的 reconciler，运行时实现了一套渲染引擎，将 jsx 的元素渲染为原生控件，后者同理，只不过使用 vue 语法，在运行时映射为 UI 控件。

**更高级的框架派**：这里以 flutter 为代表，使用 dart 的语法，自成一派。事实上 flutter 和 RN 或 weex 大体思路相同，不过 flutter 基于原生的 API 实现了一层渲染层，抹平了版本细节，比 RN 或是 weex 做的更好。

## iOS WKWebview

本小节主要进行一个 iOS 端 WKWebview 的开发，通过两种形式的对比，让大家明白 webview 究竟是什么样子。

## iOS 下 WKWebview 和 UIWebview 之间引擎区别

* WKWebview 缺点：
  * 比如在 iOS 8 之后的项目中使用
  * html 本地缓存的数据会在 APP 重启后删除
* WKWebview 优点：
  * 在主进程之外执行，UIWebview 则与主进程为同一进程
  * 更快的 JS 解析引擎，使用了 Safari 相同的解析引擎
  * 系统级的一些 API 改为异步 callback 调用，增加性能
  * 消除了触摸延迟（只有在快速点击时会有 300ms 延迟）

## RN的基本原理

![React Native 技术架构](./img/react-native原理浅析.jpeg)

## Todo

1、实现一个大文件上传和断点续传

💡 参考：<https://juejin.cn/post/6844904046436843527>
