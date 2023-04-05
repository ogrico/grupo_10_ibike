const { Router } = require('express'),
    crudProduct = require('../controllers/crudProduct.controller')

const router = Router()

router.get('/product', crudProduct.getProducts)

module.exports = router