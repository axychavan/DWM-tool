const mysql = require('mysql');

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

var emoji = require("node-emoji");
const tada = emoji.get("tada");

// creating db connection
const dbConn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD
});

dbConn.connect(function (error) {
    if (error) throw error;
    console.log(`"${process.env.DATABASE}" Database connected successfully...${tada}`);
})

module.exports = dbConn;