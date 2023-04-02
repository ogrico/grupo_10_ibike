const { Router } = require('express'),
    homeController = require('../controllers/home.controller')

const router = Router()

router.get('/', homeController.home)
router.get('/home', homeController.home)

module.exports = router
