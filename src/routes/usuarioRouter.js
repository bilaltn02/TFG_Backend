const usuarioRouter = require("express").Router();
const controller = require("../controllers/usuarioController");

// // para cada metodo vamos a crear una ruta, cuando queramos pasar un parametro pondremos al final de la ruta : seguido del nombre del parametro

usuarioRouter.get("/", controller.login);
usuarioRouter.post("/", controller.register);

module.exports = usuarioRouter;
