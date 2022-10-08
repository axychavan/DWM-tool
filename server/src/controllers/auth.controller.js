const authController = require('../models/auth.model');

//login a user
exports.postLogin = (req, res) => {
    const input = new authController(req.body);
    console.log('User input', input);

    authController.postLogin(input, (err, profile) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log(profile);
        //res.json({ message: 'Logged-in successfully', profile })
        res.json(profile)
    })
}