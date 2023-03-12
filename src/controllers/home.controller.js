const ProductEntiry = require('../services/data/ProductEntity')

const home = {

  home: (req, res) => {

    let allBikes = ProductEntiry.finByField('destacado','true')

    res.render('index', { allBikes })
  }

}

module.exports = home