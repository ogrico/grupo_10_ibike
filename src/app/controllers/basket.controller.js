const axios = require('axios'),
    config = require('../../config')

let basketProducts = []

const getBasket = () => {
    return JSON.parse(localStorage.getItem('basket')) || []
}, addToBasket = (element) => {
    let product = {
        id: element.dataset.id,
        name: element.dataset.name,
        imagen: element.dataset.imagen1,
        value: element.dataset.value
    }
    basketProducts.push(product)
    storage(basketProducts)
}, storage = (basketProducts) => {
    localStorage.setItem('basket', JSON.stringify(basketProducts))
}

const basket = {
    basket: async (req, res) => {
        try {
            basketProducts = getBasket()
            let product = await axios.get('http://localhost:' + config.port + '/api/product/featured')
            product = products.data.products
            let products = getBasket()
            console.log(product);
            res.render('basket', { products })
            return 'OK'
        } catch (error) {
            console.log(error)
            res.redirect('/home')
        }
    }
}

module.exports = basket 