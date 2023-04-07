const { Router } = require('express'),
    crudProduct = require('../controllers/crudProduct.controller')

const router = Router()

router.get('/product', crudProduct.getProducts)
router.post('/product', crudProduct.createProduct)
router.put('/product/:id', crudProduct.updateProduct)
router.delete('/product/:id', crudProduct.deleteProduct)
router.delete('/product', crudProduct.deleteProduct)

module.exports = router