# vue.js 项目实战

## 本节课要干什么？

计划写一个 头条新闻列表：

1. 新闻列表
2. 新闻详情页
3. 搜索页

## 架构

### 前端

**Vue** + **Vuex** + **Vue-cli** + **Mockjs**

**备注：** Mockjs（模拟后台请求，可以理解为 *假后台*）

### Vue-cli 简介

脚手架工具，前期省了很多事～

```shell
# 全局安装vue-cli
npm install -g @vue/cli

# 初始化
npm i -g @vue/cli-init

# 创建一个工程 demo
vue init webpack demo
...

# 到此为止，一个基于vue-cli脚手架的工程`demo`已经初始化成功
# 执行下面的命令，即可以在本地启动demo
npm run start
```

## 实现

### 理清楚需求

拆分组件

1. header 头部
2. slider
3. news 内容部分
4. modal 弹出框

others

### 搭建静态环境

把**页面(page)** 和 **业务组件(components)**分开，创建2个目录

* 配置一下路由信息 `/src/router/index.js`
* 实现相关页面（静态）：home、search、channels ...
* 实现业务组件：header、slider、news、modal ... （这一部分可以借助第三方库来实现，如：`vant` 等等）



视频时长 **02:23:12**