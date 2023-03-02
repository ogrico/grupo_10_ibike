const bcrypt = require('bcryptjs')

/**
 * Objeto literar usado para representar la funcinalidad de bcrypt 
 * para encriptar y comparar una contraseña
 */
const bcryptEntity = {
    /** 
     * @param {*} pass 
     */
    hashSync: function (pass) {
        /*
           Se crea una variable passEncrypted para encriptar la contraseña
           al metodo hashSync se le pasa la contraseña a codificar y el salt
           que es el nivel de elevación del algoritmo (n^x) que usa para encriptar la contraseña
       */
        let passEncrypted = bcrypt.hashSync(pass, 12)
        return passEncrypted

    },
    /**
     * 
     * @param {*} pass 
     * @param {*} passEncrypted 
     */
    compareSync: function (pass, passEncrypted) {
        /*
            Se crea la variable check para validar una contraseña encriptda
            se compara que la contraseña almacenada encriptada sea igual a la ingresada por el usuario 
        */
        let check = bcrypt.compareSync(pass, passEncrypted)
        return check
    }
}

module.exports = bcryptEntity