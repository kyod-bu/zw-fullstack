/**
 * 数据表 Users
 * @param {*} sequelize
 * @param {*} dataTypes
 * @returns
 */
module.exports = function(sequelize, dataTypes) {
    return sequelize.define('User', {
        id: {
            primaryKey: true, // 主键
            autoIncrement: true, // 自增
            type: dataTypes.INTEGER
        },

        username: {
            type: dataTypes.CHAR(255),
            allowNull: false,
        },

        password: {
            type: dataTypes.CHAR(255),
            allowNull: false,
        },

        userId: {
            type: dataTypes.CHAR(36),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Users'
    });
}
