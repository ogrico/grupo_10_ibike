const { Router } = require('express'),
    crudController = require('../controllers/crud.controller'),
    createBikeValidator = require('../middlewares/express-validator/createBikeValidator'),
    updateBikeValidator = require('../middlewares/express-validator/updateBikeValidator'),
    bikeImagValidator = require('../middlewares/multer/bikeImgMulter')

const router = Router()

router.get('/crud/create', crudController.formProduct)
router.post('/crud/create', bikeImagValidator, createBikeValidator, crudController.createProduct)
router.get('/crud/:id/update', crudController.formUpdateProduct)
router.put('/crud/:id/update', updateBikeValidator, crudController.updateProduct)

module.exports = router