const employeeController = require('../models/employee.model');

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
        //res.json(profile)
    })
}

//get all employees
exports.getAllEmployees = (req, res) => {
    employeeController.getAllEmployees((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Array', records);
        res.send(records)
    })
}

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
}