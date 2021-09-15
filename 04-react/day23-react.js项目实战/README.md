# React 实战 - 今日头条 H5

## 界面分析

访问 <https://www.toutiao.com/>

![头条界面](./img/头条界面.png)

## 原型分析

将界面进行第一次拆解，划分模块区域

![头条界面-划分模块区域](./img/头条界面-划分模块区域.png)

## 技术架构分析

通过分析模块，考虑实现中可能会遇到的问题，引入各种方案

### 样式

想要像素级复刻的话，css 可以直接使用 toutiao 的 css 文件

### 状态管理

redux、react-redux、@redux/toolkit

### 数据

分析今日头条的 API，构建 mock data，来完成数据的模拟

## 实战

实践页面中最核心的 Feed 组件，来体会生产级别的 react 项目代码。

1. 初步构建页面组件 `/src/components/`
2. 正确获取信息流数据
3. 将数据链接到 Feed 组件

```sh
# 初始化一个项目
npx create-react-app toutiao # 或 yarn create create-app toutiao
cd toutiao
yarn start

# 安装第三方包（状态管理）
yarn add redux react-redux @reduxjs/toolkit

# 构建模拟数据 mock data

# 样式处理
yarn add classnames

# 时间处理
yarn add moment
```
