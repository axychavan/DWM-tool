const express = require('express');
const router = express.Router();

const recordRoute = require('../controllers/records.controller');

//get all records
router.get('/', recordRoute.getAllRecords);

//get record by id
router.get('/:recid', recordRoute.getRecordById);

//create new record
router.post('/', recordRoute.postNewRecord);

//update record by id
router.put('/:id', recordRoute.putRecordById);

//delete record by id
router.delete('/:id', recordRoute.deleteRecord);

module.exports = router;