const {Router} = require('express')
const path = require('path')

const router = Router()

router.get('/acount', (_, res) => {
    res.sendFile(path.resolve('src/views/profile.html'))
})

module.exports = router