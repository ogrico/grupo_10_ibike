const { check, validationResult } = require('express-validator'),
    axios = require('axios'),
    config = require('../../../config')


/**
 * Objeto literal para realizar las validaciones del formulario para la información de una bicicleta
 * cada check representa la validación para un imput.
 * 
 * La funciona anonima (req, res, next) se encargade validar los errores y 
 */
const updateBikeValidator = [
    check('nombre').notEmpty().withMessage('Nombre vacio'),
    check('tipo').notEmpty().withMessage('Tipo vacio'),
    check('modelo').notEmpty().withMessage('Modelo vacio').isNumeric().withMessage('Debe ser un valor numerico').custom(value => {

        let año = new Date()
        if (value > año.getFullYear()) {
            throw new Error('Modelo no valido')
        }
        return true
    }),
    check('referencia').notEmpty().withMessage('Referencia vacio'),
    check('valor').notEmpty().withMessage('Valor vacio').isNumeric().withMessage('Debe ser un valor numerico'),
    check('descuento').notEmpty().withMessage('Descuento vacio'),
    check('descripcion').notEmpty().withMessage('Nombre vacio'),

    /**
     * Funcion para validar los errores
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async (req, res, next) => {

        let body = req.body
        let errors = validationResult(req)

        // Se valida si existen errores luego de ejecutar las validaciones en de express-validator
        if (!errors.isEmpty()) {
            const product = await axios.get('http://localhost:' + config.port + '/api/product/' + req.params.referencia)
            let response = product.data.product[0], userLogged = req.session.userLogged
            console.log(errors.mapped())
            res.render('editProduct', {
                errors: errors.mapped(),
                oldBody: body,
                response,
                userLogged
            })
            
        } else {
            // Se realaliza la continuidad de la ruta
            console.log('Next()')
            next()
        }
    }
]

module.exports = updateBikeValidator