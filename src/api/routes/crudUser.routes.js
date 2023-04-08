const { Router } = require('express'),
    crudUser = require('../controllers/crudUser.controller'),
    userVerify = require('../middlewares/express-validator/crudUser/verifyUser')

const router = Router()

router.get('/user', crudUser.getAll)
router.post('/user', crudUser.createUser)
router.post('/user/auth', userVerify, crudUser.verifyUser)
router.put('/user/:id', crudUser.updateUser)
router.delete('/user/:id', crudUser.deleteUser)
router.get('/user/verifyEmail/:email', crudUser.verifyUserEmail)

module.exports = router