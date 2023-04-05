const { Product, Size } = require('../database/associations')

const crudProduct = {

    getProducts: async (_, res) => {

        try {
            const products = await Product.findAll({
                include: [{
                    model: Size
                }]
            })
            res.status(200).json(
                {
                    msg: "Ok",
                    products
                }
            )
        } catch (error) {
            res.status(500).json({
                error
            })
        }

    },
    createProduct: async (req, res) => {
    },
    updateProduct: async (req, res) => {
        try {
            const product = await Product.update(req.body, {
                where: { id: req.params.id }
            })
            console.log(rol)
            res.status(201).json({
                msg: "Ok",
                body: req.body,
                product
            })
        } catch (error) {
            res.status(500).json(
                {
                    error
                }
            )
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await Product.destroy({
                where: { id: req.params.id }
            })
            res.status(201).json({
                msg: "Ok",
                id: req.params.id,
                product
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

module.exports = crudProduct