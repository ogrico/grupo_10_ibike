const { check, validationResult } = require('express-validator'),
    fs = require('fs'),
    path = require('path'),
    userEntity = require('../../services/data/UserEntity')

/**
 * Objeto literal para realizar las validaciones del formulario para crear el registro de una bicicleta
 * cada check representa la validación para un imput.
 * 
 * La funciona anonima (req, res, next) se encargade validar los errores y 
 */

const createUsrValidator = [

    check('nombre').notEmpty().withMessage('Nombre vacio'),
    check('apellido').notEmpty().withMessage('Apellido vacio'),
    check('email').notEmpty().withMessage('Email vacio').isEmail().withMessage('El campo debe ser de tipo email').custom(value => {

        let emailCheck = userEntity.finByField('email', value)
        if (emailCheck.length > 0){
            throw new Error('Email ya registrado')
        }
        return true
    }),
    check('contrasena').notEmpty().withMessage('Contraseña requerida'),
    check('contrasena2').notEmpty().withMessage('Confirmación de lacontraseña requerida').custom((value, { req }) => {
        if (req.body.contrasena != req.body.contrasena2) {
            throw new Error('Las contraseñas no coinciden')
        }
        return true

    }),
    check('avatar').notEmpty().withMessage('Imagen de usuario requerida'),
    /**
     * Funcion para validar los errores
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    (req, res, next) => {

        let body = req.body
        let errors = validationResult(req)

        // Se valida si existen errores luego de ejecutar las validaciones en de express-validator
        if (!errors.isEmpty()) {

            console.log('Errores : ', errors.mapped(), '\n')
            /**
             * Se validan los archivos cargados en el formulario
             * Y se eliminan al existir errores
             */
            if (req.files) {
                req.files.forEach(element => {
                    let imagen = path.join(__dirname, '../../public/img/users/')
                        + element.originalname
                    fs.unlinkSync(imagen)
                })

            }
            res.render('sing_up', {
                errors: errors.mapped(),
                oldBody: body
            })
        } else {
            // Se realaliza la continuidad de la ruta
            console.log('Next()', '\n')
            next()
        }
    }

]

module.exports = createUsrValidator