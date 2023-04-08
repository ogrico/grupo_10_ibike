const { Sequelize, DataTypes } = require('sequelize'),
config = require('../../config')

const sequelize = new Sequelize(
    config.dbschema,
    config.dbuser,
    config.dbpass,
    {
     host: config.dbserver,
     port:3306,
     dialect: 'mysql'
    }
)

async function connection(){
    try {
        await sequelize.authenticate()
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('Error en la conexión: ', {error})
    }
}

connection()

module.exports = sequelize