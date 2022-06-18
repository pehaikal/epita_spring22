const express = require('express')
const userModel = require('../models/userModel');
const Router = express.Router();

Router.get('/', async(request, response) => {
    const users = await userModel.find({}, {
        'password': 0
    })

    if (!users) {
        return response.status(500).json({"msg": "No users found!"})
    }

    return response.status(200).json(users)
})

Router.get('/me', async(request, response) => {

    if (request.session.user) {

        const user = await userModel.findById(request.session.user._id, {
            'password': 0
        })

        if (!user) {
            return response.status(500).json({"msg": "You are not authenticated !"})
        }

        if (!user.active) {
            return response.status(500).json({'msg': 'User not active !'})
        }

        return response.status(200).json(user)
    }

    return response.status(500).json({"msg": "You are not authenticated !"})
})

Router.get('/search/:ByName', async(request, response) => {
    const {ByName} = request.params

    const users = await userModel.find({
        'username': {
            "$regex": 'ByName',
            "$options": 'i'
        }
    }).or([{
        'email': {
            "$regex": 'ByName',
            "$options": 'i'
        }
    }, {
        "password": 0
    }])

    if (!users) {
        return response.status(500).json({"msg": "No users found!"})
    }

    return response.status(200).json(users)
})

/*
Router.get('/', async (req, res) => {
    const users = await userModel.find({})

    return res.status(200).json(users)
})
*/

module.exports = Router