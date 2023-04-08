const { Size } = require('../database/associations')

const crudSize = {
    getAll: async (_, res) => {
        try {
            const size = await Size.findAll()
            res.status(200).json({
                "msg": "ok",
                size
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    getByProduct: async (req, res) => {
        try {
            const size = await Size.findAll({
                where: { product_id: req.params.id }
            })
            res.status(200).json({
                "msg": "ok",
                size
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    createSize: async (req, res) => {
        try {
            const newSize = {
                "name": req.body.name,
                "stock": req.body.stock,
                "product_id": req.body.product_id
            },
                size = await Size.create(newSize)
            res.status(200).json({
                "msg": "ok",
                size
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    updateSize: async (req, res) => {
        try {
            const size = await Size.update(req.body, {
                where: { id: req.params.id }
            })
            res.status(200).json({
                "msg": "ok",
                size
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    deleteSize: async (req, res) => {
        try {
            const size = await Size.destroy({
                where: { id: req.params.id }
            })
            res.status(200).json({
                "msg": "ok",
                size
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        } 
    }
}

module.exports = crudSize