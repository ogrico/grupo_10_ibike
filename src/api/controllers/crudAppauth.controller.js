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
    createAppauth: async (req, res) => {
        const newAppauth = Appauth.create()

    }
}

module.exports = crudAppauth