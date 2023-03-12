const userEntity = require('../services/data/UserEntity')

const profile = {

  getProfile:  (req, res) => {
    console.log(req.session)
    console.log(req.session.userLogged)
    res.render('profile', { 
      user: req.session.userLogged 
    })
  },

  updateProfile: function (req, res) {

    try {

      /**
         * Se crean las variebales para capturar los datos enviados en el formulario
         * Se crea un objeto literal para representar al usuario y la actualización de los datos
         */
      let { nombre, apellido, email, contrasena, avatar } = req.body,
        id = req.params.id,
        passEncrypted = bcryptEntity.hashSync(contrasena),
        user = userEntity.finByPk(id),
        updateUser = {
          "firstName": (!nombre) ? user.firstName : nombre,
          "lastName": (!apellido) ? user.lastName : apellido,
          "email": (!email) ? user.email : email,
          "password": (!contrasena) ? user.password : passEncrypted,
          "admin": false,
          "avatar": (!avatar) ? user.avatar : avatar,
          "state": true
        },
        update = userEntity.update(id, updateUser)

          (update == true) ? res.redirect('/profile') : res.redirect('/profile')

    } catch (error) {
      console.log(error)
      res.redirect('/home')
    }

  },

  deleteProfile: function (_, res) {

    try {

      /**
       * Se crea la variable id para capturar el id del usuario a eliminar 
       * Utulizamos el metodo delete de la entidad usuario
       */
      let id = req.params.id,
        temp = userEntity.delete(id)

          (temp == true) ? res.redirect('/home') : res.redirect('/profile')

    } catch (error) {
      console.log(error)
      res.redirect('/home')
    }


  }

}

module.exports = profile