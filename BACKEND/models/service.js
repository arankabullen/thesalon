/*
Author: Aranka Bullen
*/

const {DataTypes} = require('sequelize');
const{ sequelize}= require('../config/database');

const Service = sequelize.define('Service',
{
    serviceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    serviceName: {
        type: DataTypes.String,
        allowNull: false,
    },
    duration: {
        type: type.INTEGER,
        allowNull: false,
    },
    price: {
        type: type.Decimal,
        allowNull: false,
    },
    supply: {
        type: type.Decimal,
        allowNull: false,
    },
});

module.exports = Service;


