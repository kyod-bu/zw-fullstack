/**
 * sequelize
 */
const Sequelize = require('sequelize');
const UserModel = require('./model/user');

// 连接到数据库
// new Sequelize('database', 'username', 'password', {})
const sequelize = new Sequelize('kyod', 'root', 'misschen@310', {
    host: 'localhost',
    dialect: 'mysql'
});

// 测试连接
sequelize
    .authenticate()
    .then(() => {
        console.log('success');
    })
    .catch(e => {
        console.log('error');
    });

// 建立数据模型 Users
const User = UserModel(sequelize, Sequelize.DataTypes);

// 创建数据表
User.sync({force: true})
    .then(() => {
        // 插入数据
        return User.bulkCreate(require('./data'))
    });

sequelize.User = User;

module.exports = sequelize;
