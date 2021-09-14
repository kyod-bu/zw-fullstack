# react-router 路由及状态同构

**服务端路由：**

发送路由到后端，请求资源/数据，服务器根据请求决定返回给你什么东西

**客户端路由：**

并不会发送到后端去，当 url 变化时，在前端内部进行处理

**区别：**

可以看 Network 里面的 Doc 栏。

* 路由变更，Doc 栏变化【服务端路由】------请求后端资源
* 路由变更，Doc 栏无变化【客户端路由】

## 前端路由原理及表现

当我们说前端路由，也就是客户端路由时，更多的是在说当 url 变化时，不会使当前的变化触发到后端⽽是在前端内部处理。

早期的浏览器我们可以使⽤ **hash** 来做路由标识，使⽤ hash 的好处也⾮常明显：👍

* hash 有⾮常好的兼容性，⼤部分⽼浏览器都⽀持 hash 的形式
* 通过监听 onhashchange 可以判断路由变化，从⽽判断需要渲染的组件
* hash 默认不会发送到后端

HTML5 之后新增了 **history** 相关的 API，我们可以通过 pushState 和 replaceState 来控制 url 的变化，同时处理组件的变化

* history 相关的 api 改变的是 url 中的 pathname，刷新后会将这部分 url 发送到后端去

⼤部分前端路由项⽬都是使⽤这两种⽅式（hash、history）来实现，这类使⽤前端路由的应⽤我们可以统称为 **spa 单⻚应⽤**，因为这类应⽤使⽤起来就像是只有⼀个⻚⾯⼀样，后续的⻚⾯都在前端进⾏内容切换，不会有服务端路由⻚⾯闪动的情况。

⚠️ 客户端路由的 2 种实现方案：hash、hisrory

### hash & hisrory 区别

主要针对切换路由之后，**刷新**操作

* hash：不会发送到后端去，刷新页面不会发送到后端

* history：刷新页面后，这部分 url 会发送到后端去

### 如何判断应该使用哪种方式？

⚠️ **兼容性**考虑

⚠️ 如果需要后端支持，必须使用 history 这种形式

## react-router 详解

核心：对 **hash 路由** 和 **history 路由** 的封装

前⾯我们讲解了路由匹配的原理，对于 react 的 react-router 来说，我们只是需要把前⾯讲到的内容融合进具体的代码，为了让同学们能更好的理解，在这⾥把之前讲解的部分和 react 组件融合起来。

对于 react-router 的使⽤，react-router 主要实现了两个组件，⼀个是 `Route` 组件，另⼀个是 `Link` 组件。

**`Route`** 组件主要是定义了规定的路由渲染的组件，**`Link`** 组件主要是渲染的 a 标签进⾏跳转。

主要需要以下三点内容：

* Route 组件监听 url 改变，确定渲染的⼦组件
* Link 组件触发 url 的变化

```jsx
export class Route extends React.Component {
  componentWillMount() {
    const unlisten = history.listen((location, action) => {
      console.log('history change listen', location, action);
      this.forceUpdate();
    });
    this.setState({unlisten});
  }
  
  componentWillUnmount() {
    const { unlisten } = this.state;
    unlisten();
  }
  
  render() {
    const { render, path, component: ChildComponent } = this.props;
    const match = matchPath(path);
    const matchResult = match(window.location.pathname);
    
    if (!matchResult) return null;
    
    if (ChildComponent) {
      return (<ChildComponent match= {matchResult} />);
    }
    
    if (render && typeof render === 'function') {
      return render({matchResult});
    }
    
    return null;
  }
}
```

Link 组件：

```jsx
export class Link extends React.Component {
  handleClick = (e) => {
    const { replace, to } = this.props; 
    e.preventDefault();
    replace ? history.replace(to) : history.push(to);
  }
  
  render() {
    const { to, children } = this.props;
    
    return (
      <a href={to} onClick= {this.handleClick}>{children}</a>
    );
  }
}
```

```js
import React from 'react';
import { createBrowserHistory } from 'history';
import { match as matchPath } from 'path-to-regexp';
const history = createBrowserHistory();
```

我们主要使⽤ **history** 这个库，来对我们的路由进⾏统⼀封装，它的内部帮助我们处理了第⼀⼩节讲的三种情况：

* hashHistory：hash 的路由
* browserHistory：浏览器 HTML5 中 history 的路由
* memoryHistory：内存⾥⾃⼰记录⼀下路由情况

同时我们也使⽤了 path-to-regexp 这个库，来对我们的路径进⾏处理，由它来确认我们当前的路由是否是符合定义的路由格式。

### Router-demo

```sh
# 初始化一个项目：router-demo
npx create-react-app router-demo
cd router-demo
yarn start
```



## 服务端渲染及同构

前⾯我们学到过，对于服务端渲染和客户端渲染来说，虽然最终显示⻚⾯的结果都相同，但是对于不同⽅式来说，他们的渲染过程不尽相同。

react 的**服务端渲染**相对来说就简单⼀些，我们只需要使⽤ ReactDOM 包中的 server 部分模块进⾏即可，这⾥我们启动⼀个 node.js 服务器来做这件事情。

在渲染的结果中，我们能够看到 react 在标签中增加了⼀些 hash 值，他的作⽤是在**客户端渲染**时，如果 vdom 对⽐的结果与之相同，则不需要通过客户端⽅法进⾏挂载，减少客户端渲染时的压⼒。

我们可以使⽤很多框架来实现这种同构效果，例如 **next.js 来达到⼀个同构的效果**，需要注意的是它内部会使⽤⼀些 server 端的内容。所以在写法上我们需要额外注意⼀些。

```jsx
import React from 'react'

export default class extends React.Component {
  // `getInitialProps` 作用：对应用初始值的获取
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent }
  }
  
  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
      </div>
    )
  }
}
```

⽐如这就是⼀个使⽤ next 运⾏的例⼦，next 的应⽤中会有 `getInitialProps` 这个⽅法，他的作⽤就是对应⽤初始值进⾏获取。当然这⾥针对不同的环境，这个 next 应⽤的⽣命周期的表现也完全不同。

### 服务端渲染

**服务端**有的参数内容：

* req: HTTP请求对象
* res: HTTP响应对象
* pathname: URL中的路径部分
* query：URL中的查询字符串部分解析出的对象
* err：错误对象，如果在渲染时发⽣了错误

### 客户端渲染

**客户端**渲染有的参数内容：

* xhr：XMLHttpRequest对象（客户端渲染独有）
* pathname: URL中的路径部分
* query：URL中的查询字符串部分解析出的对象
* err：错误对象，如果在渲染时发⽣了错误

所以我们可以在这个⽅法中通过判断参数是否存在，来**判断**出当前执⾏的环境是服务端还是客户端。

但这样的写法对我们的应⽤⼊侵⽐较⼤，因为我们需要直接改造我们的 react 应⽤，后期也不好迁移⾄其他服务端框架去。

还有⼀些服务端渲染框架例如 hypernova 等等，他们会使⽤其他⽅式达到渲染服务端组件的⽬的。我们可以不使⽤ next.js 的写法，⽽是采⽤普通组件的写法来达到服务端渲染的⽬的。当然也可以我们⾃⼰维护⼀个 node.js 服务来使⽤最单纯的⽅式做服务端渲染。

但是使⽤专⻔的 node.js 也有他的优势，⽐如默认的 node cluster 加成，部分专⻔做服务端渲染的框架会启动多个 worker 来执⾏。

我们⽤⼀个⾮常简单的例⼦，就能让⼤家明⽩**同构**的意义，以⼀个普通的需要获取内容的⻚⾯为例，曾经我们的代码，是会在客户端 `ComponentDidMount` 发送请求，来获取请求结果，最终将结果渲染到⻚⾯中去。我们在服务端把这部分数据直接注⼊组件达到渲染的⽬的，最终只需要在客户端进⾏判断是否需要重新渲染，即可得知。
