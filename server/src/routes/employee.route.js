const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

//get employee specific records
router.get('/specific_records', employeeController.getRecords);

//login a user
router.post('/login', employeeController.postLogin);

//get all transactinfo records
router.get('/transactions', employeeController.getTransactions);

//create transactinfo record
router.post('/transactions', employeeController.postTransactions);

//create transactinfo record
router.put('/:id', employeeController.putTransactions);

//delete transactinfo record
router.delete('/:id', employeeController.deleteTransactions);

//get all emergency contacts
router.get('/emergency_contacts', employeeController.getRecords);

module.exports = router;