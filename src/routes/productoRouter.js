const productoRouter = require("express").Router();
const controller = require("../controllers/productoController")

productoRouter.post("/", controller.createproducto)
productoRouter.get("/", controller.getAllproductos)
productoRouter.get("/:id", controller.getOneproducto);
productoRouter.put("/:id", controller.updateproducto);
productoRouter.delete("/:id", controller.deleteproducto);

module.exports = productoRouter;