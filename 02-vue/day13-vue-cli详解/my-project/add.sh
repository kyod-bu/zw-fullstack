# 把 插件文件夹(vue-cli-plugin-mydemo) 当成 一个`npm包`导入当前工程中
npm link /Users/yafbu/workspace/zw-fullstack/02-vue/day13-vue-cli详解/vue-cli-plugin-mydemo
# 强行激活
vue invoke vue-cli-plugin-mydemo
# 执行 在`vue-cli-plugin-mydemo/index.js`里面注册的 cli-service 命令（如：test-kyod）
# ./node_modules/.bin/vue-cli-service test-kyod
./node_modules/.bin/vue-cli-service generator-md
