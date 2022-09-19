const loginModel = require('../models/login.model');

/* // login a user
exports.postLogin = (req, res) => {
    loginModel.postLogin((err, data) => {
        console.log('We are here');
        if (err)
            res.send(err);
        //console.log('Records', records);
        res.send(data)
    })
} */

// login a user
exports.postLogin = (req, res) => {
    const input = new loginModel(req.body);
    console.log('User input', input);

    loginModel.postLogin(input,(err, data) => {
        console.log('We are here');
        if (err)
            res.send(err);
        //console.log('Records', records);
        res.send(data)
    })
}