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
                "rol_id": req.body.rol_id,
                "imgPublic": "https://imgdh.blob.core.windows.net/imgusers/" + req.body.avatar
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
    },
    verifyUser: async (req, res) => {
        try {

            const user = await User.findAll({ include: [{ model: Rol }], where: { email: req.body.email } })

            if (user[0] == undefined) return res.status(200).json({ "msg": "Usuario o contraseña incorrecta" })
            if (user[0].state == 0) return res.status(200).json({ "msg": "Usuario inhabilitado" })

            let verifyPass = bcryptjs.compareSync(req.body.password, user[0].password)

            if (verifyPass) {
                return res.status(200).json({
                    "msg": "ok",
                    "user": {
                        "id": user[0].id,
                        "firstname": user[0].firstname,
                        "lastname": user[0].lastname,
                        "avatar": user[0].avatar,
                        "dni": user[0].dni,
                        "userEmail": user[0].email,
                        "rol": {
                            "value": user[0].rol.value,
                            "description": user[0].rol.description
                        }
                    }
                })
            }
            res.status(200).json({
                "msg": "Usuario o contraseña incorrecta"
            })

        } catch (error) {
            console.log(error)
            res.status(500).json(
                {
                    error
                }
            )
        }
    },
    verifyUserEmail: async (req, res) => {
        try {
            const user = await User.findAll({
                include: [{
                    model: Rol
                }],
                where: { email: req.params.email }
            })
            return res.status(200).json(
                {
                    "msg": "ok",
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
    }
}

module.exports = crudUser