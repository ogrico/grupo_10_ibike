const multer = require('multer'),
    path = require('path')

/**
 * Metodo para indicar la ruta destino de las imagenes
 * y asiganrles un nombre
 */
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/img/products/bikes'),
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})

/**
 * Metodo para realizar la carga de imagenes desde un fomrulario
 * se cargan desde el imput files name ="imagenes"
 */
const upload = multer({
    storage,
    dest: path.join(__dirname, '../public/img/products/bikes')
}).array('imagenes')

module.exports = upload