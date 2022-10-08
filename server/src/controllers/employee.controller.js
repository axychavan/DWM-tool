const employeeController = require('../models/employee.model');

//get employee specific records
exports.getRecords = (req, res) => {
    const inputEmpid = new employeeController(req.body);
    console.log('Inputted Empid', inputEmpid);

    //console.log('List of all the records');
    employeeController.getEmployeeRecords(inputEmpid, (err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        //console.log('Records', records);
        res.send(records)
    })
}

//login a user
exports.postLogin = (req, res) => {
    const input = new employeeController(req.body);
    console.log('User input', input);

    employeeController.postLogin(input, (err, profile) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log(profile);
        res.json({ message: 'Logged-in successfully', profile })
    })
}

//get all transactinfo records
exports.getTransactions = (req, res) => {
    employeeController.getAllTransactions((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);

        // sorting date in ascending order
        records.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
        });

        console.log('List of transactions', records);
        res.send(records)
    })
}

//create transactinfo record
exports.postTransactions = (req, res) => {
    const input = new employeeController(req.body);
    console.log('User Input', input);

    employeeController.postTransactions(input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ trid: records.insertId, message: 'Record created successfully' })
    })
}

//update transactinfo record
exports.putTransactions = (req, res) => {
    const input = new employeeController(req.body);
    console.log('User Input', input);

    employeeController.putTransactions(req.params.id, input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Record updated successfully' })
    })
}

//delete transactinfo record
exports.deleteTransactions = (req, res) => {
    employeeController.deleteTransactions(req.params.id, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Record deleted successfully' });
    })
}

//get all emergency contacts
exports.getRecords = (req, res) => {
    employeeController.getAllRecords((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('List of emergency contacts', records);
        res.send(records)
    })
}