const sequelize = require('../connection'),
    { DataTypes } = require('sequelize')

const Appauth = sequelize.define('appauth', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'appauth',
    timestamps: false
})

module.exports = Appauth