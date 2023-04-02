const Rol = require('./models/Rol'),
    Appauth = require('./models/Appauth'),
    Category = require('./models/Category')

/**
 * One-To-Many relationships Appauth to Rol
 */

Rol.hasMany(Appauth, {
    foreignKey: "rol_id"
})
Appauth.belongsTo(Rol, {
    foreignKey: "rol_id"
})

/**
 * 
 */

module.exports = {
    Rol,
    Appauth,
    Category
}
