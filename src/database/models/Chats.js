const sequelize = require("../db")
const { Model, DataTypes } = require("sequelize")

class Chat extends Model { }

Chat.init({
    id_chat: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usuario1: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_usuario2: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_mensaje: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    mensaje: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "chat",
    timestamps: false,
})


module.exports = Chat
