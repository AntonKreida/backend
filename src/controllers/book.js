const bookSchema = require('../models/book');

const getAllBooks = async (_req, res) => {
    try {
        const books = await bookSchema.find().populate('users').exec();
        res.status(200).send(books)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await bookSchema.findById(req.params.id)
        res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
}

const putUpdateBook = async (req, res) => {
    try {
        const book = await bookSchema.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
        res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
}

const postCreateBook = async (req, res) => {
    try {
        const book = await bookSchema.create({...req.body})
        await book.save();
        res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await bookSchema.findByIdAndDelete(req.params.id)
        await book.save();
        res.status(200).send(book)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    postCreateBook,
    putUpdateBook,
    deleteBook,
}