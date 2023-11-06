const router = require('express').Router()
const { 
    getAllUsers, 
    getUserById, 
    postCreateUser,
    postAddBookForUser, 
    putUpdateUser, 
    deleteUser
} = require('../controllers/user')

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users', postCreateUser)
router.post('/users/:id/add', postAddBookForUser)
router.put('/users/:id', putUpdateUser)
router.delete('/users/:id', deleteUser)

module.exports = router;