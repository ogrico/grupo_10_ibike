const fs = require('fs')
const path = require('path')

const bikesFilePath = path.join(__dirname, '../data/bikes.json')
const bikes = JSON.parse(fs.readFileSync(bikesFilePath, 'utf-8'))

var products = {

    getProducts: (_, res) => {

        res.render('products', {bikes})

    }

}

module.exports = products