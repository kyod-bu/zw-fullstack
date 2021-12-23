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

#### 前端 fe

```shell
# 安装依赖包
npm i bundle-loader es6-promise fastclick
npm i koa-bodyparser koa-session mysql2 prismjs sequelize
npm i redux react-redux react-router-dom react-swipe whatwg-fetch

npm i --save-dev autoprefixer babel-core babel-loader
npm i --save-dev webpack
```

#### 后台 admin

=============

## 🌹24:17 / 03:58:31

=============

使用 react / vue / sequelize 写一个完整的前后台应用

1. 使用 react 打造商城前端：
    1.1 商品列表页面

  1.2 商品详情页面

  1.3 购物车页面
  1.4 结算页面等
  1.5 使用 ssr 加速页面渲染优化

2. 使用 express 打造商城后端 API：
    2.1 注册登陆借口/校验中间件
    2.2 功能的表结构设计 sequelize ORM + mysql 数据库
    2.3列表/详情/下单 等接口

3. 使用 vue 打造商城后台
    3.1 基本后台 UI，路由切换
    3.2 后台能够对商品内容增删改查
    3.3 后台能看到所有用户信息及权限配置

4. 增加小程序打造一个多端应用配置
   4.1 小程序多端登陆
   4.2 小程序的多端下单购买
