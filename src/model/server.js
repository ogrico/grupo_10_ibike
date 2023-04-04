const express = require('express'),
    path = require('path'),
    config = require('../config'),
    methodOverride = require('method-override'),
    session = require('express-session');

/**
 * Se importan los mudulos de las rutas para el servidor
 */
const serviceRoutesHome = require('../app/routes/home.routes'),
    serviceRoutesBasket = require('../app/routes/basket.routes'),
    serviceRoutesProducts = require('../app/routes/products.routes'),
    serviceRoutesProfile = require('../app/routes/profile.routes'),
    serviceRoutesLogin = require('../app/routes/sing_in_up.routes'),
    //Rutas generadas para el api
    apiCrudRol = require('../api/routes/crudRol.routes'),
    apiCrudCategory = require('../api/routes/crudCategory.routes'),
    apiCrudAppauth = require('../api/routes/crudAppauth.routes'),
    apiCrudUser = require('../api/routes/crudUser.routes'),
    apiCrudProduct = require('../api/routes/crudProduct.routes')

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
        this.app.set('views', path.join(__dirname, '../app/views'))
        this.app.set('view engine', 'ejs')

        this.middlewares()
        this.routes()

    }

    middlewares() {

        this.app.use(express.urlencoded({ extended: true }))
        //Lectura y parseo del body
        this.app.use(express.json())
        //Carpeta publica
        this.app.use(express.static('src/app/public'))
        this.app.use(methodOverride('_method'))
        this.app.use(session({
            secret: "new session",
            resave: true,
            saveUninitialized: true
        }))

    }

    routes() {

        /**
         * Se inicializan las rutas expuestas para el servicio
         * Front
         */
        this.app.use(serviceRoutesHome)
        this.app.use(serviceRoutesBasket)
        this.app.use(serviceRoutesProducts)
        this.app.use(serviceRoutesProfile)
        this.app.use(serviceRoutesLogin)
        /**
         * Rutas expuestas para el api
         */
        this.app.use('/api', apiCrudRol)
        this.app.use('/api', apiCrudCategory)
        this.app.use('/api', apiCrudAppauth)
        this.app.use('/api', apiCrudUser)
        this.app.use('/api', apiCrudProduct)
        /**
         * Error 404
         */
        this.app.use((_, res) => {
            res.status(404).redirect('/')
        })

    }

    listen() {

        this.app.listen(this.app.get("port"), () => {
            console.log('Servidor corriendo en el puerto ', this.app.get("port"))
        })
    }

}

module.exports = Server