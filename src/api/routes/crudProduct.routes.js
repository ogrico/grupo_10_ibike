const { Router } = require('express'),
    crudProduct = require('../controllers/crudProduct.controller')

const router = Router()

router.get('/products', crudProduct.getProducts)
router.get('/product/:id', crudProduct.getProduct)
router.get('/products/featured', crudProduct.getProductFeatured)
router.get('/product/reference/:referencia',crudProduct.ProductReference)
router.get('/product/category/:id',crudProduct.ProductsCategoria)
router.get('/testPagination', crudProduct.testPagination)
router.post('/product', crudProduct.createProduct)
router.put('/product/update/:id', crudProduct.updateProduct)
router.delete('/product/:id', crudProduct.deleteProduct)

module.exports = router