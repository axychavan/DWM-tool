var dbConn = require('../config/db.config');

var employeeLogin = function (data) {
    this.empid = data.empid;
    this.password = data.password;
}

var employeeModel = function (data) {
    this.date = data.date;
    this.empid = data.empid;
    this.clientname = data.clientname;
    this.taskdescription = data.taskdescription;
    this.duration = data.duration;
    this.description = data.description;
}

//login a user 
employeeLogin.postLogin = (input, result) => {
    dbConn.query('SELECT * FROM empinfo WHERE empid=? AND password=?', [input.empid, input.password], (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Login successful');
            result(null, res);
        }
    })
}

//get employee specific records
employeeModel.getEmployeeRecords = (inputEmpid, result) => {
    dbConn.query('SELECT * FROM transactinfo WHERE empid=?', [inputEmpid.empid], (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Records fetched successfully');
            result(null, res);
        }
    })
}

//get all transactinfo records
employeeModel.getAllTransactions = (result) => {
    dbConn.query('SELECT * FROM transactinfo', (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Records fetched successfully');
            result(null, res);
        }
    })
}

//create transactinfo record
employeeModel.postTransactions = (input, result) => {
    dbConn.query('INSERT INTO transactinfo SET ?', input, (err, res) => {
        if (err) {
            console.log('Error while inserting a record');
            result(null, err);
        } else {
            console.log('Record created successfully');
            result(null, res);
        }
    })
}

//update transactinfo record
employeeModel.putTransactions = (trid, input, result) => {
    dbConn.query("UPDATE transactinfo SET date=?, empid=?, clientname=?, taskdescription=?, duration=?, description=? WHERE trid=?", [input.date, input.empid, input.clientname, input.taskdescription, input.duration, input.description, trid],
        (err, res) => {
            if (err) {
                console.log('Error while updating a record');
                result(null, err);
            } else {
                console.log('Record updated successfully');
                result(null, res);
            }
        })
}

//delete transactinfo record
employeeModel.deleteTransactions = (trid, result) => {
    dbConn.query('DELETE FROM transactinfo WHERE trid=?', [trid], (err, res) => {
        if (err) {
            console.log('Error while deleting a record');
            result(null, err);
        } else {
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

//get all emergency contacts
employeeModel.getAllRecords = (result) => {
    dbConn.query('SELECT * FROM empinfo WHERE emergency = "yes"', (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Records fetched successfully');
            result(null, res);
        }
    })
}

module.exports = employeeModel;
//module.exports = employeeLogin;