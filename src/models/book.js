const mongoose = require('mongoose');
const userSchema = require('./user');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.ObjectId,
        ref: 'user',
    }]
})

module.exports = mongoose.model('book', bookSchema)