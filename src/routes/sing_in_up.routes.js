const { Router } = require('express'),
    loguinController = require('../controllers/sing_in_up.controller'),
    createUserValidator = require('../middlewares/express-validator/createUserValidator'),
    userImgMulter =  require('../middlewares/multer/userAvatarMulter')

const router = Router()

router.get('/singIn', loguinController.singIn)
router.get('/singUp', loguinController.singUp)
router.post('/createUser', userImgMulter, createUserValidator, loguinController.createUser)

module.exports = router