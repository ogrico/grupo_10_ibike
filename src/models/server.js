const express = require('express'),
    path = require('path'),
    config = require('../config'),
    methodOverride = require('method-override'),
    session = require('express-session');

    

/**
 * Se importan los mudulos de las rutas para el servidor
 */
const serviceRoutesHome = require('../routes/home.routes'),
    serviceRoutesBasket = require('../routes/basket.routes'),
    serviceRoutesProducts = require('../routes/products.routes'),
    serviceRoutesProduct = require('../routes/product_details.routes'),
    serviceRoutesProfile = require('../routes/profile.routes'),
    serviceRoutesLogin = require('../routes/sing_in_up.routes'),
    serviceRoutesCreate = require('../routes/crud.routes')


/**
 * Se realiza la representación
 */
class Server {

    /**
     * Constructor para inicializar el Servidor 
     */
    constructor() {
 
        this.app = express()
        this.app.set("port", config.port)
        //Motor de plantillas
        this.app.set('views', path.join(__dirname, '../views'))
        this.app.set('view engine', 'ejs')

        this.middlewares()
        this.routes()

    }

    middlewares() {

        this.app.use(express.urlencoded({ extended: true }))
        //Lectura y parseo del body
        this.app.use(express.json())
        //Carpeta publica
        this.app.use(express.static('src/public'))
        this.app.use(methodOverride('_method'))
        this.app.use(session({secret : "new session"}));

    }

    routes() {

        // Se inicializan las rutas
        this.app.use(serviceRoutesHome)
        this.app.use(serviceRoutesBasket)
        this.app.use(serviceRoutesProducts)
        this.app.use(serviceRoutesProduct)
        this.app.use(serviceRoutesProfile)
        this.app.use(serviceRoutesLogin)
        this.app.use(serviceRoutesCreate)
        this.app.use((req,res,next) =>{
            res.status(404).redirect('/');
        })
      

    }



    listen() {

        this.app.listen(this.app.get("port"), () => {
            console.log('Servidor corriendo en el puerto ', this.app.get("port"))
        })
    }


}

module.exports = Server