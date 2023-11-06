const mongoose = require('mongoose');
const bookSchema = require('./book');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    books: [{
        type:  mongoose.Schema.ObjectId,
        ref: 'book',
    }],
})

module.exports = mongoose.model('user', userSchema)