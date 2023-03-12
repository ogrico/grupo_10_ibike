const ProductEntiry = require('../services/data/ProductEntity')

var products = {

    getProducts: (_, res) => {
        let bikes = ProductEntiry.findAll()
        res.render('products', {bikes})

    }

}

module.exports = products