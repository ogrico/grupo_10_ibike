const {Router} = require('express')
const path = require('path')

const router = Router()

const dataProducts = [
    {
        des:"bici ruta 1",
        price:"$10000",
        img:"img/products/bikes/bike2.jpg"
    },
    {
        des:"bici ruta 2",
        price:"$20000",
        img:"img/products/bikes/bike3.jpg"
    },
    {
        des:"bici ruta 3",
        price:"$30000",
        img:"img/products/bikes/bike2.jpg"
    },
    {
        des:"bici ruta 4",
        price:"$40000",
        img:"img/products/bikes/bike3.jpg"
    }
]

router.get('/products', (_, res) => {
    res.render('products', {
        dataProducts
    })
    //res.sendFile(path.resolve('src/views/list.html'))
})

module.exports = router