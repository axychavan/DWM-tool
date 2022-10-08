var dbConn = require('../config/db.config');

var employeeLogin = function (data) {
    this.empid = data.empid;
    this.password = data.password;
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

//login a user

module.exports = employeeLogin;