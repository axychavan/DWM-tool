const express = require('express');
const router = express.Router();

const clientinfoController = require('../controllers/clientinfo.controller');

//get all the records
router.get('/', clientinfoController.getRecords);

//get record by id
router.get('/:clientid', clientinfoController.getRecordByID);

//create new record
router.post('/', clientinfoController.createNewRecord);

//update a record by id
router.put('/:id', clientinfoController.updateRecord);

//delete a record by id
router.delete('/:id', clientinfoController.deleteRecord);

module.exports = router;