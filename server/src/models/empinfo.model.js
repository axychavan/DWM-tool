var dbConn = require('../config/db.config');

var empinfoRecords = function (records) {
    this.name = records.name;
    this.email = records.email;
    this.phone = records.phone;
    this.designation = records.designation;
    this.doj = records.doj;
    this.password = records.password;
    this.role = records.role;
}

var LoginDataRecords = function (loginrecords) {
    this.empid = records.empid;
    this.password = records.password;
}

//get all records
empinfoRecords.getAllRecords = (result) => {
    dbConn.query('SELECT * FROM empinfo', (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Records fetched successfully');
            result(null, res);
        }
    })
}

// login a user 
empinfoRecords.postLogin = (result) => {
    dbConn.query('SELECT * FROM empinfo WHERE empid="20220002" AND password="akshay@123"', (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Login successful');
            result(null, res);
        }
    })
} 

// test login
LoginDataRecords.testLogin = (loginData, result) => {

    dbConn.query('SELECT * FROM empinfo WHERE empid=? AND password=?', [loginData.empid, loginData.password], (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Login successful');
            result(null, res);
        }
    })
}

//get record by id
empinfoRecords.getRecordByID = (empid, result) => {
    dbConn.query('SELECT * FROM empinfo WHERE empid=?', empid, (err, res) => {
        if (err) {
            console.log('Error while fetching a record by empid', err);
            result(null, err);
        } else {
            console.log('Record fetched successfully');
            result(null, res);
        }
    })
}

//create new record
empinfoRecords.createRecord = (recordReqdata, result) => {
    dbConn.query('INSERT INTO empinfo SET ?', recordReqdata, (err, res) => {
        if (err) {
            console.log('Error while inserting a record');
            result(null, err);
        } else {
            console.log('Record created successfully');
            result(null, res);
        }
    })
}

//update a record by id
empinfoRecords.updateRecord = (empid, recordReqdata, result) => {
    dbConn.query("UPDATE empinfo SET name=?, email=?, phone=?, designation=?, doj=?, password=?, role=? WHERE empid=?", [recordReqdata.name, recordReqdata.email, recordReqdata.phone, recordReqdata.designation, recordReqdata.doj, recordReqdata.password, recordReqdata.role, empid],
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

//delete a record
empinfoRecords.deleteRecord = (empid, result) => {
    dbConn.query('DELETE FROM empinfo WHERE empid=?', [empid], (err, res) => {
        if (err) {
            console.log('Error while deleting a record');
            result(null, err);
        } else {
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

module.exports = empinfoRecords;