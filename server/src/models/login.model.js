var dbConn = require('../config/db.config');

var loginData = function (data) {
    this.empid = data.empid;
    this.password = data.password;
}

// login a user 
loginData.postLogin = (input, result) => {
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

module.exports = loginData;