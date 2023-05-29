const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Busqueda extends Model { }

Busqueda.init({
    id_busqueda: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    busqueda: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "busqueda",
    timestamps: false,
})


module.exports = Busqueda