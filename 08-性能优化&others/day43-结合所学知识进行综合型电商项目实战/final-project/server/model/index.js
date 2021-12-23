const Sequelize = require('sequelize');

// 配置信息从环境读取
const PASSWORD = process.env.PASSWORD;
const sequelize = new Sequelize('shop', 'root', PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    timestamps: true, // 时间戳
    paranoid: true, // 软删除
});

sequelize
    .authenticate()
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log('数据库连接失败::', err.message);
    });
