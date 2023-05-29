const services = require("../services/favoritoService");

const getAllfavoritos = async (req, res) => {
    const favoritos = await services.getAllfavoritos();
    res.json(favoritos);
}

const getOnefavorito = async (req, res) => {
    const favorito = await services.getOnefavorito(req.params.id);
    res.json(favorito);
}

const createfavorito = async (req, res) => {
    const favorito = await services.createfavorito(req.body)
    res.json(favorito);
}
const updatefavorito = async(req,res)=> {
    const favorito = await services.updatefavorito(req.params.id,req.body)
    res.json(favorito)
}
const deletefavorito = async(req,res)=> {
    const favorito = await services.deletefavorito(req.params.id)
    res.json(favorito)
}
module.exports = { getAllfavoritos, getOnefavorito, createfavorito, updatefavorito, deletefavorito }