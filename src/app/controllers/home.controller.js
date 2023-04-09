const axios = require('axios'),
  config = require('../../config')

const home = {

  home: async (_, res) => {

    try {
      let products = await axios.get('http://localhost:' + config.port + '/api/product/featured')
      products = products.data.products
      res.render('index', { products })
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = home