const axios = require('axios'),
    config = require('../../config')

const products = {

    getProducts: async (req, res) => {
        try {
            const response = await axios.get('http://localhost:' + config.port + '/api/product/category/' + req.params.id)
            let products = response.data.products, userLogged = req.session.userLogged
            res.render('products', { products, userLogged })
        } catch (error) {
            console.log(error)
        }

    },
    detail: async (req, res) => {
        try {
            const product = await axios.get('http://localhost:' + config.port + '/api/product/reference/' + req.params.referencia),
                response = product.data.product[0], userLogged = req.session.userLogged,
                specifications = await axios.get('http://localhost:' + config.port + '/api/specification/byProduct/' + + response.id),
                specificationsResponse = specifications.data.specifications
            res.render('product', { response, userLogged, specificationsResponse })
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }

    },
    formCreateProduct: (_, res) => {
        res.render("createProduct")
    },
    createProduct: async (req, res) => {
        try {
            let {
                categoria, nombre, tipo, modelo, referencia, valor, descuento, talla, descripcion,
                esp_nombre, esp_descripcion, esp_nombre2, esp_descripcion2,
                esp_nombre3, esp_descripcion3
            } = req.body
            const newProduct = {
                "category_id": categoria,
                "imagen1": req.files[0].originalname,
                "imagen2": req.files[1].originalname,
                "type": tipo,
                "model": modelo,
                "referencia": referencia,
                "name": nombre,
                "value": valor,
                "discount": descuento,
                "description": descripcion,
                "featured": false,
                "size": [],
                "specification":
                    [
                        {
                            "name": esp_nombre,
                            "description": esp_descripcion
                        },
                        {
                            "name": esp_nombre2,
                            "description": esp_descripcion2
                        },
                        {
                            "name": esp_nombre3,
                            "description": esp_descripcion3
                        }

                    ]
            }
            const createProduct = await axios.post('http://localhost:' + config.port + '/api/product', newProduct)
            res.redirect('/home')
        } catch (error) {
            console.log(error)
            res.redirect('/home')
        }
    },
    formUpdateProduct: async (req, res) => {
        try {
            const product = await axios.get('http://localhost:' + config.port + '/api/product/' + req.params.id)
            let response = product.data.product[0], userLogged = req.session.userLogged
            res.render('editProduct', { response, userLogged })
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    },
    updateBike: async (req, res) => {
        try {
            const product = await axios.get('http://localhost:' + config.port + '/api/product/' + req.params.id),
                { nombre, tipo, modelo, referencia, valor, descuento, descripcion } = req.body,
                newBody = {
                    category_id: product.data.product[0].category_id,
                    imagen1: product.data.product[0].imagen1,
                    imagen2: product.data.product[0].imagen2,
                    type: tipo,
                    model: modelo,
                    referencia: referencia,
                    name: nombre,
                    value: valor,
                    discount: descuento,
                    description: descripcion,
                    featured: product.data.product[0].featured
                },
                updateProduct = await axios.put('http://localhost:' + config.port + '/api/product/update/' + product.data.product[0].id, newBody)
            res.redirect('/products')
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const deleteProduct = await axios.delete('http://localhost:' + config.port + '/api/product/' + req.params.id)
            res.redirect('/home')
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

}

module.exports = products