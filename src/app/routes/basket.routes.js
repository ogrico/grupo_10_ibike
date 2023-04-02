const {Router} = require('express')

const router = Router()

router.get('/comprar', (_, res) => {
    res.render('basket')
})

module.exports = router