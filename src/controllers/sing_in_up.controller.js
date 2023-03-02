const path = require('path'),
    userEntity = require('../services/data/UserEntity'),
    bcryptEntity = require('../services/bcryptjs')

// Objeto literar para definir los metodos a usar para la autenticación y regtistro de usuarios
var login = {

    singIn: (_, res) => {
        res.render('sing_in')
    },

    singUp: (_, res) => {
        res.render('sing_up')
    },

    createUser: (req, res) => {
        /**
         * Se crean las variebales para capturar los datos enviados en el formulario
         * Se crea un objeto literal para representar al usuario y registrarlo
         */
        let { nombre, apellido, email, contrasena, avatar } = req.body,
            passEncrypted = bcryptEntity.hashSync(contrasena),
            newUser = {
                "firstName": nombre,
                "lastName": apellido,
                "email": email,
                "password": passEncrypted,
                "admin": false,
                "avatar": avatar
            }

        // Se instancia la entidad userEntity y se utiliza el metodo para crear un usuario
        let register = userEntity.create(newUser)
        if (register) console.log('Usuario registrado')
        res.redirect('/home')        
    }

}

module.exports = login