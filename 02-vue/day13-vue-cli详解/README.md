# Vue-cli 详解

## cli 安装

```shell
# 全局安装vue-cli
npm install -g @vue/cli
# OR
yarn global add @vue/cli

#########################
# 创建一个工程
vue create my-project
# 启动
cd my-project
yarn serve
```

1. Cli 全局命令行 ***vue***

2. vue-cli-service 用来执行接下来创建好的工程中的命令

   **备注：** `yarn serve` 实际上执行的是：`./node_modules/.bin/vue-cli-service serve` 。

**Tips：命令行**

平时我们执行一个命令，默认是找不到的 `command not found: cmd`

Linux环境下，环境变量的配置：`export PATH=XXX`

## preset与插件

### preset（babel）

preset(babel)，插件的配置描述表(也包含整个工程的配置)

### plugin 插件

**例：** 基本的单元测试 **[`@vue/unit-mocha`](https://github.com/vuejs/vue-docs-zh-cn/tree/427499f44f9b5178236a5a1a86e8ac4e8fc45ec4/vue-cli-plugin-unit-mocha)**

通过 mocha-webpack + chai 运行单元测试。

```shell
# 在已创建的项目中安装
vue add @vue/unit-mocha
```

默认文件匹配规则是：`test/unit` 内所有以 `.spec.(ts|js)` 结尾的文件。

```shell
# 执行单测
yarn test:unit
```

### 创建一个`vue-cli-plugin-mytoutiao`插件

#### 用`vue add vue-cli-plugin-mytoutiao` 安装试试看

#### 执行`test:unit`命令测试一下

## markdown插件

让产品经理们，可以简单的书写markdown，从而更新官网。

把开发者工程里面配的所有markdown全都读出来，全都转换成html????

做一个插件，可以把markdown转换成vue组件 或 静态html

## 源码解析

### `vue` 全局的执行脚本

### `./node_modules/.bin/vue-cli-service` 工程内的私有脚本 

## Tips

`vue add` === `npm install` + `vue invoke`

`vue-cli-plugin-xxxx`

0. npm i 不管用了吧？

1. npm 安装就会加命令吗？

2. cli 里面集成了webpack?

   ```shell
   # 发布插件到官方源（并非淘宝源）
   npm publish --registry=https://registry.npmjs.org/
   
   # 这个发布插件的命令经常使用，推荐分装成一个.sh文件
   ```

   

3. 



