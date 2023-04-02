const sequelize = require('../connection'),
    { DataTypes } = require('sequelize')

const Rol = sequelize.define('rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'rol',
    timestamps: false
})

module.exports = Rol