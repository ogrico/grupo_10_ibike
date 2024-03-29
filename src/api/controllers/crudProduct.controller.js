const { Product, Size, Specification } = require('../database/associations')

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
    getProduct: async (req, res) => {
        try {
            const product = await Product.findAll({
                include: [{
                    model: Size
                }],
                where: { id: req.params.id }
            })
            res.status(201).json({
                msg: "Ok",
                body: req.body,
                product
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    createProduct: async (req, res) => {
        try {
            const {
                category_id, imagen1, imagen2, type, model,
                referencia, name, value, discount, description,
                featured, size, specification
            } = req.body,
                product = await Product.create({
                    imagen1: imagen1,
                    imagen2: imagen2,
                    type: type,
                    model: model,
                    referencia: referencia,
                    name: name,
                    value: value,
                    discount: discount,
                    description: description,
                    featured: featured,
                    category_id: category_id,
                    publicimg1: 'https://imgdh.blob.core.windows.net/imgproduct/' + imagen1,
                    publicimg2: 'https://imgdh.blob.core.windows.net/imgproduct/' + imagen2
                })
            size.forEach(async element => {
                let size = await Size.create({ ...element, "product_id": product.id })
            })
            specification.forEach(async element => {
                let specification = await Specification.create({ ...element, "product_id": product.id })
            })
            res.status(200).json({
                "msg": "ok",
                product
            })
        } catch (error) {
            res.status(500).json({
                error
            })
        }
    },
    updateProduct: async (req, res) => {
        try {
            const product = await Product.update(req.body, {
                where: { id: req.params.id }
            })
            res.status(201).json({
                msg: "Ok",
                body: req.body,
                product
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
    deleteProduct: async (req, res) => {
        try {
            const sizes = await Size.findAll({
                where: { product_id: req.params.id }
            }),
                specification = await Specification.findAll({
                    where: { product_id: req.params.id }
                })

            sizes.forEach(async element => {
                let size = Size.destroy({
                    where: { id: element.dataValues.id }
                })
            })

            specification.forEach(async element => {
                let specification = Specification.destroy({
                    where: { id: element.dataValues.id }
                })
            })

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
    },
    getProductFeatured: async (_, res) => {
        try {
            const products = await Product.findAll({
                where: { featured: true }
            })
            res.status(200).json({
                "msg": "ok",
                products
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    ProductReference: async (req, res) => {
        try {
            const product = await Product.findAll({
                where: { referencia: req.params.referencia }
            })
            res.status(200).json({
                "msg": "ok",
                product
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    ProductsCategoria: async (req, res) => {

        try {
            const products = await Product.findAll({

                where: { category_id: req.params.id }

            })
            res.status(200).json({
                "msg": "ok",
                products
            })
        } catch (error) {
            res.status(500).json(error)
        }

    },
    testPagination: async (req, res) => {
        try {
            const products = await Product.findAll({
                include: [{
                    model: Size
                }],
                limit: 5
            })
            res.status(200).json(
                {
                    msg: "Ok",
                    products
                }
            )
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

module.exports = crudProduct