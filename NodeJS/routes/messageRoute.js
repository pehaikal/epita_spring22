const express = require('express')
const messageModel = require('../models/messageModel')

const Router = express.Router()

Router.get('/', async (request, response) => {
    messages = await messageModel.find({})
    
    return response.status(200).json(messages)
})

Router.post('/', async (request, response) => {
    const {message} = request.body
    const messageObject = new messageModel(message)
    
    await messageObject.save()
    
    return response.status(200).json(messageObject)
})

module.exports = Router