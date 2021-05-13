const mysql = require('mysql2');
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'mohit',
    password: 'Mohit@123',
    database: 'fitnessfuel'
})