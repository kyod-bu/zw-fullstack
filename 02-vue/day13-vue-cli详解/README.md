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

### 创建一个 `vue-cli-plugin-mydemo` 插件

通常的 CLI 插件目录结构是这样的：

```sh
.
├── README.md
├── generator.js  # generator（可选）
├── index.js      # service 插件
├── package.json
├── prompts.js    # prompt 文件（可选）
└── ui.js         # Vue UI 集成（可选）
```

1. 创建一个文件夹：vue-cli-plugin-mydemo

2. 新建文件 index.js ，在 index.js 里面注册一个 cli-service 命令

   ```js
   module.exports = (api, options) => {
       api.registerCommand('test-kyod', args => {
           console.log('test invoking');
       })
   }
   ```

3. 发布插件到官方源（并非淘宝源）

   ```shell
   npm publish --registry=https://registry.npmjs.org/
   
   # OR
   # 把上面的命令封装成 publish.sh 文件，直接执行即可
   sh publish.sh
   ```

4. 用 `vue add vue-cli-plugin-mydemo` 安装试试看

5. 执行 `./node_modules/.bin/vue-cli-service test-kyod` 命令测试一下

## markdown 插件

**需求：** 让产品经理们，可以简单的书写markdown，从而更新官网。

​			把开发者工程里面配的所有markdown全都读出来，全都转换成html????

**需要做的事情：** 做一个插件，可以把 markdown 转换成 **vue组件** 或 **静态html**

## 源码解析

### `vue` 全局的执行脚本

### `./node_modules/.bin/vue-cli-service` 工程内的私有脚本

## Tips

开发 npm 包，一直操作 npm publish 会觉得很麻烦，我们可以在 `my-project` 工程根目录下，创建一个 `add.sh`

```sh
# 把 插件文件夹(vue-cli-plugin-mydemo) 当成 一个`npm包`导入当前工程中
npm link /Users/yafbu/workspace/zw-fullstack/02-vue/day13-vue-cli详解/vue-cli-plugin-mydemo
# 强行激活
vue invoke vue-cli-plugin-mydemo
# 执行 在`vue-cli-plugin-mydemo/index.js`里面注册的 cli-service 命令（如：test-kyod）
./node_modules/.bin/vue-cli-service test-kyod
```

**备注：** `vue add xxx` === `npm install xxx` + `vue invoke`

插件命名：`vue-cli-plugin-xxxx`

## 问题集锦

0. npm i 不管用了吧？

1. npm 安装就会加命令吗？---------不会

2. cli 里面集成了webpack?

   ```shell
   # 发布插件到官方源（并非淘宝源）
   npm publish --registry=https://registry.npmjs.org/
   
   # 这个发布插件的命令经常使用，推荐封装成一个.sh文件
   ```

   others

3. Ooo
