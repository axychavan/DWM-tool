const express = require('express');
const router = express.Router();

const ctmapRoute = require('../controllers/ctmap.controller');

//get all ctmaps
router.get('/', ctmapRoute.getAllCtmaps);

//get ctmap by id
router.get('/:mapid', ctmapRoute.getCtmapById);

//create new ctmap
router.post('/', ctmapRoute.postNewCtmap);

//update ctmap by id
router.put('/:id', ctmapRoute.putCtmapById);

//delete ctmap by id
router.delete('/:id', ctmapRoute.deleteCtmap);

module.exports = router;