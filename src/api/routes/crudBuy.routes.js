const { Router } = require('express'),
 crudBuy = require('../controllers/crudBuy.controller')

const router = Router()

router.get('/buy', crudBuy.getAll)
router.post('/buy', crudBuy.createBuy)
router.put('/buy/:id', crudBuy.updateBuy)
router.delete('/buy/:id', crudBuy.deleteBuy)
 
 module.exports = router