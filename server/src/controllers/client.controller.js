const clientController = require('../models/client.model');

//get all clients
exports.getAllClients = (req, res) => {
    clientController.getAllClients((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Array', records);
        res.send(records)
    })
}

//get client by id
exports.getClientById = (req, res) => {
    //console.log('getting record by id');
    clientController.getClientById(req.params.clientid, (err, record) => {
        if (err)
            res.send(err);
        console.log('Single record', record);
        res.send(record);
    })
}

//create new client
exports.postNewClient = (req, res) => {
    const user_input = new clientController(req.body);
    console.log('user_input : ', user_input);

    clientController.postNewClient(user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ clientid: records.insertId, message: 'Client created successfully' })
    })
}

//update client by id
exports.putClientById = (req, res) => {
    const user_input = new clientController(req.body);
    console.log('user_input : ', user_input);

    clientController.putClientById(req.params.id, user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Client updated successfully' })
    })
}

//delete client by id
exports.deleteClient = (req, res) => {
    clientController.deleteClient(req.params.id, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Client deleted successfully' });
    })
}