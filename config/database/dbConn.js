const mysql = require('mysql2');
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST
});

module.exports = db