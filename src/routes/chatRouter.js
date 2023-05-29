const chatRouter = require("express").Router();
const controller = require("../controllers/chatController")

chatRouter.post("/", controller.createchat)
chatRouter.get("/", controller.getAllchats)
chatRouter.get("/:id", controller.getOnechat);
chatRouter.put("/:id", controller.updatechat);
chatRouter.delete("/:id", controller.deletechat);

module.exports = chatRouter;