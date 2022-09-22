const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

//get employee specific records
router.get('/records', employeeController.getRecords);

module.exports = router;