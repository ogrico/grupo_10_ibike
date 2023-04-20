

const profile = {

  getProfile: (req, res) => {
    let userLogged = req.session.userLogged
    res.render('profile', {
      user: req.session.userLogged, userLogged
    })
  },
  updateProfile: function (req, res) {
    res.redirect('/home')
  },
  deleteProfile: function (_, res) {

    res.redirect('/home')

  }

}

module.exports = profile