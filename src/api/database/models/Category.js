const sequelize = require('../connection'),
    { DataTypes } = require('sequelize')

const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }

}, {
    tableName: 'category',
    timestamps: false
})

module.exports = Category