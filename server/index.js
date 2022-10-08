const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();
var emoji = require("node-emoji");
const tada = emoji.get("tada");

app.use(cors());

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

//define root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//import record routes
const empinfoRoutes = require('./src/routes/empinfo.route');
const clientinfoRoutes = require('./src/routes/clientinfo.route');
const ctmapinfoRoutes = require('./src/routes/ctmapinfo.route');
const tasksRoutes = require('./src/routes/tasksinfo.route');
const transactinfoRoutes = require('./src/routes/transactinfo.route');
const emergencyinfoRoutes = require('./src/routes/emergencyinfo.route');

//login route
const loginRoutes = require('./src/routes/login.route');

//employee route
const authRoutes = require('./src/routes/auth.route');
const employeeRoutes = require('./src/routes/employee.route');

//create record routes
app.use('/api/v1/empinfo', empinfoRoutes);
app.use('/api/v1/clientinfo', clientinfoRoutes);
app.use('/api/v1/ctmapinfo', ctmapinfoRoutes);
app.use('/api/v1/tasksinfo', tasksRoutes);
app.use('/api/v1/transactinfo', transactinfoRoutes);
app.use('/api/v1/emergencyinfo', emergencyinfoRoutes);

//login middleware
app.use('/api/v1/login', loginRoutes);

//employee middleware
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/employee', employeeRoutes);

app.listen(3000, () => console.log(`Listening on port ${process.env.PORT}...${tada}`));