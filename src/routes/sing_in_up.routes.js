const { Router } = require('express'),
    loguinController = require('../controllers/sing_in_up.controller'),
    createUserValidator = require('../middlewares/express-validator/createUserValidator'),
    userImgMulter =  require('../middlewares/multer/userAvatarMulter'),
    loginValidator = require('../middlewares/express-validator/loginValidator')

const router = Router()

router.get('/singIn', loguinController.singIn)
router.get('/singUp', loguinController.singUp)
router.post('/createUser', userImgMulter, createUserValidator, loguinController.createUser)
router.post('/login',loginValidator, loguinController.login)

module.exports = router