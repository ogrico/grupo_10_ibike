const { Router } = require('express'),
    productController = require('../controllers/product.controller'),
    createBikeValidator = require('../middlewares/express-validator/createBikeValidator'),
    updateBikeValidator = require('../middlewares/express-validator/updateBikeValidator'),
    bikeImagValidator = require('../middlewares/multer/bikeImgMulter')

const router = Router()

router.get('/products/:id', productController.getProducts),
router.get('/product/:referencia', productController.detail),
router.get('/create', productController.formCreateProduct)
router.post('/create', bikeImagValidator, createBikeValidator, productController.createProduct)
router.get('/update/:id', productController.formUpdateProduct)
router.put('/product/update/:id', updateBikeValidator, productController.updateBike)

module.exports = router