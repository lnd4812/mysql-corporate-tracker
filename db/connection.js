const mysql = require('mysql2');
require('dotenv').config();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'employee'
});

module.exports = db;