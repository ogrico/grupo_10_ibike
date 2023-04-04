const Rol = require('./models/Rol'),
    Appauth = require('./models/Appauth'),
    Category = require('./models/Category'),
    User = require('./models/User'),
    Product = require('./models/Product'),
    Specification = require('./models/Specification'),
    Size = require('./models/Size')

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
 * One-To-Many relationships User to Rol
*/

Rol.hasMany(User, {
    foreignKey: "rol_id"
})
User.belongsTo(Rol, {
    foreignKey: "rol_id"
})

/**
 * One-To-Many relationships Product to Category
*/

Category.hasMany(Product, {
    foreignKey: "category_id"
})
Product.belongsTo(Category, {
    foreignKey: "category_id"
})

/**
 * One-To-Many relationships Specification to Product
*/

Product.hasMany(Specification, {
    foreignKey: "product_id"
})
Specification.belongsTo(Product,{
    foreignKey: "product_id"
})

/**
 * One-To-Many relationships Size to Product
*/

Product.hasMany(Size, {
    foreignKey: "product_id"
})
Size.belongsTo(Product,{
    foreignKey: "product_id"
})

module.exports = {
    Rol,
    Appauth,
    Category,
    User,
    Product,
    Specification,
    Size
}
