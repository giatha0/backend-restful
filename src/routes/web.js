const express = require('express');
const router = express.Router();
const { getHomePage, getThao } = require('../controllers/homeController');

router.get('/', getHomePage);

router.get('/thao', getThao)

module.exports = router;