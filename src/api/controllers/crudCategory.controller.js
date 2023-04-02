const { Category } = require('../database/associations')

const crudCategory = {
    getAll: async (_, res) => {
        try {
            const categorys = Category.findAll()
            res.status(200).json(
                {
                    categorys
                }
            )
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    }
}

module.exports = crudCategory