const express = require('express')
const messageModel = require('../models/messageModel')

const Router = express.Router()

Router.get('/', async (request, response) => {
    messages = await messageModel.find({})
    
    return response.status(200).json(messages)
});

Router.get('/:messageId', async (req, res) => {
    const {messageId} = req.params

    message = await messageModel.findOne({_id: messageId})
    return res.status(200).json(message)
})

Router.post('/', async (request, response) => {
    const {message} = request.body
    const messageObject = new messageModel(message)
    
    await messageObject.save()
    
    return response.status(200).json(messageObject)
});

Router.put('/:id', async (request, response) => {
    const {id} = request.params
    const {message} = request.body.message

    await messageModel.findByIdAndUpdate(id, message)

    return response.status(200).json(message)
});

/*
Router.put('/:messageId', async (req, res) => {
    const {name} = req.body.message
    const {messageId} = req.params

    const message = await messageModel.findByIdAndUpdate(messageId, {
        name: name
    }, {
        new: true
    })

    return res.status(200).json(message)
})
*/

Router.delete('/:id', async (request, response) => {
    const {id} = request.params
    const {message} = request.body

    await messageModel.findByIdAndRemove(id, message)

    return response.status(200).json({"msg": "Message deleted"})
});

/*
Router.delete('/:messageId', async (req, res) => {
    const {messageId} = req.params

    await messageModel.findOneAndDelete({_id: messageId})
    return res.status(200).json({"msg": "Message well deleted !"})
})
*/

module.exports = Router