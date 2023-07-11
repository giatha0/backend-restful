
const User = require('../models/user');
const { fileService, uploadSingle, uploadMultiple } = require('../services/fileService');

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

const postUploadFile = async (req, res) => {
    let file = req.files;
    // console.log('file', file);

    if (!file || Object.keys(file).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let results = await uploadSingle(file.image);
    console.log('results', results);

    return res.status(200).json({
        EC: 0,
        EM: 'Upload file successfully',
        path: results.path,
    })

}

const postUploadMultipleFiles = async (req, res) => {
    let files = req.files;

    if (!files || Object.keys(files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let results = await uploadMultiple(files);
    console.log('results', results);
    return res.status(200).json({
        EC: 0,
        EM: 'Upload file successfully',
        countSuccess: results.path.length,
        path: results.path,
    })

}

module.exports = {
    getUsersAPI, postCreateUser, putUpdateUser, deleteUser,
    postUploadFile, postUploadMultipleFiles
}