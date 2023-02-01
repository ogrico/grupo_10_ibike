const dotenv = require('dotenv')

dotenv.config()

const varaibles = {
    port: process.env.PORT || 3001
}

module.exports = varaibles