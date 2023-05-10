

const { Router } = require('express'), basket = require('../controllers/basket.controller')

const router = Router()

router.get('/basket', basket.basket)

module.exports = router