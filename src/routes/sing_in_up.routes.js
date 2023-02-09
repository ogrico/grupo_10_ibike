const {Router} = require('express')
const path = require('path')
const loguinController = require('../controllers/sing_in_up.controller')

const router = Router()

router.get('/singIn', loguinController.singIn)
router.get('/singUp', loguinController.singIn)

module.exports = router