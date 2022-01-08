# nvm for Mac 安装及使用教程

## nvm 是什么

nvm 的全称是 node version manager，意思就是管理 node 版本的⼀个⼯具，它可以将多个 node 版本安装在指定路径，然后通过 nvm 命令切换，切换我们环境变量中 node 命令指定的**实际执⾏**的软件路径。

## Mac 安装

```shell
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# 或
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# 其中0.38.0可以替换为当前nvm最新的版本号
```

安装成功之后，我们就能在当前的操作系统中使⽤多个 node.js 版本。

⚠️ 切换 node 版本，会同时切换 npm（全局安装的npm包会受影响）。

## 配置环境变量

使用记事本打开文件 **~/.bash_profile**，添加以下内容：

```bash
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

⚠️ 注意：上述配置环境变量针对的是使用 bash 作为 shell 的电脑。如果使用的是 zsh，则需要在当前用户根目录下创建 **`.zshrc`** 文件，然后对应的把上述内容添加上去。

配置完，需要执行：

```shell
source ~/.bash_profile # 或 source ~/.zshrc
command -v nvm # 测试是否安装成功
```

## 使用

```shell
nvm version # 查看 node 版本
nvm --version # 查看 nvm 版本
nvm current # 查看当前 node 版本号

nvm ls-remote # 列出远程服务器上所有的可用版本
nvm alias default v16.13.1 # 修改默认使用的 node 版本号

nvm list # 查看已安装 node 版本列表
nvm ls

nvm use x.x.x # 版本号切换，例如： nvm use 14.13.0
nvm use node # 切换到最新版

nvm install x.x.x # 安装 node 版本
nvm install stable # 安装最新稳定版 node

nvm uninstall x.x.x # 卸载
```

## 故障排除

### command not found: nvm

你的终端可能是 **zsh**

需要配置 **~/.zshrc** 文件，在其中添加 `source ~/.bash_profile` ，然后在终端执行 `source ~/.zshrc` 即可。

参考文档：<https://github.com/nvm-sh/nvm>
