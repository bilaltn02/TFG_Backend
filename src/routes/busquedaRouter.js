const busquedaRouter = require("express").Router();
const controller = require("../controllers/busquedaController")

busquedaRouter.post("/", controller.createbusqueda)
busquedaRouter.get("/", controller.getAllbusquedas)
busquedaRouter.get("/:id", controller.getOnebusqueda);
busquedaRouter.put("/:id", controller.updatebusqueda);
busquedaRouter.delete("/:id", controller.deletebusqueda);

module.exports = busquedaRouter;