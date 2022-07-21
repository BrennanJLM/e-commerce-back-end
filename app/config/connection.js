require('dotenv').config();

const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');
const { Category, Product, ProductTag, Tag } = require('../models');

let db = {};

const connection = mysql.createConnection({ 
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER, 
  password:process.env.DB_PASS 
});
connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`, (err, res) => {});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

// init models and add them to the exported db object
db.Category = Category(sequelize, DataTypes);
db.Product = Product(sequelize, DataTypes);
db.ProductTag = ProductTag(sequelize, DataTypes);
db.Tag = Tag(sequelize, DataTypes);
// add Sequelize to the exported db object
db.sequelize = sequelize;

module.exports = db;
