const { check, validationResult } = require('express-validator'),
    fs = require('fs'),
    path = require('path'),
    
    axios = require('axios'),
    config = require('../../../config')

/**
 * Objeto literal para realizar las validaciones del formulario para crear el registro de una bicicleta
 * cada check representa la validación para un imput.
 * 
 * La funciona anonima (req, res, next) se encargade validar los errores y 
 */

const createUsrValidator = [

    check('nombre').notEmpty().withMessage('Nombre vacio'),
    check('apellido').notEmpty().withMessage('Apellido vacio'),
    check('email').notEmpty().withMessage('Email vacio').isEmail().withMessage('El campo debe ser de tipo email').custom(async (value) => {

        const response = await axios.get('http://localhost:' + config.port + '/api/user/verifyEmail/' + value)
        if (response.data.user[0] != undefined) {
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
    check('avatar').custom((value, { req }) => {

        // Se valida que exista el archivo y su extension
        if (!req.file || !req.file.originalname.match(/.(jpg|jpeg|png|gif|png)$/)) {
            throw new Error('Por favor sube una imagen en formato JPG, JPEG, PNG o GIF')
        }

        return true

    }),
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
            if (req.file) {
                let imagen = path.join(__dirname, '../../public/img/users/')
                    + req.file.originalname
                fs.unlinkSync(imagen)


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