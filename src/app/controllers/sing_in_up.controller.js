const path = require('path'),
    axios = require('axios'),
    config = require('../../config')
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
    createUser: async (req, res) => {
        try {
            /**
         * Se crean las variebales para capturar los datos enviados en el formulario
         * Se crea un objeto literal para representar al usuario y registrarlo
         */
            let { nombre, apellido, email, contrasena } = req.body

            const response = await axios.post('http://localhost:' + config.port + '/api/user', {
                firstname: nombre,
                lastname: apellido,
                avatar: req.file.originalname,
                state: true,
                dni: null,
                email: email,
                password: contrasena,
                rol_id: 3
            });

            res.redirect('/home')
        } catch (error) {
            console.log(error);
            res.redirect('/home')
        }
    },
    login: async (req, res) => {

        try {
            let { usuario, contrasena } = req.body

            const response = await axios.post('http://localhost:' + config.port + '/api/user/auth', {
                email: usuario,
                password: contrasena
            })
            
            if (response.data.msg != 'ok') {

                return res.render('sing_in', {
                    oldBody: req.body,
                    error: response.data.msg
                })

            }
            req.session.userLogged = response.data.user
            return res.redirect('/acount')
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

}


module.exports = login