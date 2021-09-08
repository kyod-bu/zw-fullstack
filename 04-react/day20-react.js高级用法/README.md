# react.js 进阶

## immutable 库 immer原理

在 react 中，为了保持优化，我们需要时刻保证传⼊组件内部的对象有着引⽤的连接，否则在我们的⼦组件中，⽆法通过 `shouldComponentUpdate` 进⾏优化。

所以在⽇常开发中，推荐⼤家使⽤ immutable 库作为组件传递的 props。这⾥主要介绍⼀个 immutable 库 **immer**。

immer 主要使⽤ **Proxy** 这个 ES6 新增的⽅法进⾏代理。Proxy 对象接受两个参数，第⼀个参数是需要操作的对象，第⼆个参数是设置对应拦截的属性，这⾥的属性同样也⽀持 get，set 等等，也就是劫持了对应元素的读和写，能够在其中进⾏⼀些操作，最终返回⼀个 Proxy 对象。

我们可以通过代理，在传⼊的对象中劫持对象的读写操作，然后在内部进⾏⼀个数据的判断。

```js
class Store {
  constructor(state) {
    this.modified = false
    this.source = state
    this.copy = null
  }

  get(key) {
    if (!this.modified) return this.source[key]
    return this.copy[key]
  }

  set(key, value) {
    if (!this.modified) this.modifing()
    return this.copy[key] = value
  }

  modifing() {
    if (this.modified) return
    this.modified = true
    this.copy = Array.isArray(this.source) ? this.source.slice() : { ...this.source }
  }
}

const PROXY_FLAG = '@@SYMBOL_PROXY_FLAG'
const handler = {
  get(target, key) {
    if (key === PROXY_FLAG) return target
    return target.get(key)
  },
  set(target, key, value) {
    return target.set(key, value)
  },
}

function produce(state, producer) {
  const store = new Store(state)
  const proxy = new Proxy(store, handler)

  producer(proxy)

  const newState = proxy[PROXY_FLAG]
  if (newState.modified) return newState.copy
  return newState.source
}
```

上⾯是个简单版本的 immer 实现，Store 构造函数相⽐源代码省略了很多判断的部分。实例上⾯有 `modified` ， `source` ， `copy` 三个属性，有 `get` ， `set` ， `modifing` 三个⽅法。 `modified` 作为内置的 flag，判断如何进⾏设置和返回。

⾥⾯最关键的就应该是 `modifing` 这个函数，如果触发了 setter 并且之前没有改动过的话，就会⼿动将 `modified` 这个 flag 设置为 `true` ，并且⼿动通过原⽣的 API 实现⼀层 immutable。

对于 Proxy 的第⼆个参数，在简版的实现中，我们只是简单做⼀层转发，任何对元素的读取和写⼊都转发到 store 实例内部⽅法去处理。

在转发的内部，在 getter ⾥⾯加⼀个 flag 的⽬的就在于将来从 proxy 对象中获取 store 实例更加⽅便。

这样最终我们就能通过 produce 函数，来将输⼊的对象转为 proxy 对象，在 proxy 对象内部进⾏对象读写劫持的同时，获取最终的结果。

## 高阶组件

⾼阶组件其实是从 js ⾼阶函数引申出来的⼀种概念，我们可以通过⾼阶函数，来为⼀些函数注⼊⼀些内容。

```js
function HOCFunc(num) {
  return function() {
    num += 1;
    return num;
  }
}

const add = HOCFunc(10);
add(); // 11
add(); // 12
```

HOCFunc 返回了⼀个函数，所以我们最终调⽤⽅法的过程中，每次调⽤都会改变闭包中的值。

react 的⾼阶组件也是如此，⽐较经典的就是表单相关的封装，在 react 中，通过⾼阶组件可以通过闭包向底层组件注⼊⼀些 props，达到业务逻辑的复⽤。

这⾥我们可以看⼀个通⽤的表单封装的例⼦，来加深对⾼阶组件的理解。

## 新版本特性：新生命周期 & Hook

### 生命周期总结

在新的 react 16 版本之后，react 移除了以下⼏个⽣命周期，⽽增加了⼀部分⽣命周期：

* componentWillMount
* componentWillReceiveProps
* componentWillUpdate

新增了：

* static getDerivedStateFromProps
* getSnapshotBeforeUpdate

移除 `componentWillReceiveProps` 的原因很简单，因为在更新的⽣命周期中，经常会有同学因为过分 setState 导致⼀些问题， `getDerivedStateFromProps` 是⼀个构造函数类上的⽅法。正如它的名字⼀样，是通过更新的 props 来获取最新的 state。

`getDerivedStateFromProps` 会在 render 之前调⽤，⽆论是第⼀次挂载还是后续的更新。

```js
export class extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    // 此处拿不到当前组件的实例 this
  }
}
```

`getSnapshotBeforeUpdate` 会在 render 调⽤之后，渲染 DOM 之前调⽤，仅在更新时会调⽤。我们可以在其中对 DOM 做操作。

它的返回值会作为 `componentDidUpdate` 的第三个参数。

```js
export class extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 可以在内部访问到组件实例 this，获取最新的
    this.props
  }
}
```

总结⼀下所有 react 新⽼的⽣命周期，我们可以进⾏的操作：

* **getDerivedStateFromProps**： 构造函数上的 static ⽅法，可以在⾥⾯基于当前传⼊的 props 更新当前组件的 state。
* **componentDidMount**：发送请求、给原⽣ DOM 绑定事件等。
* **shouldComponentUpdate**：做⼦组件数据判断的优化，返回 false 则不会触发⼦组件的渲染。
* **getSnapshotBeforeUpdate**：获取⼀些当前更新之后的 DOM 元素等。
* **componentDidUpdate**：更新完成的操作，例如有时候通过 props 的不同发送请求。
* **componentWillUnmount**：组件被取消挂载时的操作，通常是解除 componentDidMount 时挂载的⼀些事件，计时器等内容。

### hook

hook ⼜是⼀⼤ react 新特性，他能极⼤的减少我们简单组件书写的样板代码。

很多时候，我们的组件⽐较简单，⽐如通过 ajax 请求获取⼀段数据之后进⾏渲染，有的时候我们写 class 形式的组件，就会显得⾮常浪费。

react 新版本的 hook 功能，允许我们在函数式组件中，通过使⽤ hook 减少我们的样板代码。

前⾯讲到了，我们的函数式组件和 class 类型组件，函数式组件⽆法维护⾃身内部状态，所以只能做⼀些基于 props 的渲染，有了 hook 之后，函数式组件也有了维护内部 state 的能⼒。

react 提供了以下⼏类 hook：

* **useState**：通过 useState 在函数式组件中初始化⼀个 state，并通过返回值进⾏更新。
* **useEffect**：在函数式组件中进⾏发送请求等具有副作⽤的操作，返回⼀个函数即可在组件销毁时清除副作⽤，第⼆个参数可以决定副作⽤执⾏的时机。
* **useCallback**：传⼊⼀个函数和⼀个数组，当数组中的内容没有变化时，返回值永远与之前保持相同的引⽤。
* **useMemo**：传⼊⼀个函数和⼀个数组，当数组内容没有变化时，返回值永远与之前相同。

useCallback 简单来说是缓存第⼀个参数的函数，⽽ useMemo 是缓存第⼀个参数的结果。
