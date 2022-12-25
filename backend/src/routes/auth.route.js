const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');

// get all employees
router.get('/employees', controller.getAllEmployees);

// notify new signup
router.post('/signup', controller.postSignup);

// login
router.post('/login', controller.postLogin);

// forgot password
router.post('/forgot-password', controller.forgotPassword);

module.exports = router;