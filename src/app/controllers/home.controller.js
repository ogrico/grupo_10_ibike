const axios = require('axios'),
  config = require('../../config')

const home = {

  home: async (req, res) => {

    try {
      let products = await axios.get('http://localhost:' + config.port + '/api/products/featured')
      products = products.data.products, userLogged = req.session.userLogged
      res.render('index', { products, userLogged })
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = home