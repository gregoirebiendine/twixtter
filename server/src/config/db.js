const mysql = require('mysql2');
require('dotenv').config({path: `../.env`});

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
});

module.exports = connection;