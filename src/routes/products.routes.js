const { Router } = require('express')
const productsController = require('../controllers/products.controller')

const router = Router()


router.get('/products', productsController.getProducts)

module.exports = router