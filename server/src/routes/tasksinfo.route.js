const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksinfo.controller');

//get all the records
router.get('/', tasksController.getRecords);

//get record by id
router.get('/:taskid', tasksController.getRecordByID);

//create new record
router.post('/', tasksController.createNewRecord);

//update a record by id
router.put('/:id', tasksController.updateRecord);

//delete a record by id
router.delete('/:id', tasksController.deleteRecord);

module.exports = router;