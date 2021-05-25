# 重点笔记

## vue.js 基础

[Vue.js](https://vuejs.org/) 的 ***核心*** 是一个允许**采用简洁的模板语法**来**声明式地将数据渲染进DOM**系统。

```html
<div id="app">
  <p>{{ message }}</p>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });
</script>
```

### 指令

#### `v-bind` 绑定元素属性

```html
<div id="app-2">
  <p v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </p>
</div>

<script>
  var app = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  });
</script>
```

#### `v-if` 条件渲染

```html
<div id="app-3">
  <p v-if="seen">
    条件seen为true，你就能看到我了
  </p>
</div>

<script>
  var app = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  });
</script>
```

#### `v-for` 循环渲染

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>
</div>

<script>
  var app = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: '吃饭' },
        { text: '睡觉' },
        { text: '打豆豆' }
      ]
    }
  });
</script>
```

#### `v-on` 事件监听

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
</div>

<script>
  var app = new Vue({
    el: '#app-5',
    data: {
      message: '123456789'
    },
    methods: {
      reverseMessage: function() {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });
</script>
```

#### `v-model` 表单数据双向绑定

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message" />
</div>

<script>
  var app = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  });
</script>
```

#### 指令简写: `v-bind` 和 `v-on`

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写（2.6.0+） -->
<a :[key]="url">...</a>
```

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写（2.6.0+） -->
<a @[event]="doSomething">...</a>
```

### 组件化应用构建

几乎任意的应用界面都可以抽象为一个**组件树**：

![组件树](./img/组件树.png)

在 Vue 里面，一个**组件**本质上是一个**拥有预定义选项的一个 Vue 实例**。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>组件化应用构建</title>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id="app-7">
            <ol>
                <!-- 创建一个 todo-item 实例 -->
                <!-- <todo-item></todo-item> -->

                <!-- 
                    现在我们为每个 todo-item 提供 todo 对象
                    todo 对象事变量，即其内容可以是动态的。
                    我们需要为每个组件提供一个 “key”
                 -->
                <todo-item
                    v-for="item in groceryList"
                    v-bind:todo="item"
                    v-bind:key="item.id"
                ></todo-item>
            </ol>
        </div>

        <script>
            // 定义一个名为 todo-item 的新组件
            Vue.component('todo-item', {
                // todo-item 组件接受一个 prop，类似于一个自定义的 attribute
                // 这个 prop 名为 todo
                props: ['todo'],
                template: '<li>{{ todo.text }}</li>'
            });

            var app = new Vue({
                el: '#app-7',
                data: {
                    groceryList: [
                        { id: 0, text: '蔬菜' },
                        { id: 1, text: '水果' },
                        { id: 2, text: '奶酪' },
                        { id: 3, text: 'others' }
                    ]
                }
            })
        </script>
    </body>
</html>
```

在一个大型应用中的，有必要将整个应用划分为组件，已使开发更易管理。例如：

```html
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>
```

### Vue 实例

一个 Vue 应用由一个通过 `new Vue({...})` 创建的 **根 Vue 实例**，以及可选的嵌套的、可复用的**组件树**组成。

```html
<!-- 举例：一个 todo 应用的组件树 -->
根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ TodoButtonDelete
   │  └─ TodoButtonEdit
   └─ TodoListFooter
      ├─ TodosButtonClear
      └─ TodoListStatistics
```

所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象（一些**根实例**特有的选项除外）

#### 数据与方法

当一个 Vue 实例被创建时，它将 `data` 对象中的所有 **property** 加入到 Vue 的***响应式系统***中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

⚠️ 只有当**实例被创建时**就已经存在于 `data` 中的 property 才是**响应式**的。也就是说如果你添加一个新的 property，比如：`app.b = 'hi'` ，那么对 `b` 的改动并不会触发任何视图的更新。

如果你知道你会在晚些时候需要一个 property ，但是一开始它为空或不存在，那么你需要设置一些初始值。比如：

```js
// 针对晚些时候需要用到的 property，设置一些初始值
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

这里唯一例外的是使用 `Object.freeze()` ，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。

```js
var obj = { foo: 'bar' };

Object.freeze(obj);

new Vue({
  el: '#app',
  data: obj
});
```

```html
<div id="app">
  <p>{{ foo }}</p>
  <!-- 这里的 ‘foo’ 不会更新！ -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
```

除了数据 property ，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 `$` ，以便与用户定义的 property 区分开来。例如：

```js
var data = { a: 1 };
var vm = new Vue({
  el: '#app',
  data: data
});

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
});
```

#### 实例生命周期钩子

每个 Vue 实例在被创建时都要经过一系列的初始化过程。例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。

同时在这这个过程中也会运行一些叫做 ***生命周期钩子*** 的函数，这给了用户在不同阶段添加自己的代码的机会。

比如：`created` 钩子可以用来在一个实例被创建之后执行代码：

```js
new Vue({
  el: '#app',
  data: {
    a: 1
  },
  created: function () {
    // 'this' 指向 vm 实例
    console.log('a is: ' + this.a)
  }
});
// => "a is: 1"
```

也有一些其他的钩子，在实例生命周期的不同阶段被调用，如 **`mounted` 、`updated` 和 `destroyed`** 。生命周期钩子的 `this` 上下文指向调用它的 Vue 实例。

⚠️ **不要**在选项 property 或回调上使用 **箭头函数**，比如 `created: () => console.log(this.a)` 或 `vm.$watch('a', newValue => this.myMethod())` 。因为箭头函数并没有 `this` ，`this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined` 或 `Uncaught TypeError: this.myMethod is not a function` 之类的错误。

#### 生命周期图示

![生命周期图示](./img/生命周期图示.png)

### 模板语法

* 插值（文本 、 原始 HTML 、 Attribute 、 使用 JavaScript 表达式）
* 指令（参数、动态参数、修饰符）
* 缩写（`v-bind` 、 `v-on`）

在底层的实现上，Vue 将 **模板** 编译成 **虚拟 DOM 渲染函数** 。结合响应系统，Vue 能够智能地计算出**最少**需要重新渲染多少组件，并把 DOM 操作次数减到最少。

使用 虚拟 DOM + JavaScript的原声力量，也可以不用模板，直接写 **渲染函数（*render*）**，使用可选的 JSX 语法。

⚠️ 双大括号会将数据解释为 普通文本，而非 HTML代码。为了输出真正的HTML，可以使用 `v-html` 指令。***【不推荐】***

⚠️ 你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。请只对可信内容使用 HTML 插值，**绝不要**对用户提供的内容使用插值。

***【推荐】***对于用户界面（UI），组件更适合作为**可重用**和**可组合**的基本单位。

### 计算属性和侦听器

对于任何复杂逻辑，都推荐使用 **计算属性**。

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
});
```

这里我们声明了一个计算属性 `reversedMessage` 。我们提供的函数将用作 property `vm.reversedMessage` 的 getter 函数：

```js
console.log(vm.reversedMessage) // => "olleh"
vm.message = 'goodbye'
console.log(vm.reversedMessage) // => "eybdoog"

// vm.reversedMessage 的值始终取决于 vm.message 的值
```

#### 计算属性缓存 ***VS*** 方法

对于上面的实例，我们可以通过在表达式中调用方法来达到同样的效果：

```html
<div id="example">
  <p>Message: "{{ message }}"</p>
  <p>Reversed message: "{{ reversedMessage() }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'hello'
  },
  methods: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
});
```

两种方式的最终结果是完全相同的。

然而，**不同**的是：**计算属性是基于它们的响应式依赖进行缓存的**。只在响应式依赖发生改变时，它们才会重新求值。这就意味着 只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也意味着 下面的计算属性将不再更新，因为 `Date.now()` 不是响应式依赖。

```js
computed: {
  now: function () {
    return Date.now()
  }
}
```

相比之下，每当触发重新渲染时，调用方法将 ***总会*** 再次执行函数。

**我们为什么需要缓存？** --假如我们有一个性能开销比较大的计算属性 **A**，他需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 **A**。如果没有缓存，我们将不可避免的多次执行 **A** 的getter！如果你不希望有缓存，请使用方法来替代。

#### 计算属性 ***VS*** 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：***侦听属性***。当你有一些数据需要随着其他数据变动而变动时，你很容易滥用 `watch` ——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。

例如：

```html
<div id="demo">
  {{ fullName }}
</div>
```

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
});
```

上面的代码是命令式且重复的。将它与计算属性的版本进行比较：

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
});
```

好多了，不是吗？

#### 计算属性的 setter

计算属性默认只有 getter，不过在需要时也可以手动提供一个 setter：

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});
```

现在再运行 `vm.fullName = 'John Doe'` 时，setter 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应的更新。

#### 侦听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要**在数据变化时执行异步或开销较大的操作时**，这个方式是最有用的。

```html
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>
    {{ answer }}
  </p>
</div>
```

```html
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
  var watchexampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会执行
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...';
        this.debouncedGetAnswer();
      }
    },
    created: function () {
      // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
      // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
      // AJAX 请求直到用户输入完毕才会发出。
      // 想要了解更多关于 `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，请参考: https://lodash.com/docs#debounce
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)';
          return;
        }
        this.answer = 'Thinking...';
        var vm = this;
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer);
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error;
          })
      }
    }
  });
</script>
```

在这个示例中，使用 `watch` 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

除了 `watch` 选项之外，您还可以使用命令式的 [vm.$watch API](https://cn.vuejs.org/v2/api/#vm-watch)。

### Class 与 Style 绑定

#### 绑定 HTML Class

##### 对象语法

我们可以传给 `v-bind:class` 一个对象，以动态地切换 class ：

```html
<div v-bind:class="{ active: isActive }"></div>
```

上面的语法表示 `active` 这个 class 存在与否将取决于数据 property `isActive` 的 [truthiness](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)。

你可以在对象中传入**更多字段**来**动态切换多个 class**。此外，`v-bind:class` 指令也可以与普通的 class attribute 共存。当有如下模板：

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

和如下 data：

```js
data: {
  isActive: true,
  hasError: false
}
```

结果渲染为：

```html
<div class="static active"></div>
```

当 `isActive` 或者 `hasError` 变化时，class 列表将相应地更新。例如，如果 `hasError` 的值为 `true`，class 列表将变为 `"static active text-danger"`。

绑定的数据对象不必内联定义在模板里：

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的[计算属性](https://cn.vuejs.org/v2/guide/computed.html)。这是一个常用且强大的模式：

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

##### 数组语法

我们可以把一个数组传给 `v-bind:class`，以应用一个 class 列表：

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染为：

```html
<div class="active text-danger"></div>
```

如果你也想根据条件切换列表中的 class，可以用三元表达式：

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

这样写将始终添加 `errorClass`，但是只有在 `isActive` 是 truthy[[1\]](https://cn.vuejs.org/v2/guide/class-and-style.html#footnote-1) 时才添加 `activeClass`。

不过，当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：

```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

##### 用在组件上

当在一个自定义组件上使用 `class` property 时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖。

例如，如果你声明了这个组件：

```js
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
```

然后在使用它的时候添加一些 class：

```html
<my-component class="baz boo"></my-component>
```

HTML 将被渲染为：

```html
<p class="foo bar baz boo">Hi</p>
```

对于带数据绑定 class 也同样适用：

```html
<my-component v-bind:class="{ active: isActive }"></my-component>
```

当 `isActive` 为 truthy 时，HTML 将被渲染成为：

```html
<p class="foo bar active">Hi</p>
```

#### 绑定内联样式

##### 对象语法

`v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

直接绑定到一个样式对象通常更好，这会让模板更清晰：

```html
<div v-bind:style="styleObject"></div>
```

```js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

同样的，对象语法常常结合返回对象的计算属性使用。

##### 数组语法

`v-bind:style` 的数组语法可以将多个样式对象应用到同一个元素上：

```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

##### 自动添加前缀

当 `v-bind:style` 使用需要添加 [浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix) 的 CSS property 时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。

##### 多重值

从 2.3.0 起你可以为 `style` 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex`。
