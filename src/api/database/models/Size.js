const sequelize = require('../connection'),
    { DataTypes } = require('sequelize')

const Size = sequelize.define('size', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    tableName: 'size',
    timestamps: false
})

module.exports = Size