const { check, validationResult } = require('express-validator'),
    fs = require('fs'),
    path = require('path')

/**
 * Objeto literal para realizar las validaciones del formulario para crear el registro de una bicicleta
 * cada check representa la validación para un imput.
 * 
 * La funciona anonima (req, res, next) se encargade validar los errores y 
 */
const createBikeValidator = [
    check('imagenes').custom((value, { req }) => {
        // Se rrecorre al array con la información de los archivos cargados
        req.files.forEach(element => {
            // Se valida que exista el archivo y su extension
            if (!req.files || !element.originalname.match(/.(jpg|jpeg|png|gif|png)$/)) {
                throw new Error('Por favor sube una imagen en formato JPG, JPEG, PNG o GIF')
            }
        })

        return true;
    }),
    check('nombre').notEmpty().withMessage('Nombre vacio'),
    check('tipo').notEmpty().withMessage('Tipo vacio'),
    check('modelo').notEmpty().withMessage('Modelo vacio').isNumeric().withMessage('Debe ser un valor numerico').custom(value => {

        let año = new Date()
        // Se valida que el modelo del articulo no sea mayor al año actual!
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

        // Se valida si existen errores luego de ejecutar las validaciones en de express-validator
        if (!errors.isEmpty()) {
            console.log('Errores : ', errors.mapped())
            /**
             * Se validan los archivos cargados en el formulario
             * Y se eliminan al existir errores
             */
            if (req.files) {
                req.files.forEach(element => {
                    let imagen = path.join(__dirname, '../public/img/products/bikes/')
                        + element.originalname
                    fs.unlinkSync(imagen)
                })

            }
            res.render('create', {
                errors: errors.mapped(),
                oldBody: body
            })
        } else {
            // Se realaliza la continuidad de la ruta
            console.log('Next()')
            next()
        }
    }
]

module.exports = createBikeValidator