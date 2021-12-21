# 常见 JS 设计模式解析

JS 是一门动态语言，善用设计模式，能够让我们更好的去进行编码。设计模式是一个锦上添花的过程，使用了设计模式之后，能够更优雅，更加具有可维护性的提升我们的代码质量。

## 单例模式（singleton）‼️

单例模式在所有的编程语言中应用广泛，有些对象往往我们只需要创建一个，例如线程池、全局缓存、浏览器当中的 window 对象等等。在我们的业务开发当中，单例模式也是应用十分广泛，例如我们在处理页面弹窗时，点击按钮产生一个弹窗，如果我们多次点击，每次都创建一个新的弹窗组件，就会十分消耗性能。

***核心思想*** 是确保一个类只对应一个实例。每次调用构造函数时，返回指向同一个对象的指针。也就是说，我们只在第一次调用构造函数时创建新对象，之后调用返回时返回该对象即可。

单例模式应用比较广泛，很多情景我们都会用单例模式来优化我们的代码。

```js
var Singleton = function (title) {
    this.title = title;
}

Singleton.prototype.getTitle = function () {
    return this.title;
}

Singleton.getInstance = function (title) {
    if (!this.instance) {
        this.instance = new Singleton(title);
    }
    return this.instance;
}
```

## 观察者模式（pub-sub）‼️

观察者模式又叫做**发布-订阅**模式，是我们最常见的设计模式之一。它定义对象间的一种**一对多的依赖关系**，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知和更新。观察者模式提供了一个订阅模型，其中对象订阅事件并在发生时得到通知，这种模式是事件驱动的编程基石，它有益于良好的面向对象的设计。

```js
const map = {};

function listen(key, fn) {
    if (!map[key]) {
        map[key] = [];
    }
    map[key].push(fn);
}

function trigger(key, data) {
    map[key].forEach(item => item(data));
}
```

## 代理模式（proxy）

代理模式

## 迭代器模式（iterator）

迭代器模式

## 职责链模式（responsibility）

职责链模式

## 装饰器模式（decorator）

装饰器模式

## 策略模式（strategy）

策略模式

## 工厂模式（factory）

工厂模式
