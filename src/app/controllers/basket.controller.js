const axios = require('axios'),
    config = require('../../config')

const basket = {
    basket: async (req, res) => {
        try {

            let products = await axios.get('http://localhost:' + config.port + '/api/products/featured')
            products = products.data.products
            res.render('basket', { products })
            return 'OK'
        } catch (error) {
            console.log(error)
            res.redirect('/home')
        }
    },
    session: (req, res) => {
        if (!req.session.userLogged) {
            return res.redirect('/singIn')
        }
        return res.redirect('/basket')
    }

}

module.exports = basket 