const {Router} = require('express')
const path = require('path')

const router = Router()

const dataProducts = [
    {
        name:"P1",
        des:"D1"
    },
    {
        name:"P2",
        des:"D2"
    },
    {
        name:"P2",
        des:"D3"
    }
]

router.get('/product', (_, res) => {
    res.sendFile(path.resolve('src/views/product.html'))
})

module.exports = router