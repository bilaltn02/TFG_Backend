const favoritoRouter = require("express").Router();
const controller = require("../controllers/favoritoController")

favoritoRouter.post("/", controller.createfavorito)
favoritoRouter.get("/", controller.getAllfavoritos)
favoritoRouter.get("/:id", controller.getOnefavorito);
favoritoRouter.put("/:id", controller.updatefavorito);
favoritoRouter.delete("/:id", controller.deletefavorito);

module.exports = favoritoRouter;