const connection = require('../config/database');

const getHomePage = (req, res) => {
    res.send('Hello World!')
}

const getThao = (req, res) => {
    res.render('sample')
}

module.exports = {
    getHomePage, getThao
}