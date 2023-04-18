const { check, validationResult } = require('express-validator')


const loginValidator = [
    check('usuario').notEmpty().withMessage('email obligatorio'),
    check('contrasena').notEmpty().withMessage('contrasena requerida'),
    (req, res, next) => {
        let body = req.body,
            errors = validationResult(req)

        if (!errors.isEmpty()) {
            console.log('errores: ', errors.mapped(), '\n')
            return res.render('sing_in', {
                errors: errors.mapped(),
                oldBody: body

            })
        }
        next()
    }
]


module.exports = loginValidator; 