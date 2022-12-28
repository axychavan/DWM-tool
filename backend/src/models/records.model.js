var dbConn = require('../config/db.config');

var Items = function (item) {
    this.recid = item.recid;
    this.date = item.date;
    this.client = item.client;
    this.task = item.task;
    this.details = item.details;
    this.attendance = item.attendance;
    this.duration = item.duration;
    this.login_time = item.login_time;
    this.logout_time = item.logout_time;
    this.empid = item.empid;
}

//get all records
Items.getAllRecords = (result) => {
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

//create new record
Items.postRecord = (input, result) => {
    dbConn.query('INSERT INTO records SET ?', input, (err, res) => {
        if (err) {
            console.log('Error while creating a record');
            result(null, err);
        } else {
            console.log('Record created successfully');
            result(null, res);
        }
    })
}

//patch record by id
Items.putRecord = (recid, input, result) => {
    dbConn.query("UPDATE records SET client=?, task=?, details=?, attendance=?, duration=? WHERE recid=?", [input.client, input.task, input.details, input.attendance, input.duration, recid],
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
Items.deleteRecord = (recid, result) => {
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

module.exports = Items;