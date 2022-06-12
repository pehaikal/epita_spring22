const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ 
    username: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        unique: true, // unique: true -> email must be unique
        trim: true, // trim: true -> remove spaces before and after the email
        lowercase: true, // lowercase: true -> convert to lowercase
        required: "Email address is required !"
    },

    password: {
        type: String,
        trim: true,
        required: "Password is required !"
    },

    active: {
        type: Boolean,
        default: true // default: true -> user is active by default
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User