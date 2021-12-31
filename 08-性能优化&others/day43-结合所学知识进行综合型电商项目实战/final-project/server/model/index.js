const Sequelize = require('sequelize');

const createUser = require('./user');
const createProduct = require('./product');

// 配置信息从环境读取
const PASSWORD = process.env.PASSWORD;

// 连接到数据库
// new Sequelize('database', 'username', 'password', {})
const sequelize = new Sequelize('shop', 'root', PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    timestamps: true, // 时间戳
    paranoid: true, // 软删除
});

// 测试链接
sequelize
    .authenticate()
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log('数据库连接失败::', err.message);
    });

// 建立数据模型 Users
const UserModel = createUser(sequelize);
const ProductModel = createProduct(sequelize);

module.exports = {
    UserModel,
    ProductModel,
    sequelize
};

// const data = [
//     {title: '汉堡', subTitle: '肯德基汉堡', img: '/images/1.png', distance: '100m', number: '102', price: '28'},
//     {title: '北京烤鸭', subTitle: '全聚德北京烤鸭', img: '/images/2.png', distance: '1.5km', number: '321', price: '128'},
//     {title: '西服租赁', subTitle: '西服租赁', img: '/images/3.png', distance: '300m', number: '122', price: '18'},
//     {title: '婚纱摄影', subTitle: '婚纱摄影', img: '/images/4.png', distance: '100m', number: '102', price: '28'},
//     {title: '麻辣烫', subTitle: '麻辣烫', img: '/images/5.png', distance: '100m', number: '102', price: '123'},
// ];
// ProductModel.sync({ torce: true }).then(() => {
//     // return ProductModel.bulkCreate(require('./data.json'));
//     ProductModel.bulkCreate(data);
// });

// 查：findAll | findAndCountAll
// 增：create | bulkCreate
// 改：update
// 删：destroy

// // 创建：create | bulkCreate
// // { torce: true }, 只有第一次创建表的时候使用
// UserModel.sync({ torce: true }).then(() => {
// UserModel.sync().then(() => {
//     UserModel.create({
//         name: 'test-insert-role',
//         password: 'rolePwd'
//     });
// });

// // 查询：findAll | findAndCountAll
// // findAll 返回的是个 Promise 类型，需要处理一下
// UserModel.findAll({ raw: true }).then(data => {
//     console.log('查询所得数据：：', data);
// });

// // 修改：update
// UserModel.update({
//     name: 'test-update'
// }, {
//     where: {
//         id: '03b33832-6ff0-4dfe-84dc-c335196b2cc6'
//     }
// });

// // 删除：destroy
// // 注意：这里的逻辑实际上执行的是 update 语句，真正的数据表只是更新了 deleteAt 字段（在deleteAt 字段为空的时候）
// //      前面定义的是软删除策略（paranoid: true）
// UserModel.destroy({
//     where: {
//         name: 'test-delete'
//     }
// });
