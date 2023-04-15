const { Router } = require('express'),
    crudProduct = require('../controllers/crudProduct.controller')

const router = Router()

router.get('/product', crudProduct.getProducts)
router.get('/product/featured', crudProduct.getProductFeatured)
router.get('/product/:referencia',crudProduct.ProductReference)
router.get('/product/category/:id',crudProduct.ProductsCategoria)
router.post('/product', crudProduct.createProduct)
router.put('/product/:id', crudProduct.updateProduct)
router.delete('/product/:id', crudProduct.deleteProduct)

module.exports = router