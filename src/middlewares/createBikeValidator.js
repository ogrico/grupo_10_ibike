const { check, validationResult } = require('express-validator'),
    fs = require('fs'),
    path = require('path')

const createBikeValidator = [
    check('imagenes').custom((value, { req }) => {
        req.files.forEach(element => {
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
    (req, res, next) => {

        let body = req.body
        let errors = validationResult(req)

        console.log(req.files)

        if (!errors.isEmpty()) {
            console.log('Errores : ', errors.mapped())
            if (req.files) {
                req.files.forEach(element => {
                    let imagen = path.join(__dirname, '../public/img/products/bikes/')
                        + element.originalname
                    fs.unlinkSync(imagen)
                });

            }
            res.render('create', {
                errors: errors.mapped(),
                oldBody: body
            })
        } else {
            console.log('Next()')
            next()
        }
    }
]

module.exports = createBikeValidator