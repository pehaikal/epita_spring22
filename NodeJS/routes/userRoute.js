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