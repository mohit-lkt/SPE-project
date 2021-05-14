require('dotenv').config()
const mysql = require('mysql2');
console.log(process.env.DATABASE_USERNAME);
console.log(process.env.DATABASE_PORT);
module.exports = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: 'fitnessfuel'
})