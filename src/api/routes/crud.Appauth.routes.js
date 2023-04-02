const { Router } = require('express'),
    crudAppauth = require('../controllers/crudAppauth.controller')

const router = Router()

router.get('/appAuth', crudAppauth.getAll)

module.exports = router