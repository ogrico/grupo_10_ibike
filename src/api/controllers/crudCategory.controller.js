const { Category } = require('../database/associations')

const crudCategory = {
    getAll: async (_, res) => {
        try {
            const categorys = Category.findAll()
            res.status(200).json(
                {
                    msg: "Ok",
                    categorys
                }
            )
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    createCategory: async (req, res) => {

        try {
            const category = await Category.create(req.body)
            res.status(201).json(
                {
                    msg: "Ok",
                    body: req.body,
                    category
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
    updateCategory: async (req, res) => {
        try {
            const category = await Category.update(req.body, {
                where: { id: req.params.id }
            })
            console.log(rol)
            res.status(201).json({
                msg: "Ok",
                body: req.body,
                category
            })
        } catch (error) {
            res.status(500).json(
                {
                    error
                }
            )
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await Category.destroy({
                where: { id: req.params.id }
            })
            res.status(201).json({
                msg: "Ok",
                id: req.params.id,
                category
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

module.exports = crudCategory