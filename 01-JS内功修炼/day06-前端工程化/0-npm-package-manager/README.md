# 包管理工具：npm（体验）

## 安装 npm

npm 会随着 node.js 的安装一同安装，不需要单独操作

```bash
# 查看 npm 版本
npm --version
或
npm -v
```

## 使用 npm 安装一下 jquery

```bash
# 将 jquery 加载到 dependencies
npm install --save jquery

# 注意：下面的安装（--save-dev）方式，会将 eslint 加载到 devDependencies
npm install --save-dev eslint
```

```bash
# 项目初始化时，安装，注意区分下面的两种方式
npm install # 会安装 所有 安装的包，--save 和 --save-dev
npm install --production # 只会安装 --save 安装的包
```

## 配置文件 package.json 举例

```json
{
  "name": "npm-package-manager",
  "version": "1.0.0",
  "description": "包管理工具：npm（体验）",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "test2": "node -e 'console.log(123);'"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.6.0"
  },
  "devDependencies": {
    "eslint": "^7.26.0"
  }
}
```

⚠️ 版本号的问题：

1. **～1.3.2** 最终安装的是 1.3.x 的最新版本
2. **^1.3.2**  最终安装的是 1.x.x 的最新版本

⚠️ 上面的配置文件里面 scripts 的配置，这里面配置的是一些可执行命令

比如上面的配置 “test2” ，就可以通过下面的命令来运行

```bash
npm run test2
```

通过 `yarn xxx` 来也可以运⾏ scripts 中的脚本，如下

```bash
yarn test2
```