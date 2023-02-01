const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001

//Motor de plantillas
app.set('views', __dirname + '/src/views/partials')
app.set('view engine', 'ejs')

app.use(express.static('src/public'))

const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}

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


app.get('/', (_ , res) => {
    res.sendFile(path.resolve('src/views/index.html'))
})

app.get('/home', (_ , res) => {
    res.sendFile(path.resolve('src/views/index.html'))
})

app.get('/forms', (_, res) => {
    res.sendFile(path.resolve('src/views/forms.html'))
})

app.get('/comprar', (_, res) => {
    res.sendFile(path.resolve('src/views/forms.html'))
})

app.get('/product', (_, res) => {
    res.sendFile(path.resolve('src/views/product.html'))
})

app.get('/products', (_, res) => {
    res.render('products',{
        dataProducts: dataProducts
    })
})

// gene //

app.get('/list', (_, res) => {
    res.sendFile(path.resolve('src/views/list.html'))
})

app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})