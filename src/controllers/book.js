const bookSchema = require('../models/book');

const getAllBooks = async (_req, res) => {
    try {
        const books = await bookSchema.find().populate('users').exec();
        res.status(200).send(books)
    } catch (error) {
        res.status(500).send(error)
    }
}

const postCreateBook = async (req, res) => {
    try {
        const book = await bookSchema.create({...req.body})
        res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getAllBooks,
    postCreateBook,
}