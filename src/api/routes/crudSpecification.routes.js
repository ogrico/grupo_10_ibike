const { Router } = require('express'),
    crudEpecificationController = require('../controllers/crudSpecificaction.controller')

const router = Router()

router.get('/specification', crudEpecificationController.getAll)
router.get('/specification/byProduct/:id', crudEpecificationController.getByProduct)
router.post('/specification', crudEpecificationController.createSpecification)
router.put('/specification/:id', crudEpecificationController.updateSpecification)
router.delete('/specification/:id', crudEpecificationController.deleteSpecificarion)

module.exports = router