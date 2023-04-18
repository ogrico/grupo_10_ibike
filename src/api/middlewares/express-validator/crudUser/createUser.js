const { check, validationResult } = require('express-validator')

const crudCreateUser = [
    check('firsname').notEmty('Primer nombre obligatorio').isString().withMessage('El campo debe ser String'),
    check('lastname'), notEmty('Apellido obligatorio'), isString().withMessage('El campo debe ser String'),
    check('avatar'), notEmty('Primer nombre obligatorio'), isString().withMessage('El campo debe ser String'),
    check('state'), notEmty('Estado obligatorio'), isInt().withMessage('El campo debe ser Entero'),


    (req, res, next) => {

        errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                "errors": errors.errors
            })
        }
        next()
    }

]
module.exports= crudCreateUser