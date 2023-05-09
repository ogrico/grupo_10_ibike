const { Router } = require('express'),
    crudProduct = require('../controllers/crudProduct.controller')

const router = Router()

router.get('/products', crudProduct.getProducts)
router.get('/product/:id', crudProduct.getProduct)
router.get('/product/featured', crudProduct.getProductFeatured)
router.get('/product/:referencia',crudProduct.ProductReference)
router.get('/product/category/:id',crudProduct.ProductsCategoria)
router.post('/product', crudProduct.createProduct)
router.put('/product/update/:id', crudProduct.updateProduct)
router.delete('/product/:id', crudProduct.deleteProduct)

module.exports = router