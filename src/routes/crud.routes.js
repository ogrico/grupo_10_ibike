const { Router } = require('express'),
    crudController = require('../controllers/crud.controller'),
    createBikeValidator = require('../middlewares/createBikeValidator'),
    updateBikeValidator = require('../middlewares/updateBikeValidator'),
    bikeImagValidator = require('../middlewares/bikeImgMulter')

const router = Router()

router.get('/crud/create', crudController.formProduct)
router.post('/crud/create', bikeImagValidator, createBikeValidator, crudController.createProduct)
router.get('/crud/:id/update', crudController.formUpdateProduct)
router.put('/crud/:id/update', updateBikeValidator, crudController.updateProduct)

module.exports = router