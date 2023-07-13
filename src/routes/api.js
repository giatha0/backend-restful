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
routerAPI.post('/customers-many', customerController.postCreateManyCustomers);
routerAPI.get('/customers', customerController.getCustomers);
routerAPI.put('/customers', customerController.putUpdateCustomer);
routerAPI.delete('/customers', customerController.deleteCustomer);
routerAPI.delete('/customers-many', customerController.deleteManyCustomers);

routerAPI.get('/infor', (req, res) => {
    console.log('req', req.query);
    return res.send('Hello World!');
})

routerAPI.get('/infor/:id', (req, res) => {
    console.log('req', req.params);
    return res.send('Hello World!');
})

module.exports = routerAPI;