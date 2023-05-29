const Chat = require("../database/models/Chats")

const getAllchats = async (res) => {
    const chats = await Chat.findAll()
    return chats;
}

const getOnechat = async (id) => {
    const chat = await Chat.findOne({
        where: { id_chat: id }
    })
    return chat;
}

const createchat = async (chat) => {
    const respuesta = await Chat.create(chat);
    return respuesta;
}
const updatechat = async (id, chat) => {
    const newchat = { id: id, ...chat }
    const respuesta = await Chat.update(newchat, {
        where: {
            id_chat: id
        }
    })
    return respuesta;
}
const deletechat = async (id) => {
    const respuesta = await Chat.destroy({
        where: {
            id_chat: id
        }
    })
    return respuesta;
}
module.exports = { getAllchats, getOnechat, createchat, updatechat, deletechat}