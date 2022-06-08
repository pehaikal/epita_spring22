const express = require('express')
const messageModel = require('../models/messageModel')

const Router = express.Router()

Router.get('/', async (request, response) => {
    messages = await messageModel.find({})
    
    return response.status(200).json(messages)
});

Router.post('/', async (request, response) => {
    const {message} = request.body
    const messageObject = new messageModel(message)
    
    await messageObject.save()
    
    return response.status(200).json(messageObject)
});

Router.put('/:id', async (request, response) => {
    const {id} = request.params
    const {message} = request.body

    await messageModel.findByIdAndUpdate(id, message)

    return response.status(200).json("Message Successfully Updated")
});

Router.delete('/:id', async (request, response) => {
    const {id} = request.params
    const {message} = request.body

    await messageModel.findByIdAndRemove(id, message)

    return response.status(200).json("Message Successfully Deleted")
});

module.exports = Router