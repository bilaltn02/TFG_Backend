const Producto = require("../database/models/Productos")

const getAllproductos = async (res) => {
    const productos = await Producto.findAll()
    return productos;
}

const getOneproducto = async (id) => {
    const producto = await Producto.findOne({
        where: { id_producto: id }
    })
    return producto;
}

const createproducto = async (producto) => {
    const respuesta = await Producto.create(producto);
    return respuesta;
}
const updateproducto = async (id, producto) => {
    const newproducto = { id: id, ...producto }
    const respuesta = await Producto.update(newproducto, {
        where: {
            id_producto: id
        }
    })
    return respuesta;
}
const deleteproducto = async (id) => {
    const respuesta = await Producto.destroy({
        where: {
            id_producto: id
        }
    })
    return respuesta;
}
module.exports = { getAllproductos, getOneproducto, createproducto, updateproducto, deleteproducto}