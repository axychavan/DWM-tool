var dbConn = require('../config/db.config');

var employeeRecords = function (records) {
    this.empid = records.empid;
}

//get employee specific records
employeeRecords.getEmployeeRecords = (inputEmpid, result) => {
    dbConn.query('SELECT * FROM transactinfo WHERE empid=?',[inputEmpid.empid], (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Records fetched successfully');
            result(null, res);
        }
    })
}

module.exports = employeeRecords;