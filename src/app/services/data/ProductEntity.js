const fs = require('fs'),
    path = require("path"),
    userDataPath = path.join(__dirname, "../../data/products.json")

/**
 * Objeto literar usado para representar diferentes funciones 
 * para trabajar con la información de los productos (CRUD)
 */

const Product = {

    /**
     * Metodo para leer el contenido del Json
     * @returns 
     */
    getData: function () {
        return JSON.parse(fs.readFileSync(userDataPath, 'utf-8'))
    },

    /**
     * Metodo para recuperar el ultimo id del JSON y enviar un valor mayor
     * @returns 
     */
    generateId: function () {
        let allProducts = this.getData(),
            lassProduct = allProducts.pop()
        if (lassProduct) return lassProduct.id + 1
        return 1
    },

    /**
     * Metodo para devolver el listado de usuarios
     * @returns 
     */
    findAll: function () {
        return this.getData()
    },

    /**
     * Metodo para buscar un usuario por su PK o id
     * @param {*} id 
     * @returns 
     */
    finByPk: function (id) {
        let allProducts = this.getData(),
            result = allProducts.filter(product => product.id === id)
        return result
    },

    /**
     * Metodo para consultar en los usuarios una coincidencia mediante un campo especifico
     * @param {*} field 
     * @param {*} value 
     * @returns 
     */
    finByField: function (field, value) {
        let allProducts = this.getData(),
            result = allProducts.filter(product => product[field] === value)
        return result
    },

    /**
     * Metodo para crear un nuevo usuario en el archivo Json
     * @param {*} product 
     * @returns 
     */
    create: function (product) {
        let allProducts = this.getData(),
            newUser = {
                id: this.generateId(),
                ...product
            }
        allProducts.push(newUser)
        try {
            fs.writeFileSync(userDataPath, JSON.stringify(allProducts, null, ' '))
            return true
        } catch (error) {
            console.log('Error en la creación del archivo ', error)
            return false
        }

    },

    update: function (field, value,product) {

        let allProducts = this.getData(),
            result = allProducts.filter(product => product[field] != value),
            newProduct = {
                id: this.generateId(),
                ...product
            }
            result.push(newProduct)
        try {
            fs.writeFileSync(userDataPath, JSON.stringify(result, null, ' '))
            return true
        } catch (error) {
            console.log('Error en la creación del archivo ', error)
            return false
        }

    },

    delete: function (id) {

        let allProducts = this.getData(),
            result = allProducts.filter(product => product[id] != value)

        try {
            fs.writeFileSync(userDataPath, JSON.stringify(result, null, ' '))
            return true
        } catch (error) {
            console.log('Error en la creación del archivo ', error)
            return false
        }

    }

}

module.exports = Product