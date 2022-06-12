const express = require('express')
const bcrypt = require('bcrypt')

const userModel = require('../models/userModel')

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
            response.status(200).json(user)

        } catch (error) {
            response.status(500).json({"msg": error.message})
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
    
    if((email && email !== "") && (password && password !== "")) {
        const user = await userModel.findOne({"email": email})
        
        if(user) {
            const isMatch = await bcrypt.compare(password, user.password)
            
            if(isMatch) {
                return response.status(200).json(user)
            
            } else {
                return response.status(500).json({"msg": "Password is incorrect!"})
            }

        } else {
            return response.status(500).json({"msg": "User not found!"})
        }

    } else {
        return response.status(500).json({"msg": "Email and Password are required !"})
    }
})

module.exports = Router;