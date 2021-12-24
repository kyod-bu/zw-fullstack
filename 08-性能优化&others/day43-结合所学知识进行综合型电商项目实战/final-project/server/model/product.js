const Sequelize = require('sequelize');

/**
 * 数据模型 Product
 * @param {*} sequelize
 * @returns
 */
module.exports = function (sequelize) {
    return sequelize.define('Product', {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false,
        },
        subTitle: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false,
        },
        img: {
            type: Sequelize.STRING, // 存储的其实是 url
            defaultValue: '',
            allowNull: false
        },
        distance: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false
        },
        number: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false
        },
        price: {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false
        }
    }, {
        paranoid: true // 软删除策略
    });
}
