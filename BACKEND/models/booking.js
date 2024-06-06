/*
Author: Aranka Bullen
*/

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/user');
const Service = require('../models/service');

const Booking = sequelize.define('Booking', {
  bookingID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bookingDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  bookingTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = Booking;