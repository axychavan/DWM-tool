const model = require('../models/auth.model');
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/.env' });

const jwt = require('jsonwebtoken')

// get all employees
exports.getAllEmployees = (req, res) => {
    model.getAllEmployees((err, records) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Array', records);
        res.send(records)
    })
}

// signup
exports.postSignup = (req, res) => {
    const input = new model(req.body);
    console.log('input : ', input);

    model.postSignup(input, (err, records) => {
        console.log('We are here');

        if (err) {
            res.send(err);
        } else if (Object.keys(records).length == 0) {
            res.json({ message: 'Account is created' })

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.NODEMAILER_USER,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            });

            var mailOptions = {
                from: process.env.NODEMAILER_USER,
                to: 'akshaychavanaxy@gmail.com',
                subject: 'Signup alert !!!',
                html: `<h2>A new user has signed up</h2>
                <p>A new account has been created. The user is waiting for the review process to be completed. The details are as follows -</p>                
                <code>
                Name : ${input.name}<br>
                Email : ${input.email}<br>
                Phone : ${input.phone}
                </code>                
                <p>Please login as an Administrator to activate this account.</p>                
                <p>Thanks, <br> dwm.infodesk@gmail.com <br> DWM-Tool Inc. 2022.</p>`
            };

            transporter.sendMail(mailOptions, function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Email sent: ' + res.response);
                }
            });
        } else {
            res.json({ message: 'Account is under-review' })
        }
    })
}

// login
exports.postLogin = (req, res) => {
    const input = new model(req.body);
    console.log('input : ', input);

    model.postLogin(input, (err, records) => {
        console.log('We are here');

        if (err) {
            res.send(err);
        } else if (Object.keys(records).length == 0) {
            res.json({ message: 'Login Unsuccessful' })
        } else {
            var role = records.map(r => r.role)
            var role = role.toString();

            var status = records.map(r => r.status)
            var status = status.toString();

            const empid = req.body.empid
            const user = { name: empid }

            const jwtToken = jwt.sign(user, process.env.JWT_TOKEN, { expiresIn: "1hr" })
            console.log("TOKEN", jwtToken)

            res.json({ message: 'Login Successful', jwt: jwtToken, role: role, reviewed: reviewed, status: status })
        }
    })
}

// To verify token
/* function verifyToken(req, res, next) {
    const authHeader = req.headers['x-authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) return sendStatus(403)
        req.user = user

        next()
    })
} */

// profile
exports.getProfile = (req, res) => {
    const input = new model(req.body);
    console.log('input : ', input);

    model.getProfile(input, (err, user) => {
        console.log('We are here');
        if (err)
            res.send(err);
        else {
            res.json({ message: 'Login Successful', profile: user })
        }
    })
}

// forgot password
exports.forgotPassword = (req, res) => {
    const input = new model(req.body);
    console.log('input : ', input);

    model.forgotPassword(input, (err, records) => {
        console.log('We are here');

        if (err) {
            res.send(err);
        } else if (Object.keys(records).length == 0) {
            res.json({ message: 'Invalid credentials' })
        } else if (records.map(r => r.status).toString() == 'inactive') {
            res.json({ message: 'Account is inactive' })
        } else {
            res.json({ message: 'Valid credentials. Email sent' })

            var empid = records.map(r => r.empid).toString();
            var password = records.map(r => r.password).toString();

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.NODEMAILER_USER,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            });

            var mailOptions = {
                from: process.env.NODEMAILER_USER,
                to: input.email,
                subject: 'Forgot Password ?',
                html: `<h2>Your valid Login Credentials</h2>
                <p>Please donot share your credentials with anyone, your login credentials are as follows -</p>                
                <code>
                Employee ID : ${empid}<br>
                Password : ${password}
                </code>                
                <p>It is highly recomended to change the password upon logging in.</p>
                <p>Thanks, <br> dwm.infodesk@gmail.com <br> DWM-Tool Inc. 2022.</p>`
            };

            transporter.sendMail(mailOptions, function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Email sent: ' + res.response);
                }
            });
        }
    })
}