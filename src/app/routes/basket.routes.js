

const { Router } = require('express'), basket = require('../controllers/basket.controller')

const router = Router()

router.get('/basket/:id', basket.basket)

module.exports = router