const { Router } = require('express'),
    crudRol = require('../controllers/crudRol.controller')

const router = Router()

router.get('/rol', crudRol.getAll)
router.post('/rol', crudRol.createRol)
router.put('/rol/:id', crudRol.updateRol)
router.delete('/rol/:id', crudRol.deleteRol)

module.exports = router