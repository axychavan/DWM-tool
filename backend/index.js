const express = require('express')
const app = express();

const bodyParser = require('body-parser');
//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse request data content type application/json
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config({ path: 'backend/.env' });

var emoji = require("node-emoji");
const tada = emoji.get("tada");

//define root route
app.get('/', (req, res) => {
    res.send('Node JS server is running !!!');
});

//import routes
/* const employeeRoutes = require('./src/routes/employee.route');
const clientRoutes = require('./src/routes/client.route');
const taskRoutes = require('./src/routes/task.route');
const ctmapRoutes = require('./src/routes/ctmap.route');
const recordsRoutes = require('./src/routes/records.route'); */

const authRoutes = require('./src/routes/auth.route');

//middleware
/* app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/client', clientRoutes);
app.use('/api/v1/task', taskRoutes);
app.use('/api/v1/ctmap', ctmapRoutes);
app.use('/api/v1/records', recordsRoutes); */

app.use('/api/v1/', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...${tada}`)
});