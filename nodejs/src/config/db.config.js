const mysql = require('mysql');

var emoji = require("node-emoji");
const tada = emoji.get("tada");

// creating db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dwmdb',
    password: 'Akshay#12345'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log(`Database connected successfully...${tada}`);
})

module.exports = dbConn;