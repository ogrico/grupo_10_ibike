const axios = require('axios'),
    config = require('../../config'),
    { LocalStorage } = require('node-localstorage')

localStorage = new LocalStorage('./src/app/local')
let productsBasket = []

const getItemsBasket = () => {
    return JSON.parse(localStorage.getItem('cart')) || []
}

const storage = (products) => {
    localStorage.setItem('cart', JSON.stringify(products))
    console.log("local", localStorage.getItem('cart'))
}

const addToCart = async (element) => {
    console.log('\n' + element + '\n')
    productsBasket.push(element)
    storage(productsBasket)
}

JSON.parse(localStorage.getItem('cart')) || []

const basket = {
    basket: async (req, res) => {
        try {
            let products = await axios.get('http://localhost:' + config.port + '/api/products/featured')
            products = products.data.products
            let product = await axios.get('http://localhost:' + config.port + '/api/product/'+req.params.id)
            console.log('\n Product' + product)
            addToCart(product)
            productsBasket = getItemsBasket()
            console.log('\n Productos to basket' + productsBasket + '\n')
            res.render('basket', { products, productsBasket })
            return 'OK'
        } catch (error) {
            console.log(error)
            res.redirect('/home')
        }
    }
}

module.exports = basket 