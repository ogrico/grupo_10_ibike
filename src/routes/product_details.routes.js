const {Router} = require('express')
const productController = require('../controllers/product_details.controller')

const router = Router()


router.get('/product/:referencia', productController.detail)

module.exports = router