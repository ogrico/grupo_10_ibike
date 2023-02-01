const {Router} = require('express')
const path = require('path')

const router = Router()

router.get('/', (_ , res) => {
    res.sendFile(path.resolve('src/views/index.html'))
})

router.get('/home', (_ , res) => {
    res.sendFile(path.resolve('src/views/index.html'))
})

module.exports = router