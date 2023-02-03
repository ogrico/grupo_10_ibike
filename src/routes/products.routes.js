const { Router } = require('express')
const path = require('path')
const productsController = require('../controllers/products.controller')


const router = Router()


router.get('/products',productsController.getProducts())

module.exports = router