const express = require('express');
const router = express.Router();

const recordsController = require('../controllers/records.controller');

//get all the records
router.get('/', recordsController.getRecords);

//get record by id
router.get('/:id', recordsController.getRecordByID);

//create new record
router.post('/', recordsController.createNewRecord);

//update a record
router.put('/:id', recordsController.updateRecord);

//update a record
router.delete('/:id', recordsController.deleteRecord);

module.exports = router;