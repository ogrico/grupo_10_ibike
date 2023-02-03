const express = require('express')
const path = require('path')
const config = require('../config')

const serviceRoutesHome = require('../routes/home.routes')
const serviceRoutesBasket = require('../routes/basket.routes')
const serviceRoutesProducts = require('../routes/products.routes')
const serviceRoutesProduct = require('../routes/product_details.routes')
const serviceRoutesProfile = require('../routes/profile.routes')


class Server {

    constructor() {
        this.app = express()
        this.app.set("port", config.port)   
        //Motor de plantillas
        this.app.set('views', path.join(__dirname, '../views/partials'))
        this.app.set('view engine', 'ejs')

        //Carpeta publica
        this.app.use(express.static('src/public'))     

        this.middlewares()
        this.routes()

    }

    middlewares() {

        this.app.use(express.urlencoded({extended: false}))
        //Lectura y parseo del body
        this.app.use(express.json())        

    }

    routes() {

        this.app.use(serviceRoutesHome)
        this.app.use(serviceRoutesBasket)
        this.app.use(serviceRoutesProducts)
        this.app.use(serviceRoutesProduct)
        this.app.use(serviceRoutesProfile)

    }

    listen() {

        this.app.listen(this.app.get("port"), () => {
            console.log('Servidor corriendo en el puerto ', this.app.get("port"))
        })
    }


}



module.exports = Server