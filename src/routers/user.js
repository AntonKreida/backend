const router = require('express').Router()
const { getAllUsers, createUser} = require('../controllers/user')

router.get('/users', getAllUsers)
router.post('/users', createUser)

module.exports = router;