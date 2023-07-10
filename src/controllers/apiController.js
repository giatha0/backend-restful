
const User = require('../models/user');

const getUsersAPI = async (req, res) => {
    let results = await User.find();

    return res.status(200).json({
        EC: 0,
        data: results
    })
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    let user = await User.create({ email, name, city });
    return res.status(200).json({
        EC: 0,
        EM: 'Create user successfully',
        data: user,
    })
}

const putUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body;
    let user = await User.updateOne({ _id: id }, { email, name, city });
    return res.status(200).json({
        EC: 0,
        EM: 'Update user successfully',
        data: user,
    })
}

const deleteUser = async (req, res) => {
    let { id } = req.body;
    let user = await User.deleteOne({ _id: id });
    return res.status(200).json({
        EC: 0,
        EM: 'Delete user successfully',
        data: user,
    })
}

module.exports = {
    getUsersAPI, postCreateUser, putUpdateUser, deleteUser
}