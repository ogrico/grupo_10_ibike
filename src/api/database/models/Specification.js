const sequelize = require('../connection'),
    { DataTypes } = require('sequelize')

const Specificaction = sequelize.define('specification', {
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
    tableName: 'specification',
    timestamps: false
})

module.exports = Specificaction