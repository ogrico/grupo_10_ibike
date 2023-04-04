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
    description: {
        type: DataTypes.STRING
    },
    featured: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'product',
    timestamps: false
})

module.exports = Product
