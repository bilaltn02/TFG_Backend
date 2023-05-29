const apirouter = require("express").Router();
const checkToken = require("../middleware/checkToken")

const usuarioRouter = require("./usuarioRouter")
const productoRouter = require("./productoRouter")
const favoritoRouter = require("./favoritoRouter")
const chatRouter = require("./chatRouter")
const busquedaRouter = require("./busquedaRouter")



apirouter.use("/usuario", usuarioRouter)
apirouter.use("/producto", productoRouter)
apirouter.use("/favorito", favoritoRouter)
apirouter.use("/chat", chatRouter)
apirouter.use("/busqueda", busquedaRouter)







module.exports = apirouter;