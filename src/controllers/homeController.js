const connection = require('../config/database');
const CRUDservices = require('../services/CRUDservices');
const User = require('../models/user');

const getHomePage = async (req, res) => {
    // let results = await CRUDservices.getAllUsers();
    // console.log('results', results); // results contains rows returned by server
    let results = await User.find();
    return res.render('home.ejs', { users: results })
}

const getThao = (req, res) => {
    res.render('sample')
}

const getCreateUser = (req, res) => {
    return res.render('create.ejs');
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;

    await User.create({ email, name, city });
    // console.log('results', results);
    res.redirect('/');
}

const getUpdateUser = async (req, res) => {
    let { id } = req.params;
    let results = await CRUDservices.getUserById(id);
    return res.render('update.ejs', { user: results[0] || {} });
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;

    console.log(email, name, city, id);
    let [results, fields] = await connection.execute(
        'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?',
        [email, name, city, id]
    );
    console.log('results', results);
    res.redirect('/');
}

const getDeleteUser = async (req, res) => {
    let { id } = req.params;
    let results = await CRUDservices.getUserById(id);
    console.log('results', results);
    res.render('delete.ejs', { user: results[0] || {} });
}

const postDeleteUser = async (req, res) => {
    let id = req.body.id;

    let results = await CRUDservices.deleteUserById(id);
    console.log('results', results);
    res.redirect('/');
}


module.exports = {
    getHomePage, getThao, postCreateUser, getCreateUser, getUpdateUser,
    postUpdateUser, getDeleteUser, postDeleteUser
}