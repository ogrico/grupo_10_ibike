const { Router } = require('express'),
    profileController = require('../controllers/profile.controller'),
    authValidate = require('../middlewares/session/authValidate')


const router = Router()

router.get('/acount',authValidate, profileController.getProfile)
router.put('/acount/:id/update', profileController.updateProfile)
router.delete('/acount/:id/delete', profileController.deleteProfile)

module.exports = router