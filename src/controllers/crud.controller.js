const fs = require('fs'),
    path = require('path'),
    bikesDataPath = path.join(__dirname, '../data/bikes.json')

let bikes = JSON.parse(fs.readFileSync(bikesDataPath, 'utf-8'))


const curd = {

    formProduct: (_, res) => {
        res.render('create')
    },
    createProduct: (req, res) => {

        console.log(req.file)


        let newBody = {
            'imagen1': req.files[0].originalname,
            'imagen2': req.files[1].originalname,
            'id': 100,
            'nombre': req.body.nombre,
            'tipo': req.body.tipo,
            'modelo': req.body.modelo,
            'referencia': req.body.referencia,
            'valor': req.body.valor,
            'descuento': req.body.descuento,
            'talla': req.body.talla,
            'descripcion': req.body.descripcion,
            'espesificaiones': [
                {
                    'nombre': req.body.esp_nombre,
                    'descripcion': req.body.esp_descripcion
                },
                {
                    'nombre': req.body.esp_nombre2,
                    'descripcion': req.body.esp_descripcion2
                },
                {
                    'nombre': req.body.esp_nombre2,
                    'descripcion': req.body.esp_descripcion2
                }
            ]
        }

        bikes.push(newBody)
        console.log('Bicicleta a crear : ', newBody, '\n')

        try {
            fs.writeFileSync(bikesDataPath, JSON.stringify(bikes))
            console.log('Todo Ok')
            res.render('products', {
                bikes
            })
        } catch (error) {
            console.log('error : ' + error)
            res.render('create')
        }

    }

}

module.exports = curd