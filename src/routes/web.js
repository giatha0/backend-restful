const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);

router.get('/thao', homeController.getThao);

router.post('/create-user', homeController.postCreateUser);

module.exports = router;