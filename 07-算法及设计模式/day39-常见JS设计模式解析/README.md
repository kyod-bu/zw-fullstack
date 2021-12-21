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

代理模式是为一个对象提供一个代用品或者占位符，以便来控制对他的访问。

代理模式是一种非常有意义的模式，在生活中可以找到很多代理模式的场景，比如明星有经纪人代表，如果想请明星来办一场商业的演出，那么我们只能来联系明星的经纪人，经纪人会把相关合同细节和报酬都转达给明星。

代理模式的关键是，当客户不方便直接访问一个对象，或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象的请求作出一些处理之后，再把对象转交给本体的对象。

```js
var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    };
})();

var proxyImage = (function () {
    var img = new Image();
    img.onload = function () {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('loading...');
            img.src = src;
        }
    };
})();

proxyImage.setSrc('...');
```

## 迭代器模式（iterator）

迭代器模式是指提供一种方式来顺序的访问一个聚合对象中的各种元素，而又不暴露该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑分离出来，在使用了迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的元素。

```js
// jquery 中的 each
$.each([1, 2, 3], function (i, n) {
    console.log('当前的值为：');
});

var Iterator = function (obj) {
    var current = 0;
    var next = function () {
        current += 1;
    }
    var isDone = function () {
        return current >= obj.length;
    }
    var getCurrentItem = function () {
        return obj[current];
    }

    return {
        next,
        isDone,
        getCurrentItem,
    };
}
```

## 职责链模式（chain）

职责链模式的定义是：使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连接成一条链，并沿着这条链来处理请求，直到有一个对象处理它为止。

职责链模式的名字非常的形象，一系列可能会处理请求的对象被连接成为一条链条，请求在这些内容中依次处理，直到遇到一个可以处理。

```js
var getActiveUploadObj = function () {
    try {
        return new ActiveXObject('TXFTNActiveX.FTNUpload');
    } catch (e) {
        return 'nextSuccessor';
    }
}

var getFlashUploadObj = function () {
    if (supportFlash) {
        // 使用 flash 上传的逻辑
    }
    return 'nextSuccessor';
}

var getFormUploadObj = function () {
    return $('<form><input type="file" name="file" /></form>').appendTo($('body'));
}

Function.prototype.after = function (fn) {
    var self = this;
    return function () {
        var ret = self.apply(this, arguments);
        if (ret === 'nextSuccessor') {
            return fn.apply(this, arguments);
        }
        return ret;
    }
}

var getUploadObj = getActiveUploadObj.after(getFlashUploadObj).after(getFormUploadObj);
getUploadObj();
```

## 装饰器模式（decorator）

在传统的代码流程中，如果我们想通用的给一个对象增加功能，我们会采用继承的方式，但是继承的方式并不灵活，通常会带来很多问题，一方面是我们在继承时，有可能会创建出大量的子类，使用子类的数量就会非常多。我们也可以通过一种形式来动态的为我们的对象或者类增加方法，这种模式就称为装饰器模式，装饰器模式能够在不改变对象的基础上，在程序运行的期间给对象动态的增加职责。

```js
Function.prototype.before = function (beforeFn) {
    var __self = this;
    return function () {
        beforeFn.apply(this, arguments);
        return __self.apply(this, arguments);;
    }
}

Function.prototype.after = function (afterFn) {
    var __self = this;
    return function () {
        var ret = self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return ret;
    }
}

function testable(isTestable) {
    return function (target) {
        target.isTestable = isTestable;
    }
}
```

## 策略模式（strategy）

我们常说条条大路通罗马，很多时候，我们实现一个功能可以使用多种方式进行，同时我们可能需要在不同的方式进行切换。对于我们的策略模式来说，我们需要定义一系列的算法，能够让我们在这种类似的情景中进行随时切换。

```js
var strategies = {
    'S': function (salary) {
        return salary * 4
    },
    'A': function (salary) {
        return salary * 3
    },
    'B': function (salary) {
        return salary * 2
    }
}

var calculateBonus = function (level, salary) {
    return strategies[level](salary);
}
```
