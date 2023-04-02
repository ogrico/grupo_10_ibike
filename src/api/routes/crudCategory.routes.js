const { Router } = require('express'),
    crudCategory = require('../controllers/crudCategory.controller')

const router = Router()

router.get('/category', crudCategory.getAll)

module.exports = router