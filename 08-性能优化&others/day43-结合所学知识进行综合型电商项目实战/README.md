# 前后端完整的 JS 项目（4h）

## 项目分析

目标：使用 react / vue / sequelize 写一个完整的前后台应用

项目大致分为三个部分：

* 前端 fe
* 后台 admin
* 服务端 server

### 初始化设计

#### 服务端 server

```shell
# 安装依赖包
npm i --save koa koa-router
npm i --save nodemon # node monitor
npm i --save sequelize mysql2

# 处理静态路由（图片）
npm i --save koa-static
```

使用数据库时，老师用了一个数据库的可视化工具 Sequel Pro

##### 入口 index.js

```js
const Koa = require('koa');

const app = new Koa();
const router = require('koa-router')();

require('./model'); // 数据模型

router.get('/', function (ctx) {
    ctx.body = 'hello server';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
```

在 package.json 里面添加启动脚本：

```json
"scripts": {
    "server": "nodemon index.js"
},
```

到这里可以启动 server ，在浏览器访问 <http://localhost:3000/> 看到效果

##### 数据模型 model/index.js

每张数据表，对应 model/ 下的一个 js 文件。

Mysql 使用小技巧：

```shell
mysql -u root -p

# 若是提示 “command not found: mysql”
# 请在 ～ 目录下 执行：
source ~/.bash_profile

# 创建数据库 shop
create database shop;
```

数据模型的建立：

```js
// model/index.js
const Sequelize = require('sequelize');

const PASSWORD = process.env.PASSWORD; // 配置信息从环境读取👍
const sequelize = new Sequelize('shop', 'root', PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    timestamps: true, // 时间戳
    paranoid: true, // 软删除
});

sequelize
    .authenticate()
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log('数据库连接失败::', err.message);
    });
```

在 package.json 里面修改启动脚本：

```json
"scripts": {
    "server": "PASSWORD=hhhhh nodemon index.js"
},
```

重启测试一下数据库的连接情况 `npm run server`

至此，我们服务端的基本框架已经建设好了。

接下来我们开始搭建**业务**框架。

###### 持久化存储数据

我们需要对数据进行持久化存储，这里我们先来创建一个数据表 user（model/user.js）

```js
// 数据模型 Users
module.exports = function (sequelize) {
    return sequelize.define('User', {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true, // 主键
            // autoIncrement: true, // 自增
        },
        name: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false,
        }
    }, {
        paranoid: true // 软删除策略
    });
}
```

数据模型 Users 的使用：

* 查：findAll | findAndCountAll
* 增：create | bulkCreate
* 改：update
* 删：destroy

```js
// 在 model/index.js 里面
const createUser = require('./user');
const UserModel = createUser(sequelize);

// 创建：create | bulkCreate
UserModel.sync().then(() => {
    UserModel.create({ name: 'name1', password: 'pwd1' });
});

// 查询：findAll | findAndCountAll
const data = UserModel.findAll({ raw: true }).then(data => {
    console.log('查询所得数据：：', data);
});

// 修改：update
UserModel.update({ name: 'zhuawa2' }, { where: { id: 'xxx' } });

// 删除：destroy
UserModel.destroy({ where: { name: 'zhuawa2' } });
```

##### Cookie 鉴权相关

###### 普通办法

```js
// index.js
// 签名需要一个加密的 key（签名配置：{signed: true}）
app.keys = ['hello world'];

router.get('/', function (ctx) {
    // 获取 cookie 信息
    const sessionId = ctx.cookies.get('sessionId', { signed: true });
    if (sessionId) {
        ctx.body = `当前登录的用户是：${sessionId}`;
    } else {
        ctx.body = '还没有登录';
        // 设置登录信息
        ctx.cookies.set('sessionId', 'abcd', {
            signed: true,
            httpOnly: true, // 只能通过 http 方式访问，防止使用 js 访问修改网站信息
            maxAge: 7 * 24 * 60 * 60 * 1000, // 一周时长
        });
    }
});
```

###### 异步中间件

鉴权部分，我们使用 **中间件** 的方式去实现

```js
const { UserModel } = require('./model');

// 有些部分是不需要鉴权的，要越过中间件鉴权
router.get('/login', function () {
    console.log('login...');
});

// 鉴权部分，我们使用`中间件`的方式去实现
// KOA 异步中间件
router.use(async function (ctx, next) {
    // 获取 cookie 信息
    // const sessionId = ctx.cookies.get('sessionId', { signed: true });
    const sessionId = ctx.cookies.get('sessionId');
    if (sessionId) {
        // 去数据库查询，看看当前用户信息是否已经存在，若是不存在，需要跳转到注册
        const user = await UserModel.findOne({
            where: {
                id: sessionId
            }
        });
        if (user) {
            ctx.user = user;
        }
    } else {
        // 没有登录
        ctx.body = '还没有登录';
    }
    return next(); // 注意：这里不能省
});
```

#### 前端 fe

```shell
# 安装依赖包
npm i bundle-loader es6-promise fastclick
npm i koa-bodyparser koa-session mysql2 prismjs sequelize
npm i redux react-redux react-router-dom react-swipe whatwg-fetch

npm i --save-dev autoprefixer babel-core babel-loader
npm i --save-dev webpack

# 节流/防抖
npm i --save lodash
```

前端 fe 业务设计：

```shell
# 启动开发环境
npm run dev
```

1. 优先处理列表展示
2. 接下来处理增删改查（需要用到后台管理系统 admin）

#### 权限管理设计

很多时候，我们会基于路由前缀进行权限校验。

1. 用户（对于 Users 数据表，每一行数据就对应一个用户）
2. 组（对于大型项目来说，典型的一对多场景：一个用户对应多个组）
3. 权限（一个组可能有多个权限，典型的多对多场景）
4. 角色（一个权限来说，有不同的角色）

#### 后台系统 admin

接下来，我们给予 vue + element 做一个后台系统

这里，我们使用一些新的 API

```shell
# 创建 admin 项目的模板
npx @vue/cli create admin
```



#### Others

```shell
# 安装依赖包
npm i bundle-loader es6-promise fastclick
npm i koa-bodyparser koa-session mysql2 prismjs sequelize
npm i redux react-redux react-router-dom react-swipe whatwg-fetch

npm i --save-dev autoprefixer babel-core babel-loader
npm i --save-dev webpack
```

## 业务

| path          | component | desc                                        |
| ------------- | --------- | ------------------------------------------- |
| "/"           | Home      | 加载组件 ProductList，使用路由 /api/product |
| "/about"      | About     | 加载组件 UserInfo，使用路由 /api/user       |
| "/list"       | List      |                                             |
| "/detail/:id" | Detail    |                                             |

## 疑问

### 1、前端项目初始化是如何设计的？

### 2、这样引入样式有什么好处？

```jsx
import React from 'react';
import Item from './Item';
import styles from './list.less';

export default function (props) {
    return (
        <div className={styles['list-container']}>
            {props.data.map((item, index) => {
                return <Item key={index} data={item} />
            })}
        </div>
    );
}
```

------样式优先级会比较高。（真正的 class，会加上一串 hash 值，不会冲突，也不会有重复内容）详情见：[styled-components](https://github.com/styled-components/styled-components)

### 3、demo

------demo
