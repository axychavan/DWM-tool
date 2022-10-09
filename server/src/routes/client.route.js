const express = require('express');
const router = express.Router();

const clientRoute = require('../controllers/client.controller');

//get all clients
router.get('/', clientRoute.getAllClients);

//get client by id
router.get('/:clientid', clientRoute.getClientById);

//create new client
router.post('/', clientRoute.postNewClient);

//update client by id
router.put('/:id', clientRoute.putClientById);

//delete client by id
router.delete('/:id', clientRoute.deleteClient);

module.exports = router;