const express = require('express');
const router = express.Router();

const transactinfoController = require('../controllers/transactinfo.controller');

//get all the records
router.get('/', transactinfoController.getRecords);

//get record by id
router.get('/:trid', transactinfoController.getRecordByID);

//create new record
router.post('/', transactinfoController.createNewRecord);

//update a record by id
router.put('/:id', transactinfoController.updateRecord);

//delete a record by id
router.delete('/:id', transactinfoController.deleteRecord);

module.exports = router;