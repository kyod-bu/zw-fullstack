# 训练项目

使用 

* TS

* npm

## Nest

相关文档地址：<https://docs.nestjs.cn>

```shell
# 全局安装 nest 脚手架
npm i -g @nestjs/cli
# 初始化
nest new nest-demo

# 启动
cd nest-demo
npm run start
```

/src 核心文件介绍：

* app.controller.ts  带有单个路由的**基本控制器**示例
* app.controller.spec.ts  对于基本控制器的**单元测试样例**
* app.module.ts  应用程序的**根模块**
* app.service.ts  带有单个方法的**基本服务**
* main.ts  应用程序**入口**文件（它使用 NestFactory 用来创建 Nest 应用实例）

平台

Nest 可以与任何 node.js 的 http 框架一起工作。有两个开箱即用的 http 平台：**express** 和 **fastify**

无论使用哪种平台，它都会暴露自己的 API。他们分别是：`NestExpressApplication` 和 `NestFastifyApplication`

### 控制器（Controller）

```shell
# 使用 CLI 创建控制器
nest g cats-controller cats
```

### 提供者（Providers）

### 模块（Module）

### 中间件（Middleware）

### 异常过滤器

### 管道

### 守卫

### 拦截器

### 自定义装饰器

## Web