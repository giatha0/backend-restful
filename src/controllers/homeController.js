const connection = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getThao = (req, res) => {
    res.render('sample')
}

const postCreateUser = (req, res) => {
    let { email, name, city } = req.body;

    connection.query(
        'INSERT INTO Users(email, name, city) VALUES(?, ?, ?)',
        [email, name, city],
        function (err, results) {
            if (err) throw err;
            console.log('results', results); // results contains rows returned by server
            res.send('Create user successfully')
        }
    )
}

module.exports = {
    getHomePage, getThao, postCreateUser
}