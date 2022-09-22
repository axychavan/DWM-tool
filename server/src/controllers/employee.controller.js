const employeeModel = require('../models/employee.model');

//get employee specific records
exports.getRecords = (req, res) => {
    const inputEmpid = new employeeModel(req.body);
    console.log('Inputted Empid', inputEmpid);

    //console.log('List of all the records');
    employeeModel.getEmployeeRecords(inputEmpid,(err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        //console.log('Records', records);
        res.send(records)
    })
}