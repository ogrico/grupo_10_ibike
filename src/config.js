const dotenv = require('dotenv')

dotenv.config()

/**
 * Objeto literal para declarar las variables de entorno
 */
const varaibles = {
    port: process.env.PORT || 3001
}

module.exports = varaibles