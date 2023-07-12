const express = require('express');
const routerAPI = express.Router();
const apiController = require('../controllers/apiController');
const customerController = require('../controllers/customerController');

routerAPI.get('/', (req, res) => {
    res.send('Hello World!');
});


routerAPI.get('/users', apiController.getUsersAPI);

routerAPI.post('/users', apiController.postCreateUser);

routerAPI.put('/users', apiController.putUpdateUser);

routerAPI.delete('/users', apiController.deleteUser);

routerAPI.post('/file', apiController.postUploadFile);

routerAPI.post('/files', apiController.postUploadMultipleFiles);

routerAPI.post('/customers', customerController.postCreateCustomer);

module.exports = routerAPI;