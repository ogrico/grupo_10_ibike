const { User, Rol } = require('../database/associations'),
    bcryptjs = require('../services/bcryptjs')

const crudUser = {
    getAll: async (_, res) => {
        try {
            const user = await User.findAll({
                include: [{
                    model: Rol
                }]
            })
            res.status(200).json(
                {
                    msg: "Ok",
                    user
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
    createUser: async (req, res) => {
        try {
            const newUser = {
                "firstname": req.body.firstname,
                "lastname": req.body.lastname,
                "avatar": req.body.avatar,
                "state": req.body.state,
                "dni": req.body.dni,
                "email": req.body.email,
                "password": bcryptjs.hashSync(req.body.password),
                "rol_id": req.body.rol_id
            },
                user = await User.create(newUser)
            res.status(200).json(
                {
                    msg: "Ok",
                    body: req.body,
                    "user": user.id
                }
            )
        } catch (error) {
            res.status(500).json(
                { error }
            )
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await User.update(req.body, {
                where: { id: req.params.id }
            })
            console.log(rol)
            res.status(201).json({
                msg: "Ok",
                body: req.body,
                user
            })
        } catch (error) {
            res.status(500).json(
                {
                    error
                }
            )
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.destroy({
                where: { id: req.params.id }
            })
            res.status(201).json({
                msg: "Ok",
                id: req.params.id,
                user
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

module.exports = crudUser