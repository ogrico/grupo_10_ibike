const {Router} = require('express')
const path = require('path')

const router = Router()

router.get('/products', (_, res) => {
    res.sendFile(path.resolve('src/views/list.html'))
})

module.exports = router