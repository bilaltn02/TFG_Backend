const sequelize = require("../db");
const {
    Model,
    DataTypes
} = require("sequelize");

class Favorito extends Model {}

Favorito.init({
    id_favorito: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "favorito",
    timestamps: false,
});

module.exports = Favorito;