const express = require('express')

const Router = express.Router();

Router.post('/register', async (request, response) => {
    const {email, password, username} = request.body

    /*
    != -> equality operator
    !== -> identity
    */

    if((email && email !== "") && (password && password !== "" && password.length >= 8)) {
        const hash = await bcrypt.hash(password, 10)
        // OR const hash = bcrypt.hashSync(password, 10)
        
        const User = new userModel({
            email: email,
            password: hash,
            username: username,
            active: true
        })

        const user = await User.save()
        response.status(200).json(user)

    } else {
        return response.status(500).json({"msg": "You have to provide an email and a password with at least 8 characters."})
    }
})

module.exports = Router;