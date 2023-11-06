const userSchema = require('../models/user')

const getAllUsers = async (_req, res) => {
    try {
        const users = await userSchema.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userSchema.findById(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const postCreateUser = async (req, res) => {
    try {
        const user = await userSchema.create({...req.body})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
};

const putUpdateUser = async (req, res) => {
    try {
        const user = await userSchema.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postCreateUser,
    putUpdateUser,
}