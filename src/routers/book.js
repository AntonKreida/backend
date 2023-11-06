const router = require('express').Router()
const { getAllBooks, postCreateBook } = require('../controllers/book')

router.get('/books', getAllBooks)
router.post('/books', postCreateBook)

module.exports = router