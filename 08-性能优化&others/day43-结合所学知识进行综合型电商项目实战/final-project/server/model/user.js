const Sequelize = require('sequelize');

/**
 * 数据模型 Users
 * @param {*} sequelize
 * @returns
 */
module.exports = function (sequelize) {
    return sequelize.define('User', {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true, // 主键
            // autoIncrement: true, // 自增
        },
        name: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false,
        },
        role: {
            type: Sequelize.STRING,
            defaultValue: 'normal',
            allowNull: false,
        }
    }, {
        paranoid: true // 软删除策略
    });
}
