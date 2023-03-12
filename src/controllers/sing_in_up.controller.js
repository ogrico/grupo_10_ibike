const path = require('path'),
    userEntity = require('../services/data/UserEntity'),
    bcryptEntity = require('../services/bcryptjs')

// Objeto literar para definir los metodos a usar para la autenticación y regtistro de usuarios
const login = {

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
    login: (req,res) => {
        let {usuario,contrasena } = req.body,
        user = userEntity.finByField('email',usuario),
        error = 'usuario o contraseña incorrectos'
        passverificada = bcryptEntity.compareSync(contrasena, user[0].password)
        if (user[0].email === usuario && passverificada){
           return res.redirect('/')
        }
 res.render('sing_in', {
    oldBody : req.body,
    error
   
 })
        

    }
    
}


module.exports = login