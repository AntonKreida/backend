const userSchema = require('../models/user');

const getAllUsers = async (_req, res) => {
    try {
        const users = await userSchema.find().populate('books').exec();
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
        await user.save();
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
};

const postAddBookForUser = async (req, res) => {
    try {
        console.log(req.body.bookId)
        const user = await userSchema.findByIdAndUpdate(
            req.params.id, {$push: {books: req.body.bookId}}, 
            { returnDocument: 'after' }, {new: true})
        .populate('books').exec()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const postRemoveBookForUser = async (req, res) => {
    try {
        const user = await userSchema.findByIdAndUpdate(
            req.params.id, {$pull: {books: req.body.bookId}}, 
            { returnDocument: 'after' }, {new: true})
        .populate('books').exec()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const putUpdateUser = async (req, res) => {
    try {
        const user = await userSchema.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userSchema.findByIdAndDelete(req.params.id)
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
    postAddBookForUser,
    postRemoveBookForUser,
    deleteUser,
}