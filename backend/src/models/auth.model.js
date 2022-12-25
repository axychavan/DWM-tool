var dbConn = require('../config/db.config');

var Items = function (item) {
    this.empid = item.empid;
    this.name = item.name;
    this.email = item.email;
    this.phone = item.phone;
    this.password = item.password;
    this.designation = item.designation;
    this.doj = item.doj;
    this.question = item.question;
    this.answer = item.answer;
    this.role = item.role;
    this.reviewed = item.reviewed;
    this.status = item.status;
}

// get all employees
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

// notify new signup
Items.postSignup = (input, result) => {
    dbConn.query("SELECT * FROM employee WHERE email=? AND phone=?", [input.email, input.phone], (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else if (Object.keys(res).length == 0) {
            console.log('DB records fetched successfully');
            dbConn.query('INSERT INTO employee SET ?', input)
            result(null, res);
            console.log("test", res)
        } else if (Object.keys(res).length != 0) {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

// login
Items.postLogin = (input, result) => {
    dbConn.query("SELECT * FROM employee WHERE empid=? AND password=?", [input.empid, input.password], (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

// forgot password
Items.forgotPassword = (input, result) => {
    dbConn.query("SELECT * FROM employee WHERE email=? AND phone=? AND question=? AND answer=?", [input.email, input.phone, input.question, input.answer], (err, res) => {
        if (err) {
            console.log('Error while fetching DB records');
            result(null, err);
        } else {
            console.log('DB records fetched successfully');
            result(null, res);
        }
    })
}

module.exports = Items;