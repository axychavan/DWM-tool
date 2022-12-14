var dbConn = require('../config/db.config');

var Items = function (item) {
    this.empid = item.empid;
    this.name = item.name;
    this.email = item.email;
    this.phone = item.phone;
    this.designation = item.designation;
    this.doj = item.doj;
    this.password = item.password;
    this.question = item.question;
    this.answer = item.answer;
    this.role = item.role;
    this.status = item.status;
}

//get all employees
Items.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

//create new employee (for ADMIN)
Items.postEmployee = (input, result) => {
    dbConn.query("SELECT * FROM employee WHERE email=? OR phone=?", [input.email, input.phone], (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else if (Object.keys(res).length == 0) {
            console.log('DB records fetched successfully');
            if (input.role == 'employee')
                input.status = 'new'
            dbConn.query('INSERT INTO employee SET ?', input)
            result(null, res);
        } else if (Object.keys(res).length != 0) {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

/* //get all emergency contacts
employeeModel.getEmergency = (result) => {
    dbConn.query('SELECT * FROM employee WHERE emergency = "yes"', (err, res) => {
        if (err) {
            console.log('Error while fetching records');
            result(null, err);
        } else {
            console.log('Records fetched successfully');
            result(null, res);
        }
    })
}

//get employee by id
employeeModel.getEmployeeById = (empid, result) => {
    dbConn.query('SELECT * FROM employee WHERE empid=?', empid, (err, res) => {
        if (err) {
            console.log('Error while fetching a employee by id', err);
            result(null, err);
        } else {
            console.log('Specific employee fetched successfully');
            result(null, res);
        }
    })
}

//create new employee
employeeModel.postNewEmployee = (user_input, result) => {
    dbConn.query('INSERT INTO employee SET ?', user_input, (err, res) => {
        if (err) {
            console.log('Error while creating a employee');
            result(null, err);
        } else {
            console.log('Employee created successfully');
            result(null, res);
        }
    })
}

//update employee by id
employeeModel.putEmployeeById = (empid, user_input, result) => {
    dbConn.query("UPDATE employee SET name=?, email=?, phone=?, designation=?, doj=?, password=?, role=?, emergency=? WHERE empid=?", [user_input.name, user_input.email, user_input.phone, user_input.designation, user_input.doj, user_input.password, user_input.role, user_input.emergency, empid],
        (err, res) => {
            if (err) {
                console.log('Error while updating a employee');
                result(null, err);
            } else {
                console.log('Employee updated successfully');
                result(null, res);
            }
        })
}

//delete employee by id
employeeModel.deleteEmployee = (empid, result) => {
    dbConn.query('DELETE FROM employee WHERE empid=?', [empid], (err, res) => {
        if (err) {
            console.log('Error while deleting a employee');
            result(null, err);
        } else {
            console.log('Employee deleted successfully');
            result(null, res);
        }
    })
} */

module.exports = Items;