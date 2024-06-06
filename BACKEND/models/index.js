/*
Author: Aranka Bullen
ref: https://sequelize.org/docs/v6/category/core-concepts/
*/

const sequelize = require('../config/database');
const User = require('../models/user');
const Service = require('../models/service');
const Booking = require('../models/booking');

Booking.belongsTo(User, { foreignKey: 'userID' });
Booking.belongsTo(Service, { foreignKey: 'serviceID' });

User.hasMany(Booking, { foreignKey: 'userID' });
Service.hasMany(Booking, { foreignKey: 'serviceID' });

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});


module.exports = { User, Service, Booking };