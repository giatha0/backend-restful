const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);

router.get('/thao', homeController.getThao);

router.get('/get-create-user', homeController.getCreateUser);

router.post('/create-user', homeController.postCreateUser);

router.get('/get-update-user/:id', homeController.getUpdateUser);

router.post('/update-user', homeController.postUpdateUser);

router.get('/get-delete-user/:id', homeController.getDeleteUser);

router.post('/delete-user', homeController.postDeleteUser);

module.exports = router;