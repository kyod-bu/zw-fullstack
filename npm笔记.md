# npm文档学习笔记

[npm 官方网站](https://www.npmjs.com/)

[npm 中文文档](https://www.npmjs.cn/)

[命令行工具 cli](https://docs.npmjs.com/cli/v7/commands/npm) 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道

## 快速入门

### 常用命令

``` sh
# 更新 npm
npm install npm@latest -g

# 好习惯：定期更新应用所依赖的包
npm update
npm outdated

# 卸载包
npm uninstall lodash # 删除 node_modules 目录下面的包
npm uninstall --save lodash # 从 package.json 文件中删除依赖
npm uninstall --save-dev xxx # 同上

# 检查 node_modules 列表
ls node_modules

# 全局安装 -g
npm install -g xxx
# 更新全局安装的包
npm update -g xxx
# 要更新所有全局包，请键入：
npm update -g .
# 卸载全局安装的包
npm uninstall -g xxx

# 要找出需要更新的软件包，请键入：
npm outdated -g --depth=0.
```

#### package.json 示例

```json
{
  "name": "当前目录名-app-name",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "",
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "@babel/core": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "babel-loader": "^8.2.2"
  }
}
```

### 创建 node.js模块

1. 创建 package.json 文件 `npm init -y`

   默认的入口文件：`"main": "index.js"` ，可以根据情况自定义

2. 如何发布包？（原则上，你可以发布任何包含 **package.json** 文件的目录）

3. 如何更新包？

4. 测试步骤：

   * 将你的包发布到 npm
   * 在你的包所在项目之外，新建一个目录，进入该目录
   * 执行 `npm install xxx` 命令，查看结果
   * 创建一个 test.js 文件，require 这个包，并调用其中的方法
   * 执行 `node test.js` 命令。查看输出结果是否和预期一致。

### 包和模块的区别

Node.js 和 npm 对包和模块有非常具体的定义，很容易混淆。

- **包 package** 是一个文件或目录， 用 `package.json` 所描述的。
- **模块 module** 是一些文件或目录，可以通过 Node.js 的 `require()` 加载。

⚠️ 大多数 npm 包都是模块。

### 待确认问题？？

1. 使用 `nvm` :  https://github.com/nvm-sh/nvm/blob/master/README.md#usage

2. 使用[npx](https://www.npmjs.com/package/npx)无需下载即可运行包

3. 哪个版本的包被安装了？

   在本地目录中如果没有 `package.json` 这个文件的话，那么最新版本的包会被安装。

   如果存在 `package.json` 文件，则会在 `package.json` 文件中查找针对这个包所约定的[语义化版本规则](https://www.npmjs.cn/getting-started/semantic-versioning)，然后安装符合此规则的最新版本。

4. 使用npm时的各种安全认证？？？
