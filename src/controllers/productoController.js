const services = require("../services/productoService");

const getAllproductos = async (req, res) => {
    const productos = await services.getAllproductos();
    res.json(productos);
}

const getOneproducto = async (req, res) => {
    const producto = await services.getOneproducto(req.params.id);
    res.json(producto);
}

const createproducto = async (req, res) => {
    const producto = await services.createproducto(req.body)
    res.json(producto);
}
const updateproducto = async(req,res)=> {
    const producto = await services.updateproducto(req.params.id,req.body)
    res.json(producto)
}
const deleteproducto = async(req,res)=> {
    const producto = await services.deleteproducto(req.params.id)
    res.json(producto)
}
module.exports = { getAllproductos, getOneproducto, createproducto, updateproducto, deleteproducto }