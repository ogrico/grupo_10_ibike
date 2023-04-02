const { Router } = require('express'),
    productController = require('../controllers/product.controller'),
    createBikeValidator = require('../middlewares/express-validator/createBikeValidator'),
    updateBikeValidator = require('../middlewares/express-validator/updateBikeValidator'),
    bikeImagValidator = require('../middlewares/multer/bikeImgMulter')

const router = Router()

router.get('/products', productController.getProducts),
router.get('/product/:referencia', productController.detail),
router.get('/create', productController.formCreateProduct)
router.post('/create', bikeImagValidator, createBikeValidator, productController.createBike)
router.get('/:referencia/update', productController.formUpdateProduct)
router.put('/:referencia/update', updateBikeValidator, productController.updateBike)

module.exports = router