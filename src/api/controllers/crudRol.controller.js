const { Rol } = require('../database/associations')

const crudRol = {

    getAll: async (_, res) => {

        try {
            const rol = await Rol.findAll()
            res.status(200).json(
                {
                    msg: "Ok",
                    rol
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
    createRol: async (req, res) => {

        try {
            const rol = await Rol.create(req.body)
            res.status(201).json(
                {
                    msg: "Ok",
                    body: req.body,
                    rol
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
    updateRol: async (req, res) => {
        try {
            const rol = await Rol.update(req.body, {
                where: { id: req.params.id }
            })
            console.log(rol)
            res.status(201).json({
                msg: "Ok",
                body: req.body,
                rol
            })
        } catch (error) {
            res.status(500).json(
                {
                    error
                }
            )
        }
    },
    deleteRol: async (req, res) => {
        try {
            const rol = await Rol.destroy({
                where: { id: req.params.id }
            })
            res.status(201).json({
                msg: "Ok",
                id: req.params.id,
                rol
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

module.exports = crudRol 