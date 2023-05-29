const services = require("../services/busquedaService");

const getAllbusquedas = async (req, res) => {
    const busquedas = await services.getAllbusquedas();
    res.json(busquedas);
}

const getOnebusqueda = async (req, res) => {
    const busqueda = await services.getOnebusqueda(req.params.id);
    res.json(busqueda);
}

const createbusqueda = async (req, res) => {
    const busqueda = await services.createbusqueda(req.body)
    res.json(busqueda);
}
const updatebusqueda = async(req,res)=> {
    const busqueda = await services.updatebusqueda(req.params.id,req.body)
    res.json(busqueda)
}
const deletebusqueda = async(req,res)=> {
    const busqueda = await services.deletebusqueda(req.params.id)
    res.json(busqueda)
}
module.exports = { getAllbusquedas, getOnebusqueda, createbusqueda, updatebusqueda, deletebusqueda }