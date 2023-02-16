const fs = require('fs')
const path = require('path')

const bikesFilePath = path.join(__dirname, '../data/bikes.json')
const bikes = JSON.parse(fs.readFileSync(bikesFilePath, 'utf-8'))

const home = {

  home: (_, res) => {
    let bikesDes = bikes.filter(bike => bike.destacado === true)
    res.render('index', { bikesDes })
  },

  error: (_, res) => {
    res.redirect('/home')
  }

}

module.exports = home