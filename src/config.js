const dotenv = require('dotenv')

dotenv.config()

/**
 * Objeto literal para declarar las variables de entorno
 */
const varaibles = {
    port: process.env.PORT || 3010
}

module.exports = varaibles