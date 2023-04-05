const sequelize = require('../connection'),
    { DataTypes } = require('sequelize')

const Buy = sequelize.define('buy', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE
    },
    total: {
        type: DataTypes.NUMBER
    },
    discount: {
        type: DataTypes.NUMBER
    }
}, {
    tableName: 'buy',
    timestamps: false
})

module.exports = Buy