const bcrypt = require('bcrypt')

/**
 * Objeto literar usado para representar la funcinalidad de bcrypt 
 * para encriptar y comparar una contraseña
 */
const bcrypt = {
    /** 
     * @param {*} pass 
     */
    hashSync: (pass) => {
        /*
           Se crea una variable passEncrypted para encriptar la contraseña
           al metodo hashSync se le pasa la contraseña a codificar y el salt
           que es el nivel de elevación del algoritmo (n^x) que usa para encriptar la contraseña
       */
        let passEncrypted = pass.bcrypt.hashSync(pass, 12)
        return pass

    },
    /**
     * 
     * @param {*} pass 
     * @param {*} passEncrypted 
     */
    compareSync: (pass, passEncrypted) => {
        /*
            Se crea la variable check para validar una contraseña encriptda
            se compara que la contraseña almacenada encriptada sea igual a la ingresada por el usuario 
        */
        let check = bcrypt.compareSync(pass, passEncrypted)
        return check
    }
}

module.exports = bcrypt