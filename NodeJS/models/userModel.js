const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ 
    username: String,
    email: String, 
    password: String,
    active: Boolean
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User