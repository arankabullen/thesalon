/*
Author: Aranka Bullen
*/

const{ Sequelize}= require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});

module.exports = sequelize;
