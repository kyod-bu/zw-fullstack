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

**状态管理（redux）的好处：**

把数据和UI分离，这样有利于多端同构。即针对不同的端，只需要重新编写页面UI，而数据层面是可以共用的。👍

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

# 无限滚动
yarn add react-infinite-scroll-hook
```

### 注意事项

1. Jsx 中列表渲染时，key 值必须存在；（key 值，做性能优化）

2. 性能优化方面

3. hooks 中其实存在好多坑

   ```jsx
   import React, { useState, useEffect } from 'react';
   
   export const Demo = (props) => {
     const [data, setData] = useSate([]);
     
     useEffect(() => {
       const timeId = setTimeout(() => {
         // dosomething...
         setData([1, 2, 3]);
       }, 3000)
       
       return () => {
         clearTimeout(timeId);
       }
     }, [])
     
     return (
       <div>hooks demo</div>
     );
   }
   
   // 小结一下：
   // 如果在3s里面,unMound了，这时候data就不存在了，如果再执行setData，就会报错
   // 这个时候，就需要添加 return () => { clearTimeout(timeId); }
   ```

4. 断网等问题

5. 异步相关处理

6. Event 对象

7. 事件委托

8. ……

### TODO：可以继续完善项目

* 登录注册------需要**后端**和**数据库**
* jwt 校验
* 权限控制
* 首页
* 用户中心
* 一些列表等
* ……
