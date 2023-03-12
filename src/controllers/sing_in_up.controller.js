const session = require('express-session');
const path = require('path'),
    userEntity = require('../services/data/UserEntity'),
    bcryptEntity = require('../services/bcryptjs')

// Objeto literar para definir los metodos a usar para la autenticación y regtistro de usuarios
const login = {

    singIn: (req, res) => {
        res.render('sing_in', {
            error: ""
        })
    },
    singUp: (_, res) => {
        res.render('sing_up')
    },
    createUser: (req, res) => {
        /**
         * Se crean las variebales para capturar los datos enviados en el formulario
         * Se crea un objeto literal para representar al usuario y registrarlo
         */
        let { nombre, apellido, email, contrasena } = req.body,
            passEncrypted = bcryptEntity.hashSync(contrasena),
            newUser = {
                "firstName": nombre,
                "lastName": apellido,
                "email": email,
                "password": passEncrypted,
                "admin": false,
                "avatar": req.file.originalname
            }

        // Se instancia la entidad userEntity y se utiliza el metodo para crear un usuario
        let register = userEntity.create(newUser)
        if (register) console.log('Usuario registrado')
        res.redirect('/home')
    },
    login: (req, res) => {

        let { usuario, contrasena } = req.body,
            user = userEntity.finByField('email', usuario),
            error = 'usuario o contraseña incorrectos'
        passVerified = bcryptEntity.compareSync(contrasena, user[0].password)
        if (user[0].email === usuario && passVerified) {
            delete user[0].id
            delete user[0].password
            req.session.userLogged = user[0]
            return res.redirect('/acount')
        }
        res.render('sing_in', {
            oldBody: req.body,
            error

        })
    }

}


module.exports = login