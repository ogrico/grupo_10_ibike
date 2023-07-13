const { Router } = require('express'),
    productController = require('../controllers/product.controller'),
    createBikeValidator = require('../middlewares/express-validator/createBikeValidator'),
    updateBikeValidator = require('../middlewares/express-validator/updateBikeValidator'),
    bikeImagValidator = require('../middlewares/multer/bikeImgMulter')

const router = Router()

router.get('/products/:category', productController.getProducts)
router.get('/product/:referencia', productController.detail)
router.get('/create', productController.formCreateProduct)
router.post('/create', bikeImagValidator, createBikeValidator, productController.createProduct)
router.get('/update/:id', productController.formUpdateProduct)
router.put('/product/update/:id', updateBikeValidator, productController.updateBike)
router.get('/product/delete/:id/:category', productController.deleteProduct)

module.exports = router