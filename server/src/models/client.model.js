var dbConn = require('../config/db.config');

var clientModel = function (item) {
    this.clientid = item.clientid;
    this.cl_name = item.cl_name;
    this.location = item.location;
}

//get all clients
clientModel.getAllClients = (result) => {
    dbConn.query('SELECT * FROM client', (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

//get client by id
clientModel.getClientById = (clientid, result) => {
    dbConn.query('SELECT * FROM client WHERE clientid=?', clientid, (err, res) => {
        if (err) {
            console.log('Error while fetching a client by id', err);
            result(null, err);
        } else {
            console.log('Specific client fetched successfully');
            result(null, res);
        }
    })
}

//create new client
clientModel.postNewClient = (user_input, result) => {
    dbConn.query('INSERT INTO client SET ?', user_input, (err, res) => {
        if (err) {
            console.log('Error while creating a client');
            result(null, err);
        } else {
            console.log('Client created successfully');
            result(null, res);
        }
    })
}

//update client by id
clientModel.putClientById = (clientid, user_input, result) => {
    dbConn.query("UPDATE client SET cl_name=?, location=? WHERE clientid=?", [user_input.cl_name, user_input.location, clientid],
        (err, res) => {
            if (err) {
                console.log('Error while updating a client');
                result(null, err);
            } else {
                console.log('Client updated successfully');
                result(null, res);
            }
        })
}

//delete client by id
clientModel.deleteClient = (clientid, result) => {
    dbConn.query('DELETE FROM client WHERE clientid=?', [clientid], (err, res) => {
        if (err) {
            console.log('Error while deleting a client');
            result(null, err);
        } else {
            console.log('Client deleted successfully');
            result(null, res);
        }
    })
}

module.exports = clientModel;