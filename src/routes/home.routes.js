const { Router } = require('express')
const homeController = require('../controllers/home.conmtroller')

const router = Router()

router.get('/', homeController.home)
router.get('/home', homeController.home)

module.exports = router
