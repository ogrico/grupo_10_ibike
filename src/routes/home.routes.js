const {Router} = require('express')
const path = require('path')

const router = Router()

router.get('/', (_ , res) => {
    res.render('index')
})

router.get('/home', (_ , res) => {
    res.render('index')
})

module.exports = router