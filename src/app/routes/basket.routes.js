

const { Router } = require('express'), basket = require('../controllers/basket.controller')

const router = Router()

router.get('/basket', basket.basket)
router.get('/basket/session',basket.session)

module.exports = router