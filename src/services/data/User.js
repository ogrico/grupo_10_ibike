const fs = require('fs')


/**
 * Objeto literar usado para representar diferentes funciones 
 * para trabajar con la información de los usuarios (CRUD)
 */
const User = {

    //  propiedad con la ruta del archivo Json de usuarios
    fielName: '../../data/users.json',

    /**
     * Metodo para leer el contenido del Json
     * @returns 
     */
    getData: () => {
        return JSON.parse(fs.readFileSync(this.fielName, 'utf-8'))
    },

    /**
     * Metodo para recuperar el ultimo id del JSON y enviar un valor mayor
     * @returns 
     */
    generateId: () => {
        let allUsers = this.getData(),
            lassUser = allUsers.pop()
        if (lassUser) return lassUser.id + 1
        return 1
    },

    /**
     * Metodo para devolver el listado de usuarios
     * @returns 
     */
    findAll: () => {
        return this.getData()
    },

    /**
     * Metodo para buscar un usuario por su PK o id
     * @param {*} id 
     * @returns 
     */
    finByPk: (id) => {
        let allUsers = this.getData(),
            result = allUsers.filter(user => user.id === id)
        return result
    },

    /**
     * Metodo para consultar en los usuarios una coincidencia mediante un campo especifico
     * @param {*} field 
     * @param {*} value 
     * @returns 
     */
    finByField: (field, value) => {
        let allUsers = this.getData(),
            result = allUsers.filter(user => user[field] === value)
        return result
    },

    /**
     * Metodo para crear un nuevo usuario en el archivo Json
     * @param {*} user 
     * @returns 
     */
    create: (user) => {
        let allUsers = this.getData()
        newUser = {
            id: this.generateId(),
            ...user
        }
        allUsers.push(newUser)
        try {
            fs.writeFileSync(this.fielName, JSON.stringify(allUsers, null, ' '))
            return true
        } catch (error) {
            console.log('Error en la creación del archivo ', error)
            return false
        }

    }
}

module.exports = User