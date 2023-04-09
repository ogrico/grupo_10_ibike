const { Specification } = require('../database/associations')

const crudSpecification = {

    getAll: async (_, res) => {
        try {
            const specifications = await Specification.findAll()
            res.status(200).json({
                "msg": "ok",
                specifications
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    getByProduct: async (req, res) => {
        try {
            const specifications = await Specification.findAll({
                where: { product_id: req.params.id }
            })
            res.status(200).json({
                "msg": "ok",
                specifications
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    createSpecification: async (req, res) => {
        try {
            const newSpecification = {
                "name": req.body.name,
                "description": req.body.description,
                "product_id": req.body.product_id
            }, specification = await Specification.create(newSpecification)
            res.status(200).json({
                "msg": "ok",
                specification
            })
        } catch (error) {
            res.status(200).json({
                error
            })
        }
    },
    updateSpecification: async (req, res) => {
        try {
            const specification = await Specification.update(req.body, {
                where: { id: req.params.id }
            })
            res.status(200).json({
                "msg": "ok",
                specification
            })
        } catch (error) {
            res.status(200).json({
                error
            })
        }
    },
    deleteSpecificarion: async (req, res) => {
        try {
            const specification = await Specification.destroy({
                where: { id: req.params.id }
            })
            res.status(200).json({
                "msg": "ok",
                specification
            })
        } catch (error) {
            res.status(200).json({
                error
            })
        }
    }

}

module.exports = crudSpecification