const sequelize = require('../connection'),
    { DataTypes } = require('sequelize')

const Shoppinglist = sequelize.define('shoppinglist',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.NUMBER
    },
    amount: {
        type: DataTypes.NUMBER
    }
}, {
    tableName: 'shoppinglist',
    timestamps: false
})

module.exports = Shoppinglist