const express = require('express');
const routerAPI = express.Router();
const apiController = require('../controllers/apiController');

routerAPI.get('/', (req, res) => {
    res.send('Hello World!');
});


routerAPI.get('/users', apiController.getUsersAPI);

routerAPI.post('/users', apiController.postCreateUser);

routerAPI.put('/users', apiController.putUpdateUser);

routerAPI.delete('/users', apiController.deleteUser);

module.exports = routerAPI;