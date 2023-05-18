const axios = require('axios'),
    config = require('../../config')

const profile = {

  getProfile: async (req, res) => {
    let userLogged = req.session.userLogged
    const user = await axios.get('http://localhost:' + config.port + '/api/products/featured')
    res.render('profile', {
      user: req.session.userLogged, userLogged
    })
  },
  updateProfile: function (req, res) {
    try {
      
    } catch (error) {
      console.log(error)
      res.redirect('/home')
    }    
  }

}

module.exports = profile