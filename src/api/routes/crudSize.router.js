const { Router } = require('express'),
 crudSizeController = require('../controllers/crudSize.controller')

 const router = Router()

 router.get('/size', crudSizeController.getAll)
 router.get('/size/product/:id', crudSizeController.getByProduct)
 router.post('/size', crudSizeController.createSize)
 router.put('/size/:id', crudSizeController.updateSize)
 router.delete('/size/:id', crudSizeController.deleteSize)
 
 module.exports = router