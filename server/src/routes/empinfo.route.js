const express = require('express');
const router = express.Router();

const empinfoController = require('../controllers/empinfo.controller');

//get all the records
router.get('/', empinfoController.getRecords);

// login a user
router.post('/login', empinfoController.postLogin);

// test login
router.post('/test', empinfoController.testLogin);

//get record by id
router.get('/:empid', empinfoController.getRecordByID);

//create new record
router.post('/', empinfoController.createNewRecord);

//update a record by id
router.put('/:id', empinfoController.updateRecord);

//delete a record by id
router.delete('/:id', empinfoController.deleteRecord);

module.exports = router;