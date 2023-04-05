const { Router } = require('express'),
 crudUser = require('../controllers/crudUser.controller'),
 crudUserVerify = require('../middlewares/express-validator/crudUserVerifyUser')

 const router = Router()

 router.get('/user', crudUser.getAll)
 router.post('/user', crudUser.createUser)
 router.post('/user/auth', crudUserVerify,crudUser.verifyUser)
 router.put('/user/:id', crudUser.updateUser)
 router.delete('/user/:id', crudUser.deleteUser)

 module.exports = router