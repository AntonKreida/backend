const router = require('express').Router()
const { getAllUsers, getUserById, postCreateUser, putUpdateUser} = require('../controllers/user')

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users', postCreateUser)
router.put('/users/:id', putUpdateUser)

module.exports = router;