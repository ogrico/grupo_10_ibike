const {Router} = require('express')
const path = require('path')

const router = Router()

router.get('/comprar', (_, res) => {
    res.sendFile(path.resolve('src/views/forms.html'))
})

module.exports = router