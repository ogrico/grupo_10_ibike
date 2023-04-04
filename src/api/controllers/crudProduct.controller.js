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

    }

}

module.exports = crudProduct