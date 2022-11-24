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

//import routes
const employeeRoutes = require('./src/routes/employee.route');
const clientRoutes = require('./src/routes/client.route');
const taskRoutes = require('./src/routes/task.route');
const ctmapRoutes = require('./src/routes/ctmap.route');
const recordsRoutes = require('./src/routes/records.route');

const emergencyinfoRoutes = require('./src/routes/emergencyinfo.route');

//middleware
app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/client', clientRoutes);
app.use('/api/v1/task', taskRoutes);
app.use('/api/v1/ctmap', ctmapRoutes);
app.use('/api/v1/records', recordsRoutes);

app.use('/api/v1/emergencyinfo', emergencyinfoRoutes);

app.listen(3000, () => console.log(`Listening on port 3000...${tada}`));