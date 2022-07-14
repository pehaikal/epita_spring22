const express = require('express') // Import express module
const bcrypt = require('bcrypt') // Import bcrypt module

const userModel = require('../models/userModel') // Import user model
const { Route } = require('express') // Import Route class from express module

const Router = express.Router(); // Create a new Router instance

// Register a new user
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
// Middleware: Check if user is logged in
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

Router.get('/me', async (req, res) => {
    if (req.session.user) {

        const user = await userModel.findById(req.session.user._id, {
            'password': 0
        }).populate('messages')

        if (!user) {
            return res.status(500).json({"msg": "You aren't authenticated !"})
        }

        if (!user.active) {
            return res.status(500).json({'msg': 'User not active !'})
        }

        return res.status(200).json(user)
    }

    return res.status(500).json({"msg": "You are not authenticated !"})
})

Router. get('/logout', (request, response) => {
    request.session.destroy()
    return response.status(200).json({"msg": "Logout successful!"})
})

/* //////////////////////////////////////////////////////////////////////////////// */

// Professor's code:
/*
Router.post('/login', async (req, res) => {
    const {email, password} = req.body

    if ( (email && email !== "") && (password && password !== "")) {
        try {
            const user = await userModel.findOne({'email': email})

            if (!user) {
                return res.status(500).json({'msg': 'User not found !'})
            }

            if (!user.active) {
                return res.status(500).json({'msg': 'User not active !'})
            }
        
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(500).json({'msg': "Email or Password don't match !"})
            }

            req.session.user = {
                "_id": user._id
            }

            return res.status(200).json({'msg': 'User identified !'})
        } catch (error) {
            return res.status(500).json({'msg': error.message})
        }
    } else {
        return res.status(500).json({"msg": "Email and password are required !"})
    }
})
*/

module.exports = Router;