const sequelize = require('../connection'),
    { DataTypes } = require('sequelize')

const Product = sequelize.define('product',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    imagen1: {
        type: DataTypes.STRING
    },
    imagen2: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    model: {
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.NUMBER
    },
    discount: {
        type: DataTypes.NUMBER
    },
    size: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.NUMBER
    }
}, {
    tableName: 'product',
    timestamps: false
})

module.exports = Product
