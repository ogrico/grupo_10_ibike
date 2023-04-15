const axios = require('axios'),
config = require('../../config')

const products = {

    getProducts: async (_, res) => {
       try {
        const products = await axios.get('http://localhost:'+ config.port + '/api/product')
        res.render('products', products.data)
       } catch (error) {
        console.log(error)
       }

    },
    detail: async (req, res) => {
        try {
            const product = await axios.get('http://localhost:'+ config.port + '/api/product/' + req.params.referencia)
            res.render('product', product.data)
        } catch (error) {
            console.log(error)
        }
        
    },
    formCreateProduct: (_, res) => {
        res.render("createProduct")
    },
    createBike: (req, res) => {
        let {
            nombre, tipo, modelo, referencia, valor, descuento, talla, descripcion,
            esp_nombre, esp_descripcion, esp_nombre2, esp_descripcion2,
            esp_nombre3, esp_descripcion3
        } = req.body,
            newBike =
            {
                "categoria": "Bike",
                "imagen1": req.files[0].originalname,
                "imagen2": req.files[1].originalname,
                "nombre": nombre,
                "tipo": tipo,
                "modelo": modelo,
                "referencia": referencia,
                "valor": valor,
                "descuento": descuento,
                "destacado": false,
                "talla": talla,
                "descripcion": descripcion,
                "especificaciones": [
                    {
                        "nombre": esp_nombre,
                        "descripcion": esp_descripcion,
                    },
                    {
                        "nombre": esp_nombre2,
                        "descripcion": esp_descripcion2,
                    },
                    {
                        "nombre": esp_nombre3,
                        "descripcion": esp_descripcion3,
                    },
                ]
            },
            create = ProductEntity.create(newBike)
        if (create) console.log('Bicicleta registrada')
        res.redirect('/products')
    },
    formUpdateProduct: (req, res) => {
        let bike = ProductEntity.finByField('referencia', req.params.referencia)
        res.render('editProduct', { bike })
    },
    updateBike: (req, res) => {
        let {
            nombre, tipo, modelo, referencia, valor, descuento, talla, descripcion,
            esp_nombre, esp_descripcion, esp_nombre2, esp_descripcion2,
            esp_nombre3, esp_descripcion3
        } = req.body,
        allBike = ProductEntity.finByField('referencia', req.params.referencia)
            updateBike =
            {
                "categoria": "Bike",
                "imagen1": allBike[0].imagen1,
                "imagen2": allBike[0].imagen2,
                "nombre": nombre,
                "tipo": tipo,
                "modelo": modelo,
                "referencia": referencia,
                "valor": valor,
                "descuento": descuento,
                "destacado": false,
                "talla": talla,
                "descripcion": descripcion,
                "especificaciones": [
                    {
                        "nombre": esp_nombre,
                        "descripcion": esp_descripcion,
                    },
                    {
                        "nombre": esp_nombre2,
                        "descripcion": esp_descripcion2,
                    },
                    {
                        "nombre": esp_nombre3,
                        "descripcion": esp_descripcion3,
                    },
                ]
            },
            update = ProductEntity.update('referencia',req.params.referencia,updateBike)
            if(update) console.log('Bicileta Actualizada')
            res.redirect('/products')
    }

}

module.exports = products