const {Router} = require('express')
const path = require('path')

const router = Router()

router.get('/product', (_, res) => {
    res.render('product')
})

module.exports = router