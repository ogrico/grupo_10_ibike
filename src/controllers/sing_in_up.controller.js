const path = require('path'),
    userEntity = require('../services/data/User')

// Objeto literar para definir los metodos a usar para la autenticación y regtistro de usuarios
var login = {

    singIn: (_, res) => {
        res.render('sing_in')
    },

    singUp: (_, res) => {
        res.render('sing_up')
    },

    createUser: (req, res) => {
        console.log('File ', req.file)
        console.log('Body ', req.body)
        res.render('sing_up')
    }

}

module.exports = login