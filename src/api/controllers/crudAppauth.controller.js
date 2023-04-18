const { Appauth, Rol } = require('../database/associations')

const crudAppauth = {

    getAll: async (_, res) => {
        try {
            const appAuths = await Appauth.findAll({
                include: [{
                    model: Rol
                }]
            })
            res.status(200).json({
                appAuths
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    creatAppauth: async (req, res) => {

        try {
            const appAuth = await Appauth.create(req.body)
            res.status(201).json(
                {
                    msg: "Ok",
                    body: req.body,
                    appAuth
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    error
                }
            )
        }

    },
    updateAppauth: async (req, res) => {
        try {
            const appAuth = await Appauth.update(req.body, {
                where: { id: req.params.id }
            })
            console.log(rol)
            res.status(201).json({
                msg: "Ok",
                body: req.body,
                appAuth
            })
        } catch (error) {
            res.status(500).json(
                {
                    error
                }
            )
        }
    },
    deleteAppauth: async (req, res) => {
        try {
            const appAuth = await Appauth.destroy({
                where: { id: req.params.id }
            })
            res.status(201).json({
                msg: "Ok",
                id: req.params.id,
                appAuth
            })
        } catch (error) {
            res.status(500).json(
                {
                    error
                }
            )
        }
    }
}

module.exports = crudAppauth