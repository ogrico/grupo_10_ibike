const { check, validationResult } = require('express-validator'),
    fs = require('fs'),
    path = require('path'), bikesDataPath = path.join(__dirname, "../data/bikes.json")

let bikes = JSON.parse(fs.readFileSync(bikesDataPath, "utf-8"))

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
    check('referencia').notEmpty().withMessage('Referencia vacio').isNumeric().withMessage('Debe ser un valor numerico'),
    check('valor').notEmpty().withMessage('Valor vacio').isNumeric().withMessage('Debe ser un valor numerico'),
    check('descuento').notEmpty().withMessage('Descuento vacio'),
    check('descripcion').notEmpty().withMessage('Nombre vacio'),
    check('esp_nombre').notEmpty().withMessage('Tipo vacio'),
    check('esp_descripcion').notEmpty().withMessage('Nombre vacio'),
    check('esp_nombre2').notEmpty().withMessage('Tipo vacio'),
    check('esp_descripcion2').notEmpty().withMessage('Tipo vacio'),
    check('esp_nombre3').notEmpty().withMessage('Tipo vacio'),
    check('esp_descripcion3').notEmpty().withMessage('Tipo vacio'),
   
    /**
     * Funcion para validar los errores
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    (req, res, next) => {

        let body = req.body
        let errors = validationResult(req)

        console.log(req.body, '\n')
        
        // Se valida si existen errores luego de ejecutar las validaciones en de express-validator
        if (!errors.isEmpty()) {
            console.log('Errores : ', errors.mapped(), '\n')
            let bike = bikes.filter((bike) => bike.id == req.params.id)
            res.render('put', {
                errors: errors.mapped(),
                oldBody: body,
                bike
            })
        } else {
            // Se realaliza la continuidad de la ruta
            console.log('Next()')
            next()
        }
    }
]

module.exports = updateBikeValidator