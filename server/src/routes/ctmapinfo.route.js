const express = require('express');
const router = express.Router();

const ctmapinfoController = require('../controllers/ctmapinfo.controller');

//get all the records
router.get('/', ctmapinfoController.getRecords);

//get record by id
router.get('/:mapid', ctmapinfoController.getRecordByID);

//create new record
router.post('/', ctmapinfoController.createNewRecord);

//update a record by id
router.put('/:id', ctmapinfoController.updateRecord);

//delete a record by id
router.delete('/:id', ctmapinfoController.deleteRecord);

module.exports = router;