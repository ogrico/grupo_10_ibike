const { Router } = require('express'),
    crudCategory = require('../controllers/crudCategory.controller')

const router = Router()

router.get('/category', crudCategory.getAll)
router.post('/category', crudCategory.createCategory)
router.put('/category/:id', crudCategory.updateCategory)
router.delete('/category/:id', crudCategory.deleteCategory)

module.exports = router