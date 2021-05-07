# 面向对象/原型链/继承

## 1 专业术语

* 类、封装、继承、多态
* 构造函数、实例、对象字面量
* 命名空间
* 内置对象、宿主对象、本地对象

## 2 面向对象

Js里没有“类”，js的面向对象，还是基于原型的，无论是ES5/还是ES6，ES6中引入的class，只是基于原型继承的语法糖。

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritanced. The class syntax does introduce a new object-oriented inherentance model to JavaScript.

相关ES文档：ECMA-256页（开始定义类），ECMA-260页（定义了什么是继承）

### 创建对象的方法

#### 方法1: 工厂模式（没有对象识别）

**举个例子**

```javascript
function body() {
  var o = new Object(); 
  o.money = 100;
  o.buybuybuy = function() {
    this.money -= 100;
    console.log("money::", this.money);
  };
  return o;
}
var monster = body();
```

#### 方法2: 构造函数模式

js中可以使用方法（function）作为类，定义一个类与定义一个函数一致。使用new操作符，来创建新的对象。该function不显式的创建对象。

**new的几个步骤：**

1. 创建一个新对象
2. 将构造函数中的作用域指向该对象
3. 执行构造函数中的代码
4. 返回新对象

**举个例子**

```javascript
function Body() {
  this.money = 100;
  this.buybuybuy = function() {
    this.money -= 100;
    console.log("money::", this.money);
  };
}
var monster = new Body(); 
// 但函数被new时，this指向new出来的实例对象
```

**手写一个【new函数】**

```javascript
function Body() {
  this._bloodVolume = 100;
  this._attackVolume = 500;
}
function newOperation(constructFun) {
  const newObj = Object.create(null);
  constructFun.call(newObj);
  return newObj;
}
var monster = newOperation(Body);
```

#### 方法3: 原型模式

我们创建的每个函数都有个**prototype**属性，这个属性是个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。那么prototype就是通过调用构造函数而创建的那个实例的原型对象。

**举个例子**

```javascript
function Body() {}
Body.prototype = {
  money: 100,
  buybuybuy: function() {
    this.money -= 100;
    console.log("money::", this.money);
  } 
};

var person = new Body();
var wife = new Body();
// 当new多个对象时候，属性共享。当改一个对象时，可能会更改多个对象（如都调用上面的buybuybuy）
```

**什么是原型？**

1. 真正的原型，在构造函数中
2. 我们每声明一个函数，浏览器就会在内存中创建一个对象，在这个对象中增加一个属性，叫 **constructor** ，指向我们的函数，并把我们的函数的 **prototype属性** 指向这个对象。
3. 用这个构造函数创建的对象都有一个不可访问的属性【ptototype】，这个属性就指向了构造函数的prototype，在浏览器中，支持使用\_\_proto\_\_来访问这个对象。

使用原型对象的**好处**是：可以在创建出来的多个对象中，**共享属性和方法**。

**手写一个【new函数】**

```javascript
function Body() {}
Body.prototype._bloodVolume = 100;
Body.prototype._attackVolume = 500;

function newOperation(constructFun) {
  const newObj = Object.create(constructFun.prototype);
  return newObj;
}

var monster = newOperation(Body);
```

这种模式下，每一个生成的对象都有一个属性【prototype】，浏览器厂商在具体实现的时候，保留了一个\_\_proto\_\_属性，用来让我们访问【prototype】

【prototype】的ECMA解释

>19.2.4.3 prototype Function instances that can be used as a constructor have a prototype 
>
>property. Whenever such a Function instance is created another ordinary object is also created 
>
>and is the initial value of the function's prototype property. Unless otherwise specified, the value 
>
>of the prototype property is used to initialize the [[Prototype]] internal slot of the object created 
>
>when that function is invoked as a constructor. 
>
>翻译为：
>
>19.2.4.3原型可用作构造函数的函数实例具有prototype属性。 每当创建这样的Function实例时，也会创建另一个普通对象，该对象是函数prototype属性的初始值。 除非另有说明，否则使用prototype属性的值来初始化在将该函数作为构造函数调用时创建的对象的[[Prototype]]内部插槽。

#### 方法4: 组合模式

组合模式是**构造函数**和**原型模式**一起使用，构造函数模式用于定义实例属性，原型模式用于定义方法和共享的属性

**举个例子**

```javascript
function Person() {
  this._attackVolume = 100;
}
Person.prototype = {
    attack(body) {
        body.bloodVolume -= this.attackVolume - body.defenseVolume;
    }
};

var hero = Person();
```

**手写一个【new函数】**

```javascript
function Person() {
  this._attackVolume = 100;
}
Person.prototype = {
    attack(body) {
        body.bloodVolume -= this.attackVolume - body.defenseVolume;
    }
};
function newOperation(constructFun) {
  const newObj = Object.create(constructFun.prototype);
  constructFun.call(newObj);
  return newObj;
}
var hero = newOperation(Body);

// new 的时候发生了什么
function New(constructFun) {
  // Object.create 创建了个对象，然后原型指向你给的create传递的参数
  var obj = Object.create(null); 
  // 构造函数constructFun有返回值，采用返回值作为新的对象；否则采用Object.create创建出来的对象
  var resObj = constructFun.call(obj) || obj; //调用构造函数
  resObj.__proto__ = constructFun.prototype;
  return resObj;
}
```

#### 方法5: ES6的写法

ES6中已经有class，但并不是真正的类，只是基于原型继承的**语法糖**。

```javascript
// class expression
var Person = class {
  constructor(height, width) {}
}

// class declaration
class Person {
  constructor(height, width) {}
}
```

⚠️这里我们可以看一下Babel编译后的样子。

```javascript
class Person {
  static mood = 'good';
  constructor() {
    this.money = 100;
  }
  job = {
    salary: 100;
  }
  buybuyby() {
    this.money -= 100;
    console.log('money::', this.money);
  }
}

Person.mood = 'super good';
const wife = new Person();
const person = new Person();

person.job.salary = 0;
console.log('wife.job.salary:', wife.job.salary); // 0

wife.buybuyby();
person.buybuyby();
```

## 3 原型链

利用 js 的原型模型，代码读取某个对象的某个属性的时候，都会按照属性名执行一次搜索，在实例中找到了则返回，如果没找到，则继续在当前实例的原型对象中搜索，直到找到为止。如果还没有找到，则继续该原型对象的原型对象，以此类推，直到搜索到Object对象为止（其实是直到搜索到null为止），这样就形成了一个原型指向的链条，专业术语称之为“原型链”。

**\_\_proto\_\_ 与 Prototype 与 prototype**

```javascript
// person.[[Prototype]] 指向的是 Person.prototype
// person.__proto__ 指向的是 person.[[Prototype]]
// 也就是所，person.__proto__ 指向的是 Person.prototype

// new出来的对象是访问不到prototype的
// [[Prototype]]的访问器我们可以间接访问一下，通过 person.__proto__
```

* \_\_proto\_\_ ：
* Prototype：
* prototype：

## 4 继承

### 方法1: 原型链继承

```javascript
// 父类型
function Body() {
  this.volumes = {
    _bloodVolume: 100
    _attackVolume: 500,
    _defenseVolume: 200
  };
}
Body.prototype.attacked = function(body) {
  this.volumes._bloodVolume -= body.getAttackVolume() - this.volumes._defenseVolume;
};

// 子类型
function Monster() {}
Monster.prototype = new Body();
Monster.prototype.attacked = function() {
  this.volumes._bloodVolume -= 1;
};

var monster = new Monster();
var monster2 = new Monster();
monster.attacked();
console.log(monster2.volumes._bloodVolume);
```

注意：这种方式，monster改变\_bloodVolume后，monster2的\_bloodVolume也被改变了。

### 方法2: 借用构造函数继承

```javascript
// 父类型
function Body() {
  this._bloodVolume: 100;
  this._attackVolume: 500;
  this._defenseVolume: 200;
}
Body.prototype.attacked = function(body) {
  this._bloodVolume -= body.getAttackVolume() - this._defenseVolume;
};

// 子类型
function Monster() {
  Body.call(this);
};

var monster = new Monster();
```

注意：这种方式，Monster无法继承父类prototype上的方法和属性。

### 方法3: 原型链+借用构造函数的组合继承

```javascript
// 父类型
function Body() {
  this._bloodVolume: 100;
  this._attackVolume: 500;
  this._defenseVolume: 200;
}
Body.prototype.attacked = function(body) {
  this._bloodVolume -= body.getAttackVolume() - this._defenseVolume;
};

// 子类型
function Monster() {
  Body.call(this);
};
Monster.prototype = new Body();

var monster = new Monster();
```

### 方法4: 寄生组合继承

```javascript
// 父类型
function Body() {
  this._bloodVolume: 100;
  this._attackVolume: 500;
  this._defenseVolume: 200;
}
Body.prototype.attacked = function(body) {
  this._bloodVolume -= body.getAttackVolume() - this._defenseVolume;
};

// 子类型
function Monster() {
  this.name = 'asd';
  Body.call(this);
};
Monster.prototype = Object.create(Body.prototype);

var monster = new Monster();
```

### 方法5: ES6 的 class

```javascript
// 父类型
class Body {
  construct() {
    this._bloodVolume: 100;
    this._attackVolume: 500;
    this._defenseVolume: 200;
  }
  attacked(body) {
    this._bloodVolume -= body.getAttackVolume() - this._defenseVolume;
  }
}

// 子类型
class Monster extends Body {
  construct() {
    super();
  }
  attacked() {
    this._bloodVolume -= 1;
  }
}

var monster = new Monster();
```

⚠️这里我们可以看一下Babel编译后的样子。

## 5 相关面试题

### 1.面向对象

**1.1**

```javascript
function Person() {
  this.name = 1;
  return {};
}
var person = new Person();
console.log('name:', person.name); // undefined
```

**1.2**

```javascript
function Person() {
  this.name = 1;
}
Person.prototype = {
  show: function() {
    console.log('name is:', this.name); // 1
  }
};
var person = new Person();
person.show();
```

**1.3**

```javascript
function Person() {
  this.name = 1;
}
Person.prototype = {
  name: 2,
  show: function() {
    console.log('name is:', this.name);
  }
};
var person = new Person();
Person.prototype.show = function() {
  console.log('new show');
};
person.show();
```

**1.4**

```javascript
function Person() {
  this.name = 1;
}
Person.prototype = {
  name: 2,
  show: function() {
    console.log('name is:', this.name);
  }
};
var person = new Person();
var person2 = new Person();
person.show = function() {
  console.log('new show');
};
person2.show();
person.show();
```

### 2.综合题

```javascript
function Person() {
  this.name = 1;
}
Person.prototype = {
  name: 2,
  show: function() {
    console.log('name is:', this.name);
  }
};
Person.prototype.show();
(new Person()).show();
```