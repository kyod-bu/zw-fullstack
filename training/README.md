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

Nest 中间件实际上等价于 express 中间件。

### 异常过滤器（Filter）

HttpException

### 管道（Pipe）

具有 `@Injectable` 装饰器的类。管道应实现 `PipeTransform` 接口。

### 守卫（Guard）

具有 `@Injectable` 装饰器的类。守卫应实现 `CanActivate` 接口。

### 拦截器（Interceptor）

使用 `@Injectable` 装饰器注解的类。拦截器应实现 `NestInterceptor` 接口。

### 自定义装饰器（Decorator）

## Web

```shell
# 利用教授教 CRA 初始化项目
npx create-react-app web-demo --template typescript

# 启动
cd web-demo
npm run start
```

