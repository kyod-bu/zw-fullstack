/**
 * 通过配置来读取，使之与代码分离
 * 注入环境变量 ...
 */
// 1. 读取 process.env
const mysql = require('mysql');

const env = process.env;
console.log(`password::`, env.password);

// 2. 通过 env 里面的 password，来配置 mysql
mysql({
    password: env.password
})

// 3. 启动项目，可以使用
// PASSWORD = xxx node index.js // 或者读取一个配置文件
