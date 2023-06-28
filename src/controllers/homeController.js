const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getThao = (req, res) => {
    res.render('sample')
}

const postCreateUser = (req, res) => {
    res.send('create user')
    console.log(req.body)
}

module.exports = {
    getHomePage, getThao, postCreateUser
}