const { Router } = require('express'),
    crudAppauth = require('../controllers/crudAppauth.controller')

const router = Router()

router.get('/appAuth', crudAppauth.getAll)
router.post('/appAuth', crudAppauth.creatAppauth)
router.put('/appAuth/:id', crudAppauth.updateAppauth)
router.delete('/appAuth/:id', crudAppauth.deleteAppauth)

module.exports = router