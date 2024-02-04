// Storage for database variables:
// DB_NAME, DB_PW and DB_USER
require('dotenv').config();

const Sequelize = require('sequelize');

// JAWSDB_URL is a MySQL db as a service (DBaaS) provider that supplies
// functional, fully managed, relational db for use with
// this application. Use it if my db causes an error??

// create the sequelize class for our use
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
