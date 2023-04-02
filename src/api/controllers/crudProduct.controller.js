const { Product, Category, Specification } = require('../database/associations')

const crudProduct = {

    getProducts: async (_, res) => {
        try {
            const products = await Product.findAll({
                include: [{
                    model: Specification, Category 
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
    }

}

module.exports = crudProduct