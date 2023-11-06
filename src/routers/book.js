const router = require('express').Router()
const { 
    getAllBooks, 
    postCreateBook, 
    getBookById, 
    deleteBook, 
    putUpdateBook 
} = require('../controllers/book')

router.get('/books', getAllBooks)
router.post('/books', postCreateBook)
router.get('/books/:id', getBookById)
router.delete('/books/:id', deleteBook)
router.put('/books/:id', putUpdateBook)

module.exports = router