const services = require("../services/chatService");

const getAllchats = async (req, res) => {
    const chats = await services.getAllchats();
    res.json(chats);
}

const getOnechat = async (req, res) => {
    const chat = await services.getOnechat(req.params.id);
    res.json(chat);
}

const createchat = async (req, res) => {
    const chat = await services.createchat(req.body)
    res.json(chat);
}
const updatechat = async(req,res)=> {
    const chat = await services.updatechat(req.params.id,req.body)
    res.json(chat)
}
const deletechat = async(req,res)=> {
    const chat = await services.deletechat(req.params.id)
    res.json(chat)
}
module.exports = { getAllchats, getOnechat, createchat, updatechat, deletechat }