/*
Author: Aranka Bullen
ref: https://sequelize.org/docs/v6/category/core-concepts/
*/

import sequelize from '../config/database.js';
import User from '../models/user.js';
import Booking from '../models/booking.js';
import Service from '../models/service.js';

Booking.belongsTo(User, { foreignKey: 'userID' });
Booking.belongsTo(Service, { foreignKey: 'serviceID' });

User.hasMany(Booking, { foreignKey: 'userID' });
Service.hasMany(Booking, { foreignKey: 'serviceID' });

sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
});

export { User, Service, Booking };