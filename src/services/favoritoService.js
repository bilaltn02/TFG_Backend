const Favorito = require("../database/models/Favoritos")

const getAllfavoritos = async (res) => {
    const favoritos = await Favorito.findAll()
    return favoritos;
}

const getOnefavorito = async (id) => {
    const favorito = await Favorito.findOne({
        where: { id_favorito: id }
    })
    return favorito;
}

const createfavorito = async (favorito) => {
    const respuesta = await Favorito.create(favorito);
    return respuesta;
}
const updatefavorito = async (id, favorito) => {
    const newfavorito = { id: id, ...favorito }
    const respuesta = await Favorito.update(newfavorito, {
        where: {
            id_favorito: id
        }
    })
    return respuesta;
}
const deletefavorito = async (id) => {
    const respuesta = await Favorito.destroy({
        where: {
            id_favorito: id
        }
    })
    return respuesta;
}
module.exports = { getAllfavoritos, getOnefavorito, createfavorito, updatefavorito, deletefavorito}