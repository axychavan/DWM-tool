const model = require('../models/employee.model');

//get all employees
exports.getAllEmployees = (req, res) => {
    model.getAllEmployees((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Array', records);
        res.send(records)
    })
}

//create new employee (for ADMIN)
exports.postEmployee = (req, res) => {
    const input = new model(req.body);
    console.log('input : ', input);

    model.postEmployee(input, (err, records) => {
        if (err) {
            res.send(err);
        } else if (Object.keys(records).length == 0) {
            res.json({ message: 'Account is created' })
        } else {
            res.json({ message: 'Account exists' })
        }
    })
}

/* 
//get all emergency contacts
exports.getEmergency = (req, res) => {
    employeeController.getEmergency((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('List of emergency contacts', records);
        res.send(records)
    })
}

//get employee by id
exports.getEmployeeById = (req, res) => {
    //console.log('getting record by id');
    employeeController.getEmployeeById(req.params.empid, (err, record) => {
        if (err)
            res.send(err);
        console.log('Single record', record);
        res.send(record);
    })
}

//create new employee
exports.postNewEmployee = (req, res) => {
    const user_input = new employeeController(req.body);
    console.log('user_input : ', user_input);

    employeeController.postNewEmployee(user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ employeeid: records.insertId, message: 'Employee created successfully' })
    })
}

//update employee by id
exports.putEmployeeById = (req, res) => {
    const user_input = new employeeController(req.body);
    console.log('user_input : ', user_input);

    employeeController.putEmployeeById(req.params.id, user_input, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Employee updated successfully' })
    })
}

//delete employee by id
exports.deleteEmployee = (req, res) => {
    employeeController.deleteEmployee(req.params.id, (err, records) => {
        if (err)
            res.send(err);
        res.json({ message: 'Employee deleted successfully' });
    })
} */