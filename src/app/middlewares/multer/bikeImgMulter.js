const multer = require('multer'),
    path = require('path')

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/img/products'),
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage,
    dest: path.join(__dirname, '../../public/img/products')
}).array('imagenes')

module.exports = upload