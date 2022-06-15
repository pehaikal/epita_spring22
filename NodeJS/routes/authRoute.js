const express = require('express')
const bcrypt = require('bcrypt')

const userModel = require('../models/userModel');
const { Route } = require('express');

const Router = express.Router();

Router.post('/register', async (request, response) => {
    const {email, password, username} = request.body

    /*
    != -> eguality -> Don't check the type of the variable
    !== -> identity -> Check the type of the variable
    */

    if((email && email !== "") && (password && password !== "" && password.length >= 8)) {
        const hash = await bcrypt.hash(password, 10) // OR const hash = bcrypt.hashSync(password, 10)
        console.log(hash)

        try{
            const User = new userModel({
                username: username,
                email: email,
                password: hash,
                active: true
            })
    
            // OR
    
            /*
            const User = new userModel({
                username,
                email,
                'password': hash,
                'active': true
            })
            */
    
            const user = await User.save()
            return response.status(200).json(user)

        } catch (error) {
            return response.status(500).json({"msg": error.message})
        }

    } else {
        return response.status(500).json({"msg": "Email and Password are required! Password must be at least 8 characters."})
    }
})

/*
 * Params: Email and Password
 * Check if information are good (use bcrypt)
 * if it's good send back the user
 * try to add session to express
 */
Router.post('/login', async (request, response) => {
    const {email, password} = request.body

    try{
        if((email && email !== "") && (password && password !== "")) {
            const user = await userModel.findOne({"email": email})
            
            if(user) {
                const isMatch = bcrypt.compareSync(password, user.password)
                
                if(isMatch) {
                    request.session.user = {
                            "_id": user._id,
                            "username": user.username,
                            "email": user.email,
                            "active": user.active,
                            "created_at": user.created_at,
                            "updated_at": user.updated_at,
                            "__v": user.__v
                    }
                    return response.status(200).json(user)
                
                } else {
                    return response.status(500).json({"msg": "Password is incorrect!"})
                }
    
            } else {
                return response.status(500).json({"msg": "User not found!"})
            }

        } else {
            return response.status(500).json({"msg": "Email and Password are required!"})
        }

    } catch (error) {
        return response.status(500).json({"msg": error.message})
    }
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

Router.get('/users/search/:searchBy', async(request, response) => {
    const {searchBy} = request.params

    const users = await userModel.find({
        'username': {
            '$regex': searchBy,
            '$options': 'i'
        }
    }, {
        'password': 0
    })

    if (!users) {
        return response.status(500).json({"msg": "No users found!"})
    }

    return response.status(200).json(users)
})

module.exports = Router;