const express = require('express');
const router = express.Router();

const controller = require('../controllers/employee.controller');

//get all employees
router.get('/', controller.getAllEmployees);

//create new employee (for ADMIN)
router.post('/', controller.postEmployee);

/* //get all emergency contacts
router.get('/emergency', employeeRoute.getEmergency);

//get employee by id
router.get('/:empid', employeeRoute.getEmployeeById);

//create new employee
router.post('/', employeeRoute.postNewEmployee);

//update employee by id
router.put('/:id', employeeRoute.putEmployeeById);

//delete employee by id
router.delete('/:id', employeeRoute.deleteEmployee); */

module.exports = router;