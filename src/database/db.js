const Sequelize = require('sequelize')

const sequelize = new Sequelize("tfg", "root", "",{
    host: "localhost",
    dialect: "mysql"
})


module.exports = sequelize
