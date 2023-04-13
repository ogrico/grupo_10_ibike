const axios = require('axios'),
    config = require('../../config')
    
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

            let { nombre, apellido, email, contrasena } = req.body, avatar = req.file.originalname

            const response = await axios.post('http://localhost:' + config.port + '/api/user', {
                firstname: nombre,
                lastname: apellido,
                avatar: avatar,
                state: true,
                dni: null,
                email: email,
                password: contrasena,
                rol_id: 3
            })

            console.log(response.data())
            res.redirect('/sing_in')

        } catch (error) {

            console.log(error)
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