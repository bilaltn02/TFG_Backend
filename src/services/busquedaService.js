const Busqueda = require("../database/models/Busquedas")

const getAllbusquedas = async (res) => {
    const busquedas = await Busqueda.findAll()
    return busquedas;
}

const getOnebusqueda = async (id) => {
    const busqueda = await Busqueda.findOne({
        where: { id_busqueda: id }
    })
    return busqueda;
}

const createbusqueda = async (busqueda) => {
    const respuesta = await Busqueda.create(busqueda);
    return respuesta;
}
const updatebusqueda = async (id, busqueda) => {
    const newbusqueda = { id: id, ...busqueda }
    const respuesta = await Busqueda.update(newbusqueda, {
        where: {
            id_busqueda: id
        }
    })
    return respuesta;
}
const deletebusqueda = async (id) => {
    const respuesta = await Busqueda.destroy({
        where: {
            id_busqueda: id
        }
    })
    return respuesta;
}
module.exports = { getAllbusquedas, getOnebusqueda, createbusqueda, updatebusqueda, deletebusqueda}