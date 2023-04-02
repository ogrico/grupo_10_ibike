const dotenv = require('dotenv')

dotenv.config()

/**
 * Objeto literal para declarar las variables de entorno
 */
const varaibles = {
    port: process.env.PORT || 3010,
    dbuser: process.env.DBUSER,
    dbpass: process.env.DBPASS,
    dbserver: process.env.DBSERVER,
    dbshema: process.env.DBSHEMA
}

module.exports = varaibles