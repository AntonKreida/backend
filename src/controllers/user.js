const userSchema = require('../models/user')

const getAllUsers = async (_req, res) => {
    try {
        const users = await userSchema.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
}

const createUser = async (req, res) => {
    try {
        const user = await userSchema.create({...req.body})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = {
    getAllUsers,
    createUser,
}