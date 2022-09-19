const express = require('express');
const router = express.Router();

const emergencyinfoController = require('../controllers/emergencyinfo.controller');

//get all the records
router.get('/', emergencyinfoController.getRecords);

//get record by id
router.get('/:emid', emergencyinfoController.getRecordByID);

//create new record
router.post('/', emergencyinfoController.createNewRecord);

//update a record by id
router.put('/:id', emergencyinfoController.updateRecord);

//delete a record by id
router.delete('/:id', emergencyinfoController.deleteRecord);

module.exports = router;