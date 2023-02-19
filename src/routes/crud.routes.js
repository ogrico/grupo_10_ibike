const {Router} = require('express'),
 crudController = require('../controllers/crud.controller'),
createBikeValidator = require('../middlewares/createBikeValidator'),
bikeImagValidator = require('../middlewares/bikeImgMulter')

const router = Router()

router.get('/crud/create', crudController.formProduct)
router.post('/crud/create', bikeImagValidator, createBikeValidator, crudController.createProduct)
router.get('/crud/:id/update', crudController.formUpdateProduct)

module.exports = router