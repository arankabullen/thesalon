/*
Author: Aranka Bullen
*/
import {Model, DataTypes} from "sequelize";
import sequelize  from "../config/database.js";


class Booking extends Model{}

Booking.init({
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
},
  {
    sequelize,  // Pass the Sequelize instance here
    modelName: 'Booking',

});


export default Booking;
