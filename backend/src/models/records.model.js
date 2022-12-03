var dbConn = require('../config/db.config');

var recordModel = function (item) {
    this.recid = item.recid;
    this.empid = item.empid;
    this.date = item.date;
    this.cl_name = item.cl_name;
    this.task = item.task;
    this.duration = item.duration;
    this.description = item.description;
    this.startdate = item.startdate;
    this.enddate = item.enddate;
}

//get all records
recordModel.getAllRecords = (result) => {
    dbConn.query('SELECT * FROM records', (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

//post custom date
recordModel.postCustomRecords = (input, result) => {
    dbConn.query('SELECT * FROM records WHERE empid=? AND date BETWEEN ? AND ?', [input.empid, input.startdate, input.enddate], (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Records fetched');
            result(null, res);
        }
    })
}

//get record by id
recordModel.getRecordById = (recid, result) => {
    dbConn.query('SELECT * FROM records WHERE recid=?', recid, (err, res) => {
        if (err) {
            console.log('Error while fetching a record by id', err);
            result(null, err);
        } else {
            console.log('Specific record fetched successfully');
            result(null, res);
        }
    })
}

//create new record
recordModel.postNewRecord = (user_input, result) => {
    dbConn.query('INSERT INTO records SET ?', user_input, (err, res) => {
        if (err) {
            console.log('Error while creating a record');
            result(null, err);
        } else {
            console.log('Record created successfully');
            result(null, res);
        }
    })
}

//update record by id
recordModel.putRecordById = (recid, user_input, result) => {
    dbConn.query("UPDATE records SET empid=?, date=?, cl_name=?, task=?, duration=?, description=? WHERE recid=?", [user_input.empid, user_input.date, user_input.cl_name, user_input.task, user_input.duration, user_input.description, recid],
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

//delete record by id
recordModel.deleteRecord = (recid, result) => {
    dbConn.query('DELETE FROM records WHERE recid=?', [recid], (err, res) => {
        if (err) {
            console.log('Error while deleting a record');
            result(null, err);
        } else {
            console.log('Record deleted successfully');
            result(null, res);
        }
    })
}

module.exports = recordModel;