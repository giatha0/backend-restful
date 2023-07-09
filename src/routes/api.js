const express = require('express');
const routerAPI = express.Router();
const apiController = require('../controllers/apiController');

routerAPI.get('/', (req, res) => {
    res.send('Hello World!');
});


routerAPI.get('/users', apiController.getUsersAPI);

module.exports = routerAPI;