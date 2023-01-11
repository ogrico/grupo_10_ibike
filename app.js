const express = require('express')
const path = require('path')

const app = express()

const PORT = 3001

app.use(express.static('src/public'))

app.get('/home', (_ , res) => {
    res.sendFile(path.resolve('src/views/home.html'))
})

app.get('/comprar', (_, res) => {
    res.sendFile(path.resolve('src/views/forms.html'))
})

app.get('/product', (_, res) => {
    res.sendFile(path.resolve('src/views/product.html'))
})

app.get('/products', (_, res) => {
    res.sendFile(path.resolve('src/views/products.html'))
})

app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})