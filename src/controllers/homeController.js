const connection = require('../config/database');
const CRUDservices = require('../services/CRUDservices');

const getHomePage = async (req, res) => {
    let results = await CRUDservices.getAllUsers();
    console.log('results', results); // results contains rows returned by server
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

    // connection.query(
    //     'INSERT INTO Users(email, name, city) VALUES(?, ?, ?)',
    //     [email, name, city],
    //     function (err, results) {
    //         if (err) throw err;
    //         console.log('results', results); // results contains rows returned by server
    //         res.redirect('/');
    //     }
    // )
    let [results, fields] = await connection.execute(
        'INSERT INTO Users(email, name, city) VALUES(?, ?, ?)',
        [email, name, city]
    );
    console.log('results', results); // results contains rows returned by server
    res.redirect('/');


}

module.exports = {
    getHomePage, getThao, postCreateUser, getCreateUser
}