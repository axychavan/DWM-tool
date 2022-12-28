const express = require('express');
const router = express.Router();

const controller = require('../controllers/records.controller');

//get all records
router.get('/', controller.getAllRecords);

//create new record
router.post('/', controller.postRecord);

//patch record by id
router.patch('/:id', controller.putRecord);

//delete record by id
router.delete('/:id', controller.deleteRecord);

module.exports = router;