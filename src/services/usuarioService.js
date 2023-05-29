const Usuario = require("../database/models/Usuarios");
const sequelize = require('../database/db');


const login = async (user) => {
    return await sequelize.query(`select * from usuarios where email = '${user}'`)
}

const register = async (user) => {
    return await Usuario.create(user);
}


module.exports = { login, register } 