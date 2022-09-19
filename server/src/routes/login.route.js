const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');

// login a user
router.post('/', loginController.postLogin);

module.exports = router;