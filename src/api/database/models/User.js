const sequelize = require('../connection'),
    { DataTypes, Model } = require('sequelize')

const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.DOUBLE
    },
    dni: {
        type: DataTypes.NUMBER,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'user',
    timestamps: false
})

module.exports = User