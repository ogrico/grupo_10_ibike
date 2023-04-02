const { Router } = require('express'),
 crudUser = require('../controllers/crudUser.controller')

 const router = Router()

 router.get('/user', crudUser.getAll)
 router.post('/user', crudUser.createUser)
 router.put('/user/:id', crudUser.updateUser)
 router.delete('/user/:id', crudUser.deleteUser)

 module.exports = router