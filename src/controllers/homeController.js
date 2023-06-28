const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getThao = (req, res) => {
    res.render('sample')
}

module.exports = {
    getHomePage, getThao
}