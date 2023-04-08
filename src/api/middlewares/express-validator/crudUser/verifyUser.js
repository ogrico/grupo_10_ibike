const { check, validationResult } = require('express-validator')

const crudUserVerify = [

    check('email').notEmpty().withMessage('email obligatorio').isString().withMessage('El campo debe ser String'),
    check('password').notEmpty().withMessage('password obligatorio').isString().withMessage('El campo debe ser String'),

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

module.exports = crudUserVerify