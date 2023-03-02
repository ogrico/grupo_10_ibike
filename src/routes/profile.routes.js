const {Router} = require('express'),
    profileController = require('../controllers/profile.controller')
const profile = require('../controllers/profile.controller')

const router = Router()

router.get('/acount', profileController.getProfile)
router.put('/acount/:id/update', profileController.updateProfile)
router.delete('/acount/:id/delete', profileController.deleteProfile)

module.exports = router